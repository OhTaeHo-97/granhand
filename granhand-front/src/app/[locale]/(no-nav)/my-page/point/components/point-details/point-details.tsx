'use client'

import { useState } from "react";
import PointListHeader from "./point-details-header";
import PointDetailsList from "./point-details-list";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../../../../utils/localization/client";

export default function PointDetails() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'point', 'my_page', 'point', 'store'])
    const currentLocale = useCurrentLocale()

    const tabs = ["all", "earned", "used", "expired"];

    const [selectedState, setSelectedState] = useState('all')

    const onClickState = (category: string) => {
        // const params = new URLSearchParams(searchParams)
        // params.set('store', selectedStore)
        // params.set('category', category)

        // router.push(`/shop?${params.toString()}`)
        setSelectedState(category)
    }

    return (
        <section className="space-y-6 mt-16">
            <PointListHeader tabs={tabs} selectedState={selectedState} onClickState={onClickState} t={t} />
            {/* 포인트 내역 리스트 */}
            <PointDetailsList selectedState={selectedState} t={t} currentLocale={currentLocale} />
        </section>
    )
}