'use client'

import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import ExchangeRefundAddress from "../../form/components/exchange-refund-address";
import { useTranslation } from "../../../../../../../../utils/localization/client";
import { Button } from "@/components/ui/button";
import Information from "@/components/information";

export default function ExchangeDetail() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'order')
    const currentLocale = useCurrentLocale()

    return (
        <div className="w-[739px]">
            <div className="bg-[#FDFBF5] text-sm text-[#322A24] space-y-2 w-full">
                <h2 className="font-bold text-[#322A24] text-sm">{t('exchange_ship_fee_info')}</h2>
                <div className="w-full border text-xs font-medium !border-[#C0BCB6] flex justify-between p-5">
                    <div>{t('round_trip_ship_fee')}</div>
                    <div className="font-bold">6,000{currentLocale === '' ? '원' : ' KRW'}</div>
                </div>
            </div>
            <div className="space-y-2 w-full mt-10">
                <h2 className="font-bold text-[#322A24] text-sm">{t('exchange_product_info')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-[#FDFBF5] rounded-md text-sm text-gray-600 space-y-2 w-full">
                        <ExchangeRefundAddress title={t('pickup_address')} info={{name: '홍길동', phone: '010-1234-5678', address: '부산광역시 부전동 서전로 8번길 현대카드'}} showEdit={false} />
                        <Button className="w-full border h-12 mt-2 !border-[#C0BCB6] text-[#322A24]">{t('pickup_track')}</Button>
                    </div>
                    {/* <RefundInfo /> */}
                    <div className="bg-[#FDFBF5] rounded-md text-sm text-gray-600 space-y-2 w-full">
                        <ExchangeRefundAddress title={t('delivery_address')} info={{name: '홍길동', phone: '010-1234-5678', address: '부산광역시 부전동 서전로 8번길 현대카드'}} showEdit={false} />
                        <Button className="w-full border h-12 mt-2 !border-[#C0BCB6] text-[#322A24]">{t('delivery_track')}</Button>
                    </div>
                </div>
            </div>
            <Information bgColor = "bg-[#322A2408]" title = {t('exchange_procedure_title')} contents={[
                {
                    elem: t('exchange_procedure1')
                },
                {
                    elem: t('exchange_procedure2')
                }
            ]} className="h-[94px]" />
        </div>
    )
}