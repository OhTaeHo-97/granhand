import CouponElement from "./coupon-elem";

export default function CouponList() {
    const coupons = [
        {
            title: "[APP전용] 생일 축하 10,000원 쿠폰",
            brand: "GRANHAND.",
            condition: "최소 구매금액 제한 없음",
            validUntil: "2024-01-31 까지 사용 가능",
        },
        {
            title: "그랑핸드 다이어리 교환 쿠폰",
            brand: "GRANHAND.",
            condition: "패스포트 보상",
            validUntil: "2024-01-31 까지 사용 가능",
        },
        {
            title: "[Silver 10,000원 등급 혜택 쿠폰]",
            brand: "GRANHAND.",
            condition: "최소 구매금액 제한 없음",
            validUntil: "2024-01-31 까지 사용 가능",
        },
        {
            title: "콤포타블 음료 교환권",
            brand: "Komfortabel",
            condition: "발급일로부터 6개월동안 사용 가능",
            validUntil: "2024-01-31 까지 사용 가능",
        },
        {
            title: "신규 가입 축하 10,000원 쿠폰",
            brand: "GRANHAND.",
            condition: "최소 구매금액 제한 없음",
            validUntil: "2024-01-31 까지 사용 가능",
        },
    ];

    return (
        <ul className="space-y-4">
            {coupons.map((coupon, index) => (
                <CouponElement key={index} coupon={coupon} />
            ))}
        </ul>
    )
}