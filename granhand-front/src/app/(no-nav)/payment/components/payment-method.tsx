'use client'

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaymentMethod() {
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
            <h2 className="text-base font-bold">결제 수단</h2>
            <div className="space-y-2">
                <label className="flex items-center gap-2">
                    <input type="radio" name="payment-type" defaultChecked />
                    <span className="text-sm text-gray-700">간편 결제</span>
                </label>
                <div className="relative">
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
                                className={`min-w-[300px] p-6 rounded ${card.bg} ${card.text} text-sm text-center flex-shrink-0`}
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
            </div>

            <label className="flex items-center gap-2">
                <input type="radio" name="payment-type" />
                <span className="text-sm text-gray-700">일반 결제</span>
            </label>
            <div className="grid grid-cols-2 gap-4 text-sm">
                <button className="border rounded py-2">신용/체크카드</button>
                <button className="border rounded py-2">토스 앱 계좌이체</button>
                <button className="border rounded py-2">네이버페이</button>
                <button className="border rounded py-2">무통장 입금</button>
            </div>
            <div className="text-xs text-gray-700 bg-gray-100 p-6 px-10">
                <ul className="list-disc space-y-1.5">
                    <li>무통장 입금은 영업일 기준 24시간 이내 확인됩니다.</li>
                    <li>주문 후 72시간 이내에 미입금 시 자동 취소됩니다.</li>
                </ul>
            </div>
        </section>
    )
}