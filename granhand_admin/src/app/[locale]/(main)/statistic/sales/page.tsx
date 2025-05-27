'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useState } from "react";
import { Area, AreaChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useTranslation } from "../../../../../../utils/localization/client";

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
    const { t } = useTranslation(locale, 'statistics')
    const currentLocale = useCurrentLocale()
    const [category, setCategory] = useState('period')

    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('revenue')}</h1>
                {/* <h1 className="text-2xl font-bold">매출</h1> */}
                <div>
                    <span className="text-[#5E5955] text-base">
                        {currentLocale === '' ? `2024-07-10 09:00:00 ${t('as_of')}` : `${t('as_of')} 2024-07-10 09:00:00`}
                    </span>
                </div>

                <div className="mt-8">
                    {/* 탭 */}
                    <Tabs value={category} onValueChange={setCategory}>
                    {/* bg-transparent border-b border-gray-200 */}
                        <TabsList className="text-[#C0BCB6]">
                        <TabsTrigger value="period" className={category === 'period' ? 'text-[#322A24] border-b border-[#322A24] shadow-none' : ''}>{t('by_period')}</TabsTrigger>
                        <TabsTrigger value="product" className={category === 'product' ? 'text-[#322A24] border-b border-[#322A24] shadow-none' : ''}>{t('by_product')}</TabsTrigger>
                        <TabsTrigger value="channel" className={category === 'channel' ? 'text-[#322A24] border-b border-[#322A24] shadow-none' : ''}>{t('by_channel')}</TabsTrigger>
                        </TabsList>
                    </Tabs>

                    { /* 요약 */ }
                    <h2 className="text-[#5E5955] font-bold text-base mt-12 mb-4">{t('summary')}</h2>
                    <div className="w-full grid grid-cols-2 gap-5 mt-6">
                        <div className="bg-[#322A2408] w-full p-6">
                            <div className="">
                                <h3 className="text-[#5E5955] font-bold text-sm">{t('total_revenue')}</h3>
                                <span className="text-[#5E5955] font-bold text-base">82,719,497 {currentLocale === '' ? '원' : 'KRW'}</span>
                            </div>
                        </div>
                        <div className="bg-[#322A2408] w-full p-6">
                        <div className="">
                                <h2 className="text-[#5E5955] font-bold text-sm">{t('total_orders')}</h2>
                                <span className="text-[#5E5955] font-bold text-base">2,115 {t('orders')}</span>
                            </div>
                        </div>
                    </div>

                    {/* 차트 데이터 */}
                    <div className="flex justify-between items-center mt-16">
                        <h2 className="text-[#5E5955] font-bold text-base mb-4">{t('chart_data')}</h2>
                        <div className="flex gap-2">
                            <Input type="text" placeholder="카테고리 또는 상품코드를 검색해 보세요." />
                            <Select defaultValue="아이디">
                                <SelectTrigger className="">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="아이디">아이디</SelectItem>
                                    <SelectItem value="이메일">이메일</SelectItem>
                                    <SelectItem value="전화번호">전화번호</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button className="bg-white border text-black">엑셀 다운로드</Button>
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
                        <h2 className="text-[#5E5955] font-bold text-base mt-12 mb-4">{t('average')}</h2>
                    </div>
                    <table className="w-full text-center border-collapse min-w-6xl border overflow-auto">
                        <thead className="bg-[#322A2408] border-t h-10">
                            <tr className="border-b text-[#6F6963]">
                                <th className="p-2 items-center border">{t('revenue')}</th>
                                <th className="p-2 items-center border">{t('order_count')}</th>
                                <th className="p-2 items-center border">{t('item_count')}</th>
                                <th className="p-2 text-center border">{t('product_amount')}</th>
                                <th className="p-2 text-center border">{t('shipping_fee')}</th>
                                <th className="p-2 text-center border">{t('discount_amount')}</th>
                                <th className="p-2 text-center">{t('payment_amount')}</th>
                                <th className="p-2 text-center">{t('refund_amount')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={1} className="border-b h-14 text-[#1A1A1A]">
                                <td className="p-2 items-center border">11,817,071{currentLocale === '' ? '원' : 'KRW'}</td>
                                <td className="p-2 text-center border">302{t('orders')}</td>
                                <td className="p-2 text-center border">509{t('orders')}</td>
                                <td className="p-2 text-center border">
                                    12,347,857원
                                </td>
                                <td className="p-2 text-center border">
                                    384,429원
                                </td>
                                <td className="p-2 text-center border">
                                    434,572원
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
                                <th className="p-2 items-center border">{t('date')}</th>
                                <th className="p-2 items-center border">{t('order_count')}</th>
                                <th className="p-2 items-center border">{t('item_count')}</th>
                                <th className="p-2 text-center border">{t('product_amount')}</th>
                                <th className="p-2 text-center border">{t('shipping_fee')}</th>
                                <th className="p-2 text-center border">{t('discount_amount')}</th>
                                <th className="p-2 text-center">{t('payment_amount')}</th>
                                <th className="p-2 text-center">{t('refund_amount')}</th>
                                <th className="p-2 items-center border">{t('revenue')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key="total" className="border-b h-14 text-[#1A1A1A]">
                                <td className="p-2 items-center border">{t('total')}</td>
                                <td className="p-2 text-center border">2,115{t('orders')}</td>
                                <td className="p-2 text-center border">3,561{t('orders')}</td>
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
                                <td className="p-2 text-center border">26{t('orders')}</td>
                                <td className="p-2 text-center border">50{t('orders')}</td>
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
        </main>
    )
}