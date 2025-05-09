'use client'

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GiftCard from "../../order/[id]/components/gift-card";

export default function GiftMessage({ t }: { t: (key: string) => string }) {
    const scrollRight = () => {
        const container = document.getElementById("gift-card-scroll-container");
        if (container) {
            container.scrollBy({ left: 320, behavior: "smooth" });
        }
    }

    const scrollLeft = () => {
        const container = document.getElementById("gift-card-scroll-container");
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
        },
        {
            name: "+",
            detail: "",
            bg: "bg-gray-100",
            text: "text-gray-400"
        }
    ];

    return (
        <section className="space-y-2 mb-10">
            <h2 className="text-base font-bold">{t('payment:gift_message')}</h2>
            <div className="space-y-2">
                <div className="relative mt-6">
                    <Button
                        onClick={scrollLeft}
                        className="absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-transparent rounded-full p-1 border-none"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </Button>

                    <div id="gift-card-scroll-container" className="flex gap-4 overflow-x-auto pb-2 scroll-smooth mx-8">
                        {cards.map((card, index) => (
                            <div key={index}>
                                <div
                                    key={index}
                                    className={`min-w-[300px] p-6 rounded ${card.bg} ${card.text} text-sm text-center flex-shrink-0`}
                                >
                                    <GiftCard />
                                </div>
                            </div>
                            // <div key={index}>
                            // // <div
                            // //     key={index}
                            // //     className={`min-w-[300px] p-6 rounded ${card.bg} ${card.text} text-sm text-center flex-shrink-0`}
                            // // >
                            // //     <div className="text-lg font-semibold">{card.name}</div>
                            // //     <div className="mt-2">{card.detail}</div>
                            // // </div>
                            //     <GiftCard />
                            // </div>
                            // <GiftCard />
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
        </section>
    )
}