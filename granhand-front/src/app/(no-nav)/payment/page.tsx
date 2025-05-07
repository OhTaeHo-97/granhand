import PaymentInfoCheck from "./components/payment-info-check";
import DeliveryList from "./components/delivery-list";
import DeliveryRequest from "./components/delivery-request";
import OrderProductInfo from "./components/order-product-info";
import CouponSelect from "./components/coupon-select";
import PointUse from "./components/point-use";
import PaymentMethod from "./components/payment-method";

export default function PaymentPage() {

    return (
        <main className="container mx-auto px-6 pt-8">
            <h2 className="text-lg font-medium text-gray-900 m-0 p-0 leading-none">결제하기</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-10 min-h-[80vh]">
                <div className="md:col-span-2 max-h-[calc(100vh-100px)] overflow-y-auto pr-2">
                    {/* 배송 정보 */}
                    <DeliveryList />

                    {/* 배송 요청사항 */}
                    <DeliveryRequest />

                    {/* 주문 상품 정보 */}
                    <OrderProductInfo />

                    {/* 쿠폰 */}
                    <CouponSelect />

                    {/* 포인트 */}
                    <PointUse />

                    {/* 결제 수단 */}
                    <PaymentMethod />
                </div>
                <div className="hidden md:block">
                    <div className="sticky top-28">
                        {/* Right: 결제 요약 */}
                        <PaymentInfoCheck />
                    </div>
                </div>
            </div>
        </main>
    );
}