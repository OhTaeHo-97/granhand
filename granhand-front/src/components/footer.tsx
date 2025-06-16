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
        <footer className="bg-[#FDFBF5] text-gray-600 py-12 text-sm mt-16 container mx-auto">
            <div className="w-[1120px] mx-auto px-6 grid grid-cols-[300px_1fr] gap-x-20 gap-y-8">
                <div className="flex items-center justify-start text-[#6F6963]">
                    <Instagram className="w-[18px] h-[18px] text-[#6F6963]" />
                </div>
                <div className="flex flex-wrap items-center justify-start gap-4 text-xs text-[#6F6963]">
                    <Link href={`${currentLocale}/faq`} className="font-[400]">{t('faq')}</Link>
                    <span className="w-[0.5px]">|</span>
                    <Link href={`${currentLocale}/about`} className="font-[400]">{t('about')}</Link>
                    <span className="w-[0.5px]">|</span>
                    <Link href="#" className="font-[400]">{t('recruitment')}</Link>
                    <span className="w-[0.5px]">|</span>
                    <Link href={`${currentLocale}/cooperation`} className="font-[400]">{t('cooperation')}</Link>
                    <span className="w-[0.5px]">|</span>
                    <Link href="#" className="font-[400]">{t('online')}</Link>
                </div>

                {/* 구분선 */}
                <div className="border-t border-[#E9E6E0] col-span-2" />

                {/* 중간: 문구 */}
                <div className="text-base font-[500] text-[#6F6963]">
                    <p>Sometimes you win,</p>
                    <p>Sometimes you learn.</p>
                </div>
                <p className="leading-relaxed text-xs text-[#6F6963] font-[400]">
                    {t('introduction')}
                </p>

                {/* 하단: 약관 등 */}
                <div className="text-[10px] font-semibold text-[#C0BCB6] flex flex-wrap gap-2">
                    <Link href={`${currentLocale}/terms`} className="font-[400]">{t('tnc')}</Link>
                    <span className="!w-[0.5px]">|</span>
                    <Link href={`${currentLocale}/terms/privacy`} className="font-[400]">{t('privacy')}</Link>
                    <span className="!w-[0.5px]">|</span>
                    <span className="font-[400]">{t('privacy_officer')}</span>
                </div>
                <p className="leading-relaxed text-[10px] font-[400] text-[#C0BCB6]">
                    {t('info')} 127-88-01898 14-2, Jahamun-ro 4-gil, Jongno-gu, Seoul, Korea T. 82-2-333-6525. E-Mail. hello@granhand.com
                </p>
            </div>
            
        </footer>
    )


    // <footer className="bg-[#FDFBF5] text-gray-600 px-8 py-12 text-sm mt-16">
    //         <div className="container mx-auto px-6">
    //             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 mx-auto">
    //                 <div className="mb-4 md:mb-0">
    //                     <Instagram className="w-[18px] h-[18px] text-[#6F6963]" />
    //                 </div>
    //                 <div className="max-w-4xl flex flex-wrap gap-4 text-xs items-start text-[#6F6963]">
    //                     <Link href={`${currentLocale}/faq`}>{t('faq')}</Link>
    //                     <span>|</span>
    //                     <Link href={`${currentLocale}/about`}>{t('about')}</Link>
    //                     <span>|</span>
    //                     <Link href="#">{t('recruitment')}</Link>
    //                     <span>|</span>
    //                     <Link href={`${currentLocale}/cooperation`}>{t('cooperation')}</Link>
    //                     <span>|</span>
    //                     <Link href="#">{t('online')}</Link>
    //                 </div>
    //             </div>

    //             {/* 구분선 */}
    //             <div className="border-t border-[#E9E6E0] mb-8" />

    //             {/* 중간: 문구 */}
    //             <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
    //                 <div className="text-base font-semibold text-[#6F6963]">
    //                     <p>Sometimes you win,</p>
    //                     <p>Sometimes you learn.</p>
    //                 </div>
    //                 {/* <p className="max-w-xl leading-relaxed text-sm text-gray-600"> */}
    //                 <p className="max-w-4xl leading-relaxed text-xs text-[#6F6963]">
    //                     {t('introduction')}
    //                 </p>
    //             </div>

    //             {/* 하단: 약관 등 */}
    //             <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
    //                 <div className="text-[10px] font-semibold text-[#C0BCB6] flex flex-wrap gap-2">
    //                     <Link href={`${currentLocale}/terms`}>{t('tnc')}</Link>
    //                     <span>|</span>
    //                     <Link href={`${currentLocale}/terms/privacy`}>{t('privacy')}</Link>
    //                     <span>|</span>
    //                     {t('privacy_officer')}
    //                 </div>
    //                 {/* <p className="max-w-xl leading-relaxed text-sm text-gray-600"> */}
    //                 <p className="max-w-4xl leading-relaxed text-[10px] text-[#C0BCB6]">
    //                     {t('info')} 127-88-01898 14-2, Jahamun-ro 4-gil, Jongno-gu, Seoul, Korea T. 82-2-333-6525. E-Mail. hello@granhand.com
    //                 </p>
    //             </div>
    //         </div>
    //     </footer>
}