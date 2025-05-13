'use client'

import RequestListHeader from "../request-list/components/header";
import { Button } from "@/components/ui/button";
import RefundForm from "./components/refund";
import { getLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../../../utils/localization/client";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import CancelForm from "./components/cancel";
import ExchangeForm from "./components/exchange";
import ExchangeRefundForm from "./components/exchange-refund";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function FormPage() {
    const router = useRouter()
    const locale = getLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'payment', 'order'])
    const currentLocale = useCurrentLocale()
    const searchParams = useSearchParams()
    const queryString = new URLSearchParams(searchParams).toString()
    const category = searchParams.get('category')
    if(!category) notFound()

    return (
        <main className="container mx-auto px-6 pt-8">
            <RequestListHeader category={category} curIndex={2} showProcess={true} />
            {/* <RefundForm t={t} currentLocale={currentLocale} /> */}
            {category === 'exchangeRefund' && <ExchangeRefundForm />}
            {category === 'cancel' && <CancelForm t={t} currentLocale={currentLocale} />}
        </main>
    )
}