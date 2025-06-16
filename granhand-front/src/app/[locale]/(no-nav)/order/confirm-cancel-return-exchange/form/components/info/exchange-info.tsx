'use client'

import Information from "@/components/information";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../../../../../utils/localization/client";

export default function ExchangeInformation() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'order')

    return (
        <Information bgColor = "bg-[#322A2408]" title = {t('only_exchange_policy_title')} contents={[
            {
                elem: t('exchange_policy1')
            },
            {
                elem: t('only_exchange_policy1')
            },
            {
                elem: t('only_exchange_policy2')
            }
        ]} className="w-[342px] h-[147.01px]" />
    )
}