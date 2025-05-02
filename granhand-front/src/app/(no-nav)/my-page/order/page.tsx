import OrderElement from "./components/order-elem";
import OrderStateCard from "./components/order-state";

export default function OrderPage() {
    return (
        <main className="w-full mx-auto ml-10">
            <OrderStateCard />
            <div className="mb-5" />

            {/* 주문 내역 1 - 입금대기 */}
            <OrderElement state="입금 대기" isGift={false} />
            {/* 주문 내역 2 - 배송 완료 */}
            <OrderElement state="배송 완료" isGift={false} />
            {/* 주문 내역 3 - 배송 완료 (선물 수락) */}
            <OrderElement state="배송 완료 (선물 수락)" isGift={true} />
            {/* 주문 내역 4 - 구매 확정 */}
            <OrderElement state="구매 확정" isGift={false} />
        </main>
    )
}