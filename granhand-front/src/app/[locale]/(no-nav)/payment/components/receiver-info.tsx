'use client'

import Information from "@/components/information";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

export default function ReceiverInfo({ t }: { t: (key: string) => string }) {
    const [selected, setSelected] = useState("kakao_talk");

    return (
        <section className="space-y-2 mb-10">
            <h2 className="font-bold text-[#322A24] text-sm mb-4">{t('payment:recipient_info')}</h2>
            {/* 라디오 버튼 */}
            <RadioGroup value={selected} onValueChange={(value) => setSelected(value)}>
                <div className="flex items-center gap-8">
                    <Label key="kakao_talk" className="flex items-start gap-3 cursor-pointer space-y-4">
                        <RadioGroupItem
                            value="kakao_talk"
                            className="w-[14px] h-[14px]"
                        >
                            <span className="text-xs text-[#6F6963]">{t('payment:kakao_talk')}</span>
                        </RadioGroupItem>
                        <span className="text-xs text-[#6F6963]">{t('payment:kakao_talk')}</span>
                    </Label>
                    <Label key="sms" className="flex items-start gap-3 cursor-pointer space-y-4">
                        <RadioGroupItem
                            value="sms"
                            className="w-[14px] h-[14px]"
                        >
                            <span className="text-xs text-[#6F6963]">{t('payment:sms')}</span>
                        </RadioGroupItem>
                        <span className="text-xs text-[#6F6963]">{t('payment:sms')}</span>
                    </Label>
                </div>
            </RadioGroup>

            {/* 안내 문구 */}
            <Information bgColor="bg-[#322A2408]" contents={[{ elem: t('payment:kakao_talk_info') }, { elem: t('payment:point_info') }]} className="text-[10px] text-[#6F6963] h-[68px]" />

            {/* 입력란 */}
            <div className="space-y-2 mt-7">
                <Label htmlFor="receiver" className="font-medium text-sm text-[#322A24]">
                    {t('payment:recipient')}*
                    <Input
                    id="receiver"
                    type="text"
                    placeholder={t('payment:recipient_real_name')}
                    className="w-full border font-normal h-[46px] !border-[#C0BCB6] rounded px-4 py-3 text-sm placeholder:text-[#C0BCB6] placeholder:font-medium mt-3"
                    />
                </Label>
            </div>
        </section>
    )
}