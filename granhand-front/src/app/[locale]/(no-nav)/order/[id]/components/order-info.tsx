import PaymentInfo from "./payment-info";
import RefundInfo from "./refund-info";
import UserInfo from "./user-info";

export default function OrderInfo({ hasRefund, t }: { hasRefund: boolean, t: (key: string) => string }) {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <UserInfo t={t} />

            <div className="space-y-6">
                {/* 최종 결제 금액 */}
                <PaymentInfo t={t} />
                {/* 환불 정보 */}
                {
                    hasRefund && <RefundInfo t={t} />
                }
            </div>
        </section>
    )
}