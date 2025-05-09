'use client'

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

export default function LeaveReason() {
    const [selectedReason, setSelectedReason] = useState("");
    const [feedback, setFeedback] = useState("");

    const leaveOptions = [
        "원하는 상품이 없어요.",
        "과도한 쇼핑을 자제하고 싶어요.",
        "쿠폰/포인트 등의 혜택이 너무 적어요.",
        "다른 계정으로 가입하고 싶어요.",
        "직접 입력"
    ]

    return (
        <div className="max-w-md space-y-6 mx-auto mt-10">
            <div>
                <h2 className="text-lg font-semibold">그랑핸드를 떠나시려는 이유를 알려주세요.</h2>
            </div>

            <RadioGroup onValueChange={setSelectedReason}>
                {leaveOptions.map((option, index) => (
                    <label key={index} className="flex items-start gap-3 cursor-pointer space-y-4">
                        <RadioGroupItem value={option}>
                            <span className="text-sm text-gray-800">{option}</span>
                        </RadioGroupItem>
                        <span className="text-sm text-gray-800">{option}</span>
                    </label>
                ))}
            </RadioGroup>
            {selectedReason === "직접 입력" && (
                <div className="relative">
                    <textarea
                    maxLength={200}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="더 나은 그랑핸드가 될 수 있도록 의견을 남겨주세요."
                    className="w-full border border-gray-300 rounded p-4 text-sm text-gray-800 placeholder:text-gray-400 resize-none h-28"
                    />
                    <div className="absolute bottom-3 right-4 text-sm text-gray-400">
                    {feedback.length}/200
                    </div>
                </div>
            )}
            
            <div className="mt-6 pb-6">
                <div className="flex justify-center items-center text-lg font-semibold">
                    <Button className="text-base px-10 py-2 text-white bg-black rounded-none min-w-32 h-11 w-full">탈퇴하기</Button>
                    {/* <div></div>
                    <Button className="text-base px-10 py-2 text-white bg-black rounded-none min-w-32 w-[25%] h-11">탈퇴하기</Button> */}
                </div>
            </div>
        </div>
    )
}