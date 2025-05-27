'use client'

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { RefreshCw } from "lucide-react";
import { useTranslation } from "../../../../../../utils/localization/client";

export default function PeriodicStatisticPage() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'statistics')
    const currentLocale = useCurrentLocale()

    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('analysis_by_period')}</h1>
                <div className="mt-10">
                    <div className="flex justify-between">
                        <div className="flex gap-2 w-full">
                            <Select defaultValue="all">
                                <SelectTrigger className="border-0 border-b-1 !border-[#E9E6E0] rounded px-2 py-1 gap-1 w-30 h-auto flex items-center max-w-52">
                                <SelectValue placeholder="일자별 요약" />
                                </SelectTrigger>
                                <SelectContent className="bg-white border rounded shadow-md">
                                    <SelectItem value="all" className="px-3 py-2 /cursor-pointer">일자별 요약</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select defaultValue="all">
                                <SelectTrigger className="border-0 border-b-1 !border-[#E9E6E0] rounded px-2 py-1 gap-1 w-30 h-auto flex items-center max-w-52">
                                <SelectValue placeholder="일자별 요약" />
                                </SelectTrigger>
                                <SelectContent className="bg-white border rounded shadow-md">
                                    <SelectItem value="all" className="px-3 py-2 /cursor-pointer">2024년</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select defaultValue="all">
                                <SelectTrigger className="border-0 border-b-1 !border-[#E9E6E0] rounded px-2 py-1 gap-1 w-30 h-auto flex items-center max-w-52">
                                <SelectValue placeholder="일자별 요약" />
                                </SelectTrigger>
                                <SelectContent className="bg-white border rounded shadow-md">
                                    <SelectItem value="all" className="px-3 py-2 /cursor-pointer">7월</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" className="text-[#5E5955]"><RefreshCw className="w-4 h-4" />{t('refresh')}</Button>
                            <Button variant="outline" className="text-[#5E5955]">엑셀 다운로드</Button>
                        </div>
                    </div>
                    
                    <table className="w-full text-center border-collapse min-w-6xl mt-8 text-[#6F6963]">
                        <thead className="bg-[#322A2408] border-t h-12">
                            <tr className="border-b">
                                <th className="p-2 text-center">{t('date')}</th>
                                <th className="p-2 text-center">{t('number_of_orders')}</th>
                                <th className="p-2 text-center">{t('revenue_amount')}</th>
                                <th className="p-2 text-center">{t('page_views')}</th>
                                <th className="p-2 text-center">{t('visitors')}</th>
                                <th className="p-2 text-center">{t('sign-ups')}</th>
                                <th className="p-2 text-center">{t('inquiries')}</th>
                                <th className="p-2 text-center">{t('point_granted')}</th>
                                <th className="p-2 text-center">{t('dapoint_usedte')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 12 }).map((_, i) => (
                            <tr key={i} className="h-14 border-b">
                                <td className="p-2 text-center">2024-07-10 (수)</td>
                                <td className="p-2 text-center">390</td>
                                <td className="p-2 text-center">16,073,499{currentLocale === '' ? '원' : 'KRW'}</td>
                                <td className="p-2 text-center">20,400</td>
                                <td className="p-2 text-center">3,547 {t('people')}</td>
                                <td className="p-2 text-center">94 {t('people')}</td>
                                <td className="p-2 text-center">10</td>
                                <td className="p-2 text-center">0{currentLocale === '' ? '원' : 'KRW'}</td>
                                <td className="p-2 text-center">0{currentLocale === '' ? '원' : 'KRW'}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}