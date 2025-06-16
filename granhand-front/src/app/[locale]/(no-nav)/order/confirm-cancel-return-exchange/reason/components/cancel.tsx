'use client'

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { useState } from "react";
import { useTranslation } from "../../../../../../../../utils/localization/client";

export default function CancelReason() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['order'])
        
    const cancelOptions = [
        t('order:unsatisfied'),
        t('order:reorder'),
        t('order:no_apply_benefit')
    ]

    const [content, setContent] = useState("");

    return (
        <div className="max-w-md space-y-6">
            <div>
                <h2 className="text-base font-medium text-[#322A24]">{t('order:cancel_reason_title')}</h2>
            </div>

            <RadioGroup>
                {cancelOptions.map((label, index) => (
                    <label key={index} className="flex items-start gap-3 cursor-pointer space-y-4">
                        <RadioGroupItem
                            value={label}
                        >
                            <span className="text-xs text-[#6F6963] font-bold">{label}</span>
                        </RadioGroupItem>
                        <span className="text-xs text-[#6F6963] font-bold">{label}</span>
                    </label>
                ))}
            </RadioGroup>

            <div className="mt-10">
                <label className="block mb-2 text-xs font-bold text-[#322A24]">{t('order:cancel_reason_detail')}</label>
                <div className="relative">
                <Textarea
                    maxLength={100}
                    placeholder={`${t('order:cancel_reason_placeholder')}`}
                    className="w-full h-28 border !border-[#C0BCB6] rounded px-4 py-3 text-sm placeholder-[#C0BCB6] resize-none"
                    onChange={(e) => setContent(e.target.value)}
                />
                <div className="absolute bottom-2 right-3 text-xs text-[#C0BCB6]">{content.length}/100</div>
                </div>
            </div>
        </div>
    )
}