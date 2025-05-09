'use client';

import { Button } from '@/components/ui/button';
import SignupHeader from '../components/header';
import { getLocaleAsLocaleTypes, useCurrentLocale } from '@/lib/useCurrentLocale';
import { useTranslation } from '../../../../../../../utils/localization/client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

export default function JoinIdPage() {
    const router = useRouter()
    const locale = getLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    const currentLocale = useCurrentLocale()

    const [email, setEmail] = useState('')

    const isValid = email.trim().length >= 3

    return (
        <div className='container mx-auto px-6 pt-8 min-h-screen'>
            <SignupHeader />
            <div className="w-full max-w-2xl flex flex-col items-center mx-auto">
            <div className="w-[600px] mt-8">
            {/* 진행 바 */}
            <div className="w-full mb-10">
                <div className="h-1 bg-[#ECE9E2] rounded">
                <div className="h-1 bg-[#7B736A] rounded" style={{ width: '28%' }} />
                </div>
            </div>
            {/* 안내문구 및 입력 */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-[#222] mb-10">{t('auth:make_id_title')}</h1>
                {/* <div className="text-2xl font-bold text-[#222] mb-10">
                로그인에 사용할 아이디를 입력해 주세요.
                </div> */}
                <div className="mb-2 text-base font-normal text-[#222]">{t('auth:id')}</div>
                <Input
                type="email"
                placeholder={t('auth:id_placeholder')}
                className="w-full border border-[#CFC9BC] bg-white rounded text-[#7B736A] px-4 py-4 text-xl placeholder-[#C2BDB6] focus:outline-none focus:ring-2 focus:ring-[#ECE9E2] mb-24 h-16"
                onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                    className="w-full h-15 py-5 bg-[#302c26] text-white text-2xl font-normal rounded cursor-pointer"
                    disabled={!isValid}
                    onClick={() => router.push(`${currentLocale}/signup/pw`)}
                >
                    {t('next')}
                </Button>
            </div>
            </div>

            </div>
        </div>
    );
} 