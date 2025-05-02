'use client'

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { useState } from "react";

export default function OrderProductInfo() {
    const [enabled, setEnabled] = useState(false)

    return (
        <section className="space-y-4 mb-10">
            <h2 className="text-base font-bold">주문 상품 정보</h2>
            <div className="border shadow-md rounded-md p-6 space-y-4">
                <div className="flex gap-4 items-start">
                    <Image
                        src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
                        alt="product"
                        width={100}
                        height={100}
                        className="rounded object-cover"
                    />
                    <div className="flex-1">
                        <div className="text-xs font-bold text-gray-500">GRANHAND</div>
                        <div className="text-base font-semibold mt-1">Lumberjack Multi Perfume</div>
                        <div className="text-xl font-bold mt-1">35,000원</div>
                    </div>
                </div>
                <hr className="my-4 border-dashed" />
                <div className="space-y-1 text-sm">
                    <div className="flex">
                        <span className="text-gray-400 w-24">옵션</span>
                        <span>롤랑 멀티퍼퓸 100ml / 1개</span>
                    </div>
                    <div className="flex">
                        <span className="text-gray-400 w-24">쇼핑백</span>
                        <span>추가 구매 (+500원)</span>
                    </div>
                </div>

                <div className="pt-6">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-base">스탬핑 문구</h3>
                        <Switch
                            checked={enabled}
                            onCheckedChange={setEnabled}
                            className={enabled ? "bg-black" : "bg-white border"}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="원하는 문구를 입력해 주세요."
                            className="flex-1 border rounded px-3 py-3 text-sm"
                        />
                        <Button className="w-28 h-full text-sm bg-gray-100">특수기호</Button>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                        10자 이하 영문 대문자, 숫자, 특수기호(., ! % & ? 🖤)만 가능합니다.<br />
                        스탬핑 작업시 교환 및 환불이 불가능합니다.
                    </p>
                </div>
            </div>
        </section>
    )
}