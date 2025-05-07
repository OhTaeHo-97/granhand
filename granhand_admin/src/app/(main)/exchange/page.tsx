'use client'

import { Button } from "@/components/ui/button"
import Pagination from "../components/pagination"
import { CalendarIcon, Computer, RefreshCw, Search } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"

const statusList = [
    { label: "교환 요청", count: 0, value: "all" },
    { label: "교환 보류", count: 3, value: "pending" },
    { label: "교환 수거 중", count: 1, value: "paid" },
    { label: "교환 수거 완료", count: 100, value: "ready" },
    { label: "교환 재발송", count: 100, value: "ready" },
    { label: "교환 완료", count: 100, value: "ready" },
]

export default function ExchangePage() {
    const [startDate, setStartDate] = useState<Date | undefined>(new Date())
    const [endDate, setEndDate] = useState<Date | undefined>(new Date())

    const quickRanges = ["오늘", "3일", "7일", "1개월"]
    
    return (
        <main className="flex-1 border">
            <div className="p-12 text-black text-sm space-y-4">
                <h1 className="text-2xl font-bold">교환 관리</h1>
                {/* 상품 상태 */ }
                <RadioGroup defaultValue="all" className="flex gap-2">
                    {statusList.map((item) => (
                        <Label
                            key={item.value}
                            htmlFor={item.value}
                            className="flex items-center gap-1 rounded px-4 py-2 text-sm border cursor-pointer 
                            data-[state=checked]:bg-[#c8c3bc] data-[state=checked]:text-white
                            bg-gray-50"
                        >
                            <RadioGroupItem id={item.value} value={item.value} className="hidden" />
                            {item.label}{" "}
                            <span className={item.count > 0 ? "text-blue-600 font-semibold" : ""}>
                                {item.count}
                            </span>
                        </Label>
                    ))}
                </RadioGroup>
                {/* 검색 */}
                <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7">
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


                {/* 테이블 */}
                <div className="p-6 shadow-sm">
                <div>
                <div className="mb-4 justify-between flex items-center">
                    <div className="text-sm font-bold">
                        목록 (총 <span className="text-blue-500 font-bold">303개</span>)
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
                <table className="w-full text-left border-collapse min-w-6xl border">
                    <thead className="bg-[#f8f4f0] border-t h-20">
                        <tr className="border-b text-gray-400">
                            <th className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
                            <th className="p-2 items-center border"></th>
                            <th className="p-2 items-center border">주문번호</th>
                            <th className="p-2 text-center border">교환 처리 일시</th>
                            <th className="p-2 text-center border">구매자</th>
                            <th className="p-2 text-center border">주문상품</th>
                            <th className="p-2 text-center border">수량</th>
                            <th className="p-2 text-center border">주문 상태</th>
                            <th className="p-2 text-center border">교환 사유</th>
                            <th className="p-2 text-center border">운송장 정보</th>
                            <th className="p-2 text-center border">교환 배송비</th>
                            <th className="p-2 text-center border">회수지 정보</th>
                            <th className="p-2 text-center border">재배송지 정보</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                        <tr key={i} className="border-b h-14">
                            <td className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                            <td className="p-2 text-center border"><Computer /></td>
                            <td className="p-2 text-center border underline">2024021012345678</td>
                            <td className="p-2 text-center border">
                                <div>
                                    <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
                                        <span>교환 요청일</span>
                                    </div>
                                    <div className="font-semibold text-black">2024-02-10 16:15:35</div>
                                </div>
                            </td>
                            <td className="p-2 text-center border text-red-500">
                                <div>
                                    <div className="font-semibold text-black">홍길동 / 010-1234-5678</div>
                                    <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
                                        <span>honghong@gmail.com</span>
                                    </div>
                                    <Button className="bg-white, border">관리자 메모</Button>
                                </div>
                            </td>
                            <td className="p-2 text-center border">
                                <div className="space-y-1 text-sm">
                                    <div className="flex items-center gap-1 font-semibold text-black">Roland Multi Perfume 100ml</div>
                                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                                        <span>각인 여부 : Y / 문구: GRANHAND</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                                        <span>용량: 100ml</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                                        <span>쇼핑백: 구매 안함</span>
                                    </div>
                                </div>
                            </td>
                            <td className="p-2 text-center border">1</td>
                            <td className="p-2 text-center border text-red-500">교환 요청</td>
                            <td className="p-2 text-center border underline">오배송</td>
                            <td className="p-2 text-center border"></td>
                            <td className="p-2 text-center border">35,000원</td>
                            <td className="p-2 text-center border">
                                <div className="space-y-1 text-sm">
                                    <div className="font-semibold text-black">
                                        홍길순 / <span className="font-semibold">010-0000-0000</span>
                                    </div>
                                    <div className="text-gray-400">
                                        부산 부산진구 서전로 8<br/>
                                        위워크 7층<br/>
                                        우) 12345
                                    </div>
                                    <div className="text-blue-600 mt-1">
                                        부재 시 문 앞에 놓아주세요.
                                    </div>
                                </div>
                            </td>
                            <td className="p-2 text-center border">
                            <div className="space-y-1 text-sm">
                                    <div className="font-semibold text-black">
                                        홍길순 / <span className="font-semibold">010-0000-0000</span>
                                    </div>
                                    <div className="text-gray-400">
                                        부산 부산진구 서전로 8<br/>
                                        위워크 7층<br/>
                                        우) 12345
                                    </div>
                                    <div className="text-blue-600 mt-1">
                                        부재 시 문 앞에 놓아주세요.
                                    </div>
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
            <Pagination totalPages={15} />
            </div>
        </main>
    )
}