'use client'

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Camera, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ExchangeRefundReason() {
    const exchangeOptions = [
        "상품이 마음에 들지 않아요.",
        "옵션을 잘못 선택했어요.",
        "상품에 이상이 있거나 파손되었어요.",
        "일부 상품이 누락되었어요.",
        "다른 상품이 배송되었어요.",
        "배송된 장소에 상품이 없어요.",
        "다른 주소로 오배송되었어요."
    ];

    const [images, setImages] = useState<File[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [content, setContent] = useState("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setImages((prev) => [...prev, e.target.files![0]])
        }
    }

    const handleDelete = (index: number) => {
        setImages((prev) => prev.filter((_, i) => i !== index))
    }
    
    return (
        <div className="max-w-md space-y-6 mx-auto mt-10">
            <div>
                <h2 className="text-lg font-semibold">교환/반품 사유를 선택해 주세요.</h2>
            </div>

            <RadioGroup>
                {exchangeOptions.map((label, index) => (
                    <label key={index} className="flex items-start gap-3 cursor-pointer space-y-4">
                        <RadioGroupItem
                            value={label}
                        >
                            <span className="text-sm text-gray-800">{label}</span>
                        </RadioGroupItem>
                        <span className="text-sm text-gray-800">{label}</span>
                    </label>
                ))}
            </RadioGroup>

            <div className="mt-8">
                <label className="block mb-2 text-sm font-medium text-gray-800">상세 설명 *</label>
                <div className="relative">
                <Textarea
                    maxLength={100}
                    placeholder="상세 사유를 입력해 주세요. (선택사항)"
                    className="w-full h-28 border border-gray-300 rounded px-4 py-3 text-sm placeholder-gray-400 resize-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                    onChange={(e) => setContent(e.target.value)}
                />
                <div className="absolute bottom-2 right-3 text-xs text-gray-400">{content.length}/100</div>
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

            <div className="text-xs text-gray-700 bg-gray-100 p-6">
                <span className="font-semibold">교환/반품 유의사항 안내</span>
                <ul className="list-disc space-y-1.5 px-6 pt-3">
                    <li>상품은 원래 상태 그대로 재포장해 주세요.</li>
                    <li>제품 수령일로부터 영업일 기준 7일 이내 접수한 경우 교환/반품이 가능합니다.</li>
                    <li>제품 불량 및 오배송일 경우 제품 상태와 상관없이 교환/반품이 가능합니다.</li>
                    <li>단순 변심으로 인한 교환/반품일 경우 반송 택배비는 고객 부담입니다.</li>
                    <li>제품 포장 및 미개봉 스티커가 훼손된 경우 불가능합니다.(ex. 핸드크림 상태, 사쉐 비닐 등)</li>
                    <li>스탬핑 서비스를 받은 제품일 경우(멀티퍼퓸, 디퓨저, 캔들) 불가능합니다.</li>
                    <li>교환 및 환불 가능 여부 확인을 위해 사진 촬영 후 채널톡으로 보내주시면 정확한 안내가 가능합니다.</li>
                    <li>교환 및 환불이 불가능한 제품이 반품될 경우 왕복 및 재발송 비용은 고객 부담입니다.</li>
                </ul>
            </div>
        </div>
    )
}