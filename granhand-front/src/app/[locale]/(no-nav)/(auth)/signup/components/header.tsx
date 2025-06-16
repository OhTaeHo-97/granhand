'use client'

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslation } from "../../../../../../../utils/localization/client";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";

export default function SignupHeader() {
    const router = useRouter()
    // const locale = useParams()?.locale as LocaleTypes
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])

    return (
        <>
            <h2 className="text-lg text-[#6F6963] font-medium text-left mb-4 border-b border-b-[#6f6963] pb-4 leading-[26px]">{t('auth:signup')}</h2>
            <div className="flex items-center mb-8">
                <Button className="w-4 h-4" onClick={() => router.back()}>
                    <ChevronLeft className="w-4 h-4 text-[#6F6963] mr-3" />
                </Button>
                <div className="text-sm font-medium items-center text-[#6F6963] leading-[22px]">{t('prev')}</div>
            </div>
        </>
    )
}