'use client'

import Pagination from "@/components/pagination"
import OrderStatus from "../components/order-status"
import OrderFilter from "../components/order-filter"
import RefundList from "./components/refund-list"
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales"
import { useTranslation } from "../../../../../../utils/localization/client"
import { useState } from "react"

export default function RefundPage() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'product', 'order', 'push'])
    const [refundState, setRefundState] = useState('')

    const statusList = [
        { label: t('order:return_requested'), count: 105, value: "return_requested" },
        { label: t('order:return_hold'), count: 2, value: "return_hold" },
        { label: t('order:return_pickup'), count: 27, value: "return_pickup" },
        { label: t('order:return_pickup_cmpl'), count: 100, value: "return_pickup_cmpl" },
        { label: t('order:return_cmpl'), count: 100, value: "return_cmpl" }
    ]
    
    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('order:return_manage')}</h1>
                {/* 상품 상태 */ }
                <OrderStatus orderState={refundState} setOrderState={setRefundState} statusList={statusList} />
                {/* 검색 */}
                <OrderFilter />

                {/* 테이블 */}
                <RefundList refundState={refundState} t={t} />
                <Pagination totalPages={15} />
            </div>
        </main>
    )
}