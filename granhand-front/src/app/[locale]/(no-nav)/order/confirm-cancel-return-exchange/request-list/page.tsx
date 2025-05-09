import ProductTable from "@/app/[locale]/(no-nav)/cart/components/product-table";
import { Button } from "@/components/ui/button";
import ProductInfoTable from "../components/product-info-table";
import { ChevronLeft } from "lucide-react";
import OrderConfirmRequestList from "./components/confirm";
import OrderCancelRequestList from "./components/cancel";
import RequestListHeader from "./components/header";
import { notFound } from "next/navigation";
import OrderExchangeRefundRequestList from "./components/exchange-refund";
import { LocaleTypes } from "../../../../../../../utils/localization/settings";
import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";
import { translation } from "../../../../../../../utils/localization/locales/server";

export default async function RequestListPage({ searchParams, params: { locale } }: { searchParams: Record<string, string>, params: { locale: LocaleTypes } }) {
    const { t } = await translation(locale, ['my_page'])
    const currentLocale = getCurrentLocaleFromParams(locale)
    const category = searchParams.category
    if(!category) notFound()

    return (
        <main className="container mx-auto px-6 pt-8">
            {/* <div className="flex items-center mb-8">
                <ChevronLeft className="text-base text-gray-500 mr-3" />
                <h2 className="text-2xl font-semibold">구매 확정</h2>
            </div> */}
            <RequestListHeader category={category} />
            <ProductInfoTable />
            {/* <OrderConfirmRequestList /> */}
            { category === 'confirm' && <OrderConfirmRequestList /> }
            { category === 'cancel' && <OrderCancelRequestList /> }
            { category === 'exchangeRefund' && <OrderExchangeRefundRequestList /> }
            {/* <ProductTable /> */}
            {/* <div className="w-full flex justify-end py-8">
                <span className="text-xs font-semibold text-gray-400">구매 확정 이후에는 교환/반품이 어려워요. 꼭 상품을 받으신 후 확정해 주세요.</span>
            </div>

            <div className="mt-20 text-base font-medium border-b pb-3">총 주문 상품 1개</div>

            <div className="mt-6 border-b pb-6">
                <div className="flex justify-between items-center text-lg font-semibold">
                <div>
                    <span>주문하신 상품은 잘 받으셨나요?</span>
                </div>
                <Button className="text-base px-10 py-2 text-white bg-black rounded-none min-w-32 w-[25%] h-11">구매 확정</Button>
                </div>
            </div> */}
        </main>
    )
}