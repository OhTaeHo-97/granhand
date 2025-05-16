'use client';

import { Button } from '@/components/ui/button';
import { DollarSign, Heart, Ticket, Truck } from 'lucide-react';
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
            </section> */}

            <div className="w-full max-w-2xl flex flex-col items-center mx-auto">

            <div className="flex flex-col items-center justify-center mt-24">
                <div className="text-3xl font-bold text-[#7B736A] mb-20 text-center">
                {t('auth:welcome_title')}
                </div>
                <ul className="mb-28 space-y-8">
                <li className="flex items-center text-xl text-[#222]">
                    <Ticket className="w-8 h-8 text-[#F5D9A6] mr-6" />
                    <span className="font-bold">{t('auth:welcome_benefit1')}</span>
                </li>
                <li className="flex items-center text-xl text-[#222]">
                    <DollarSign className="w-8 h-8 text-[#F5D9A6] mr-6" />
                    <span className="font-bold">{t('auth:welcome_benefit2')}</span>
                </li>
                <li className="flex items-center text-xl text-[#222]">
                    <Heart className="w-8 h-8 text-[#F5D9A6] mr-6" />
                    <span className="font-bold">{t('auth:welcome_benefit3')}</span>
                </li>
                <li className="flex items-center text-xl text-[#222]">
                    <Truck className="w-8 h-8 text-[#F5D9A6] mr-6" />
                    <span className="font-bold">{t('auth:welcome_benefit4')}</span>
                </li>
                </ul>
                <Link href={`${currentLocale}/login`}>
                    <Button
                    className="w-[400px] py-5 border h-15 border-[#CFC9BC] text-[#3B352E] text-2xl font-normal rounded bg-white hover:bg-[#f5f3ef] transition"
                    >
                        {t('login')}
                    </Button>
                </Link>
            </div>

            </div>
        </div>
    );
}