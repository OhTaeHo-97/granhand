'use client'

import { Button } from "@/components/ui/button";
import { useTranslation } from "../../../../../../../utils/localization/client";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { useRouter } from "next/navigation";

export default function SnsUserVerify() {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'auth')
    const currentLocale = useCurrentLocale()

    return (
        <>
            <h2 className="text-lg font-bold mb-2 text-[#322A24]">{t('verify_account')}</h2>
            <p className="text-sm font-medium text-[#6F6963] mb-8">
                {t('verify_account_info')}
            </p>

            <div className="mb-6">
                <label className="block text-sm font-medium mb-1 text-[#322A24]">{t('id')}</label>
                <div className="w-[358px] h-[46px] px-4 flex items-center border !border-[#C0BCB6] bg-[#E9E6E0] rounded text-sm text-[#6F6963]">
                gran****@****l.com
                </div>
            </div>

            <Button
                className="w-[358px] h-[46px] text-sm font-semibold bg-[#322A24] text-white"
                // disabled={!password}
                onClick={() => router.push(`${currentLocale}/my-info`)}
            >
                {t('kakao_verify')}
            </Button>
        </>
    )
}