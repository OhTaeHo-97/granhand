'use client'

import { getLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import ExchangeRefundAddress from "../../form/components/exchange-refund-address";
import { useTranslation } from "../../../../../../../../utils/localization/client";
import { Button } from "@/components/ui/button";
import Information from "@/components/information";

export default function ExchangeDetail() {
    const locale = getLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'order')
    const currentLocale = useCurrentLocale()

    return (
        <div>
            <div className="bg-white text-sm text-gray-600 space-y-2 w-full">
                <h2 className="font-semibold text-black text-base">{t('exchange_ship_fee_info')}</h2>
                <div className="w-full border flex justify-between p-5">
                    <div className="text-gray-600">{t('round_trip_ship_fee')}</div>
                    <div className="text-black font-semibold">6,000{currentLocale === '' ? '원' : ' KRW'}</div>
                </div>
            </div>
            <div className="space-y-2 w-full mt-10">
                <h2 className="font-semibold text-black text-base">{t('pickup_info')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-white rounded-md text-sm text-gray-600 space-y-2 w-full">
                        <ExchangeRefundAddress title={t('pickup_address')} info={{name: '홍길동', phone: '010-1234-5678', address: '부산광역시 부전동 서전로 8번길 현대카드'}} showEdit={false} />
                        <Button className="w-full border h-12 mt-2">{t('pickup_track')}</Button>
                    </div>
                    {/* <RefundInfo /> */}
                    <div className="bg-white rounded-md text-sm text-gray-600 space-y-2 w-full">
                        <ExchangeRefundAddress title={t('delivery_address')} info={{name: '홍길동', phone: '010-1234-5678', address: '부산광역시 부전동 서전로 8번길 현대카드'}} showEdit={false} />
                        <Button className="w-full border h-12 mt-2">{t('delivery_track')}</Button>
                    </div>
                </div>
            </div>
            <Information bgColor = "bg-gray-200" title = {t('exchange_procedure_title')} contents={[
                {
                    elem: t('exchange_procedure1')
                },
                {
                    elem: t('exchange_procedure2')
                }
            ]} />
        </div>
    )
}