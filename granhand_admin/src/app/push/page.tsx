'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TabsContent } from "@radix-ui/react-tabs"
import { Camera, X } from "lucide-react"
import Image from "next/image"
import { useRef, useState } from "react"

export default function PushSendPage() {
    const [images, setImages] = useState<File[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setImages((prev) => [...prev, e.target.files![0]])
        }
    }

    const handleDelete = (index: number) => {
        setImages((prev) => prev.filter((_, i) => i !== index))
    }

    return (
        <div>
            <Tabs defaultValue="send">
                <TabsList className="bg-transparent border-b border-gray-200">
                <TabsTrigger value="send" className="border-b-2 border-black">푸시 발송하기</TabsTrigger>
                <TabsTrigger value="history">푸시 발송 내역</TabsTrigger>
                </TabsList>
            </Tabs>

            {/* 발송 타입 */}
            <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                        <Label className="font-semibold">발송 타입</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                    <RadioGroup defaultValue="now" className="flex gap-6">
                        <Label className="flex items-center gap-2 w-20">
                        <RadioGroupItem value="now" /> 즉시 발송
                        </Label>
                        <Label className="flex items-center gap-2 w-20">
                        <RadioGroupItem value="reserve" /> 예약 발송
                        </Label>
                    </RadioGroup>
                    </div>
                </div>

                {/* 두 번째 행 */}
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                        <Label className="font-semibold">발송 대상</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <RadioGroup defaultValue="now" className="flex gap-6">
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="all" /> 전체 회원
                            </Label>
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="normal" /> 특정 회원
                            </Label>
                            <Label className="flex items-center gap-2 min-w-20">
                            <RadioGroupItem value="badness" /> 등급별 회원
                            </Label>
                        </RadioGroup>
                        <Select defaultValue="all">
                            <SelectTrigger className="border rounded px-2 py-1 gap-1 w-full h-auto flex items-center max-w-52">
                            <SelectValue placeholder="회원 등급 - 전체" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border rounded shadow-md">
                                <SelectItem value="all" className="px-3 py-2 /cursor-pointer">회원 등급 - 전체</SelectItem>
                                <SelectItem value="vip" className="px-3 py-2 cursor-pointer">VIP</SelectItem>
                                <SelectItem value="gold" className="px-3 py-2 cursor-pointer">Gold</SelectItem>
                                <SelectItem value="silver" className="px-3 py-2 cursor-pointer">Silver</SelectItem>
                                <SelectItem value="bronze" className="px-3 py-2 cursor-pointer">Bronze</SelectItem>
                                <SelectItem value="basic" className="px-3 py-2 cursor-pointer">Basic</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            {/* 제목 */}
            <div className="space-y-6 mt-8">
                <Label className="font-semibold block">푸시 메시지 제목</Label>
                <Input placeholder="공백 포함 40자 이내" />
            </div>

            {/* 내용 */}
            <div className="space-y-6 mt-8">
                <Label className="font-semibold block">푸시 메시지 내용</Label>
                <Input placeholder="공백 포함 140자 이내" />
            </div>

            {/* 이미지 등록 */}
            <div className="space-y-6 mt-8">
                <Label className="font-semibold block">이미지 등록</Label>
                <div className="flex gap-3">
                    {/* 업로드 버튼 */}
                    {images.length < 3 && (
                        <Button
                            onClick={() => inputRef.current?.click()}
                            className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center border border-gray-200"
                        >
                            <Camera className="w-3 h-3 text-gray-400" />
                            <input
                            ref={inputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                            />
                        </Button>
                    )}

                    {/* 업로드된 이미지들 */}
                    {images.map((img, idx) => (
                        <div key={idx} className="relative w-20 h-20 bg-gray-300 rounded overflow-hidden">
                            <Image
                            src={URL.createObjectURL(img)}
                            alt={`uploaded-${idx}`}
                            className="object-cover w-full h-full"
                            width={400}
                            height={400}
                            />
                            <Button
                            onClick={() => handleDelete(idx)}
                            className="absolute -top-0 -right-0 bg-white border border-gray-300 rounded-full w-5 h-5 flex items-center justify-center text-gray-600 text-xs shadow-sm"
                            >
                            <X className="w-3 h-3" />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="space-y-6 mt-8">
                <Label className="font-semibold block">이미지 등록</Label>
                <div className="w-24 h-24 border border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400 text-2xl rounded cursor-pointer">
                +
                </div>
            </div> */}

            {/* 링크 등록 */}
            <div className="space-y-6 mt-8">
                <Label className="font-semibold block">링크 등록</Label>
                <div className="flex gap-2 border p-4">
                <Select>
                    <SelectTrigger className="w-32 h-8 border-gray-300">
                    <SelectValue placeholder="선택" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="event">이벤트</SelectItem>
                    <SelectItem value="product">상품</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-64 h-8 border-gray-300">
                    <SelectValue placeholder="목록" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="list">목록</SelectItem>
                    <SelectItem value="granhand">그랑핸드</SelectItem>
                    </SelectContent>
                </Select>
                {/* <Input placeholder="목록" className="h-8" /> */}
                </div>
            </div>

            {/* 버튼 */}
            <div className="flex justify-center pt-4 mt-8">
                <Button className="bg-black text-white h-10 w-40">푸시 발송하기</Button>
            </div>
        </div>
    )
}