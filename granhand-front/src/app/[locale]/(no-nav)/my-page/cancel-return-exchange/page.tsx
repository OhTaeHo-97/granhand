import OrderElement from "../order/components/order-elem";

export default function ConfirmReturnChangePage() {
    return (
        <main className="w-full mx-auto ml-10">
            <OrderElement state="cancel_req" isGift={false} />
            <OrderElement state="return_cmpl" isGift={true} />
            <OrderElement state="exch_cmpl" isGift={false} />
        </main>
    )
}