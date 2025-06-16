'use client'

import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import CouponSelect from "../components/coupon-select";
import GiftMessage from "../components/gift-message";
import OrderProductInfo from "../components/order-product-info";
import PaymentInfoCheck from "../components/payment-info-check";
import PaymentMethod from "../components/payment-method";
import PointUse from "../components/point-use";
import ReceiverInfo from "../components/receiver-info";
import { useTranslation } from "../../../../../../utils/localization/client";

export default function PaymentGiftPage() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'payment', 'coupon', 'point'])
    const currentLocale = useCurrentLocale()

    return (
        <main className="container mx-auto px-6 pt-8">
            <h2 className="text-lg font-medium text-left mb-8 pb-4 text-[#6F6963]">{t('payment:checkout')}</h2>
            {/* <h2 className="text-lg font-medium text-gray-900 m-0 p-0 leading-none">결제하기</h2> */}
            <div className="grid md:grid-cols-[739px_357px] gap-8 mt-10 min-h-[80vh]">
            {/* <div className="grid md:grid-cols-3 gap-8 mt-10 min-h-[80vh]"> */}
                {/* <div className="md:col-span-2 max-h-[calc(100vh-100px)] overflow-y-auto pr-2"> */}
                <div className="max-h-[calc(100vh-100px)] overflow-y-auto pr-2">
                    <GiftMessage t={t} />

                    <ReceiverInfo t={t} />

                    {/* 주문 상품 정보 */}
                    <OrderProductInfo t={t} />

                    {/* 쿠폰 */}
                    <CouponSelect t={t} />

                    {/* 포인트 */}
                    <PointUse t={t} />

                    {/* 결제 수단 */}
                    <PaymentMethod t={t} />
                </div>
                <div className="hidden md:block">
                    <div className="sticky top-28">
                        {/* Right: 결제 요약 */}
                        <PaymentInfoCheck t={t} currentLocale={currentLocale} />
                    </div>
                </div>
            </div>
        </main>
    )
}