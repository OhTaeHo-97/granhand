'use client'

import ExchangeRefundAddress from "./exchange-refund-address";
import RefundInfoBox from "../../../[id]/components/refund-info-box";
import { useState } from "react";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../../../../utils/localization/client";
import StandardPayment from "@/app/[locale]/(no-nav)/payment/components/standard-payment";

export default function RefundForm() {
    const [normalMethod, setNormalMethod] = useState('')
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'order')
    const currentLocale = useCurrentLocale()

    return (
        <div className="grid grid-cols-[342px_342px] mb-10 gap-16">
            <div className="bg-[#FDFBF5] rounded-md text-sm text-gray-600 space-y-10 w-full">
                <div>
                    <h2 className="font-bold text-[#322A24] text-sm">{t('pickup_info')}</h2>
                    <ExchangeRefundAddress title={t('pickup_address')} info={{name: '홍길동', phone: '010-1234-5678', address: '부산광역시 부전동 서전로 8번길 현대카드'}} />
                </div>
                <div>
                    <h2 className="font-bold text-sm text-[#322A24]">{t('refund_info')}</h2>
                    <RefundInfoBox t={t} />
                </div>
            </div>
            <div className="space-y-10">
                <div className="bg-[#FDFBF5] text-sm text-[#322A24] space-y-2 w-full">
                    <h2 className="font-bold">{t('return_ship_fee_info')}</h2>
                    <div className="w-full border !border-[#C0BCB6] flex justify-between p-5">
                        <div>{t('return_ship_fee')}</div>
                        <div className="font-semibold">3,000{currentLocale === '' ? '원' : ' KRW'}</div>
                    </div>
                </div>

                <div className="bg-[#FDFBF5] rounded-md text-sm text-[#322A24] space-y-2 w-full">
                    <h2 className="font-bold text-[#322A24]">{t('ship_fee_pay_method')}</h2>
                    <StandardPayment normalMethod={normalMethod} setNormalMethod={setNormalMethod} totalWidth="w-[342px]" width="w-[163px]" height="h-[46px]" />
                </div>
            </div>
        </div>
    )
}