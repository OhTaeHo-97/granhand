'use client'

// import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslation } from "../../../../../../../utils/localization/client";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";

export default function FindPasswordPage() {
    // const [name, setName] = useState("");
    // const [phone, setPhone] = useState("");
    const router = useRouter()

    // const locale = useParams()?.locale as LocaleTypes
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    // const pathname = usePathname()
    // const currentLocale = pathname.split('/')[1] === 'en' ? '/en' : ''
    const currentLocale = useCurrentLocale()

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log("Find ID attempt:", { name, phone });
    // };

    return (
        <main className="space-y-6 container mx-auto px-6 pt-8">
            <h2 className="text-lg font-medium text-left mb-4 border-b border-b-[#6f6963] pb-4">{t('auth:find_pw')}</h2>
            <div className="flex items-center mb-8">
                <Button className="w-4 h-4" onClick={() => router.back()}>
                    <ChevronLeft className="w-4 h-4 text-gray-500 mr-3" />
                </Button>
                <div className="text-sm items-center text-gray-500">{t('prev')}</div>
            </div>

            <div className="max-w-xl w-full mx-auto text-left min-h-screen">
                {/* Title */}
                <section className="mb-12">
                    <h1 className="text-lg font-semibold mb-2">{t('auth:find_pw')}</h1>
                    <p className="text-sm text-gray-600">
                    {t('auth:korean_find_pw1')}<br />{t('auth:korean_find_pw2')}
                    </p>
                </section>

                {/* 인증 버튼 */}
                <div className="mb-36 w-full">
                    <h2 className="text-sm mb-2">{t('auth:id')}</h2>
                    <Input type="text" placeholder={`${t('auth:id_placeholder')}`} className="h-14"></Input>
                </div>

                {/* 인증 버튼 */}
                <div className="text-center mb-8 w-full">
                    <Link href={`${currentLocale}/find/pw/reset`}>
                        <Button className="bg-neutral-400 text-white h-12 text-base font-semibold w-full">
                        {t('next')}
                        </Button>
                    </Link>
                </div>

                {/* 인증 버튼 */}
                {/* <div className="flex items-center mb-8 gap-3">
                    <Link href="/find/id/korean" className="w-1/2">
                        <Button className="w-full border bg-gray-200">
                            내국인
                        </Button>
                    </Link>
                    <Link href="/find/id/foreigner" className="w-1/2">
                        <Button className="w-full border">
                            외국인
                        </Button>
                    </Link>
                </div> */}
            </div>
        </main>
    );
}