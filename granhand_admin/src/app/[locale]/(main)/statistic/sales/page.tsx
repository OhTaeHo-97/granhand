'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useState } from "react";
import { Area, AreaChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useTranslation } from "../../../../../../utils/localization/client";
import ExcelDownloadModal from "../../order/components/modal/excel-download-modal";
import { ArrowRightIcon, CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { enUS, ko } from "date-fns/locale";
import SetDateModal from "./components/set-date-modal";

const data = [
    { date: '7월 14일', pageview: 19000, visitor: 3000 },
    { date: '7월 15일', pageview: 29000, visitor: 5000 },
    { date: '7월 16일', pageview: 22000, visitor: 3500 },
    { date: '7월 17일', pageview: 23000, visitor: 3600 },
    { date: '7월 18일', pageview: 21000, visitor: 3300 },
    { date: '7월 19일', pageview: 18000, visitor: 3100 },
    { date: '7월 20일', pageview: 9000, visitor: 2000 },
]

export default function SalePage() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'statistics', 'push'])
    const currentLocale = useCurrentLocale()
    const [category, setCategory] = useState('period')
    const [openExcelDown, setOpenExcelDown] = useState(false)
    const [startDate, setStartDate] = useState<Date | undefined>(new Date())
    const [endDate, setEndDate] = useState<Date | undefined>(new Date())
    const [openSelectDateModal, setOpenSelecteDateModal] = useState(false)

    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('statistics:revenue')}</h1>
                {/* <h1 className="text-2xl font-bold">매출</h1> */}
                <div>
                    <span className="text-[#5E5955] text-base">
                        {currentLocale === '' ? `2024-07-10 09:00:00 ${t('statistics:as_of')}` : `${t('statistics:as_of')} 2024-07-10 09:00:00`}
                    </span>
                </div>

                <div className="mt-8">
                    <div className="flex justify-between items-center">
                        {/* 탭 */}
                        <Tabs value={category} onValueChange={setCategory}>
                        {/* bg-transparent border-b border-gray-200 */}
                            <TabsList className="text-[#C0BCB6]">
                            <TabsTrigger value="period" className={category === 'period' ? 'text-[#322A24] border-b border-[#322A24] shadow-none' : ''}>{t('statistics:by_period')}</TabsTrigger>
                            <TabsTrigger value="product" className={category === 'product' ? 'text-[#322A24] border-b border-[#322A24] shadow-none' : ''}>{t('statistics:by_product')}</TabsTrigger>
                            <TabsTrigger value="channel" className={category === 'channel' ? 'text-[#322A24] border-b border-[#322A24] shadow-none' : ''}>{t('statistics:by_channel')}</TabsTrigger>
                            </TabsList>
                        </Tabs>

                        <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                                "w-[300px] justify-start text-left font-normal"
                            )}
                            onClick={() => setOpenSelecteDateModal((prev) => !prev)}
                        >
                            <div className="flex items-center">
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {startDate && format(startDate, "yy.MM.dd (eee)", { locale: currentLocale === '' ? ko : enUS })}
                                <ArrowRightIcon size={16} />
                                {endDate && format(endDate, "yy.MM.dd (eee)", { locale: currentLocale === '' ? ko : enUS })}
                            </div>
                            {/* {format(dateRange.from, "yy.MM.dd (eee)", { locale: ko })}
                            {" → "}
                            {format(dateRange.to, "yy.MM.dd (eee)", { locale: ko })}
                            {dateRange?.from ? (
                                dateRange.to ? (
                                    <>
                                        {format(dateRange.from, "yy.MM.dd (eee)", { locale: ko })}
                                        {" → "}
                                        {format(dateRange.to, "yy.MM.dd (eee)", { locale: ko })}
                                    </>
                                ) : (
                                    format(dateRange.from, "yy.MM.dd (eee)", { locale: ko })
                                )
                            ) : (
                                <span>날짜 선택</span>
                            )} */}
                        </Button>

                        {/* <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    id="date"
                                    variant={"outline"}
                                    className={cn(
                                        "w-[300px] justify-start text-left font-normal",
                                        !dateRange && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {dateRange?.from ? (
                                        dateRange.to ? (
                                            <>
                                                {format(dateRange.from, "yy.MM.dd (eee)", { locale: ko })}
                                                {" → "}
                                                {format(dateRange.to, "yy.MM.dd (eee)", { locale: ko })}
                                            </>
                                        ) : (
                                            format(dateRange.from, "yy.MM.dd (eee)", { locale: ko })
                                        )
                                    ) : (
                                        <span>날짜 선택</span>
                                    )}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="end">
                                <Calendar
                                    initialFocus
                                    mode="range"
                                    defaultMonth={dateRange?.from}
                                    selected={dateRange}
                                    onSelect={setDateRange}
                                    numberOfMonths={2}
                                    locale={ko}
                                />
                            </PopoverContent>
                        </Popover> */}
                    </div>

                    { /* 요약 */ }
                    <h2 className="text-[#5E5955] font-bold text-base mt-12 mb-4">{t('statistics:summary')}</h2>
                    <div className="w-full grid grid-cols-2 gap-5 mt-6">
                        <div className="bg-[#322A2408] w-full p-6">
                            <div className="">
                                <h3 className="text-[#5E5955] font-bold text-sm">{t('statistics:total_revenue')}</h3>
                                <span className="text-[#5E5955] font-bold text-base">82,719,497 {currentLocale === '' ? '원' : 'KRW'}</span>
                            </div>
                        </div>
                        <div className="bg-[#322A2408] w-full p-6">
                        <div className="">
                                <h2 className="text-[#5E5955] font-bold text-sm">{t('statistics:total_orders')}</h2>
                                <span className="text-[#5E5955] font-bold text-base">2,115 {t('statistics:orders')}</span>
                            </div>
                        </div>
                    </div>

                    {/* 차트 데이터 */}
                    <div className="flex justify-between items-center mt-16">
                        <h2 className="text-[#5E5955] font-bold text-base mb-4">{t('statistics:chart_data')}</h2>
                        <div className="flex gap-2">
                            <Input type="text" placeholder={t('statistics:search_category_placeholder')} className="min-w-100" />
                            <Select defaultValue="daily">
                                <SelectTrigger className="">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="daily">{t('statistics:daily')}</SelectItem>
                                    <SelectItem value="monthly">{t('statistics:monthly')}</SelectItem>
                                    <SelectItem value="yearly">{t('statistics:yearly')}</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button className="bg-white border text-black" onClick={() => setOpenExcelDown((prev) => !prev)}>{t('excel_down')}</Button>
                        </div>
                    </div>
                    <div className="w-full">
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorPageview" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#90cdf4" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="#90cdf4" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="pageview" stroke="#63b3ed" fill="url(#colorPageview)" name="페이지뷰" />
                                <Line type="monotone" dataKey="visitor" stroke="#2b6cb0" dot={{ r: 5 }} activeDot={{ r: 7 }} name="방문자" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-[#5E5955] font-bold text-base mt-12 mb-4">{t('statistics:average')}</h2>
                    </div>
                    <table className="w-full text-center border-collapse min-w-6xl border overflow-auto">
                        <thead className="bg-[#322A2408] border-t h-10">
                            <tr className="border-b text-[#6F6963]">
                                <th className="p-2 items-center border">{t('statistics:revenue')}</th>
                                <th className="p-2 items-center border">{t('statistics:order_count')}</th>
                                <th className="p-2 items-center border">{t('statistics:item_count')}</th>
                                <th className="p-2 text-center border">{t('statistics:product_amount')}</th>
                                <th className="p-2 text-center border">{t('statistics:shipping_fee')}</th>
                                <th className="p-2 text-center border">{t('statistics:discount_amount')}</th>
                                <th className="p-2 text-center">{t('statistics:payment_amount')}</th>
                                <th className="p-2 text-center">{t('statistics:refund_amount')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={1} className="border-b h-14 text-[#1A1A1A]">
                                <td className="p-2 items-center border">11,817,071{currentLocale === '' ? '원' : 'KRW'}</td>
                                <td className="p-2 text-center border">302{t('statistics:orders')}</td>
                                <td className="p-2 text-center border">509{t('statistics:orders')}</td>
                                <td className="p-2 text-center border">
                                    12,347,857 {currentLocale === '' ? '원' : 'KRW'}
                                </td>
                                <td className="p-2 text-center border">
                                    384,429 {currentLocale === '' ? '원' : 'KRW'}
                                </td>
                                <td className="p-2 text-center border">
                                    434,572 {currentLocale === '' ? '원' : 'KRW'}
                                </td>
                                <td className="p-2 text-center border">12,297,714{currentLocale === '' ? '원' : 'KRW'}</td>
                                <td className="p-2 text-center border">480,643{currentLocale === '' ? '원' : 'KRW'}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="mt-6">
                        <h2 className="text-[#5E5955] font-bold text-base mt-12 mb-4">전체</h2>
                    </div>
                    <table className="w-full text-center border-collapse min-w-6xl border overflow-auto">
                        <thead className="bg-[#322A2408] border-t h-10">
                            <tr className="border-b text-[#6F6963]">
                                <th className="p-2 items-center border">{t('statistics:date')}</th>
                                <th className="p-2 items-center border">{t('statistics:order_count')}</th>
                                <th className="p-2 items-center border">{t('statistics:item_count')}</th>
                                <th className="p-2 text-center border">{t('statistics:product_amount')}</th>
                                <th className="p-2 text-center border">{t('statistics:shipping_fee')}</th>
                                <th className="p-2 text-center border">{t('statistics:discount_amount')}</th>
                                <th className="p-2 text-center">{t('statistics:payment_amount')}</th>
                                <th className="p-2 text-center">{t('statistics:refund_amount')}</th>
                                <th className="p-2 items-center border">{t('statistics:revenue')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key="total" className="border-b h-14 text-[#1A1A1A]">
                                <td className="p-2 items-center border">{t('statistics:total')}</td>
                                <td className="p-2 text-center border">2,115{t('statistics:orders')}</td>
                                <td className="p-2 text-center border">3,561{t('statistics:orders')}</td>
                                <td className="p-2 text-center border">86,435,000{currentLocale === '' ? '원' : 'KRW'}</td>
                                <td className="p-2 text-center border">2,691,000{currentLocale === '' ? '원' : 'KRW'}</td>
                                <td className="p-2 text-center border">3,042,003{currentLocale === '' ? '원' : 'KRW'}</td>
                                <td className="p-2 text-center border">86,083,997{currentLocale === '' ? '원' : 'KRW'}</td>
                                <td className="p-2 text-center border">33,645,000{currentLocale === '' ? '원' : 'KRW'}</td>
                                <td className="p-2 text-center border">82,719,497{currentLocale === '' ? '원' : 'KRW'}</td>
                            </tr>
                            {Array.from({ length: 12 }).map((_, i) => (
                            <tr key={i} className="border-b h-14 text-[#1A1A1A]">
                                <td className="p-2 items-center border">24.07.10</td>
                                <td className="p-2 text-center border">26{t('statistics:orders')}</td>
                                <td className="p-2 text-center border">50{t('statistics:orders')}</td>
                                <td className="p-2 text-center border">1,257,000{currentLocale === '' ? '원' : 'KRW'}</td>
                                <td className="p-2 text-center border">27,000{currentLocale === '' ? '원' : 'KRW'}</td>
                                <td className="p-2 text-center border">25,000{currentLocale === '' ? '원' : 'KRW'}</td>
                                <td className="p-2 text-center border">1,259,000{currentLocale === '' ? '원' : 'KRW'}</td>
                                <td className="p-2 text-center border">0{currentLocale === '' ? '원' : 'KRW'}</td>
                                <td className="p-2 text-center border">1,259,000{currentLocale === '' ? '원' : 'KRW'}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <ExcelDownloadModal open={openExcelDown} setOpen={setOpenExcelDown} t={t} />
            <SetDateModal startDate={startDate} endDate={endDate} open={openSelectDateModal} setStartDate={setStartDate} setEndDate={setEndDate} setOpen={setOpenSelecteDateModal} />
        </main>
    )
}