'use client'

import { Label } from "@/components/ui/label";
import PeriodElement from "../../components/period";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ProductListHeader() {
    const locale = getLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'push'])
    const [quickRange, setQuickRange] = useState('')
    const [startDate, setStartDate] = useState<Date | undefined>(new Date())
    const [endDate, setEndDate] = useState<Date | undefined>(new Date())

    return (
        <div className="p-12 shadow-sm space-y-4 mb-12">
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">상품 등록일</Label>
                    </div>
                    <PeriodElement startDate={startDate} endDate={endDate} quickRange={quickRange} setStartDate={setStartDate} setEndDate={setEndDate} setQuickRange={setQuickRange} t={t} />
                </div>

                {/* 두 번째 행 */}
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
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
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
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
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 border-b text-[#6F6963]">
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
                    <Input
                        type="text"
                        placeholder="입력하세요."
                        className="border rounded px-2 py-1 flex-1 min-w-[200px] h-8"
                    />
                    </div>
                </div>
            </div>

            <div className="flex mx-auto justify-center items-center w-full gap-10 mt-10 mb-10">
                <Button className="bg-white text-[#322A24] border w-32">
                    <RefreshCw />
                    초기화
                </Button>
                <Button className="bg-[#322A24] text-white w-32">
                    <Search />
                    검색
                </Button>
            </div>
        </div>
    )
}