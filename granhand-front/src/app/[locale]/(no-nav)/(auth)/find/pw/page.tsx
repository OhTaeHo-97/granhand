'use client'

// import Information from "@/components/information";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../../../utils/localization/client";

export default function NationalityPage() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    const currentLocale = useCurrentLocale()
    
    return (
        <div className="max-w-xl w-[358px] mx-auto text-left min-h-screen">
            {/* Title */}
            <section className="mb-64">
                <h1 className="text-lg font-semibold mb-2 text-[#322A24] leading-[26px]">{t('auth:find_pw')}</h1>
            </section>

            {/* 인증 버튼 */}
            <div className="flex items-center mb-8 gap-3">
                <Link href={`${currentLocale}/find/pw/korean`} className="w-1/2">
                    <Button className="w-full h-[46px] border bg-[#322A24] text-[#FDFBF5] font-bold text-sm leading-[22px]">
                        {t('auth:korean')}
                    </Button>
                </Link>
                <Link href={`${currentLocale}/find/pw/foreigner`} className="w-1/2">
                    <Button className="w-full h-[46px] border text-[#322A24] text-sm font-bold leading-[22px] !border-[#C0BCB6]">
                        {t('auth:foreign')}
                    </Button>
                </Link>
            </div>

            {/* 안내 메시지 */}
            {/* <Information bgColor="bg-[#322A2408]" contents={[ {elem: t('auth:find_id_info1')}, {elem: t('auth:find_id_info2')} ]} /> */}
        </div>
    )
}