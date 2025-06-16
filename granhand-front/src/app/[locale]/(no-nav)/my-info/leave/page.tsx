'use client'

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "../../../../../../utils/localization/client";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function LeavePage() {
    const router = useRouter()
    const [selectedReason, setSelectedReason] = useState("");
    const [feedback, setFeedback] = useState("");

    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    const currentLocale = useCurrentLocale()

    const leaveOptions = [
        {label: t('auth:no_interest_product'), value:'no_interest'},
        {label: t('auth:reduce_shopping'), value: 'reduce'},
        {label: t('auth:benefit_limited'), value: 'limited'},
        {label: t('auth:different_account'), value: 'different'},
        {label: t('auth:manually'), value: 'manually'}
    ]

    return (
        <div className="max-w-md w-[358px] space-y-6 mx-auto mt-10 min-h-screen">
            <div className="mb-12">
                <h2 className="font-medium text-[#322A24]">{t('auth:leave_reason_title')}</h2>
            </div>

            <RadioGroup onValueChange={setSelectedReason}>
                {leaveOptions.map(({ label, value }) => (
                    <Label key={value} className="flex items-start gap-3 cursor-pointer space-y-4">
                        <RadioGroupItem value={value} className="w-[14px] h-[14px]">
                            <span className="text-xs font-bold text-[#6F6963]">{label}</span>
                        </RadioGroupItem>
                        <span className="text-xs font-bold text-[#6F6963]">{label}</span>
                    </Label>
                ))}
            </RadioGroup>
            {selectedReason === 'manually' && (
                <div className="relative">
                    <Textarea
                    maxLength={200}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder={t('auth:leave_reason_placeholder')}
                    className="w-[358px] h-[84px] border !border-[#C0BCB6] rounded p-4 text-sm text-[#322A24] resize-none placeholder:text-[#C0BCB6]"
                    />
                    <div className="absolute bottom-3 right-4 text-sm text-[#C0BCB6]">
                    {feedback.length}/200
                    </div>
                </div>
            )}
            
            <div className="mt-6 pb-6">
                <div className="flex justify-center items-center text-lg font-semibold">
                    <Button className="w-full text-sm font-bold px-10 py-2 text-white bg-[#322A24] rounded-none min-w-32 h-[46px]" onClick={() => router.push(`${currentLocale}/my-info/leave/benefit`)}>{t('auth:withdraw_btn')}</Button>
                    {/* <div></div>
                    <Button className="text-base px-10 py-2 text-white bg-black rounded-none min-w-32 w-[25%] h-11">탈퇴하기</Button> */}
                </div>
            </div>
        </div>
    )
    // const [phase, setPhase] = useState(0)
    
    // return (
    //     <>
    //         { phase === 0 && <LeaveReason setPhase={setPhase} /> }
    //         { phase === 1 && <LoseBenefit setPhase={setPhase} /> }
    //         { phase === 2 && <LeaveNote /> }
    //     </>
    //     // { phase === 0 && <LeaveReason /> }
    //     // <LeaveReason />
    //     // <LoseBenefit />
    //     // <LeaveNote />
    // )
}