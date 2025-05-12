'use client'

import BasicModal from "@/app/[locale]/components/modal";
import { Button } from "@/components/ui/button";
import { getLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useState } from "react";
import { useTranslation } from "../../../../../../../../utils/localization/client";

export default function OrderConfirmRequestList() {
    const [open, setOpen] = useState(false)
    const locale = getLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'order', 'my_page'])
    const currentLocale = useCurrentLocale()

    return (
        <>
            <div className="w-full flex justify-end py-8">
                <span className="text-xs font-semibold text-gray-400">{t('order:confirm_info')}</span>
            </div>

            <div className="mt-20 text-base font-medium border-b pb-3">
                {
                    currentLocale === ''
                        ? (<span>{t('order:total_confirm')} 1개</span>)
                        : (<span>1 {t('order:total_confirm')}</span>)
                }
                {/* 총 주문 상품 1개 */}
            </div>

            <div className="mt-6 border-b pb-6">
                <div className="flex justify-between items-center text-lg font-semibold">
                <div>
                    <span>{t('order:confirm_directive')}</span>
                </div>
                <Button className="text-base px-10 py-2 text-white bg-black rounded-none min-w-32 w-[25%] h-11" onClick={() => setOpen((prev) => !prev)}>{t('my_page:confirm_purchase')}</Button>
                </div>
            </div>
            {/* open, setOpen, title, contents, btnText, currentLocale, locale, nextLink */}
            <BasicModal open={open} setOpen={setOpen} contents="confirm_cmpl" btnText={'confirm'} locale={locale} nextLink={`${currentLocale}/my-page/order`} />
        </>
    )
}