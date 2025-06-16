'use client'

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "../../../../../../utils/localization/client";

export default function ProductTemplatePage() {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'product'])

    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')

    const dumpData = {
        id: 1, title: '반품/교환/환불 안내', content: "반품/교환/환불 안내"
    }

    useEffect(() => {}, [title, contents])

    const handleClickEdit = () => {
        setTitle(dumpData.title)
        setContents(dumpData.content)
    }

    return (
        <div className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <div className="min-h-screen w-full">
                    <h1 className="text-2xl font-bold text-[#5E5955]">{t('product:template_manage')}</h1>
                    <div className="flex gap-6 mt-14">

                        <div className="w-1/2 bg-white p-6 rounded-lg shadow-sm h-screen">
                            <div className="mb-4 text-[#5E5955] font-bold text-base">
                                {t('product:template_list')} ({t('product:total')} <span className="text-[#4C89E4]">33</span> {t('product:items')})
                            </div>
                            <div className="overflow-y-auto max-h-[600px]">
                                <table className="w-full text-left border-collapse min-w-xl">
                                    <thead className="bg-[#322A2408] border-t">
                                        <tr className="border-b text-[#6F6963]">
                                        <th className="p-2 h-14 flex items-center justify-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
                                        <th className="p-2 text-center">{t('product:title')}</th>
                                        <th className="p-2 text-center">{t('product:manage')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Array.from({ length: 12 }).map((_, i) => (
                                        <tr key={i} className="border-b h-14 text-[#111111]">
                                            <td className="p-2 h-14 flex items-center justify-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                                            <td className="p-2 text-center">반품/교환/환불 안내</td>
                                            <td className="p-2 flex gap-1 flex-wrap items-center justify-center text-[#5E5955]">
                                                <Button variant="outline" className="!h-fit !text-sm !p-1" onClick={handleClickEdit}>{t('edit2')}</Button>
                                                <Button variant="outline" className="!h-fit !text-sm !p-1" onClick={() => {
                                                    const confirmed = window.confirm('템플릿을 삭제하시겠습니까?')

                                                    if(confirmed) { }
                                                    else { }
                                                }}>{t('delete')}</Button>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="w-1/2 bg-white p-6 rounded-lg shadow h-screen">
                            <div className="mb-4 text-[#5E5955] font-bold text-base">
                                {t('product:template_details')}
                            </div>
                            <div className="mb-4">
                                <Input
                                    type="text"
                                    name="templateTitle"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder={t('product:title')}
                                    id="templateTitle"
                                    className="mt-1 block w-full border rounded-md p-5 h-14"
                                />
                            </div>
                            <div>
                                <Textarea
                                    id="templateContent"
                                    name="templateContent"
                                    rows={10}
                                    value={contents}
                                    onChange={(e) => setContents(e.target.value)}
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 h-132 resize-none"
                                ></Textarea>
                            </div>
                            <div className="mt-6 flex justify-center gap-4">
                                <Button className="border rounded px-2 w-1/6" onClick={() => router.back()}>{t('cancel')}</Button>
                                <Button className="bg-[#322A24] text-white rounded px-2 w-1/6" onClick={() => router.back()}>{t('save')}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}