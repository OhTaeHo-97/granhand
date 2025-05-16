// 'use client'

import Pagination from "@/components/pagination"
import { LocaleTypes } from "../../../../../utils/localization/settings"
import { translation } from "../../../../../utils/localization/locales/server"
import OrderFilter from "../order/components/order-filter"
import PointList from "./components/point-list"

export default async function PointPage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
    const { locale } = await params
    const { t } = await translation(locale, ['common', 'point'])

    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('point:point_manage')}</h1>
                {/* 검색 */}
                <OrderFilter />

                {/* 테이블 */}
                {/* <ExchangeList t={t} /> */}
                <PointList t={t} />
                <Pagination totalPages={15} />
            </div>
        </main>
    )
}