'use client'

import { Button } from "@/components/ui/button";
import ProductInfoCard from "../../order/[id]/components/product-info-card";
import PaymentInfoBox from "../../order/[id]/components/payment-info-box";
import Link from "next/link";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../../utils/localization/client";

export default function PaymentResult() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'payment'])
    const currentLocale = useCurrentLocale()

    return (
        <main className="container mx-auto px-6 pt-8">
            <h2 className="text-lg font-medium text-left mb-8 pb-4">{t('payment:completed')}</h2>
            {/* <h1 className="text-base font-medium mb-12">결제완료</h1> */}
            <section className="text-center mb-12">
                <h2 className="text-lg font-semibold text-black">{t('payment:completed_sub')}</h2>
                <p className="text-sm text-gray-500 mt-1">{t('payment:completed_sub2')}</p>
            </section>

            <section className="max-w-3xl mx-auto space-y-6">
                <div className="border rounded-md p-6 space-y-6 bg-white">
                    <ProductInfoCard t={t} currentLocale={currentLocale} />
                </div>
                <PaymentInfoBox t={t} />

                {/* <div className="border rounded-md p-6 space-y-2 bg-white text-sm">
                    <div className="flex justify-between">
                    <span className="text-gray-400">상품금액</span>
                    <span>35,500원</span>
                    </div>
                    <div className="flex justify-between">
                    <span className="text-gray-400">배송비</span>
                    <span>0원</span>
                    </div>
                    <div className="flex justify-between">
                    <span className="text-gray-400">쿠폰 사용</span>
                    <span className="text-black">-5,000원</span>
                    </div>
                    <div className="flex justify-between">
                    <span className="text-gray-400">포인트 사용</span>
                    <span className="text-black">-5,000원</span>
                    </div>
                    <hr className="my-2 border-dashed" />
                    <div className="flex justify-between font-bold text-black">
                    <span>결제 금액</span>
                    <span>25,500원</span>
                    </div>
                    <div className="text-xs text-gray-400">ㄴ 신용카드 (카드사)</div>
                </div> */}

                <div className="flex justify-center gap-4 pt-6">
                    <Link href={`${currentLocale}/order/1`}>
                        <Button variant="outline" className="w-40 h-12 rounded-none font-bold">
                            {t('payment:details')}
                        </Button>
                    </Link>
                    <Link href={`${currentLocale}/shop`}>
                        <Button className="w-40 h-12 bg-black text-white rounded-none font-bold">
                            {t('payment:continue')}
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    )
}