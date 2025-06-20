'use client'

import Information from "@/components/information";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../../../../../utils/localization/client";

export default function RefundInformation() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'order')
    
    return (
        <Information bgColor = "bg-[#322A2408]" title = {t('refund_method_info')} contents={[
            {
                elem: t('credit_check'),
                sub: [t('credit_check_info')]
            },
            {
                elem: t('bank'),
                sub: [t('bank_info')]
            },
            {
                elem: t('naver_pay'),
                sub: [t('naver_pay_info1'), t('naver_pay_info2'), t('naver_pay_info3')]
            },
            {
                elem: t('point'),
                sub: [t('point_info')]
            }
        ]} />
    )
}