'use client'

import Information from "@/components/information";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import StandardPayment from "./standard-payment";

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
            <h2 className="text-base font-bold">{t('payment:method')}</h2>
            <div className="space-y-2">
                <RadioGroup value={payType} onValueChange={setPayType}>
                    <Label key={"simple"} className="flex items-start gap-3 cursor-pointer space-y-4">
                        <RadioGroupItem
                            value="simple"
                        >
                        </RadioGroupItem>
                        <span className="text-sm text-gray-800">{t('payment:easy_pay')}</span>
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
                                <div
                                    key={index}
                                    className={`w-[60vw] max-w-[350px] min-w-[200px] p-6 rounded ${card.bg} ${card.text} text-sm text-center flex-shrink-0`}
                                >
                                    <div className="text-lg font-semibold">{card.name}</div>
                                    <div className="mt-2">{card.detail}</div>
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
                        >
                        </RadioGroupItem>
                        <span className="text-sm text-gray-800">{t('payment:pay')}</span>
                    </Label>
                    {payType === 'normal' && (
                        // <RadioGroup
                        //     value={normalMethod}
                        //     onValueChange={setNormalMethod}
                        //     className="grid grid-cols-2 gap-4 text-sm"
                        // >
                        //     {[
                        //         { value: "card", label: t('payment:card') },
                        //         { value: "toss", label: t('payment:toss') },
                        //         { value: "naver", label: t('payment:naver') },
                        //         { value: "bank", label: t('payment:bank') },
                        //     ].map(({ value, label }) => (
                        //         <Label
                        //             key={value}
                        //             className={cn(
                        //                 "border rounded py-6 px-3 text-center cursor-pointer",
                        //                 normalMethod === value
                        //                     ? "!border-black font-bold"
                        //                     : "border-gray-300 font-normal"
                        //             )}
                        //         >
                        //             <RadioGroupItem value={value} className="hidden" />
                        //             {label}
                        //         </Label>
                        //     ))}
                        // </RadioGroup>
                        <StandardPayment normalMethod={normalMethod} setNormalMethod={setNormalMethod} />
                    )}
                </RadioGroup>
            </div>

            <Information bgColor="bg-gray-100" contents={[{ elem: t('payment:bank_confirm_info') }, { elem: t('payment:pay_cancel_info') }]} className="text-xs text-gray-700" />
        </section>
    )
}