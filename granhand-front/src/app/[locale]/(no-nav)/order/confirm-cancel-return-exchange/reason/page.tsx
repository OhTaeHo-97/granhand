import RequestListHeader from "../request-list/components/header";
import ExchangeRefundReason from "./components/exchange-refund";
import { LocaleTypes } from "../../../../../../../utils/localization/settings";
import { notFound } from "next/navigation";
import CancelReason from "./components/cancel";
// import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";
import NextButton from "./components/next-btn";
import { translation } from "../../../../../../../utils/localization/locales/server";

export default async function ReasonPage({ searchParams, params }: { searchParams: Promise<Record<string, string>>, params: Promise<{ locale: LocaleTypes }> }) {
    const { locale } = await params
    // const category = searchParams.category
    const { category } = await searchParams
    const { t } = await translation(locale, ['order'])
    // const currentLocale = getCurrentLocaleFromParams(locale)
    if(!category) notFound()    

    return (
        <main className="container mx-auto px-6 pt-8">
            <RequestListHeader category={category} curIndex={1} showProcess={true} />
            {/* <ExchangeRefundReason /> */}
            { category === 'exchangeRefund' && <ExchangeRefundReason /> }
            { category === 'cancel' && <CancelReason t={t} /> }

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