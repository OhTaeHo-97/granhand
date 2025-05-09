'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import Navigation from "@/components/Navigation";
import { Apple, Facebook, Mail, MessageCircleMore } from "lucide-react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { useTranslation } from "../../../../../../utils/localization/client";
// import { useParams, usePathname } from "next/navigation";
// import { LocaleTypes } from "../../../../../../utils/localization/settings";
import { getLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const locale = useParams()?.locale as LocaleTypes
    const locale = getLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    // const pathname = usePathname()
    // const currentLocale = pathname.split('/')[1] === 'en' ? '/en' : ''
    const currentLocale = useCurrentLocale()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login attempt:", { email, password });
    };

    return (
        <div className="space-y-6 container mx-auto px-6 pt-8">
            <h2 className="text-lg font-medium text-left mb-8 border-b border-b-[#6f6963] pb-4">{t('login')}</h2>
            <main className="max-w-sm mx-auto">
                {/* 1. 로그인 입력 영역 */}
                <section className="space-y-4 mb-14">
                    <div>
                    <label htmlFor="email" className="block font-semibold mb-1">{t('auth:id')}</label>
                    <Input id="email" type="email" placeholder={`${t('auth:id_placeholder')}`} className="w-full border px-4 py-3 text-sm rounded-none h-10" />
                    </div>
                    <div>
                    <label htmlFor="password" className="block font-semibold mb-1">{t('auth:pw')}</label>
                    <Input id="password" type="password" placeholder={`${t('auth:pw_placeholder')}`} className="w-full border px-4 py-3 text-sm rounded-none h-10" />
                    </div>
                    <div className="flex items-center space-x-2">
                    {/* <Checkbox id="remember" /> */}
                    <Checkbox id="remember" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white" />
                    <label htmlFor="remember" className="text-sm">{t('auth:keep')}</label>
                    </div>
                </section>

                {/* 2. 로그인 버튼 */}
                <Button className="w-full h-12 bg-gray-300 text-white font-semibold mb-4">{t('login')}</Button>

                {/* 3. 회원가입 버튼 */}
                <Link href={`${currentLocale}/signup`}>
                    <Button variant="outline" className="w-full h-12 border-black text-black font-semibold mb-4">{t('auth:signup')}</Button>
                </Link>

                {/* 4. 아이디/비밀번호 찾기 */}
                <div className="flex justify-center space-x-4 text-sm text-gray-600">
                {/* <Link href="/find/id" title="아이디 찾기" className="text-gray-600 hover:text-gray-900">아이디 찾기</Link> */}
                    <Link href={`${currentLocale}/find/id`}>{t('auth:find_id')}</Link>
                    <span>|</span>
                    <Link href={`${currentLocale}/find/pw`}>{t('auth:find_pw')}</Link>
                </div>

                {/* Divider */}
                <div className="flex items-center mt-14 mb-6">
                    <div className="flex-grow border-t border-gray-300" />
                    <span className="px-4 text-sm text-gray-500">{t('auth:social')}</span>
                    <div className="flex-grow border-t border-gray-300" />
                </div>

                {/* 간편 로그인 아이콘 */}
                <div className="flex justify-around space-x-6 w-full">
                    <button className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <Apple className="w-5 h-5" />
                    </button>
                    <button className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <InstagramLogoIcon className="w-5 h-5" />
                    </button>
                    <button className="bg-yellow-300 text-black rounded-full w-12 h-12 flex items-center justify-center">
                    <MessageCircleMore className="w-5 h-5" />
                    </button>
                </div>
            </main>
        </div>
    )
}