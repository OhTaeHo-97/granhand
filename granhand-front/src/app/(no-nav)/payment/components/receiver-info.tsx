'use client'

import { useState } from "react";

export default function ReceiverInfo() {
    const [selected, setSelected] = useState("kakao");

    return (
        <section className="space-y-2 mb-10">
            <h2 className="text-base font-bold">선물 받는 분 정보</h2>
            {/* 라디오 버튼 */}
            <div className="flex items-center gap-8">
                <label className="flex items-center gap-2">
                <input
                    type="radio"
                    name="gift-method"
                    value="kakao"
                    checked={selected === "kakao"}
                    onChange={() => setSelected("kakao")}
                />
                <span className="text-sm">카카오톡으로 선물</span>
                </label>
                <label className="flex items-center gap-2">
                <input
                    type="radio"
                    name="gift-method"
                    value="sms"
                    checked={selected === "sms"}
                    onChange={() => setSelected("sms")}
                />
                <span className="text-sm">문자(SMS)로 선물</span>
                </label>
            </div>

            {/* 안내 문구 */}
            <div className="text-xs text-gray-700 bg-gray-100 p-6 px-10">
                <ul className="list-disc space-y-1.5">
                    <li>선물하기 클릭 후 카카오톡 친구 목록에서 받는 분을 선택해 주세요.</li>
                    <li>포인트 선물은 그랑핸드 회원만 받을 수 있어요.</li>
                </ul>
            </div>

            {/* 입력란 */}
            <div className="space-y-2 mt-7">
                <label htmlFor="receiver" className="font-bold text-sm">
                받는 분<span className="text-red-500">*</span>
                </label>
                <input
                id="receiver"
                type="text"
                placeholder="받는 분의 실명을 입력해 주세요."
                className="w-full border rounded px-4 py-3 text-sm placeholder-gray-400 mt-3"
                />
            </div>
        </section>
    )
}