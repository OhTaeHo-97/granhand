'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import { useState } from "react";

export default function DailySummary() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'common')
    const currentLocale = useCurrentLocale()
    const [currency, setCurrency] = useState('krw')

    const data = [
        { date: '2023-11-23', orders: 106, sales: '4,680,000', netSales: '4,680,000', visitors: '2,219', signups: 94, inquiries: 1 },
        { date: '2023-11-22', orders: 745, sales: '8,640,000', netSales: '8,640,000', visitors: '1,584', signups: 45, inquiries: 2 },
        { date: '2023-11-21', orders: 34, sales: '620,000', netSales: '620,000', visitors: '847', signups: 14, inquiries: 5 },
        { date: '2023-11-20', orders: 197, sales: '2,600,000', netSales: '2,600,000', visitors: '684', signups: 36, inquiries: 4 },
        { date: '2023-11-19', orders: 382, sales: '14,690,000', netSales: '14,690,000', visitors: '1,842', signups: 63, inquiries: 7 },
        { date: '2023-11-18', orders: 375, sales: '6,680,000', netSales: '6,680,000', visitors: '2,219', signups: 47, inquiries: 0 },
        { date: '2023-11-17', orders: 328, sales: '7,640,000', netSales: '7,640,000', visitors: '1,877', signups: 12, inquiries: 6 },
        { date: '최근 7일 합계', orders: '1,986', sales: '46,931,999', netSales: '46,931,999', visitors: '17,907', signups: '1,015', inquiries: 25 },
        { date: '이번 달 합계', orders: '6,478', sales: '94,450,000', netSales: '94,450,000', visitors: '2,952', signups: 82, inquiries: 67 },
    ]

    return (
        <section className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-10">
                <h2 className="font-semibold text-base">{t('daily_summary')}</h2>
                <Select value={currency} onValueChange={setCurrency}>
                    <SelectTrigger className="inline-flex items-center gap-1 text-[#6f6963] focus:outline-none w-fit border-none">
                        <SelectValue />
                        {/* <ChevronDownIcon className="w-4 h-4" /> */}
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                        <SelectItem value="krw" className="px-3 py-2 hover:bg-gray-100 cursor-pointer">{t('krw')}</SelectItem>
                        <SelectItem value="usd" className="px-3 py-2 hover:bg-gray-100 cursor-pointer">{t('usd')}</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="overflow-auto">
                <table className="w-full border-collapse">
                <thead>
                    <tr className="text-left text-sm border-t border-b text-[#C0BCB6]">
                    <th className="py-2 px-2 text-center">{t('date')}</th>
                    <th className="py-2 px-2 text-center">{t('number_orders')}</th>
                    <th className="py-2 px-2 text-center">{t('total_sales')}</th>
                    <th className="py-2 px-2 text-center">{t('net_sales')}</th>
                    <th className="py-2 px-2 text-center">{t('visitors')}</th>
                    <th className="py-2 px-2 text-center">{t('new_signup')}</th>
                    <th className="py-2 px-2 text-center">{t('inquiry')}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                    <tr
                        key={index}
                        className={index === 0 ? 'bg-gray-100' : ''}
                    >
                        <td className="py-2 px-2 text-center">{row.date}</td>
                        <td className="py-2 px-2 text-center">{row.orders}</td>
                        <td className="py-2 px-2 text-center">{row.sales}{currency === 'krw' ? (currentLocale === '' ? '원' : 'KRW') : 'USD'}</td>
                        <td className="py-2 px-2 text-center">{row.netSales}{currency === 'krw' ? (currentLocale === '' ? '원' : 'KRW') : 'USD'}</td>
                        <td className="py-2 px-2 text-center">{row.visitors}</td>
                        <td className="py-2 px-2 text-center">{row.signups}</td>
                        <td className="py-2 px-2 text-center">{row.inquiries}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </section>
    )
}