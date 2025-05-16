'use client'

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../../../../utils/localization/client";
import ProductInfoCard from "../../../[id]/components/product-info-card";
import ExchangeInformation from "./info/exchange-info";
import RefundInformation from "./info/refund-info";
import { Label } from "@/components/ui/label";
import ExchangeForm from "./exchange";
import RefundForm from "./refund";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

export default function ExchangeRefundForm() {
    const [category, setCategory] = useState('exchange')

    const router = useRouter()
    const searchParams = useSearchParams()
    // const queryString = new URLSearchParams(searchParams).toString()

    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'order')
    const currentLocale = useCurrentLocale()

    const methods = [
        {label: t('exchange'), value: 'exchange'},
        {label: t('return_refund'), value: 'refund'}
    ]

    const nextLink = () => {
        const params = new URLSearchParams(searchParams.toString())
        if(category === 'exchange') {
            params.set('category', 'exchange')
        } else if(category === 'refund') {
            params.set('category', 'refund')
        }

        return `${currentLocale}/order/confirm-cancel-return-exchange/result?${params.toString()}`
    }

    return (
        <>
            <div className="w-full max-w-4xl mx-auto mb-20">
                <div className="rounded-lg space-y-4 bg-white mb-10">
                    <h2 className="text-base font-bold text-gray-700">{t('exchange_refund_item_info')}</h2>
                    <div className="border rounded-md p-6 space-y-6 bg-white">
                        <ProductInfoCard t={t} currentLocale={currentLocale} />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mb-10 gap-16">
                    <div className="bg-white rounded-md text-sm text-gray-600 space-y-2 w-full">
                        <h2 className="font-semibold text-black text-base">{t('exchange_refund_selection')}</h2>
                        <RadioGroup
                            className="p-4 pl-12"
                            onValueChange={setCategory}
                            value={category}
                        >
                            {methods.map(({ label, value }) => (
                                <Label key={value} className="flex items-start gap-3 cursor-pointer space-y-6">
                                    <RadioGroupItem
                                        value={value}
                                    >
                                        <span className="text-sm text-gray-800">{label}</span>
                                    </RadioGroupItem>
                                    <span className="text-sm text-gray-800">{label}</span>
                                </Label>
                            ))}
                        </RadioGroup>
                    </div>
                    {category === 'exchange' && <ExchangeInformation />}
                    {category === 'refund' && <RefundInformation />}
                </div>
                {category === 'exchange' && <ExchangeForm />}
                {category === 'refund' && <RefundForm />}
            </div>
            <div className="py-6 border-t border-b flex justify-end">
                <Button className="bg-black text-white rounded-none font-bold p-6 w-1/4 min-w-50" onClick={() => router.push(nextLink())}>
                    {t('submit')}
                </Button>
            </div>
        </>
    )
}