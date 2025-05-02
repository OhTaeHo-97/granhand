'use client'

import { useEffect } from "react";
import PointDetailsElement from "./point-details-elem";

const pointDetails = [
    {
        id: 1,
        date: "2024.01.01 PM 04:00",
        brand: "그랑핸드",
        title: "구매확정 적립",
        expire: "2029.01.09 까지 사용 가능",
        amount: "+700"
    },
    {
        id: 2,
        date: "2024.01.01 PM 04:00",
        brand: "그랑핸드",
        title: "출석 체크",
        expire: "2029.01.09 까지 사용 가능",
        amount: "+100"
    },
    {
        id: 3,
        date: "2024.01.01 PM 04:00",
        brand: "그랑핸드",
        title: "행운 뽑기",
        expire: "2029.01.09 까지 사용 가능",
        amount: "+5,000"
    },
    {
        id: 4,
        date: "2024.01.01 PM 04:00",
        brand: "콤포타블 남산점",
        title: "주문 취소",
        amount: "+6,000"
    },
    {
        id: 5,
        date: "2024.01.01 PM 04:00",
        brand: "콤포타블 남산점",
        title: "주문 사용",
        amount: "-6,000"
    }
];

export default function PointDetailsList({
    selectedState
}: {
    selectedState: string
}) {
    useEffect(() => {
        console.log('refresh: ', selectedState)
    }, [selectedState])

    return (
        <ul className="space-y-4">
            {pointDetails.map((point) => (
                <PointDetailsElement key={point.id} elem={point} />
            ))}
        </ul>
    )
}