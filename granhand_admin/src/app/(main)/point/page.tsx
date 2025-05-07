'use client'

import Pagination from "@/components/pagination"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { CalendarIcon, RefreshCw, Search } from "lucide-react"
import { useState } from "react"

export default function PointPage() {
    const [startDate, setStartDate] = useState<Date | undefined>(new Date())
    const [endDate, setEndDate] = useState<Date | undefined>(new Date())

    const quickRanges = ["오늘", "3일", "7일", "1개월"]

    return (
        <main className="flex-1 border">
            <div className="p-12 text-black text-sm space-y-4">
                <h1 className="text-2xl font-bold">포인트 관리</h1>
                {/* 검색 */}
                <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7 mt-16">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                        <Label className="font-semibold">조회 기간</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Select defaultValue="주문일">
                            <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-24 h-8">
                            <SelectValue placeholder="주문일" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border rounded shadow-md">
                                <SelectItem value="주문일" className="px-3 py-2 cursor-pointer">주문일</SelectItem>
                                <SelectItem value="이름" className="px-3 py-2 cursor-pointer">이름</SelectItem>
                                <SelectItem value="이메일" className="px-3 py-2 cursor-pointer">이메일</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="flex border border-gray-300 divide-x divide-gray-300 rounded overflow-hidden">
                            {quickRanges.map((label, idx) => (
                                <Button
                                    key={idx}
                                    className={`px-4 rounded-none ${
                                        idx === 0 ? "bg-gray-300 text-white font-semibold": "bg-white text-gray-800"
                                    }`}
                                >
                                    {label}
                                </Button>
                            ))}    
                        </div>
                        <div className="relative border border-gray-300 rounded px-4 py-2 flex items-center gap-2">
                        {startDate ? format(startDate, "yyyy.MM.dd") : "날짜 선택"}
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                                    <CalendarIcon className="h-4 w-4" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar mode="single" selected={startDate} onSelect={setStartDate}></Calendar>
                            </PopoverContent>
                        </Popover>
                        </div>
                        <span>~</span>
                        <div className="relative border border-gray-300 rounded px-4 py-2 flex items-center gap-2">
                            {endDate ? format(endDate, "yyyy.MM.dd") : "날짜 선택"}
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                                        <CalendarIcon className="h-4 w-4" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar mode="single" selected={endDate} onSelect={setEndDate}></Calendar>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2 border-b">
                        <Label className="font-semibold">상세 조건</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                    <Select defaultValue="전체">
                        <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-24 h-8">
                        <SelectValue placeholder="전체" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border rounded shadow-md">
                            <SelectItem value="전체" className="px-3 py-2 cursor-pointer">전체</SelectItem>
                            <SelectItem value="이름" className="px-3 py-2 cursor-pointer">이름</SelectItem>
                            <SelectItem value="이메일" className="px-3 py-2 cursor-pointer">이메일</SelectItem>
                        </SelectContent>
                    </Select>
                    <input
                        type="text"
                        placeholder="검색."
                        className="border rounded px-2 py-1 flex-1 min-w-[200px] h-8"
                    />
                    </div>
                </div>
                </div>
                <div className="flex mx-auto justify-center items-center w-full gap-10 mt-10 mb-10">
                    <Button className="bg-white text-black border w-32">
                        <RefreshCw />
                        초기화
                    </Button>
                    <Button className="bg-black text-white w-32">
                        <Search />
                        검색
                    </Button>
                </div>

                <div className="p-6 shadow-sm">
                <div>
                <div className="mb-4 justify-between flex items-center">
                    <div className="text-sm font-bold">
                        포인트 내역
                    </div>
                    <div className="flex gap-2">
                        <Select defaultValue="50">
                            <SelectTrigger className="w-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="50">50</SelectItem>
                                <SelectItem value="이메일">이메일</SelectItem>
                                <SelectItem value="전화번호">전화번호</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button className="border ">엑셀 다운로드</Button>
                    </div>
                </div>
                <table className="w-full text-left border-collapse min-w-6xl">
                    <thead className="bg-[#f8f4f0] h-14">
                        <tr className="border-b text-gray-400">
                            <th className="p-2 text-center">일자</th>
                            <th className="p-2 text-center">회원명 (아이디)</th>
                            <th className="p-2 text-center">내용</th>
                            <th className="p-2 text-center">지급</th>
                            <th className="p-2 text-center">사용</th>
                            <th className="p-2 text-center">회수</th>
                            <th className="p-2 text-center">관련 주문번호</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                        <tr key={i} className="border-b h-14">
                            <td className="p-2 text-center">2023-11-23 09:16</td>
                            <td className="p-2 text-center">홍길동 (honghong@gmail.com)</td>
                            <td className="p-2 text-center">구매확정 적립</td>
                            <td className="p-2 text-center"><span className="text-blue-400">721</span></td>
                            <td className="p-2 text-center "> </td>
                            <td className="p-2 text-center"> </td>
                            <td className="p-2 text-center">2023112365674620</td>
                        </tr>
                        ))}
                    </tbody>
                </table>

                <div className="border bg-[#f8f4f0]">
                <div className="border bg-gray-50 px-4 py-2 flex justify-end gap-2 text-sm text-gray-700">
                    <span>총 <span className="text-blue-600 cursor-pointer">23건</span></span>
                    <span>지급 35,600</span>
                    <span>|</span>
                    <span>사용 10,000</span>
                    <span>|</span>
                    <span>회수 10,000</span>
                </div>
                </div>
                </div>
                </div>
                <Pagination totalPages={15} />
            </div>

        </main>
    )
}