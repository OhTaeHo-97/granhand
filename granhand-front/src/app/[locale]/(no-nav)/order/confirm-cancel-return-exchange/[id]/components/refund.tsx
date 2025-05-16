'use client'

import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import ExchangeRefundAddress from "../../form/components/exchange-refund-address";
import { useTranslation } from "../../../../../../../../utils/localization/client";
import { Button } from "@/components/ui/button";
import RefundInfoBox from "../../../[id]/components/refund-info-box";

export default function RefundDetail() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['order', 'payment'])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-10">
            <div className="bg-white rounded-md text-sm text-gray-600 space-y-2 w-full">
                <h2 className="font-semibold text-black text-base">{t('pickup_info')}</h2>
                <ExchangeRefundAddress title={t('pickup_address')} info={{name: '홍길동', phone: '010-1234-5678', address: '부산광역시 부전동 서전로 8번길 현대카드'}} showEdit={false} />
                <Button className="w-full border h-12 mt-2">{t('pickup_track')}</Button>
            </div>
            <RefundInfoBox t={t} />
        </div>
    )
}