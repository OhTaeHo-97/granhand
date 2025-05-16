'use client'

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

export default function ReceiverInfo({ t }: { t: (key: string) => string }) {
    const [selected, setSelected] = useState("kakao_talk");

    return (
        <section className="space-y-2 mb-10">
            <h2 className="text-base font-bold">{t('payment:recipient_info')}</h2>
            {/* 라디오 버튼 */}
            <RadioGroup value={selected} onValueChange={(value) => setSelected(value)}>
                <div className="flex items-center gap-8">
                    <Label key="kakao_talk" className="flex items-start gap-3 cursor-pointer space-y-4">
                        <RadioGroupItem
                            value="kakao_talk"
                        >
                            <span className="text-sm text-gray-800">{t('payment:kakao_talk')}</span>
                        </RadioGroupItem>
                        <span className="text-sm text-gray-800">{t('payment:kakao_talk')}</span>
                    </Label>
                    <Label key="sms" className="flex items-start gap-3 cursor-pointer space-y-4">
                        <RadioGroupItem
                            value="sms"
                        >
                            <span className="text-sm text-gray-800">{t('payment:sms')}</span>
                        </RadioGroupItem>
                        <span className="text-sm text-gray-800">{t('payment:sms')}</span>
                    </Label>
                </div>
            </RadioGroup>


            {/* <div className="flex items-center gap-8">
                <label className="flex items-center gap-2">
                <input
                    type="radio"
                    name="gift-method"
                    value="kakao"
                    checked={selected === "kakao"}
                    onChange={() => setSelected("kakao")}
                />
                <span className="text-sm">{t('payment:kakao_talk')}</span>
                </label>
                <label className="flex items-center gap-2">
                <input
                    type="radio"
                    name="gift-method"
                    value="sms"
                    checked={selected === "sms"}
                    onChange={() => setSelected("sms")}
                />
                <span className="text-sm">{t('payment:sms')}</span>
                </label>
            </div> */}

            {/* 안내 문구 */}
            <div className="text-xs text-gray-700 bg-gray-100 p-6 px-10">
                <ul className="list-disc space-y-1.5">
                    <li>{t('payment:kakao_talk_info')}</li>
                    <li>{t('payment:point_info')}</li>
                </ul>
            </div>

            {/* 입력란 */}
            <div className="space-y-2 mt-7">
                <label htmlFor="receiver" className="font-bold text-sm">
                {t('payment:recipient')}<span className="text-red-500">*</span>
                </label>
                <input
                id="receiver"
                type="text"
                placeholder={t('payment:recipient_real_name')}
                className="w-full border rounded px-4 py-3 text-sm placeholder-gray-400 mt-3"
                />
            </div>
        </section>
    )
}