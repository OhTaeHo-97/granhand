import OrderElement from "../../order/components/order-elem";

export default function CancelReturnExchangeList({ contents }: { contents: number[] }) {
    return (
        <div className="w-full">
            { contents.length === 0 ? (
                <div className="w-full flex items-center justify-center bg-[#322A2408] text-[#C0BCB6] h-[136px]">
                    취소/교환/반품 내역이 없어요.
                </div>
            ) : (
                <>
                    <OrderElement state="cancel_req" isGift={false} />
                    <OrderElement state="return_cmpl" isGift={true} />
                    <OrderElement state="exch_cmpl" isGift={false} />
                </>
            ) }
        </div>
    )
}