'use client'

import { Button } from "@/components/ui/button";
import CouponHistory from "./coupon-history";
import CouponInformation from "./coupon-info";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../../utils/localization/client";
import MemberDetailEachListModal from "./each-list-modal";
import { useState } from "react";

export default function MemberCouponInfo() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'member', 'coupon', 'order', 'point'])
    const [open, setOpen] = useState(false)

    return (
        <section>
            <h2 className="font-bold text-xl mb-4 text-[#5E5955]">{t('coupon:coupon_info')}</h2>
            <CouponInformation t={t} />
            <div className="flex items-center gap-3 mb-4">
                <h3 className="text-base text-[#5E5955]">{t('coupon:coupon_history')}</h3>
                <Button className="border p-2 h-8" onClick={() => setOpen((prev) => !prev)}>{t('view_all')}</Button>
            </div>
            <CouponHistory t={t} itemCnt={3} />

            <MemberDetailEachListModal open={open} setOpen={setOpen} title={t('coupon:coupon_history')} contents={<CouponHistory t={t} itemCnt={15} />} />
        </section>
    )
}