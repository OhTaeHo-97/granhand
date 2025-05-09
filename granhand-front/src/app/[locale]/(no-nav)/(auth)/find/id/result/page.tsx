'use client'

import Information from "@/components/information";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import { useTranslation } from "../../../../../../../../utils/localization/client";
import { LocaleTypes } from "../../../../../../../../utils/localization/settings";
import Link from "next/link";
import { getLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";

export default function FindIdResultPage() {
    // const locale = useParams()?.locale as LocaleTypes
    const locale = getLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    // const pathname = usePathname()
    // const currentLocale = pathname.split('/')[1] === 'en' ? '/en' : ''
    const currentLocale = useCurrentLocale()

    return (
        <div className="max-w-xl w-full mx-auto text-left min-h-screen">
            <h1 className="text-xl font-bold">{t('auth:account_found')}</h1>
            {/* <div className="bg-gray-50 p-4 flex flex-col space-y-1 h-32 items-center"> */}
            <div className="border border-gray-100 bg-gray-50 p-4 h-32 flex flex-col justify-center items-center space-y-1">
                <div className="font-semibold text-gray-800">granhand@gmail.com</div>
                <div className="text-sm text-gray-500 ">2023.08.03 가입</div>
            </div>

            <div className="flex items-center justify-between text-sm font-medium text-gray-700 cursor-pointer border-b border-gray-300 pb-1 w-fit">
                {t('reset_pw')} <ChevronRight className="w-4 h-4 ml-1" />
            </div>

            <Link href={`${currentLocale}/login`}>
                <Button className="w-full bg-neutral-800 text-white font-semibold h-12">
                    {t('login')}
                </Button>
            </Link>

            <Information bgColor="bg-gray-200" contents={[ { elem: t('auth:reset_pw_info1') }, { elem: t('auth:reset_pw_info2') } ]} />
        </div>
    )
}