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
        <div className="grid grid-cols-[358px_357px] gap-6 mb-10">
            <div className="bg-[#FDFBF5] rounded-md text-sm text-gray-600 space-y-2 w-full">
                <h2 className="font-bold text-[#322A24] text-sm">{t('pickup_info')}</h2>
                <ExchangeRefundAddress title={t('pickup_address')} info={{name: '홍길동', phone: '010-1234-5678', address: '부산광역시 부전동 서전로 8번길 현대카드'}} showEdit={false} />
                <Button className="w-full border !border-[#C0BCB6] mt-2 h-[46px] text-[#322A24] text-sm font-bold">{t('pickup_track')}</Button>
            </div>
            <div>
                <h2 className="font-bold text-[#322A24] text-sm mb-5">환불 정보</h2>
                <RefundInfoBox t={t} />
            </div>
        </div>
    )
}