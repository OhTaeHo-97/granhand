'use client'

import { Button } from "@/components/ui/button";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "../../../../../../../../utils/localization/client";

export default function OrderCancelRequestList() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const queryString = new URLSearchParams(searchParams).toString()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'cart'])
    const currentLocale = useCurrentLocale()

    return (
        <>
            <div className="w-full flex justify-end py-8">
                <span className="text-xs font-semibold text-gray-400">{t('cart:cancel_restrict')}</span>
            </div>

            <div className="mt-20 text-base font-medium border-b pb-3">
                {currentLocale === '' 
                    ? (<span>{t('cart:total_cancel')} 1개</span>)
                    : (<span>1 {t('cart:total_cancel')}</span>)
                }
                {/* 총 취소 상품 1개 */}
            </div>

            <div className="mt-6 border-b pb-6">
                <div className="flex justify-between items-center text-lg font-semibold">
                <div>
                    <span>{t('cart:cancel_directive')}</span>
                </div>
                <Button className="text-base px-10 py-2 text-white bg-black rounded-none h-12 min-w-32 w-[25%]" onClick={() => router.push(`${currentLocale}/order/confirm-cancel-return-exchange/reason?${queryString}`)}>
                    {t('next')}
                </Button>
                </div>
            </div>
        </>
    )
}