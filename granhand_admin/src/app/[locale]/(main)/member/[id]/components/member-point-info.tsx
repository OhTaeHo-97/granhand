'use client'

import { Button } from "@/components/ui/button";
import PointControlField from "./point-control-field";
import PointInfo from "./point-info";
import PointHistory from "./point-history";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../../utils/localization/client";
import MemberDetailEachListModal from "./each-list-modal";
import { useState } from "react";

export default function MemberPointInfo() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'member', 'coupon', 'order', 'point'])
    const currentLocale = useCurrentLocale()
    const [open, setOpen] = useState(false)

    return (
        <section className="w-full">                    
            <h2 className="font-bold mb-4 text-xl text-[#5E5955]">{t('point:point_info')}</h2>
            <PointInfo t={t} />
            <h3 className="mt-4 text-base mb-3 text-[#5E5955]">{t('point:grant_withdraw_points')}</h3>
            <PointControlField t={t} />
            <div className="flex items-center gap-3 mb-4">
                <h3 className="text-[#5E5955] text-base">{t('point:point_history')}</h3>
                <Button className="border p-2 h-8" onClick={() => setOpen((prev) => !prev)}>{t('view_all')}</Button>
            </div>
            <PointHistory t={t} currentLocale={currentLocale} itemCnt={3} />

            <MemberDetailEachListModal open={open} setOpen={setOpen} title="포인트 내역" contents={<PointHistory t={t} currentLocale={currentLocale} itemCnt={15} />} />
        </section>
    )
}