'use client';

import { Button } from '@/components/ui/button';
// import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import SignupHeader from '../components/header';
import { useLocaleAsLocaleTypes, useCurrentLocale } from '@/lib/useCurrentLocale';
import { useTranslation } from '../../../../../../../utils/localization/client';

export default function SelfIdentificationPage() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    const currentLocale = useCurrentLocale()

    return (
        <div className='container mx-auto px-6 pt-8 min-h-screen'>
            <SignupHeader />
            {/* <section className="w-full py-10 mx-auto">
                <h2 className="text-2xl font-semibold pb-8 border-b">회원가입</h2>
                <Button className="mb-6 text-gray-400 text-sm pl-0">
                    <ChevronLeft /> 이전단계
                </Button>
            </section> */}
            <div className="w-full max-w-2xl flex flex-col items-center mx-auto">
            <div className="w-[358px] mt-8">
            {/* 진행 바 */}
            <div className="w-full mb-10 relative h-1 bg-[#ECE9E2] rounded overflow-hidden">
                <div
                    className="absolute h-1 bg-[#7B736A] rounded"
                    style={{
                    left: '67%',
                    width: '33%',
                    top: 0,
                    }}
                />
            </div>
            {/* 안내문구 및 입력 */}
            <div className="mb-8">
                <h1 className="text-lg font-bold text-[#322A24] mb-2">{t('auth:identity_verify_title')}</h1>
                {/* <div className="text-2xl font-bold text-[#222] mb-4">
                본인인증을 진행해 주세요.
                </div> */}
                <div className="mb-50 text-sm font-medium text-[#6F6963]">
                    {t('auth:identity_verify_subtitle')}
                </div>
                
                <Link href={`${currentLocale}/signup/welcome`}>
                    <Button
                        className="w-full h-[46px] py-5 bg-[#322A24] text-[#FDFBF5] text-sm font-bold rounded cursor-pointer"
                    >
                        {t('auth:identity_verify')}
                    </Button>
                </Link>
            </div>
            </div>

            </div>
        </div>
    );
} 