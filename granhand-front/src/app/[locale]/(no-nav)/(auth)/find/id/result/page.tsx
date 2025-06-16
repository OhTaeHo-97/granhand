'use client'

import Information from "@/components/information";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "../../../../../../../../utils/localization/client";
import Link from "next/link";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useRouter } from "next/navigation";

export default function FindIdResultPage() {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    const currentLocale = useCurrentLocale()
    // const pathname = usePathname()
    // const currentLocale = pathname.split('/')[1] === 'en' ? '/en' : ''

    return (
        <div className="max-w-xl w-[358px] mx-auto text-left min-h-screen">
            <h1 className="text-lg font-bold text-[#322A24]">{t('auth:account_found')}</h1>
            {/* <div className="bg-gray-50 p-4 flex flex-col space-y-1 h-32 items-center"> */}
            <div className="bg-[#322A2408] w-[358px] mt-10 p-4 h-[78px] flex flex-col justify-center items-center space-y-1">
                <div className="text-sm font-bold text-[#6F6963]">granhand@gmail.com</div>
                <div className="text-xs text-[#6F6963]">2023.08.03 가입</div>
            </div>

            <div className="flex items-center justify-between text-sm font-medium text-[#6F6963] cursor-pointer pb-1 w-fit mt-5 mb-16 leading-[22px]" onClick={() => router.push(`${currentLocale}/find/pw`)}>
                {t('auth:reset_pw')} <ChevronRight className="w-4 h-4 ml-1" />
            </div>

            <Link href={`${currentLocale}/login`}>
                <Button className="w-[358px] bg-[#322A24] text-[#FDFBF5] font-bold text-sm h-[46px] cursor-pointer px-[24px] py-[12px]">
                    {t('login')}
                </Button>
            </Link>

            <Information bgColor="bg-[#322A2408]" contents={[ { elem: t('auth:reset_pw_info1') }, { elem: t('auth:reset_pw_info2') } ]} className="mt-10" />
        </div>
    )
}