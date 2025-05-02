'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, ChevronDownIcon, ChevronUpIcon, RefreshCw, Search, Settings } from "lucide-react";
import ProductSidebar from "./components/sidebar";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Pagination from "@/components/pagination";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

export default function ProductListPage() {
    const [startDate, setStartDate] = useState<Date | undefined>(new Date())
    const [endDate, setEndDate] = useState<Date | undefined>(new Date())

    const quickRanges = ["오늘", "3일", "7일", "1개월"]

    return (
        <main className="flex-1 border">
            <div className="flex justify-between items-center p-12">
                <div className="text-black text-sm space-y-4">
                    <h1 className="text-2xl font-bold">상품 관리</h1>
                </div>
                <div className="space-x-2">
                    <Button variant="outline">템플릿 관리</Button>
                    <Button variant="outline">추천 순서 관리</Button>
                    <Button className="bg-black text-white">상품 등록</Button>
                </div>
            </div>

            <div className="flex min-h-screen text-sm text-[#6f6963]">
                {/* ------------------- 좌측 사이드바 ------------------- */}
                <ProductSidebar />
        
            {/* ------------------- 우측 콘텐츠 ------------------- */}
            <main className="flex-1 p-6 space-y-4 w-full">
                <div className="p-6 shadow-sm mb-12">
                {/* ------------------- 검색 필터 ------------------- */}
                <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7">
                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">상품 등록일</Label>
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
                            <Label className="font-semibold">카테고리</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <Select defaultValue="select">
                                <SelectTrigger className="">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="select">분류 선택</SelectItem>
                                    <SelectItem value="이메일">이메일</SelectItem>
                                    <SelectItem value="전화번호">전화번호</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">판매 상태</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <RadioGroup defaultValue="now" className="flex gap-6">
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="all" /> 전체
                                </Label>
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="normal" /> 판매중
                                </Label>
                                <Label className="flex items-center gap-2 min-w-20">
                                <RadioGroupItem value="badness" /> 품절
                                </Label>
                                <Label className="flex items-center gap-2 min-w-20">
                                <RadioGroupItem value="badness" /> 숨김
                                </Label>
                            </RadioGroup>
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2 border-b">
                        <Label className="font-semibold">상세 검색</Label>
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
                        placeholder="입력하세요."
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
                </div>
        
                {/* ------------------- 상품 목록 테이블 ------------------- */}
                <div className="p-6 shadow-sm">
                <div>
                <div className="mb-4 justify-between flex items-center">
                    <div className="text-sm font-bold">
                        목록 (총 <span className="text-blue-500 font-bold">303개</span>)
                    </div>
                    <div className="flex gap-2">
                        <Select defaultValue="newest">
                            <SelectTrigger className="w-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="newest">등록순</SelectItem>
                                <SelectItem value="이메일">이메일</SelectItem>
                                <SelectItem value="전화번호">전화번호</SelectItem>
                            </SelectContent>
                        </Select>
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
                    <thead className="bg-[#f8f4f0] border-t h-20">
                        <tr className="border-b text-gray-400">
                            <th className="p-2 items-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
                            <th className="p-2 items-center">No</th>
                            <th className="p-2 text-center">상품 코드</th>
                            <th className="p-2 text-center">카테고리</th>
                            <th className="p-2 text-center">상품명</th>
                            <th className="p-2 text-center">판매가</th>
                            <th className="p-2 text-center">상태</th>
                            <th className="p-2 text-center">재고</th>
                            <th className="p-2 text-center">등록일</th>
                            <th className="p-2 text-center">관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                        <tr key={i} className="border-b h-14">
                            <td className="p-2 items-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                            <td className="p-2 text-center">303</td>
                            <td className="p-2 text-center">000000003</td>
                            <td className="p-2 text-center">그랑핸드 {">"} 퍼퓸 {">"} 멀티퍼퓸</td>
                            <td className="p-2 text-center">
                                <div className="flex items-start gap-3">
                                    {/* 이미지 영역 */}
                                    <Image src="/placeholder.png" alt="하이" width={48} height={48} className="w-12 h-12 bg-gray-100 border border-gray-300 flex items-center justify-center text-gray-400 text-xs"/>
                                        {/* 이미지 없으면 placeholder */}
                                        {/* <Image src="/" />
                                    </Image> */}

                                    {/* 텍스트 영역 */}
                                    <div>
                                        <div className="font-semibold text-black">Roland Multi Perfume</div>
                                        <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
                                            <span className="text-lg leading-none">•</span>
                                            <span>쇼핑백</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="p-2 text-center">35,000</td>
                            <td className="p-2 flex gap-1 flex-wrap items-center justify-center">판매 증</td>
                            <td className="p-2 text-center">2,345</td>
                            <td className="p-2 text-center">2023-11-23</td>
                            <td className="p-2 flex gap-1 flex-wrap items-center justify-center">
                                <Button className="border rounded px-2">수정</Button>
                                <Button className="border rounded px-2">옵션 수정</Button>
                            </td>
                            {/* <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/> */}
                        </tr>
                        ))}
                    </tbody>
                </table>
                </div>
        
                {/* ------------------- 하단 버튼 ------------------- */}
                <div className="flex gap-2 mt-4">
                <Button variant="outline">복제</Button>
                <Button variant="outline">삭제</Button>
                <Select defaultValue="default">
                    <SelectTrigger className="w-fit">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectItem value="default">상태 변경</SelectItem>
                        <SelectItem value="이메일">이메일</SelectItem>
                        <SelectItem value="전화번호">전화번호</SelectItem>
                    </SelectContent>
                </Select>
                <Button variant="outline">카테고리 변경</Button>
                <Button variant="outline">판매가 변경</Button>
                <Button variant="outline">판매기간 변경</Button>
                <Button variant="outline">재고 변경</Button>
                </div>
        
                {/* ------------------- 페이지네이션 ------------------- */}
                <Pagination totalPages={10} />
                </div>
        
            </main>
            </div>
        </main>
    )
}