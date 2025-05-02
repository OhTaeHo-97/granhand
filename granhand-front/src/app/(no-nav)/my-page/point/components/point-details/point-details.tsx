'use client'

import { useState } from "react";
import PointListHeader from "./point-details-header";
import PointDetailsList from "./point-details-list";

export default function PointDetails() {
    const tabs = ["전체", "적립", "사용", "소멸"];

    const [selectedState, setSelectedState] = useState('전체')

    const onClickState = (category: string) => {
        // const params = new URLSearchParams(searchParams)
        // params.set('store', selectedStore)
        // params.set('category', category)

        // router.push(`/shop?${params.toString()}`)
        setSelectedState(category)
    }

    return (
        <section className="space-y-6 mt-16">
            <PointListHeader tabs={tabs} selectedState={selectedState} onClickState={onClickState} />
            {/* 포인트 내역 리스트 */}
            <PointDetailsList selectedState={selectedState} />
        </section>
    )
}