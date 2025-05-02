'use client'

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function CoopPage() {
    const [agreed, setAgreed] = useState(false)
    const [content, setContent] = useState("")

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
        <main className="container mx-auto px-6">
            <section className="py-8">
                <h2 className={`text-xl font-semibold text-left mb-8 border-t pt-4`}>회사 소개</h2>
            </section>
            <div className="max-w-md mx-auto">
                <p className="text-sm text-gray-900 mb-6">
                개인 및 기업의 대량구매 문의는
                <span className="text-gray-400 underline ml-1">대량구매 신청서</span>를 통해 접수해주시기 바랍니다.
                </p>
        
                <form className="space-y-6">
                <div>
                    <label className="block font-semibold mb-2">성함*</label>
                    <Input
                    type="text"
                    placeholder="성함을 입력해 주세요."
                    className="w-full border px-4 py-3 text-sm"
                    />
                </div>
        
                <div>
                    <label className="block font-semibold mb-2">휴대폰 번호*</label>
                    <Input
                    type="text"
                    placeholder="연락처를 입력해 주세요."
                    className="w-full border px-4 py-3 text-sm"
                    />
                </div>
        
                <div>
                    <label className="block font-semibold mb-2">이메일 주소*</label>
                    <Input
                    type="email"
                    placeholder="이메일을 입력해 주세요."
                    className="w-full border px-4 py-3 text-sm"
                    />
                </div>
        
                <div>
                    <label className="block font-semibold mb-2">제목*</label>
                    <Input
                    type="text"
                    placeholder="제목을 입력해 주세요. (최대 40자)"
                    className="w-full border px-4 py-3 text-sm"
                    />
                </div>
        
                <div className="mt-8">
                    <label className="block font-semibold mb-2">내용 *</label>
                    <div className="relative">
                    <Textarea
                        maxLength={1000}
                        placeholder="내용을 입력해주세요."
                        className="w-full h-60 border border-gray-300 rounded px-4 py-3 text-sm placeholder-gray-400 resize-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <div className="absolute bottom-2 right-3 text-xs text-gray-400">{content.length}/1000</div>
                    </div>
                </div>

                <div className="space-y-2 mb-14">
                    <div className="text-sm text-gray-700 font-medium">사진 ({images.length}/3)</div>

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

                <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="accent-black w-4 h-4" onChange={() => setAgreed((prev) => !prev)} />
                        {/* <Checkbox id="agree" checked={agreed} onCheckedChange={setAgreed} /> */}
                        <label htmlFor="agree">(필수) 개인정보 수집 및 이용 동의</label>
                    </div>
                    <ChevronRight className="text-gray-400" />
                </div>
        
                <Button
                    className="w-full h-14 mt-4 bg-gray-400 text-white font-bold"
                    disabled={!agreed}
                >
                    문의하기
                </Button>
                </form>
            </div>
        </main>
    )
}