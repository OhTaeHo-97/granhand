'use client'

import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import RequestListHeader from "../request-list/components/header";
import CancelResult from "./components/cancel";
import RefundResult from "./components/refund";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "../../../../../../../utils/localization/client";
import ExchangeResult from "./components/exchange";
import { Button } from "@/components/ui/button";

export default function ResultPage() {
    const router = useRouter()
    const currentLocale = useCurrentLocale()
    const searchParams = useSearchParams()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'order')
    // const queryString = new URLSearchParams(searchParams).toString()
    const category = searchParams.get('category')
    if(!category) notFound()
    
    return (
        <div className="container mx-auto px-6 pt-8 min-h-screen">
            <RequestListHeader category={category} showProcess={false} />
            { category === 'cancel' && <CancelResult t={t} /> }
            { category === 'refund' && <RefundResult t={t} /> }
            { category === 'exchange' && <ExchangeResult t={t} /> }

            <div className="w-full flex justify-center mt-[6%]">
                <Button className="mt-8 px-6 py-3 border !border-[#C0BCB6] rounded text-sm font-bold w-[163px] h-[46px] hover:bg-[#f5f3ef] text-[#322A24]" onClick={() => router.push(`${currentLocale}/my-page/order`)}>
                    {t('view_details')}
                </Button>
            </div>
        </div>
    )
}