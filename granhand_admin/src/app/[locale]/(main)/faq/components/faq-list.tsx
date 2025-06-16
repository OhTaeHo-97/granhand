'use client'

import Pagination from "@/components/pagination"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FAQ, FAQCate, useBoard } from "@/hooks/use-board"
import { useCurrentLocale } from "@/lib/useCurrentLocales"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function FaqList({ t }: { t: (key: string) => string }) {
    const { status } = useSession()
    const router = useRouter()
    const currentLocale = useCurrentLocale()
    const [faqs, setFaqs] = useState<FAQ[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [sortCategory, setSortCategory] = useState('latest_first')
    const [totalPage, setTotalPage] = useState(0)
    // const [faqCategories, setFaqCategories] = useState<FAQCate[]>([])
    const [, setFaqCategories] = useState<FAQCate[]>([])
    const { getFaq, getFaqCate } = useBoard()
    const [categoryMap, setCategoryMap] = useState<Map<number, string>>(new Map())

    const fetchFaqCategories = async () => {
        const { data, error } = await getFaqCate()

        if(error) {
            console.error('Failed to fetch orders for error:', error)
            alert('FAQ 카테고리를 가져오는 데에 실패하였습니다.')
            setFaqCategories([])
            setCategoryMap(new Map())
        } else if(data) {
            if(data.datas) {
                setFaqCategories(data.datas)
                const newCategoryMap = new Map(data.datas.map((category) => [category.idx, category.catename]))
                setCategoryMap(newCategoryMap)
            } else {
                setFaqCategories([])
                setCategoryMap(new Map())
            }
        }
    }

    const fetchFaq = async () => {
        const params: Record<string, number | string> = {}
        params.page = currentPage
        params.size = 15

        const { data, error } = await getFaq()

        if(error) {
            console.error('Failed to fetch orders for error:', error)
            alert('FAQ를 가져오는 데에 실패하였습니다.')
            setFaqs([])
            setTotalPage(0)
        } else if(data) {
            if(data.datas) {
                setFaqs(data.datas)
                setTotalPage(data.pagination.pages)
            } else {
                setFaqs([])
                setTotalPage(0)
            }
        }
    }

    useEffect(() => {
        if(status === 'authenticated') {
            fetchFaqCategories()
            fetchFaq()
        }
    }, [status, sortCategory])

    const handleEdit = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        // e.preventDefault()
        e.stopPropagation()
        router.push(`${currentLocale}/faq/edit/${id}`)
    }

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        // e.preventDefault()
        e.stopPropagation()

        const confirmed = window.confirm('선택한 게시글을 삭제하시겠습니까?')

        if(confirmed) {
            console.log('삭제')
        } else {
            console.log('삭제 취소')
        }
    }

    return (
        <>
            <div className="p-6 shadow-sm">
                <div>
                    <div className="mb-4 justify-between flex items-center">
                        <div className="text-[#5E5955] font-bold text-base">
                            {t('faq:all')} <span className="text-[#FF3E24]">25</span>
                        </div>
                        <div className="flex gap-2">
                            <Select value={sortCategory} onValueChange={setSortCategory}>
                                <SelectTrigger className="w-fit">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="latest_first">{t('wallpaper:latest_first')}</SelectItem>
                                    <SelectItem value="featured_first">{t('wallpaper:featured_first')}</SelectItem>
                                    <SelectItem value="most_viewed">{t('wallpaper:most_viewed')}</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <table className="w-full text-left border-collapse min-w-6xl">
                        <thead className="bg-[#322A2408] border-t h-20">
                            <tr className="border-b text-[#6F6963]">
                                <th className="p-2 text-center">No.</th>
                                <th className="p-2 text-center">{t('faq:category')}</th>
                                <th className="p-2 text-center">{t('faq:title')}</th>
                                <th className="p-2 text-center">{t('edit2')}/{t('delete')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faqs.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="h-32 text-center text-gray-500">결과가 없습니다.</td>
                                </tr>
                            ): (
                                faqs.map((faq) => (
                                    <tr key={faq.idx} className="h-14 text-[#1A1A1A] hover:bg-[#322A2408]" onClick={() => router.push(`${currentLocale}/faq/${faq.idx}`)}>
                                        <td className="p-2 text-center">{faq.idx}</td>
                                        <td className="p-2 text-center">{categoryMap.get(faq.cate_idx) || 'Unknown Category'}</td>
                                        <td className="p-2 text-center">{faq.subject}</td>
                                        <td className="p-2 flex items-center justify-center gap-3">
                                            <Button variant="outline" onClick={(e) => handleEdit(e, faq.idx)}>{t('faq:edit')}</Button>
                                            <Button variant="outline" onClick={handleDelete}>{t('delete')}</Button>
                                        </td>
                                    </tr>
                                ))
                            )}
                            {/* {faqs.map((faq) => (
                                <tr key={faq.idx} className="h-14 text-[#1A1A1A] hover:bg-[#322A2408]" onClick={() => router.push(`${currentLocale}/faq/${faq.idx}`)}>
                                    <td className="p-2 text-center">{faq.idx}</td>
                                    <td className="p-2 text-center">{categoryMap.get(faq.cate_idx) || 'Unknown Category'}</td>
                                    <td className="p-2 text-center">{faq.subject}</td>
                                    <td className="p-2 flex items-center justify-center gap-3">
                                        <Button variant="outline">{t('faq:edit')}</Button>
                                        <Button variant="outline" onClick={handleDelete}>{t('delete')}</Button>
                                    </td>
                                </tr>
                            ))} */}
                            {/* {Array.from({ length: 12 }).map((_, i) => (
                                <tr key={i} className="h-14 text-[#1A1A1A] hover:bg-[#322A2408]" onClick={() => router.push(`${currentLocale}/faq/${i}`)}>
                                    <td className="p-2 text-center">25</td>
                                    <td className="p-2 text-center">제품문의</td>
                                    <td className="p-2 text-center">그랑핸드는 수제 향수 브랜드가 맞나요?</td>
                                    <td className="p-2 flex items-center justify-center gap-3">
                                        <Button variant="outline">{t('faq:edit')}</Button>
                                        <Button variant="outline" onClick={handleDelete}>{t('delete')}</Button>
                                    </td>
                                </tr>
                            ))} */}
                        </tbody>
                    </table>
                </div>
            </div>
            <Pagination totalPages={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
    )
}