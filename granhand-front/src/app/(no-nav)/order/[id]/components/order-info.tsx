import PaymentInfo from "./payment-info";
import RefundInfo from "./refund-info";
import UserInfo from "./user-info";

export default function OrderInfo({ hasRefund }: { hasRefund: boolean }) {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UserInfo />

            <div className="space-y-6">
                {/* 최종 결제 금액 */}
                <PaymentInfo />
                {/* 환불 정보 */}
                {
                    hasRefund && <RefundInfo />
                }
            </div>
        </section>
    )
}