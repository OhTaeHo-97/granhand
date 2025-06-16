'use client'

import Information from "@/components/information";
import { Button } from "@/components/ui/button";
import { useTranslation } from "../../../../../../../../utils/localization/client";
import Link from "next/link";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";

export default function FindId() {
// export default function FindId({ onNext }: { onNext: () => void }) {
    // const [name, setName] = useState("");
    // const [phone, setPhone] = useState("");

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log("Find ID attempt:", { name, phone });
    //     onNext();
    // };

    // const locale = useParams()?.locale as LocaleTypes
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    // const pathname = usePathname()
    // const currentLocale = pathname.split('/')[1] === 'en' ? '/en' : ''
    const currentLocale = useCurrentLocale()

    return (
        <div className="max-w-xl w-[358px] mx-auto text-left min-h-screen">
            {/* Title */}
            <section className="mb-64">
                <h1 className="text-lg font-bold mb-2 text-[#322A24]">{t('auth:find_id')}</h1>
                <p className="text-sm text-[#6F6963] font-medium">
                {t('auth:korean_find_id')}
                </p>
            </section>

            {/* 인증 버튼 */}
            <div className="text-center mb-8 w-full">
                <Link href={`${currentLocale}/find/id/result`}>
                    <Button className="bg-[#2b2119] text-white w-[358px] h-[46px] text-base font-semibold">
                    {t('auth:phone_ver')}
                    </Button>
                </Link>
            </div>

            {/* 안내 메시지 */}
            <Information bgColor="bg-[#322A2408]" contents={[ {elem: t('auth:find_id_info1')}, {elem: t('auth:find_id_info2')} ]} />
        </div>
    )
}