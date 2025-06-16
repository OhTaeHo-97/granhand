'use client';

import { Button } from '@/components/ui/button';
import SignupHeader from '../components/header';
import { useLocaleAsLocaleTypes, useCurrentLocale } from '@/lib/useCurrentLocale';
import { useTranslation } from '../../../../../../../utils/localization/client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const emailSchema = z.object({
    email: z.string()
        .min(1, "이메일을 입력해 주세요.")
        .email('올바른 이메일 형식으로 입력해 주세요.')
})

type EmailValues = z.infer<typeof emailSchema>

export default function JoinIdPage() {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    const currentLocale = useCurrentLocale()

    const [email, setEmail] = useState('')

    const isValid = email.trim().length >= 3

    const form = useForm<EmailValues>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: ''
        }
    })

    const { setError } = form

    const handleEmailConfirm = () => {
        const values = form.getValues()
        const result = emailSchema.safeParse(values)

        if(!result.success) {
            result.error.errors.forEach((err) => {
                const field = err.path[0]
                if(field === 'email') {
                    setError('email', { message: err.message })
                }
            })
            return
        }

        router.push(`${currentLocale}/signup/pw`)
    }

    return (
        <div className='container mx-auto px-6 pt-8 min-h-screen'>
            <SignupHeader />
            <div className="w-full max-w-2xl flex flex-col items-center mx-auto">
                <div className="w-[358px] mt-8">
                    {/* 진행 바 */}
                    <div className="w-[358px] h-[4px] mb-10">
                        <div className="h-1 bg-[#ECE9E2] rounded">
                            <div className="h-1 bg-[#6F6963] rounded" style={{ width: '28%' }} />
                        </div>
                    </div>
                    {/* 안내문구 및 입력 */}
                    <div className="mb-8">
                        <h1 className="text-base font-medium text-[#322A24] mb-10 leading-[24px]">{t('auth:make_id_title')}</h1>
                        {/* <div className="text-2xl font-bold text-[#222] mb-10">
                        로그인에 사용할 아이디를 입력해 주세요.
                        </div> */}
                        <div className="mb-2 text-sm font-medium text-[#322A24] leading-[22px]">{t('auth:id')}</div>
                        <div className='mb-24'>
                            <Input
                                type="email"
                                placeholder={t('auth:id_placeholder')}
                                {...form.register('email')}
                                className={`w-[358px] h-[46px] border !border-[#C0BCB6] rounded text-[#7B736A] !text-sm placeholder-[#C0BCB6] leading-[2px] ${form.formState.errors.email && '!border-[#FF3E24]'}`}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {form.formState.errors.email && (
                                <p className="text-[#FF3E24] text-[10px] font-medium leading-[18px]">{form.formState.errors.email.message}</p>
                            )}
                        </div>
                        <Button
                            className="w-[358px] h-[46px] py-5 bg-[#302c26] text-[#FDFBF5] text-sm font-bold rounded cursor-pointer disabled:bg-[#DBD7D0]"
                            disabled={!isValid}
                            onClick={handleEmailConfirm}
                        >
                            {t('next')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
} 