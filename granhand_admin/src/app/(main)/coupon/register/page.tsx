'use client'

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css"

export default function RegisterCouponPage() {
    const [startDate, setStartDate] = useState<Date | null>(new Date('2024-01-04'))
    const [endDate, setEndDate] = useState<Date | null>(new Date('2024-10-04'))

    const [startTime, setStartTime] = useState("00:01")
    const [endTime, setEndTime] = useState("11:59")

    const [showStartCalendar, setShowStartCalendar] = useState(false)
    const [showEndCalendar, setShowEndCalendar] = useState(false)

    return (
        <main className="flex-1 border p-12">
            <h1 className="text-2xl font-bold mb-10">쿠폰 발급</h1>

            <div className="shadow-md">
                <div>
                    <h2 className="text-base font-semibold mb-4">쿠폰 정보</h2>
                    <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7 min-w-178">

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">쿠폰명</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <Input placeholder="쿠폰명 입력" className="w-150" />
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">쿠폰명</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <RadioGroup defaultValue="now" className="flex gap-6">
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="granhand" /> 그랑핸드
                                </Label>
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="comfortable" /> 콤포타블
                                </Label>
                            </RadioGroup>
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">적용처</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <RadioGroup defaultValue="now" className="flex gap-6">
                                <Label className="flex items-center gap-2">
                                <RadioGroupItem value="granhand" /> 오프라인 전용
                                </Label>
                                <Label className="flex items-center gap-2">
                                <RadioGroupItem value="comfortable" /> 온라인 전용
                                </Label>
                                <Label className="flex items-center gap-2">
                                <RadioGroupItem value="comfortable" /> APP 전용
                                </Label>
                            </RadioGroup>
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">쿠폰 코드</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <Select defaultValue="single">
                                <SelectTrigger className="w-60">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="single">단일 쿠폰코드</SelectItem>
                                    <SelectItem value="multiple">복수 쿠폰코드</SelectItem>
                                </SelectContent>
                            </Select>
                            <Input placeholder="쿠폰 코드 입력(미입력 시 자동 생성)" />
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">쿠폰 수량</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <Input placeholder="수량 입력" className="w-22" /> 장 발급(1회 10,000장 / 1일 20회까지 발급 가능)
                        </div>
                    </div>
                </div>
                </div>

                <div>
                    <h2 className="text-base font-semibold mb-4">사용 정보</h2>
                    <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7 min-w-178">

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">사용 기간</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">

                        <div className="flex items-center gap-2 text-sm">

                            {/* 시작일 */}
                            <div className="relative">
                                <input
                                    readOnly
                                    value={startDate ? format(startDate, "yyyy.MM.dd") : ""}
                                    onClick={() => { setShowStartCalendar(!showStartCalendar) }}
                                    className="border px-3 py-2 w-32 rounded"
                                />
                                <CalendarIcon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
                                {showStartCalendar && (
                                    <div className="absolute z-10 mt-1 bg-white border rounded shadow">
                                        <DayPicker
                                            mode="single"
                                            selected={startDate || undefined}
                                            onSelect={(date) => {
                                                setStartDate(date)
                                                setShowStartCalendar(false)
                                            }}
                                            locale={ko}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* 시작 시간 */}
                            <input
                                type="time"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                                className="border px-2 py-2 w-20 rounded"
                            />

                            <span>~</span>

                            {/* 종료일 */}
                            <div className="relative">
                                <input
                                    readOnly
                                    value={endDate ? format(endDate, "yyyy.MM.dd") : ""}
                                    onClick={() => { setShowEndCalendar(!showEndCalendar) }}
                                    className="border px-3 py-2 w-32 rounded"
                                />
                                <CalendarIcon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
                                {showEndCalendar && (
                                    <div className="absolute z-10 mt-1 bg-white border rounded shadow">
                                        <DayPicker
                                            mode="single"
                                            selected={endDate || undefined}
                                            onSelect={(date) => {
                                                setEndDate(date)
                                                setShowEndCalendar(false)
                                            }}
                                            locale={ko}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* 종료 시간 */}
                            <input
                                type="time"
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                                className="border px-2 py-2 w-20 rounded"
                            />

                            </div>

                        {/* <div className="flex items-center gap-2 text-sm"> */}

                            {/* 시작 날짜 */}
                            {/* <div className="relative">
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={1}
                                    dateFormat="yyyy.MM.dd HH:mm"
                                    className="border rounded px-2 py-1 w-32"
                                />
                                <CalendarIcon className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>

                            <span>~</span> */}

                            {/* 종료 날짜 */}
                            {/* <div className="relative">
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={1}
                                    dateFormat="yyyy.MM.dd HH:mm"
                                    className="border rounded px-2 py-1 w-32"
                                />
                                <CalendarIcon className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div> */}

                            {/* 기간 제한 없음 체크박스 */}
                            <div className="flex items-center gap-1 ml-4 text-gray-600">
                                {/* <input type="checkbox" disabled className="accent-gray-400" />
                                <span>기간 제한 없음</span> */}
                                <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-base">기간 제한 없음</Label>
                            </div>
                        </div>
                            {/* <Input placeholder="쿠폰명 입력" /> */}
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">할인 금액</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <Input placeholder="금액 입력" className="w-20"/>원
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">최소 주문금액</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <Select defaultValue="infinite">
                                <SelectTrigger className="w-60">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="infinite">제한 없음</SelectItem>
                                    <SelectItem value="limited">금액 입력</SelectItem>
                                </SelectContent>
                            </Select>
                            <Input placeholder="금액 입력" className="w-20"/>원
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">적용 상품 범위</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            {/* <Select defaultValue="single">
                                <SelectTrigger className="">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="single">단일 쿠폰코드</SelectItem>
                                    <SelectItem value="multiple">복수 쿠폰코드</SelectItem>
                                </SelectContent>
                            </Select>
                            <Input placeholder="쿠폰 코드 입력(미입력 시 자동 생성)" /> */}

                            <RadioGroup defaultValue="now" className="flex gap-6">
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="granhand" /> 전체 상품
                                </Label>
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="comfortable" /> 지정 상품
                                </Label>
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="comfortable" /> 제외 상품
                                </Label>
                            </RadioGroup>
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">사용 횟수</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            {/* <Input placeholder="수량 입력" className="w-20" /> 장 발급(1회 10,000장 / 1일 20회까지 발급 가능) */}
                            동일 회원이 최대 <Input placeholder="1" className="w-10" />회 까지 사용 가능
                            <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-base">회수 제한 없음</Label>
                        </div>
                    </div>
                </div>
                </div>
            {/* </div> */}
        </main>
    )
}