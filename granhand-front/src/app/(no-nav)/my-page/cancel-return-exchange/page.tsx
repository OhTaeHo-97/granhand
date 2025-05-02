import OrderElement from "../order/components/order-elem";

export default function ConfirmReturnChangePage() {
    return (
        <main className="w-full mx-auto ml-10">
            <OrderElement state="취소 요청" isGift={false} />
            <OrderElement state="반품 완료" isGift={true} />
            <OrderElement state="교환 완료" isGift={false} />
        </main>
    )
}