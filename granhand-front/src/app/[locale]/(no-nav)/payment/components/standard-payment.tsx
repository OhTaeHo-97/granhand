'use client'

import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale"
import { useTranslation } from "../../../../../../utils/localization/client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export default function StandardPayment({ normalMethod, setNormalMethod, totalWidth="w-[739px]", width="w-[357px]", height="[h-46px]" }: { normalMethod: string, setNormalMethod: (value: string) => void, totalWidth?: string, width?: string, height?: string }) {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'payment'])

    return (
        <RadioGroup
            value={normalMethod}
            onValueChange={setNormalMethod}
            className={`grid grid-cols-2 gap-4 text-sm ${totalWidth}`}
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
                        "w-[357px] h-[46px] border rounded py-[12px] px-[24px] text-center text-[#322A24] cursor-pointer text-sm",
                        `${width} ${height}`,
                        normalMethod === value
                            ? "font-bold !border-[#6F6963]"
                            : "font-normal !border-[#E9E6E0]"
                    )}
                >
                    <RadioGroupItem value={value} className="hidden" />
                    {label}
                </Label>
            ))}
        </RadioGroup>
    )
}