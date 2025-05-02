'use client'

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { CalendarIcon, X } from "lucide-react";
import { useState } from "react";

export default function RegisterEvenPage() {
    const OPTIONS = ['Team', 'Life', 'Work', 'Travel', 'Food']

    const [type, setType] = useState<'now' | 'reserve'>('now')
    const [date, setDate] = useState('2024.01.04')
    const [hour, setHour] = useState('13')
    const [minute, setMinute] = useState('00')

    const [selected, setSelected] = useState<string[]>([])

    const handleSelect = (value: string) => {
        if (!selected.includes(value)) {
            setSelected([...selected, value])
        }
    }

    const handleRemove = (value: string) => {
        setSelected(selected.filter((v) => v !== value))
    }

    return (
        <main className="flex-1 border">
            <div className="flex justify-between p-12">
                <div className="text-black text-sm space-y-4">
                    <h1 className="text-2xl font-bold">이벤트 관리</h1>
                </div>
                <div className="space-x-2">
                    <Button className="bg-white text-black border w-25">
                        취소
                    </Button>
                    <Button className="bg-black text-white w-25">
                        작성
                    </Button>
                </div>
            </div>

            <div className="mt-7 border shadow-md p-12">
                <div className="grid grid-cols-[150px_1fr_150px_1fr] border-b border-gray-200 h-full">
                    {/* 첫 번째 행 */}
                    <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2 border-b">
                        <Label className="font-semibold">태그</Label>
                    </div>
                    <div className="flex gap-2 items-center p-5 h-full">
                        <Select onValueChange={handleSelect}>
                            <SelectTrigger className="w-60 h-12 border rounded-md px-4 flex items-center gap-2 text-gray-500">
                                <SelectValue placeholder="선택하세요." />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                {OPTIONS.map((option) => (
                                    <SelectItem key={option} value={option}>
                                        {option}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {/* 선택된 태그들 */}
                        <div className="flex gap-2 flex-wrap">
                            {selected.map((item) => (
                                <div key={item} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded">
                                    <span className="text-gray-700">{item}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleRemove(item)}
                                        className="text-gray-500 hover:text-black"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border-r border-gray-200 flex items-center justify-center p-5 border-l bg-[#f8f4f0] h-full border-b">
                        <Label className="font-semibold">대표이미지</Label>
                    </div>
                    <div className="flex items-center p-2">
                        <Button className="bg-white text-black border">첨부파일</Button>
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr]">
                    <div className="bg-[#f8f4f0] p-3 font-semibold border-r border-gray-300 flex items-center justify-center">
                        제목
                    </div>
                    <div className="grid divide-y divide-gray-200">
                        <div className="p-4">
                            <Input placeholder="한국어 제목을 입력하세요." />
                        </div>
                        <div className="p-4">
                            <Input placeholder="영문 제목을 입력하세요." />
                        </div>
                    </div>
                </div>
            </div>

{/* // mt-7 border shadow-md p-12 */}
            <div className="flex items-center gap-4 mt-7 p-12">
            {/* 제목 */}
                <h2 className="text-xl font-semibold">글 작성</h2>
                {/* 라디오 그룹 */}
                <RadioGroup
                    defaultValue="now"
                    onValueChange={(v) => setType(v as 'now' | 'reserve')}
                    className="flex items-center gap-4"
                >
                    <Label className="flex items-center gap-1 cursor-pointer">
                        <RadioGroupItem value="now" /> 즉시 발행
                    </Label>
                    <Label className="flex items-center gap-1 cursor-pointer">
                        <RadioGroupItem value="reserve" /> 예약 발행
                    </Label>
                </RadioGroup>
                {/* 달력 + 날짜 선택 */}
                <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-gray-500" />
                    <Input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className={cn(
                            'w-32 h-10 border rounded text-center',
                            type === 'reserve' ? '' : 'bg-gray-100 text-gray-500'
                        )}
                        disabled={type !== 'reserve'}
                    />
                </div>

                {/* 시간 선택 */}
                <div className="flex items-center gap-1">
                    <Input
                        type="text"
                        value={hour}
                        onChange={(e) => setHour(e.target.value)}
                        className={cn(
                            'w-12 h-10 border rounded text-center',
                            type === 'reserve' ? '' : 'bg-gray-100 text-gray-500'
                        )}
                        disabled={type !== 'reserve'}
                    />
                    <span>:</span>
                    <Input
                        type="text"
                        value={minute}
                        onChange={(e) => setMinute(e.target.value)}
                        className={cn(
                            'w-12 h-10 border rounded text-center',
                            type === 'reserve' ? '' : 'bg-gray-100 text-gray-500'
                        )}
                        disabled={type !== 'reserve'}
                    />
                </div>
            </div>
            <div className="p-12">
            <Textarea className="resize-none min-h-screen" />'
            </div>
        </main>
    )
}