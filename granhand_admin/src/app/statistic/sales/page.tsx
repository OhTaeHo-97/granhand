'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Area, AreaChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

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
    return (
        <main className="flex-1 border p-12">
            <h1 className="text-2xl font-bold">매출</h1>
            <div><span className="text-gray-400 text-sm">2024-07-10 09:00:00 집계 기준</span></div>

            <div className="mt-10">
                {/* 탭 */}
                <Tabs defaultValue="send">
                    <TabsList className="bg-transparent border-b border-gray-200">
                    <TabsTrigger value="send" className="border-b-2 border-black">기간별</TabsTrigger>
                    <TabsTrigger value="history">상품별</TabsTrigger>
                    <TabsTrigger value="history">환경별</TabsTrigger>
                    </TabsList>
                </Tabs>

                { /* 요약 */ }
                <h2 className="text-base font-semibold mt-8">요약</h2>
                <div className="w-full grid grid-cols-2 gap-5 mt-6">
                    <div className="bg-gray-100 w-full p-6">
                        <div className="">
                            <h2 className="text-sm font-bold">매출 합계</h2>
                            <span className="text-base font-semibold">82,719,497 원</span>
                        </div>
                    </div>
                    <div className="bg-gray-100 w-full p-6">
                    <div className="">
                            <h2 className="text-sm font-bold">주문 합계</h2>
                            <span className="text-base font-semibold">2,115 건</span>
                        </div>
                    </div>
                </div>

                {/* 차트 데이터 */}
                <div className="flex justify-between items-center  mt-6">
                    <h2 className="text-base font-semibold">차트 데이터</h2>
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

                <div>
                    <h2 className="text-base font-semibold">평균</h2>
                </div>
                <table className="w-full text-left border-collapse min-w-6xl border">
                    <thead className="bg-[#f8f4f0] border-t h-20">
                        <tr className="border-b text-gray-400">
                            <th className="p-2 items-center border">매출</th>
                            <th className="p-2 items-center border">주문건수</th>
                            <th className="p-2 items-center border">품목건수</th>
                            <th className="p-2 text-center border">상품금액</th>
                            <th className="p-2 text-center border">배송비</th>
                            <th className="p-2 text-center border">할인금액</th>
                            <th className="p-2 text-center">결제금액</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={1} className="border-b h-14">
                            <td className="p-2 items-center border">11,817,071원</td>
                            <td className="p-2 text-center border">302건</td>
                            <td className="p-2 text-center border underline">509건</td>
                            <td className="p-2 text-center border">
                                12,347,857원
                            </td>
                            <td className="p-2 text-center border text-red-500">
                                384,429원
                            </td>
                            <td className="p-2 text-center border">
                                434,572원
                            </td>
                            <td className="p-2 text-center border">12,297,714원</td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <h2 className="text-base font-semibold">전체</h2>
                </div>
                <table className="w-full text-left border-collapse min-w-6xl border">
                    <thead className="bg-[#f8f4f0] border-t h-20">
                        <tr className="border-b text-gray-400">
                            <th className="p-2 items-center border">매출</th>
                            <th className="p-2 items-center border">주문건수</th>
                            <th className="p-2 items-center border">품목건수</th>
                            <th className="p-2 text-center border">상품금액</th>
                            <th className="p-2 text-center border">배송비</th>
                            <th className="p-2 text-center border">할인금액</th>
                            <th className="p-2 text-center">결제금액</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                        <tr key={i} className="border-b h-14">
                            <td className="p-2 items-center border">11,817,071원</td>
                            <td className="p-2 text-center border">302건</td>
                            <td className="p-2 text-center border underline">509건</td>
                            <td className="p-2 text-center border">
                                12,347,857원
                            </td>
                            <td className="p-2 text-center border text-red-500">
                                384,429원
                            </td>
                            <td className="p-2 text-center border">
                                434,572원
                            </td>
                            <td className="p-2 text-center border">12,297,714원</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}