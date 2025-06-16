'use client'

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
// import { useState } from "react";
// import { useTranslation } from "../../../../../../utils/localization/client";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

interface Status {
    label: string,
    count: number,
    value: string
}

export default function OrderStatus({ orderState, setOrderState, statusList, link }: { orderState: string, setOrderState: (value: string) => void, statusList: Status[], link: string }) {
    // const [orderState, setOrderState] = useState('all')
    // const locale = useLocaleAsLocaleTypes()
    // const { t } = useTranslation(locale, ['common', 'product', 'order', 'push'])
    const router = useRouter()
    const searchParams = useSearchParams()

    const handleOrderStateChange = (state: string) => {
        setOrderState(state)

        const params = new URLSearchParams(searchParams)
        params.set('state', state)
        
        router.push(`${link}?${params.toString()}`)
    }

    return (
        <RadioGroup
            value={orderState}
            // onValueChange={setOrderState}
            onValueChange={(state: string) => handleOrderStateChange(state)}
            className="flex gap-6 text-[#322A24]"
        >
            {statusList.map((item) => (
                <Label
                    key={item.value}
                    htmlFor={item.value}
                    className={cn(
                        "flex items-center gap-1 rounded px-5 py-2 text-sm cursor-pointer bg-[#322A2408]",
                        orderState === item.value
                            ? "bg-[#C0BCB6] text-white !border-black font-bold"
                            : "border-gray-300 font-normal"
                    )}
                >
                    <RadioGroupItem id={item.value} value={item.value} className="hidden" />
                    {`${item.label} `}
                    <span className={item.value === orderState ? "text-white" : "text-[#5584F4]"}>
                        {item.count}
                    </span>
                </Label>
            ))}
        </RadioGroup>
    )
}