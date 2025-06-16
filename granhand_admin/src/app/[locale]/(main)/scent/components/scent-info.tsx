'use client'

import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales"
import { useTranslation } from "../../../../../../utils/localization/client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export interface ScentInformation {
    language: 'ko' | 'en'
    category: string
    description: string
    note: string
    guide: string
}

export default function ScentInfo({ viewMode, contents }: { viewMode: 'register' | 'edit' | 'detail', contents?: ScentInformation }) {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'scent'])
    const currentLocale = useCurrentLocale()
    const [scentInfo, setScentInfo] = useState<ScentInformation>(contents || {
        language: 'ko',
        category: '',
        description: '',
        note: '',
        guide: ''
    })

    const handlePreview = () => {
        window.open(
            `${currentLocale}/scent-preview`,
            '_blank',
            'width=400,height=800,menubar=no,toolbar=no,location=yes,status=no'
        )
    }
    
    const handleSave = () => {
        const confirmed = window.confirm('정말로 저장하시겠습니까?')
        if(confirmed) {
            router.push(`${currentLocale}/scent`)
        }
    }

    const handleUpdateScent = (field: keyof ScentInformation, value: string) => {
        setScentInfo((prev) => ({
            ...prev,
            [field]: value
        }))
    }

    return (
        <div className="flex-1 border">
            <div className="flex justify-between items-center p-12">
                <div className="text-black text-sm">
                    <h1 className="text-2xl font-bold text-[#5E5955]">
                        {t('scent:scent_manage')}
                    </h1>
                </div>
                <div className="space-x-2">
                    <Button variant="outline" className="text-[#5E5955]" onClick={() => router.push(`${currentLocale}/scent`)}>{t('cancel')}</Button>
                    {viewMode !== 'detail' && (
                        <Button className="bg-[#322A24] text-white" onClick={handleSave}>
                            {viewMode === 'register' && t('scent:submit')}
                            {viewMode === 'edit' && t('save')}
                        </Button>
                    )}
                </div>
            </div>
            <div className="mx-auto px-6 py-8 space-y-12">
                <div className="shadow-sm p-8">
                    <h2 className="font-bold text-xl text-[#5E5955]">
                        {viewMode === 'detail' ? t('scent:view_details') : t('scent:create_description')}
                    </h2>
                    <div className="border-l border-r border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178">
                        <div className="mt-6 border-t">
                            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                                    <Label className="font-semibold">{t('language')}</Label>
                                </div>
                                <div className="flex items-center gap-4 p-5">
                                <Select value={scentInfo.language} onValueChange={(value: 'ko' | 'en') => handleUpdateScent('language', value)}>
                                    <SelectTrigger className="w-fit">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="ko">{t('korean')}</SelectItem>
                                        <SelectItem value="en">{t('english')}</SelectItem>
                                    </SelectContent>
                                </Select>
                                </div>
                            </div>
                            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                                    <Label className="font-semibold">{t('scent:scent_type')}</Label>
                                </div>
                                <div className="flex items-center gap-4 p-5">
                                    {viewMode === 'detail' ? (
                                        scentInfo.category
                                    ) : (
                                        <Input placeholder={t('scent:placeholder')} value={scentInfo.category} onChange={(e) => handleUpdateScent('category', e.target.value)} />
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                                    <Label className="font-semibold">{t('scent:scent_description')}</Label>
                                </div>
                                <div className="flex items-center gap-4 p-5">
                                    {viewMode === 'detail' ? (
                                        scentInfo.description
                                    ) : (
                                        <Textarea placeholder={t('scent:placeholder')} value={scentInfo.description} onChange={(e) => handleUpdateScent('description', e.target.value)} className="resize-none w-full min-h-100" />
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                                    <Label className="font-semibold">{t('scent:scent_notes')}</Label>
                                </div>
                                <div className="flex items-center gap-4 p-5">
                                    {viewMode === 'detail' ? (
                                        scentInfo.note
                                    ) : (
                                        <Textarea placeholder={t('scent:placeholder')} value={scentInfo.note} onChange={(e) => handleUpdateScent('note', e.target.value)} className="resize-none w-full min-h-100" />
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                                    <Label className="font-semibold">{t('scent:scent_guide')}</Label>
                                </div>
                                <div className="flex items-center gap-4 p-5">
                                    {viewMode === 'detail' ? (
                                        scentInfo.guide
                                    ) : (
                                        <Textarea placeholder={t('scent:placeholder')} value={scentInfo.guide} onChange={(e) => handleUpdateScent('guide', e.target.value)} className="resize-none w-full min-h-100" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button variant="outline" onClick={handlePreview}>{t('scent:preview')}</Button>
                </div>
            </div>
        </div>
    )
}