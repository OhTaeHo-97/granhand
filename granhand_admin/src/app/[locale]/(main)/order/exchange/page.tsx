import Pagination from "@/components/pagination"
import { LocaleTypes } from "../../../../../../utils/localization/settings"
import { translation } from "../../../../../../utils/localization/locales/server"
import OrderStatus from "../components/order-status"
import OrderFilter from "../components/order-filter"
import ExchangeList from "./components/exchange-list"

export default async function ExchangePage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
    const { locale } = await params
    const { t } = await translation(locale, ['common', 'product', 'order', 'push'])
    const statusList = [
        { label: t('order:exchange_requested'), count: 105, value: "exchange_requested" },
        { label: t('order:exchange_pending'), count: 2, value: "exchange_pending" },
        { label: t('order:pickup'), count: 27, value: "pickup" },
        { label: t('order:pickup_cmpl'), count: 100, value: "pickup_cmpl" },
        { label: t('order:re_ship'), count: 100, value: "re_ship" },
        { label: t('order:exchange_cmpl'), count: 100, value: "exchange_cmpl" }
    ]
    
    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('order:exchange_manage')}</h1>
                {/* 상품 상태 */ }
                <OrderStatus statusList={statusList} />
                {/* 검색 */}
                <OrderFilter />

                {/* 테이블 */}
                <ExchangeList t={t} />
                <Pagination totalPages={15} />
            </div>
        </main>
    )
}