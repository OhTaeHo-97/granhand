import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";
import { translation } from "../../../../../../utils/localization/locales/server";
import { LocaleTypes } from "../../../../../../utils/localization/settings";
import OrderElement from "./components/order-elem";
import OrderStateCard from "./components/order-state";

export default async function OrderPage({ params: { locale } }: { params: { locale: LocaleTypes } }) {
    const { t } = await translation(locale, ['my_page'])
    const currentLocale = getCurrentLocaleFromParams(locale)

    return (
        <main className="w-full mx-auto ml-10">
            <OrderStateCard />
            <div className="mb-5" />

            {/* 주문 내역 1 - 입금대기 */}
            <OrderElement state='awaiting_payment' isGift={false} />
            {/* 주문 내역 2 - 배송 완료 */}
            <OrderElement state='delivered' isGift={false} />
            {/* 주문 내역 3 - 배송 완료 (선물 수락) */}
            <OrderElement state='delivered_gift' isGift={true} />
            {/* 주문 내역 4 - 구매 확정 */}
            <OrderElement state='confirm_purchase' isGift={false} />
        </main>
    )
}