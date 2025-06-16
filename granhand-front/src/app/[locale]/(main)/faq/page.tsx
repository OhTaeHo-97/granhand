'use client'

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCurrentLocale } from "@/lib/useCurrentLocale";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const faqs = [
        {
            question: "그랑핸드는 수제 향수 브랜드가 맞나요?",
            answer: "그랑핸드 제품은 수제 향수가 아닙니다. 제품 생산 시 일부 공정에는 수작업이 들어가지만 모든 것을 손으로 만드는 핸드크래프트 브랜드는 아닙니다."
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
]

export default function FaqPage() {
    const router = useRouter()
    const currentLocale = useCurrentLocale()
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [selectedCategory, setSelectedCategory] = useState('제품 문의')

    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value)
        router.push(`${currentLocale}/faq?category=${value}`)
    }

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <main className="container mx-auto px-6 py-8">
            <div className="flex justify-between items-end mb-10">
                <h2 className="text-lg font-medium text-[#6F6963]">자주 묻는 질문</h2>
                <RadioGroup
                    value={selectedCategory}
                    onValueChange={handleCategoryChange}
                    // className="flex text-sm"
                    className="flex rounded overflow-hidden gap-[24px]"
                >
                    {['제품 문의', '매장 문의', '주문 변경', '구매/배송'].map((category) => (
                        <Label
                            key={category}
                            className={cn(
                                "text-sm font-bold transition-colors min-w-[52px] hover:text-[#322A24]",
                                selectedCategory === category
                                    ? "text-[#322A24]"
                                    : "text-[#322A244D]"
                            )}
                        >
                            <RadioGroupItem value={category} className="hidden" />
                            {category}
                        </Label>
                    ))}
                </RadioGroup>
            </div>
            <div className="max-w-4xl w-[739px]">
                {faqs.map((faq, index) => (
                    <div key={index}>
                        <Button
                        className="w-full flex justify-between items-center py-4 text-left h-16 text-base"
                        onClick={() => toggle(index)}
                        >
                            <span className="text-sm font-medium text-[#322A24]">{faq.question}</span>
                            {openIndex === index ? (
                                <ChevronUp className="w-4 h-4 text-[#C0BCB6]" />
                            ) : (
                                <ChevronDown className="w-4 h-4 text-[#C0BCB6]" />
                            )}
                        </Button>
                        {(openIndex === index && faq.answer) && (
                            // <div className="bg-[#322A240A] min-h-[72px] p-5 text-xs text-[#6F6963]">
                            //     {faq.answer}
                            // </div>
                            <div className="bg-[#322A240A] min-h-[72px] p-5 text-xs text-[#6F6963] text-center">
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