'use client'

import { Instagram } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "../../utils/localization/client";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";

export default function Footer() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'common')
    const currentLocale = useCurrentLocale()

    return (
        <footer className="bg-[#faf6ee] text-gray-600 px-8 py-12 text-sm mt-16">
            <div className="container mx-auto px-6">
                {/* 상단: 아이콘 + 메뉴 */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 mx-auto">
                    <div className="mb-4 md:mb-0">
                        <Instagram className="w-6 h-6" />
                    </div>
                    <div className="max-w-4xl flex flex-wrap gap-4 text-xs items-start">
                        <Link href={`${currentLocale}/faq`}>{t('faq')}</Link>
                        <span>|</span>
                        <Link href={`${currentLocale}/about`}>{t('about')}</Link>
                        <span>|</span>
                        <Link href="#">{t('recruitment')}</Link>
                        <span>|</span>
                        <Link href={`${currentLocale}/cooperation`}>{t('cooperation')}</Link>
                        <span>|</span>
                        <Link href="#">{t('online')}</Link>
                    </div>
                </div>

                {/* 구분선 */}
                <div className="border-t border-gray-300 mb-8" />

                {/* 중간: 문구 */}
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
                    <div className="text-lg font-semibold text-gray-700">
                        <p>Sometimes you win,</p>
                        <p>Sometimes you learn.</p>
                    </div>
                    {/* <p className="max-w-xl leading-relaxed text-sm text-gray-600"> */}
                    <p className="max-w-4xl leading-relaxed text-sm text-gray-600">
                        {t('introduction')}
                    </p>
                </div>

                {/* 하단: 약관 등 */}
                {/* <div className="text-[10px] text-gray-400 flex flex-wrap gap-2">
                    <Link href="#">이용약관</Link>
                    <span>|</span>
                    <Link href="#">개인정보처리방침</Link>
                    <span>|</span>
                    <Link href="#">개인정보관리책임 최지현</Link>
                </div> */}
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
                    <div className="text-[10px] font-semibold text-gray-400 flex flex-wrap gap-2">
                        <Link href={`${currentLocale}/terms`}>{t('tnc')}</Link>
                        <span>|</span>
                        <Link href={`${currentLocale}/terms/privacy`}>{t('privacy')}</Link>
                        <span>|</span>
                        {t('privacy_officer')}
                    </div>
                    {/* <p className="max-w-xl leading-relaxed text-sm text-gray-600"> */}
                    <p className="max-w-4xl leading-relaxed text-[10px] text-gray-400">
                        {t('info')} 127-88-01898 14-2, Jahamun-ro 4-gil, Jongno-gu, Seoul, Korea T. 82-2-333-6525. E-Mail. hello@granhand.com
                    </p>
                </div>
            </div>
        </footer>
    )
}