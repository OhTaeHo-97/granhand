'use client'

import Information from "@/components/information";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import StandardPayment from "./standard-payment";
import { Checkbox } from "@/components/ui/checkbox";

export default function PaymentMethod({ t }: { t: (key: string) => string }) {
    const [payType, setPayType] = useState('')
    const [normalMethod, setNormalMethod] = useState('')

    const scrollRight = () => {
        const container = document.getElementById("card-scroll-container");
        if (container) {
            container.scrollBy({ left: 320, behavior: "smooth" });
        }
    }

    const scrollLeft = () => {
        const container = document.getElementById("card-scroll-container");
        if (container) {
            container.scrollBy({ left: -320, behavior: "smooth" });
        }
    }

    const cards = [
        {
            name: "현대카드",
            detail: "네이버 현대카드(1232)",
            bg: "bg-black",
            text: "text-white"
        },
        {
            name: "신한카드",
            detail: "신세계 신한카드(1202)",
            bg: "bg-gray-700",
            text: "text-white"
        },
        {
            name: "+",
            detail: "",
            bg: "bg-gray-100",
            text: "text-gray-400"
        }
    ];

    return (
        <section className="space-y-2">
            <h2 className="text-sm font-bold text-[#322A24]">{t('payment:method')}</h2>
            <div className="space-y-2">
                <RadioGroup value={payType} onValueChange={setPayType}>
                    <Label key={"simple"} className="flex items-start gap-3 cursor-pointer space-y-4">
                        <RadioGroupItem
                            value="simple"
                            className="!w-[14px] !h-[14px]"
                        >
                        </RadioGroupItem>
                        <span className="text-xs font-medium text-[#6F6963]">{t('payment:easy_pay')}</span>
                    </Label>
                    <div className="relative !w-[49vw]">
                        <Button
                            onClick={scrollLeft}
                            className="absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-transparent rounded-full p-1 border-none"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </Button>

                        <div id="card-scroll-container" className="flex gap-4 overflow-x-auto pb-2 scroll-smooth mx-8">
                            {cards.map((card, index) => (
                                // <div
                                //     key={index}
                                //     className={`w-[60vw] max-w-[350px] min-w-[200px] h-40 p-6 rounded ${card.bg} ${card.text} text-sm text-center flex-shrink-0`}
                                // >
                                //     <div className="text-lg font-semibold">{card.name}</div>
                                //     <div className="mt-2">{card.detail}</div>
                                // </div>

                                <div
                                    key={index}
                                    className={`w-[240px] max-w-[350px] min-w-[200px] h-[140px] p-6 rounded ${card.bg} ${card.text} text-sm flex flex-col justify-between`}
                                >
                                    {/* 상단 영역: 카드 이름 + (로고 자리) + (체크박스 자리) */}
                                    <div className="flex justify-between items-start w-full">
                                        {/* 카드 이름과 로고 자리 */}
                                        <div className="flex items-center gap-2">
                                            <div className="text-[15px] font-bold leading-none">{card.name}</div>
                                            {/* 로고/아이콘 자리 (Placeholder) */}
                                            {/* <div className="w-6 h-6 bg-white rounded-full opacity-30"></div> 예시 플레이스홀더 */}
                                            {/* 실제 로고 이미지를 사용하는 경우 */}
                                            {/* <Image src="/path/to/logo.png" alt="Card logo" width={24} height={24} /> */}
                                        </div>
                                        <Checkbox
                                            id={card.name}
                                            className="border-2 border-white"
                                        />
                                    </div>

                                    {/* 하단 영역: 카드 상세 */}
                                    <div className="text-xs font-normal ml-auto">
                                        {card.detail}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button
                            onClick={scrollRight}
                            className="absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-transparent p-1"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                        </Button>
                    </div>

                    <Label key={"normal"} className="flex items-start gap-3 cursor-pointer space-y-4">
                        <RadioGroupItem
                            value="normal"
                            className="!w-[14px] !h-[14px]"
                        >
                        </RadioGroupItem>
                        <span className="text-xs font-medium text-[#6F6963]">{t('payment:pay')}</span>
                    </Label>
                    {payType === 'normal' && (
                        <StandardPayment normalMethod={normalMethod} setNormalMethod={setNormalMethod} />
                    )}
                </RadioGroup>
            </div>

            <Information bgColor="bg-[#322A2408]" contents={[{ elem: t('payment:bank_confirm_info') }, { elem: t('payment:pay_cancel_info') }]} className="text-xs text-gray-700 h-[68px]" />
        </section>
    )
}