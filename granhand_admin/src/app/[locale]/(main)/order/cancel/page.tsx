import { LocaleTypes } from "../../../../../../utils/localization/settings"
import { translation } from "../../../../../../utils/localization/locales/server"
import OrderStatus from "../components/order-status"
import OrderFilter from "../components/order-filter"
import CancelList from "./components/cancel-list"
import Pagination from "@/components/pagination"

export default async function CancelPage({ params }: { params: { locale: LocaleTypes } }) {
    const { locale } = await params
    const { t } = await translation(locale, ['common', 'product', 'order', 'push'])
    const statusList = [
        { label: t('order:all'), count: 105, value: "all" },
        { label: t('order:cancel_requested'), count: 2, value: "cancel_requested" },
        { label: t('order:cancel_pending'), count: 27, value: "cancel_pending" },
        { label: t('order:cancel_complete'), count: 100, value: "cancel_complete" }
    ]
    
    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('order:cancel_manage')}</h1>
                {/* 상품 상태 */ }
                <OrderStatus statusList={statusList} />
                {/* 검색 */}
                <OrderFilter />

                {/* 테이블 */}
                <CancelList t={t} />
                <Pagination totalPages={15} />
            </div>
        </main>
    )
}