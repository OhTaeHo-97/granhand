'use client'

import ExchangeRefundAddress from "./exchange-refund-address";
import StandardPayment from "@/app/[locale]/(no-nav)/payment/components/standard-payment";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useState } from "react";
import { useTranslation } from "../../../../../../../../utils/localization/client";

export default function ExchangeForm() {
    const [normalMethod, setNormalMethod] = useState('')
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'order')
    const currentLocale = useCurrentLocale()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="bg-white rounded-md text-sm text-gray-600 space-y-2 w-full">
                <h2 className="font-semibold text-black text-base">{t('pickup_info')}</h2>
                <ExchangeRefundAddress title={t('pickup_address')} info={{name: '홍길동', phone: '010-1234-5678', address: '부산광역시 부전동 서전로 8번길 현대카드'}} />
                <ExchangeRefundAddress title={t('delivery_address')} info={{name: '홍길동', phone: '010-1234-5678', address: '부산광역시 부전동 서전로 8번길 현대카드'}} />
            </div>
            <div className="space-y-6">
                <div className="bg-white rounded-md text-sm text-gray-600 space-y-2 w-full">
                    <h2 className="font-semibold text-black text-base">{t('ship_fee_pay_method')}</h2>
                    <StandardPayment normalMethod={normalMethod} setNormalMethod={setNormalMethod} />
                </div>
                <div className="bg-white text-sm text-gray-600 space-y-2 w-full">
                    <h2 className="font-semibold text-black text-base">{t('exchange_ship_fee_info')}</h2>
                    <div className="w-full border flex justify-between p-5">
                        <div className="text-gray-600">{t('round_trip_ship_fee')}</div>
                        <div className="text-black font-semibold">6,000{currentLocale === '' ? '원' : ' KRW'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}