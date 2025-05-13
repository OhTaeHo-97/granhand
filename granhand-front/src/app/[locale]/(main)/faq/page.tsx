'use client'

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
        {
        question: "그랑핸드는 수제 향수 브랜드가 맞나요?",
        answer:
            "그랑핸드 제품은 수제 향수가 아닙니다. 제품 생산 시 일부 공정에는 수작업이 들어가지만 모든 것을 손으로 만드는 핸드크래프트 브랜드는 아닙니다."
        },
        {
        question: "그랑핸드 제품은 동물 실험을 하나요?",
        answer: ""
        },
        {
        question: "SWEEPING PEONY는 왜 단종 되었나요?",
        answer: ""
        },
        {
        question: "반려동물이 있는데 그랑핸드 제품을 사용해도 될까요?",
        answer: ""
        },
        {
        question: "임신 중에 그랑핸드 제품을 사용해도 괜찮나요?",
        answer: ""
        },
        {
        question: "내추럴 오일은 꾸준히 사용하면 안 되나요?",
        answer: ""
        },
        {
        question: "부향률이 정확히 무엇인가요?",
        answer: ""
        },
        {
        question: "향수에 에탄올이 함유되어 있나요?",
        answer: ""
        }
];

export default function FaqPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="container mx-auto px-6 py-8">
            <div className="flex justify-between items-end mb-10">
                <h2 className="text-xl font-semibold">자주 묻는 질문</h2>
                {/* <div className="flex items-center gap-4">
                    <h2 className="text-xl font-semibold mb-6">자주 묻는 질문</h2>
                </div> */}
                <div className="flex items-center gap-4 text-sm text-gray-400">
                    {['제품 문의', '매장 문의', '주문 변경', '구매/배송'].map((category) => (
                        <Button
                            key={category}
                            className={`text-sm ${
                                'text-gray-400'
                            } hover:text-black transition-colors min-w-[5%]`}
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </div>
            <div className="max-w-4xl">
                {/* <h2 className="text-xl font-semibold mb-6">자주 묻는 질문</h2> */}
                {/* <div className="divide-y"> */}
                {faqs.map((faq, index) => (
                    <div key={index}>
                        <Button
                        className="w-full flex justify-between items-center py-4 text-left h-16 text-base"
                        onClick={() => toggle(index)}
                        >
                            <span className="font-medium text-gray-900">{faq.question}</span>
                            {openIndex === index ? (
                                <ChevronUp className="w-4 h-4 text-gray-500" />
                            ) : (
                                <ChevronDown className="w-4 h-4 text-gray-500" />
                            )}
                        </Button>
                        {(openIndex === index && faq.answer) && (
                            <div className="bg-gray-100 p-4 text-sm text-gray-600">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
                {/* </div> */}
            </div>
        </main>
    )
}