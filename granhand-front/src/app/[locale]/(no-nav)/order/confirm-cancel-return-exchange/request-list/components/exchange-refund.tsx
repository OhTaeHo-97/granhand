'use client'

import { Button } from "@/components/ui/button";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "../../../../../../../../utils/localization/client";

export default function OrderExchangeRefundRequestList() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentLocale = useCurrentLocale()
    const queryString = new URLSearchParams(searchParams).toString()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'order'])

    return (
        <>
            <div className="mt-20 text-base font-medium border-b pb-3"></div>

            <div className="mt-6 border-b pb-6 text-[#322A24]">
                <div className="flex justify-between items-center font-bold">
                <div>
                    <span>{t('order:exchange_directive')}</span>
                </div>
                <Button className="text-sm px-10 py-2 text-white bg-[#322A24] rounded-none min-w-32 w-[356px] h-[46px] cursor-pointer" onClick={() => router.push(`${currentLocale}/order/confirm-cancel-return-exchange/reason?${queryString}`)}>
                    {t('next')}
                </Button>
                {/* <Button className="text-base px-10 py-2 text-white bg-black rounded-none min-w-32 w-[25%] h-11">다음</Button> */}
                </div>
            </div>
        </>
    )
}