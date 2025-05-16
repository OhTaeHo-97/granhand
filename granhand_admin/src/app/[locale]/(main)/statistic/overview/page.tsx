'use client'

import { Progress } from "@/components/ui/progress";
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

// const visitorData = [
//     { name: '월', value: 50 },
//     { name: '화', value: 80 },
//     { name: '수', value: 65 },
//     { name: '목', value: 95 },
//     { name: '금', value: 70 }
// ]

// const orderData = [
//     { name: '월', value: 20 },
//     { name: '화', value: 60 },
//     { name: '수', value: 35 },
//     { name: '목', value: 85 },
//     { name: '금', value: 40 }
// ]

const dateProgress = [
    { date: "오늘", value: 13, total: 100 },
    { date: "어제", value: 94, total: 100 },
    { date: "2024-07-01", value: 94, total: 100 },
    { date: "2024-06-30", value: 94, total: 100 },
    { date: "2024-06-29", value: 94, total: 100 },
    { date: "2024-06-28", value: 94, total: 100 },
]

const trafficProgress = [
    { date: "오늘", value: 3.74, size: "38.3G" },
    { date: "어제", value: 1.43, size: "14.92G" },
    { date: "2024-07-01", value: 3.74, size: "38.3G" },
    { date: "2024-06-30", value: 3.74, size: "38.3G" },
    { date: "2024-06-29", value: 3.74, size: "38.3G" },
    { date: "2024-06-28", value: 3.74, size: "38.3G" },
]

export default function StatisticsOverview() {
    return (
        <main className="flex-1 border p-12">
            <h1 className="text-2xl font-bold">개요</h1>
            <div className="flex justify-between items-center mb-15 f-1">
                <div className="grid grid-cols-2 gap-4 p-4 w-full">
                {/* 그래프 2개 */}
                    <div className="border p-4 bg-white w-full">
                        <div className="font-semibold mb-2">방문자 통계</div>   
                        {/* <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={visitorData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer> */}
                        <div className="p-6 border bg-white">
                            <div className="font-semibold mb-4">방문자 & 페이지뷰</div>
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
                    </div>
                    <div className="border p-4 bg-white w-full">
                        <div className="font-semibold mb-2">선물 주문건 통계</div>
                        {/* <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={orderData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer> */}
                        <div className="p-6 border bg-white">
                            <div className="font-semibold mb-4">방문자 & 페이지뷰</div>
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
                    </div>

                {/* 프로그레스 바 2개 */}
                    <div className="border p-4 bg-white">
                        <div className="font-semibold mb-2">기간별 분석</div>
                        <div className="space-y-2">
                            {dateProgress.map((item, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>{item.date}</span>
                                        <span>{item.value}명</span>
                                    </div>
                                    <Progress value={(item.value / item.total) * 100} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border p-4 bg-white">
                        <div className="font-semibold mb-2">트래픽</div>
                        <div className="space-y-2">
                            {trafficProgress.map((item, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>{item.date}</span>
                                        <span>{item.size} ({item.value}%)</span>
                                    </div>
                                    <Progress value={item.value} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}