'use client'

import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale"
import { useTranslation } from "../../../../../../utils/localization/client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export default function StandardPayment({ normalMethod, setNormalMethod }: { normalMethod: string, setNormalMethod: (value: string) => void }) {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'payment'])

    return (
        <RadioGroup
            value={normalMethod}
            onValueChange={setNormalMethod}
            className="grid grid-cols-2 gap-4 text-sm"
        >
            {[
                { value: "card", label: t('payment:card') },
                { value: "toss", label: t('payment:toss') },
                { value: "naver", label: t('payment:naver') },
                { value: "bank", label: t('payment:bank') },
            ].map(({ value, label }) => (
                <Label
                    key={value}
                    className={cn(
                        "border rounded py-6 px-3 text-center cursor-pointer",
                        normalMethod === value
                            ? "!border-black font-bold"
                            : "border-gray-300 font-normal"
                    )}
                >
                    <RadioGroupItem value={value} className="hidden" />
                    {label}
                </Label>
            ))}
        </RadioGroup>
    )
}