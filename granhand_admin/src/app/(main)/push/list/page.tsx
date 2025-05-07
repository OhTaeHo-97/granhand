'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, Circle, Recycle, RefreshCw, RotateCcw, Search } from "lucide-react";
import { useState } from "react";
import { format } from 'date-fns'
import { Calendar } from "@/components/ui/calendar";
import Pagination from "@/components/pagination";
import { Checkbox } from "@/components/ui/checkbox";

export default function PushList() {
    const [startDate, setStartDate] = useState<Date | undefined>(new Date())
    const [endDate, setEndDate] = useState<Date | undefined>(new Date())

    const quickRanges = ["오늘", "3일", "7일", "1개월"]
    return (
        <div className="w-full">
            <Tabs defaultValue="send">
                <TabsList className="bg-transparent border-b border-gray-200">
                <TabsTrigger value="send">푸시 발송하기</TabsTrigger>
                <TabsTrigger value="history" className="border-b-2 border-black">푸시 발송 내역</TabsTrigger>
                </TabsList>
            </Tabs>

            {/* 발송 타입 */}
            <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                        <Label className="font-semibold">기간</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
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

                {/* 두 번째 행 */}
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                        <Label className="font-semibold">메시지 내용</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Input type="text" placeholder="검색" />
                    </div>
                </div>
            </div>
            <div className="flex mx-auto justify-center items-center w-full gap-10 mb-10">
                <Button className="bg-white text-black border w-32">
                    <RefreshCw />
                    초기화
                </Button>
                <Button className="bg-black text-white w-32">
                    <Search />
                    검색
                </Button>
            </div>

            <div className="mb-3">
                <Button className="border h-9">기록 삭제</Button>
            </div>
            <div className="overflow-auto rounded bg-white">
            <table className="w-full text-left border-collapse min-w-6xl">
            <thead className="bg-[#f8f4f0] border-t h-20">
                <tr className="border-b text-gray-400">
                <th className="p-2 items-center"></th>
                <th className="p-2 text-center">발송 일자</th>
                <th className="p-2 text-center">상태</th>
                <th className="p-2 text-center">제목</th>
                <th className="p-2 text-center">내용</th>
                <th className="p-2 text-center">발송 회원수</th>
                <th className="p-2 text-center">발송 상태</th>
                <th className="p-2 text-center">예약 상태</th>
                <th className="p-2 text-center">관리</th>
                </tr>
            </thead>
            <tbody>
                {Array.from({ length: 12 }).map((_, i) => (
                <tr key={i} className="border-b h-14">
                    <td className="p-2 items-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                    <td className="p-2 text-center">2023.12.24 10:00</td>
                    <td className="p-2 text-center">반복 예약</td>
                    <td className="p-2 text-center">재입고 알림</td>
                    <td className="p-2 text-center">Roland Multi Perfume / 100ml (가) 입고되었어요.</td>
                    <td className="p-2 text-center">739</td>
                    <td className="p-2 text-center">발송 완료</td>
                    <td className="p-2 text-center">일반 푸시</td>
                    <td className="p-2 flex gap-1 flex-wrap items-center justify-center">
                        <Button className="border rounded px-2">예약 수정</Button>
                        <Button className="border rounded px-2">반복 취소</Button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
            </div>
            <Pagination totalPages={15} />
        </div>
    )
}