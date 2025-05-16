'use client'

import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../../../../utils/localization/client";
import RefundInfoBox from "../../../[id]/components/refund-info-box";

export default function CancelDetail() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['order', 'payment'])
    
    return (
        <RefundInfoBox t={t} />
    )
}