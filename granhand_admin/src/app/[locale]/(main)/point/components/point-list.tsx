'use client'

import Pagination from "@/components/pagination";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import { useState } from "react";
import ExcelDownloadModal from "../../order/components/modal/excel-download-modal";

export default function PointList() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'point', 'push'])
    const [currentPage, setCurrentPage] = useState(1)
    const [openExcelDown, setOpenExcelDown] = useState(false)

    return (
        <div className="p-6 shadow-sm">
            {/* ------------------- 상품 목록 테이블 ------------------- */}
            <div>
                <div className="mb-4 justify-between flex items-center">
                    <div className="text-[#5E5955] font-bold text-base">
                        {t('point:point_history')}
                    </div>
                    <div className="flex gap-2">
                        <Select defaultValue="50">
                            <SelectTrigger className="w-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="50">50</SelectItem>
                                <SelectItem value="100">100</SelectItem>
                                <SelectItem value="500">500</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button className="border" onClick={() => setOpenExcelDown(true)}>{t('excel_down')}</Button>
                    </div>
                </div>
                <table className="w-full text-left border-collapse min-w-6xl">
                    <thead className="bg-[#322A2408] border-t h-20">
                        <tr className="border-b text-[#6F6963]">
                            <th className="p-2 text-center">{t('point:date')}</th>
                            <th className="p-2 text-center">{t('point:member_name')}</th>
                            <th className="p-2 text-center">{t('point:description')}</th>
                            <th className="p-2 text-center">{t('point:earned')}</th>
                            <th className="p-2 text-center">{t('point:used')}</th>
                            <th className="p-2 text-center">{t('point:revoked')}</th>
                            <th className="p-2 text-center">{t('point:related_order_number')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                            <tr key={i} className="border-b h-14 text-[#1A1A1A]">
                                <td className="p-2 text-center">2023-11-23 09:16</td>
                                <td className="p-2 text-center">홍길동 (honghong@gmail.com)</td>
                                <td className="p-2 text-center">구매확정 적립</td>
                                <td className="p-2 text-center"><span className="text-[#4C89E4]">721</span></td>
                                <td className="p-2 text-center text-[#FF3E24]">-5,000</td>
                                <td className="p-2 text-center text-[#FF3E24]">-5,000</td>
                                <td className="p-2 text-center">2023112365674620</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ------------------- 집계 ------------------- */}
            <div className="border-b bg-[#322A24]">
                <div className="bg-gray-50 px-4 py-2 flex justify-end gap-10 text-sm">
                    <span>{t('point:total')} <span className="text-[#5584F4] cursor-pointer">23</span> {t('point:records')}</span>
                    <div className="flex justify-end gap-2">
                        <span>{t('point:earned')} 35,600</span>
                        <span>|</span>
                        <span>{t('point:used')} 10,000</span>
                        <span>|</span>
                        <span>{t('point:revoked')} 10,000</span>
                    </div>
                </div>
            </div>
            <Pagination totalPages={15} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <ExcelDownloadModal open={openExcelDown} setOpen={setOpenExcelDown} t={t} />
        </div>
    )
}