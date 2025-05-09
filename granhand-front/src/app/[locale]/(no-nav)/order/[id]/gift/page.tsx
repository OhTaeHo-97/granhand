import OrderInfo from "../components/order-info";
import ProductInfo from "../components/product-info";
import GiftInfo from "../components/gift-info";
import { LocaleTypes } from "../../../../../../../utils/localization/settings";
import { translation } from "../../../../../../../utils/localization/locales/server";
import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";

export default async function OrderGiftPage({ params: { locale } }: { params: { locale: LocaleTypes } }) {
    const { t } = await translation(locale, ['payment', 'order'])
    const currentLocale = getCurrentLocaleFromParams(locale)

    return (
        <div className="container mx-auto px-6 pt-8 min-w-2xl">
            <section className="py-8">
                <h2 className={`text-lg font-medium text-left pt-4`}>{t('order:detail')}</h2>
            </section>

            <main className="w-full max-w-6xl mx-auto px-4 py-4 space-y-10">
                <div className="flex justify-between text-sm text-gray-500">
                    <span className="font-semibold">No.1293812300921</span>
                    <span>2023.10.23 09:29</span>
                </div>

                <GiftInfo />

                {/* 주문 상품 정보 */}
                <ProductInfo t={t} />

                {/* 주문 상품 정보 + 결제 금액 + 환불 정보 */}
                <OrderInfo hasRefund={false} t={t} />
            </main>
        </div>
    )
}