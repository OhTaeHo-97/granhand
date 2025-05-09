'use client'

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { Check, Copy, Share2, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function EventDetailPage() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText('https://granhand.com/event/11832');
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
    };

    return (
        <main className="mt-10">
            <div className="mx-auto">
                <Image
                    src="/lovable-uploads/f60c43bc-b922-4e70-ad35-6d56fb469d65.png"
                    alt="NOLL 제품 이미지"
                    className="w-full mb-8"
                    width={2250}
                    height={1687.5}
                />
                <div className="prose max-w-none">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h1 className="text-2xl font-bold mb-4">NOLL 눈에 대한 모든 것.</h1>
                        <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Share2 />
                                {/* <Button className="text-xs text-gray-400">기간설정</Button> */}
                            </PopoverTrigger>
                            <PopoverContent side="bottom" align="center" className="rounded border bg-white p-6 shadow-md min-w-md min-h-fit">
                                <div className="flex justify-between mb-2">
                                    <div className="font-semibold">공유하기</div>
                                    {/* 닫는 버튼 (자동으로 Popover 닫힘) */}
                                    <PopoverClose asChild>
                                        <X />
                                    </PopoverClose>
                                </div>

                                <div className="border border-[#CFC9BC] rounded w-full max-w-xl flex items-center px-5 py-2 mt-6">
                                    {/* URL */}
                                    <span className="flex-1 text-[#C2BDB6] text-sm select-all truncate">https://granhand.com/event/11832</span>
                                    {/* 복사 아이콘 */}
                                    <Button
                                        onClick={handleCopy}
                                        className="ml-4 p-1 text-[#48413A] hover:text-black transition"
                                        aria-label="클립보드에 복사"
                                        type="button"
                                    >
                                        {/* 복사 완료 메시지 */}
                                        {copied ? (
                                            <Check className="w-8 h-8" />
                                        ) : (
                                            <Copy className="w-8 h-8" />
                                        )}
                                    </Button>
                                </div>
                            </PopoverContent>
                        </Popover>
                            {/* <Share2 /> */}
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gray-500 mb-8">
                    {/* <span>#Team</span>
                    <span>·</span> */}
                    <span>2023-07-08</span>
                    {/* <span>·</span>
                    <span>조회수 412</span> */}
                    </div>
                    <div className="max-w-5xl mb-28">
                        <p className="text-gray-600 leading-relaxed">
                            당신의 눈이 편안하도록, 눈과 마음이 쉬도록, 우리가 함께 시간을 가지면 간절히 만나지시고...나머지 눈에 긴 시간이 감긴 눈에를 들려줍니다... 그래서는다 처음은 햇살 카운터 앞 빈자, 시험 제품을 또 당신보다. 시간은 투명 하늘 두근두근을 줍깊다. 그래프는요 눈과 스파니엘 날씨를 먹었지가 자리.. 놀이기 따로 끊이지 무작한 손짓피신은 못 온 사람들에게 이 시간의 마음을 못가를 새벽과 보았다.
                        </p>
                    </div>
                {/* <div className="mt-12">
                    <h2 className="text-xl font-medium mb-4">관련 영상</h2>
                    <div className="space-y-4">
                    <iframe 
                        width="100%" 
                        height="315" 
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video"
                        className="rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    </div>
                </div> */}
                </div>
            </div>
        </main>
    )
}