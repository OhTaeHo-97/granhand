'use client'

import OrderStatus from "../components/order-status";
import OrderFilter from "../components/order-filter";
// import { LocaleTypes } from "../../../../../../utils/localization/settings";
// import { translation } from "../../../../../../utils/localization/locales/server";
import OrderList from "../components/order-list";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import { useState } from "react";

// export default async function AllOrderPage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
export default function AllOrderPage() {
    // const { locale } = await params
    // const { t } = await translation(locale, ['common', 'product', 'order', 'push'])
    // const { locale } = params
    // const { t } = await translation(locale, ['common', 'product', 'order', 'push'])
    const [orderState, setOrderState] = useState('all')
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'product', 'order', 'push'])
    const currentLocale = useCurrentLocale()
    const statusList = [
        { label: t('order:all'), count: 205, value: "all" },
        { label: t('order:awaiting_payment'), count: 2, value: "awaiting_payment" },
        { label: t('order:payment_completed'), count: 27, value: "payment_completed" },
        { label: t('order:prepare_ship'), count: 100, value: "prepare_ship" },
        { label: t('order:in_transit'), count: 45, value: "in_transit" },
        { label: t('order:delivery_delayed'), count: 1, value: "delivery_delayed" },
        { label: t('order:cancel_requested'), count: 0, value: "cancel_requested" },
        { label: t('order:exchange_requested'), count: 3, value: "exchange_requested" },
        { label: t('order:return_requested'), count: 3, value: "return_requested" },
    ]
    
    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('order:all_orders')}</h1>
                {/* 상품 상태 */ }
                <OrderStatus orderState={orderState} setOrderState={setOrderState} statusList={statusList} link={`${currentLocale}/order/all`} />
                {/* 검색 */}
                <OrderFilter />

                {/* 테이블 */}
                <OrderList category='all_orders' />
            </div>
        </main>
    )
}