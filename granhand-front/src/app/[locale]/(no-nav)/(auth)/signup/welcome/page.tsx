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

            <div className="w-[358px] max-w-2xl flex flex-col items-center mx-auto">

                <div className="flex flex-col items-center justify-center mt-24 text-[#322A24] font-bold text-sm">
                    <div className="text-2xl font-bold text-[#6F6963] mb-20 text-center">
                        {t('auth:welcome_title')}
                    </div>
                    <ul className="mb-28 space-y-8">
                    <li className="flex items-center">
                        <Ticket className="w-8 h-8 text-[#F5D9A6] mr-6" />
                        <span className="font-bold">{t('auth:welcome_benefit1')}</span>
                    </li>
                    <li className="flex items-center">
                        <DollarSign className="w-8 h-8 text-[#F5D9A6] mr-6" />
                        <span className="font-bold">{t('auth:welcome_benefit2')}</span>
                    </li>
                    <li className="flex items-center">
                        <Heart className="w-8 h-8 text-[#F5D9A6] mr-6" />
                        <span className="font-bold">{t('auth:welcome_benefit3')}</span>
                    </li>
                    <li className="flex items-center">
                        <Truck className="w-8 h-8 text-[#F5D9A6] mr-6" />
                        <span className="font-bold">{t('auth:welcome_benefit4')}</span>
                    </li>
                    </ul>
                    <Link href={`${currentLocale}/login`}>
                        <Button
                        className="w-[400px] py-5 border h-[46px] !border-[#C0BCB6] text-[#322A24] font-bold text-sm bg-[#FDFBF5] rounded hover:bg-[#f5f3ef] transition"
                        >
                            {t('login')}
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
}