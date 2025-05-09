import RequestListHeader from "../request-list/components/header";
import { Button } from "@/components/ui/button";
import ExchangeRefundReason from "./components/exchange-refund";
import Link from "next/link";
import { LocaleTypes } from "../../../../../../../utils/localization/settings";
import { notFound } from "next/navigation";
import CancelReason from "./components/cancel";
import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";
import NextButton from "./components/next-btn";

export default function ReasonPage({ searchParams, params: { locale } }: { searchParams: Record<string, string>, params: { locale: LocaleTypes } }) {
    const category = searchParams.category
    const currentLocale = getCurrentLocaleFromParams(locale)
    if(!category) notFound()    

    return (
        <main className="container mx-auto px-6 pt-8">
            <RequestListHeader category={category} />
            {/* <ExchangeRefundReason /> */}
            { category === 'exchangeRefund' && <ExchangeRefundReason /> }
            { category === 'cancel' && <CancelReason /> }

            <NextButton />

            {/* <div className="mt-20 text-base font-medium border-b pb-3"></div>

            <div className="mt-6 border-b pb-6">
                <div className="flex justify-between items-center text-lg font-semibold">
                    <Button className="text-base px-10 py-2 text-white bg-black rounded-none w-full h-11" onClick={() => }>다음</Button>
                </div>
            </div> */}
        </main>
    )
}