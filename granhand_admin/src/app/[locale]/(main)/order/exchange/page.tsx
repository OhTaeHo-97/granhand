'use client'

import OrderStatus from "../components/order-status"
import OrderFilter from "../components/order-filter"
import ExchangeList from "./components/exchange-list"
import { useState } from "react"
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales"
import { useTranslation } from "../../../../../../utils/localization/client"

export default function ExchangePage() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'product', 'order', 'push'])
    const currentLocale = useCurrentLocale()

    const statusList = [
        { label: t('order:exchange_requested'), count: 105, value: "exchange_requested" },
        { label: t('order:exchange_pending'), count: 2, value: "exchange_pending" },
        { label: t('order:pickup'), count: 27, value: "pickup" },
        { label: t('order:pickup_cmpl'), count: 100, value: "pickup_cmpl" },
        { label: t('order:re_ship'), count: 100, value: "re_ship" },
        { label: t('order:exchange_cmpl'), count: 100, value: "exchange_cmpl" }
    ]
    const [exchangeState, setExchangeState] = useState('')
    
    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('order:exchange_manage')}</h1>
                {/* 상품 상태 */ }
                <OrderStatus orderState={exchangeState} setOrderState={setExchangeState} statusList={statusList} link={`${currentLocale}/order/exchange`} />
                {/* 검색 */}
                <OrderFilter />

                {/* 테이블 */}
                <ExchangeList exchangeState={exchangeState} t={t} />
            </div>
        </main>
    )
}