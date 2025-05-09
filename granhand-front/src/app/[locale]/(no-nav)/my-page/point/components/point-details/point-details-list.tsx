'use client'

import { useEffect } from "react";
import PointDetailsElement from "./point-details-elem";

const pointDetails = [
    {
        id: 1,
        date: "2024.01.01 PM 04:00",
        brand: {store: "granhand"},
        title: "confirm_earned",
        expire: "2029.01.09 까지 사용 가능",
        amount: "+700"
    },
    {
        id: 2,
        date: "2024.01.01 PM 04:00",
        brand: {store: "granhand"},
        title: "attendance",
        expire: "2029.01.09 까지 사용 가능",
        amount: "+100"
    },
    {
        id: 3,
        date: "2024.01.01 PM 04:00",
        brand: {store: "granhand"},
        title: "lucky",
        expire: "2029.01.09 까지 사용 가능",
        amount: "+5,000"
    },
    {
        id: 4,
        date: "2024.01.01 PM 04:00",
        brand: {store: "comfortable", loc: "namsan"},
        title: "cancel_order",
        amount: "+6,000"
    },
    {
        id: 5,
        date: "2024.01.01 PM 04:00",
        brand: {store: "comfortable", loc: "namsan"},
        title: "use_order",
        amount: "-6,000"
    }
];

export default function PointDetailsList({
    selectedState,
    t,
    currentLocale
}: {
    selectedState: string,
    t: (key: string) => string,
    currentLocale: string
}) {
    useEffect(() => {
        console.log('refresh: ', selectedState)
    }, [selectedState])

    return (
        <ul className="space-y-4">
            {pointDetails.map((point) => (
                <PointDetailsElement key={point.id} elem={point} t={t} currentLocale={currentLocale} />
            ))}
        </ul>
    )
}