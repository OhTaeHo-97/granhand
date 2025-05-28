'use client'

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import { useState } from "react";
import Pagination from "@/components/pagination";

export default function CouponList() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'coupon'])
    const [currentPage, setCurrentPage] = useState(1)

    return (
        <>
            <div className="p-6 shadow-sm">
                <div>
                    <div className="mb-4 justify-between flex items-center">
                        <div className="text-[#5E5955] font-bold text-base">
                            {t('coupon:issued_coupon_history')}
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
                            <Button className="border">엑셀 다운로드</Button>
                        </div>
                    </div>
                    <table className="w-full text-left border-collapse min-w-6xl">
                        <thead className="bg-[#322A2408] border-t h-20">
                            <tr className="border-b text-[#6F6963]">
                                <th className="p-2 items-center"></th>
                                <th className="p-2 text-center">{t('coupon:coupon_number')}</th>
                                <th className="p-2 text-center">{t('coupon:coupon_name')}</th>
                                <th className="p-2 text-center">{t('coupon:applicable_products')}</th>
                                <th className="p-2 text-center">{t('coupon:purchase_amount')}</th>
                                <th className="p-2 text-center">{t('coupon:discount_amount')}</th>
                                <th className="p-2 text-center">{t('coupon:validity_period')}</th>
                                <th className="p-2 text-center">{t('coupon:issued_count')}</th>
                                <th className="p-2 text-center">{t('manage')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 12 }).map((_, i) => (
                                <tr key={i} className="border-b h-14 text-[#1A1A1A]">
                                    <td className="p-2 items-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                                    <td className="p-2 text-center">43P249082309DG12</td>
                                    <td className="p-2 text-center">{'“Gift Set” 혜택 쿠폰'}</td>
                                    <td className="p-2 text-center">그랑핸드 Gift Set 상품</td>
                                    <td className="p-2 text-center">43,000원</td>
                                    <td className="p-2 text-center">10,000원</td>
                                    <td className="p-2 text-center">2024-01-31 11:59</td>
                                    <td className="p-2 text-center">제한 없음</td>
                                    <td className="p-2 text-center">
                                        <Button className="border rounded px-2 text-[#5E5955]">{t('delete')}</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Pagination totalPages={15} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
    )
}