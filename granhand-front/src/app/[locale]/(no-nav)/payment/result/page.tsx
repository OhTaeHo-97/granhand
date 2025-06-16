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
            <h2 className="text-lg font-medium text-left mb-8 pb-4 text-[#6F6963]">{t('payment:completed')}</h2>
            {/* <h1 className="text-base font-medium mb-12">결제완료</h1> */}
            <section className="text-center mb-12">
                <h2 className="text-base font-bold text-[#322A24]">{t('payment:completed_sub')}</h2>
                <p className="text-sm font-medium text-[#6F6963] mt-1">{t('payment:completed_sub2')}</p>
            </section>

            <section className="max-w-3xl mx-auto space-y-6">
                <div className="border rounded-md p-6 space-y-6">
                    <ProductInfoCard t={t} currentLocale={currentLocale} />
                </div>
                <PaymentInfoBox t={t} />

                <div className="flex justify-center gap-4 pt-6">
                    <Link href={`${currentLocale}/order/1`}>
                        <Button variant="outline" className="text-[#322A24] text-sm w-[163px] h-[46px] rounded-none font-bold !border-[#C0BCB6] cursor-pointer">
                            {t('payment:details')}
                        </Button>
                    </Link>
                    <Link href={`${currentLocale}/shop`}>
                        <Button className="w-[163px] h-[46px] bg-[#322A24] text-sm text-white rounded-none font-bold cursor-pointer">
                            {t('payment:continue')}
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    )
}