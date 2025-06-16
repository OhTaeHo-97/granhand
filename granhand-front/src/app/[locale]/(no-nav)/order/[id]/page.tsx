import ProductInfo from "./components/product-info";
import OrderInfo from "./components/order-info";
import { LocaleTypes } from "../../../../../../utils/localization/settings";
import { translation } from "../../../../../../utils/localization/locales/server";
import OrderDetailHeader from "./components/order-detail-header";

export default async function OrderPage({ params, searchParams }: { params: Promise<{ locale: LocaleTypes }>, searchParams: Promise<Record<string, string>> }) {
    const { locale } = await params
    const { state } = await searchParams
    const { t } = await translation(locale, ["order", "payment", "my_page"])

    return (
        <div className="container mx-auto px-6 pt-8 min-w-2xl">
            <OrderDetailHeader />

            <main className="w-[739px] max-w-6xl mx-auto px-4 py-4 space-y-10">
                <div className="flex justify-between text-[10px] text-[#322A24]">
                    <span className="font-bold">No.1293812300921</span>
                    <span className="text-[#C0BCB6] font-bold">2023.10.23 09:29</span>
                </div>

                {/* 주문 상품 정보 */}
                <ProductInfo state={state} />

                {/* 주문 상품 정보 + 결제 금액 + 환불 정보 */}
                <OrderInfo hasRefund={true} t={t} />
            </main>
        </div>
    )
}