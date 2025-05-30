'use client'

import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales"
import { useTranslation } from "../../../../../../utils/localization/client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FAQCate, useBoard } from "@/hooks/use-board"
import { cn } from "@/lib/utils"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useSession } from "next-auth/react"

export default function FaqContents({ category, id }: { category: string, id?: number }) {
    const { status } = useSession()
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'faq', 'scent', 'wallpaper', 'journal'])
    const currentLocale = useCurrentLocale()
    const [language, setLanguage] = useState('ko')
    const [faqTitle, setFaqTitle] = useState('')
    const [faqContents, setFaqContents] = useState('')
    const [faqCategory, setFaqCategory] = useState('')
    const [faqCategories, setFaqCategories] = useState<FAQCate[]>([])
    const { getFaqCate, addFaq } = useBoard()

    const getFaqCategories = async () => {
        const { data, error } = await getFaqCate()

        if(error) {
            console.error('Failed to fetch faq categories for error:', error)
            alert('FAQ 카테고리를 가져오는 데에 실패하였습니다.')
            setFaqCategories([])
            setFaqCategory('')
        } else if(data) {
            if(data.datas) {
                setFaqCategories(data.datas)
                setFaqCategory(data.datas[0].idx.toString())
            } else {
                setFaqCategories([])
                setFaqCategory('')
            }
        }
    }

    // const addNewFaq = async () => {
    //     // body 만들기
    //     // const category = {
    //     //     catename: form.catename,
    //     //     // upcate: form.upcate,
    //     //     upcate: selectedCategory?.catename ? selectedCategory.catename : '',
    //     //     isshow: form.isshow
    //     // }
    //     const faq = {
    //         lang: language,
    //         cate_idx: Number(faqCategory),
    //         subject: faqTitle,
    //         memo: faqContents
    //     }

    //     const { data, error } = await addFaq(faq)

    //     if(error) {
    //         alert('FAQ 등록을 실패하였습니다.')
    //     } else {
    //         alert('FAQ를 등록하였습니다.')
    //         router.push(`${currentLocale}/faq`)
    //     }
    // }

    const handleSubmit = async () => {
        const confirmed = window.confirm('작성한 글을 저장하겠습니까?')

        if(confirmed) {
            const faq = {
                lang: language,
                cate_idx: Number(faqCategory),
                subject: faqTitle,
                memo: faqContents
            }
    
            const { data, error } = await addFaq(faq)
    
            if(error) {
                alert('FAQ 등록을 실패하였습니다.')
            } else {
                alert('FAQ를 등록하였습니다.')
                router.push(`${currentLocale}/faq`)
            }
        } else {
            console.log('글 작성 취소')
        }
    }

    useEffect(() => {
        if(status === 'authenticated') {
            getFaqCategories()
        }
    }, [status])

    return (
        <div className="flex-1 border">
            <div className="flex justify-between items-center p-12">
                <div className="text-black text-sm">
                    <h1 className="text-2xl font-bold text-[#5E5955]">{t('faq:faq_manage')}</h1>
                </div>
                <div className="space-x-2">
                    <Button variant="outline" className="text-[#5E5955]" onClick={() => router.push(`${currentLocale}/faq`)}>{t('cancel')}</Button>
                    {(category === 'create' || category === 'edit') &&
                        <Button className="bg-[#322A24] text-white" onClick={handleSubmit}>{t('faq:submit')}</Button>
                    }
                </div>
            </div>

            <div className="mx-auto px-6 py-8 space-y-12">
                <div className="shadow-sm p-8">
                    <div className="flex items-end border-b">
                        <div className="flex items-end gap-6 flex-grow">
                            <h2 className="font-bold text-xl text-[#5E5955] mr-6 pb-8">
                                {category === 'create' && t('faq:create_faq')}
                                {category === 'detail' && t('faq:view_details')}
                                {category === 'edit' && t('faq:edit_faq')}
                            </h2>
                        </div>
                        <div className="flex items-center gap-4">
                            <RadioGroup value={language} onValueChange={setLanguage} className="flex gap-2 text-sm">
                                    <Label
                                        className={cn(
                                            "py-2 px-4 text-center cursor-pointer text-sm",
                                            language === "ko"
                                                ? "border-b-2 !border-[#5E5955] text-[#5E5955]"
                                                : "text-[#C0BCB6]"
                                        )}
                                    >
                                        <RadioGroupItem value="ko" id="korean-lang" className="hidden" />
                                        🇰🇷 {t('journal:korean')}
                                    </Label>
                                    <Label
                                        className={cn(
                                            "py-2 px-4 text-center cursor-pointer text-sm",
                                            language === "en"
                                                ? "border-b-2 !border-[#5E5955] text-[#5E5955]"
                                                : "text-[#C0BCB6]"
                                        )}
                                    >
                                        <RadioGroupItem value="en" id="english-lang" className="hidden" />
                                        🇺🇸 {t('journal:english')}
                                    </Label>
                            </RadioGroup>
                        </div>
                    </div>

                    <div className="border-l border-r border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178">
                        <div className="mt-6 border-t">
                            <div className="grid grid-cols-[150px_2fr_150px_1fr] border-b border-gray-200 h-full">
                                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                                    <Label className="font-semibold">{t('faq:title')}</Label>
                                </div>
                                <div className="flex items-center gap-4 p-5">
                                    {category === 'detail' && (
                                        <div>
                                            [공지] 서비스 이용약관 개정 사전 안내(시행일 : 2023년 12월 01일)
                                        </div>
                                    )}
                                    {(category === 'edit' || category === 'create') && (
                                        <Input type="text" value={faqTitle} onChange={(e) => setFaqTitle(e.target.value)} placeholder={t('faq:placeholder')} />
                                    )}
                                </div>
                                <div className="bg-[#322A2408] border-r border-l border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                                    <Label className="font-semibold">{t('faq:category')}</Label>
                                </div>
                                <div className="flex items-center gap-4 p-5">
                                    {category === 'detail' && (
                                        <div>
                                            제품 문의
                                        </div>
                                    )}
                                    {(category === 'edit' || category === 'create') && (
                                        <Select value={faqCategory} onValueChange={setFaqCategory}>
                                            <SelectTrigger className="w-fit">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent className="bg-white">
                                                {faqCategories.map((category) => (
                                                    <SelectItem value={category.idx.toString()}>{category.catename}</SelectItem>
                                                ))}
                                                {/* <SelectItem value="latest_first">{t('wallpaper:latest_first')}</SelectItem>
                                                <SelectItem value="featured_first">{t('wallpaper:featured_first')}</SelectItem>
                                                <SelectItem value="most_viewed">{t('wallpaper:most_viewed')}</SelectItem> */}
                                            </SelectContent>
                                        </Select>
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                                    <Label className="font-semibold">{t('faq:content')}</Label>
                                </div>
                                <div className="flex items-center gap-4 p-5">
                                    {category === 'detail' && (
                                        <div>
                                            그랑핸드 제품은 수제 향수가 아닙니다. 제품 생산 시 일부 공정에는 수작업이 들어가지만 모든 것을 손으로 만드는 핸드크래프트 브랜드는 아닙니다.
                                        </div>
                                    )}
                                    {(category === 'edit' || category === 'create') && (
                                        <Textarea value={faqContents} onChange={(e) => setFaqContents(e.target.value)} placeholder={t('faq:placeholder')} className="resize-none w-full min-h-100" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}