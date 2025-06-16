'use client'

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslation } from "../../../../../../../../utils/localization/client";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";

export default function FindPwHeader() {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])

    return (
        <>
            <h2 className="text-lg font-medium text-left mb-4 border-b border-b-[#6f6963] pb-4 text-[#6F6963]">{t('auth:find_pw')}</h2>
            <div className="flex items-center mb-8 text-[#6F6963]">
                <Button className="w-4 h-4" onClick={() => router.back()}>
                    <ChevronLeft className="w-4 h-4 mr-3" />
                </Button>
                <div className="text-sm font-medium items-center">{t('prev')}</div>
            </div>
        </>
    )
}