'use client'

import OrderStatus from "./components/order-status"
import OrderFilter from "./components/order-filter"
import OrderList from "./components/order-list"
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../utils/localization/client";
import { useEffect, useState } from "react"
// import { Order, useOrder } from "@/hooks/use-order";

export default function OrderPage() {
    const [orderState, setOrderState] = useState('all')
    // const [contents, setContents] = useState([])
    // const { getOrders } = useOrder()
    // const [orders, setOrders] = useState<Order[]>([])
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
        { label: t('order:delivered'), count: 1, value: "delivered" },
        { label: t('order:confirm_purchase'), count: 1, value: "confirm_purchase" }
    ]

    useEffect(() => {
        
    }, [])

    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('order:order_management')}</h1>
                {/* 상품 상태 */ }
                <OrderStatus orderState={orderState} setOrderState={setOrderState} statusList={statusList} link={`${currentLocale}/order`} />
                {/* 검색 */}
                <OrderFilter />

                {/* 테이블 */}
                <OrderList orderState={orderState} category='order_management' />
                {/* <Pagination totalPages={15} /> */}
            </div>
        </main>
    )
}