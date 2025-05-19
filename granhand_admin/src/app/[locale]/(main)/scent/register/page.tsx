'use client'

import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales"
import { useTranslation } from "../../../../../../utils/localization/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function RegisterScentPage() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'scent'])

    return (
        <div className="flex-1 border">
            <div className="flex justify-between items-center p-12">
                <div className="text-black text-sm">
                    <h1 className="text-2xl font-bold text-[#5E5955]">{t('scent:scent_manage')}</h1>
                </div>
                <div className="space-x-2">
                    <Button variant="outline" className="text-[#5E5955]">{t('cancel')}</Button>
                    <Button className="bg-[#322A24] text-white">{t('scent:submit')}</Button>
                </div>
            </div>
            <div className="mx-auto px-6 py-8 space-y-12">
                <div className="shadow-sm p-8">
                    <h2 className="font-bold text-xl text-[#5E5955]">{t('scent:create_description')}</h2>
                    <div className="border-l border-r border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178">
                        <div className="mt-6 border-t">
                            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                                    <Label className="font-semibold">{t('scent:scent_type')}</Label>
                                </div>
                                <div className="flex items-center gap-4 p-5">
                                    <Input placeholder={t('scent:placeholder')} />
                                </div>
                            </div>
                            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                                    <Label className="font-semibold">{t('scent:scent_description')}</Label>
                                </div>
                                <div className="flex items-center gap-4 p-5">
                                    <Textarea placeholder={t('scent:placeholder')} className="resize-none w-full min-h-100" />
                                </div>
                            </div>
                            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                                    <Label className="font-semibold">{t('scent:scent_notes')}</Label>
                                </div>
                                <div className="flex items-center gap-4 p-5">
                                    <Textarea placeholder={t('scent:placeholder')} className="resize-none w-full min-h-100" />
                                </div>
                            </div>
                            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                                    <Label className="font-semibold">{t('scent:scent_guide')}</Label>
                                </div>
                                <div className="flex items-center gap-4 p-5">
                                    <Textarea placeholder={t('scent:placeholder')} className="resize-none w-full min-h-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button variant="outline">{t('scent:preview')}</Button>
                </div>
            </div>
        </div>
    )
}