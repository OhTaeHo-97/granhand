'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SignupHeader from '../components/header';
import { useRouter } from 'next/navigation';
import { getLocaleAsLocaleTypes, useCurrentLocale } from '@/lib/useCurrentLocale';
import { useTranslation } from '../../../../../../../utils/localization/client';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function JoinPwPage() {
    const router = useRouter()
    const locale = getLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    const currentLocale = useCurrentLocale()

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,20}$/

    const isPasswordValid = passwordRegex.test(password)
    const isPasswordMatch = password === confirmPassword
    const isFormValid = isPasswordValid && isPasswordMatch

    return (
        <div className='container mx-auto px-6 pt-8 min-h-screen'>
            <SignupHeader />
            <div className="w-full max-w-2xl flex flex-col items-center mx-auto">
            <div className="w-[600px] mt-8">
                {/* 진행 바 */}
                <div className="w-full mb-10 relative h-1 bg-[#ECE9E2] rounded overflow-hidden">
                    <div
                        className="absolute h-1 bg-[#7B736A] rounded"
                        style={{
                        left: '32%',
                        width: '36%',
                        top: 0,
                        }}
                    />
                </div>
            {/* 안내문구 및 입력 */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-[#222] mb-10">{t('auth:make_pw_title')}</h1>
                {/* <div className="text-2xl font-bold text-[#222] mb-10">
                {t('auth:make_pw_title')}
                </div> */}
                <div className="mb-2 text-lg font-normal text-[#222]">{t('auth:pw')}</div>
                <Input
                type="password"
                placeholder={t('auth:make_pw_placeholder')}
                className="w-full border border-[#CFC9BC] bg-white rounded text-[#7B736A] px-4 py-4 text-xl placeholder-[#C2BDB6] focus:outline-none focus:ring-2 focus:ring-[#ECE9E2] mb-4 h-16"
                onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                type="password"
                placeholder={t('auth:confirm_make_pw_placeholder')}
                className="w-full border border-[#CFC9BC] bg-white rounded text-[#7B736A] px-4 py-4 text-xl placeholder-[#C2BDB6] focus:outline-none focus:ring-2 focus:ring-[#ECE9E2] mb-16 h-16"
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button
                    className="w-full h-15 py-5 bg-[#302c26] text-white text-2xl font-normal rounded cursor-pointer"
                    disabled={!isFormValid}
                    onClick={() => router.push(`${currentLocale}/signup/verify`)}
                >
                    {t('next')}
                </Button>
            </div>
            </div>

            </div>
        </div>
    );
}