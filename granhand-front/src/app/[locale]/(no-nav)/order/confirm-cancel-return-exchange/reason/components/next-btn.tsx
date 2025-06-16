'use client'

import { Button } from "@/components/ui/button";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "../../../../../../../../utils/localization/client";

export default function NextButton() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentLocale = useCurrentLocale()
    const queryString = new URLSearchParams(searchParams).toString()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'common')

    return (
        <>
            <div className="mt-20 text-base font-medium border-b pb-3"></div>

            <div className="mt-6 border-b pb-6">
                <div className="flex justify-end items-center text-lg font-semibold">
                    <Button className="text-base px-10 py-2 text-white bg-[#322A24] rounded-none min-w-32 w-[358px] h-[46px]" onClick={() => router.push(`${currentLocale}/order/confirm-cancel-return-exchange/form?${queryString}`)}>{t('next')}</Button>
                </div>
            </div>
        </>
    )
}