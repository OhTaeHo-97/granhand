'use client'

import RequestListHeader from "../request-list/components/header";
import { Button } from "@/components/ui/button";
import RefundForm from "./components/refund";
import Link from "next/link";
import { getLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../../../utils/localization/client";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import CancelForm from "./components/cancel";

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
            <RequestListHeader category={category} />
            {category === 'exchangeRefund' && <RefundForm t={t} />}
            {category === 'cancel' && <CancelForm t={t} />}
            {/* <RefundForm t={t} /> */}
            <div className="py-6 border-t border-b flex justify-end">
                <Button className="bg-black text-white rounded-none font-bold p-6 w-1/4 min-w-50" onClick={() => router.push(`${currentLocale}/order/confirm-cancel-return-exchange/result?${queryString}`)}>
                    신청하기
                {/* currentLocale */}
                </Button>
                {/* <Link href="/order/confirm-cancel-return-exchange/result" className="w-1/4 min-w-50">
                    <Button className="bg-black text-white rounded-none font-bold p-6 w-full">
                        신청하기
                    </Button>
                </Link> */}
            </div>
        </main>
    )
}