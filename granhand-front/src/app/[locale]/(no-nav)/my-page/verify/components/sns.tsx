'use client'

import { Button } from "@/components/ui/button";
import { useTranslation } from "../../../../../../../utils/localization/client";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";

export default function SnsUserVerify() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'auth')

    return (
        <>
            <h2 className="text-lg font-semibold mb-2">{t('verify_account')}</h2>
            <p className="text-sm text-gray-600 mb-8">
                {t('verify_account_info')}
            </p>

            <div className="mb-6">
                <label className="block text-sm font-semibold mb-1">{t('id')}</label>
                <div className="h-12 px-4 flex items-center border bg-gray-100 rounded text-sm text-gray-600">
                gran****@****l.com
                </div>
            </div>

            <Button
                className="w-full h-12 text-sm font-semibold bg-black text-white"
                // disabled={!password}
            >
                {t('kakao_verify')}
            </Button>
        </>
    )
}