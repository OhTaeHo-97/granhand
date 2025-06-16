'use client'

import { Button } from "@/components/ui/button";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../../utils/localization/client";
import { useState } from "react";
import MemberDetailEachListModal from "./each-list-modal";
import OrderInfo from "./order-info";

export default function MemberOrderInfo({ itemCnt }: { itemCnt: number }) {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'member', 'coupon', 'order', 'point'])
    const [open, setOpen] = useState(false)

    return (
        <section>
            <div className="flex items-center gap-3 mb-4">
                <h2 className="font-bold text-xl text-[#5E5955]">{t('order:order_info')}</h2>
                <Button className="border p-2 h-8" onClick={() => setOpen((prev) => !prev)}>{t('view_all')}</Button>
            </div>
            <OrderInfo t={t} itemCnt={3} />
            
            <MemberDetailEachListModal open={open} setOpen={setOpen} title={t('order:order_info')} contents={<OrderInfo t={t} itemCnt={itemCnt} />} />
        </section>
    )
}