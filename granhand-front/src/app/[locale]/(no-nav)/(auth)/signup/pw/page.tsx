'use client';

import { Button } from '@/components/ui/button';
import SignupHeader from '../components/header';
import { useRouter } from 'next/navigation';
import { useLocaleAsLocaleTypes, useCurrentLocale } from '@/lib/useCurrentLocale';
import { useTranslation } from '../../../../../../../utils/localization/client';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const passwordSchema = z.object({
    pw: z.string()
        .min(1, "비밀번호를 입력해 주세요.")
        .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{8,20}$/, '영문, 숫자, 특수문자 포함 8~20자 이내로 입력해 주세요.'),
    confirmPw: z.string()
})
.refine((data) => data.pw === data.confirmPw, {
    message: '비밀번호를 다시 확인해 주세요.',
    path: ['confirmPw']
})

type PasswordValues = z.infer<typeof passwordSchema>

export default function JoinPwPage() {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    const currentLocale = useCurrentLocale()

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const form = useForm<PasswordValues>({
        resolver: zodResolver(passwordSchema),
        defaultValues: {
            pw: '',
            confirmPw: ''
        },
    })

    const { setError } = form

    const handlePwConfirm = () => {
        const values = form.getValues()
        const result = passwordSchema.safeParse(values)

        if(!result.success) {
            result.error.errors.forEach((err) => {
                const field = err.path[0]
                if(field === 'pw') {
                    setError('pw', { message: err.message })
                }
                if(field === 'confirmPw') {
                    setError('confirmPw', { message: err.message })
                }
            })
            return
        }

        router.push(`${currentLocale}/signup/verify`)
    }

    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,20}$/

    // const isPasswordValid = passwordRegex.test(password)
    // const isPasswordMatch = password === confirmPassword
    // const isFormValid = isPasswordValid && isPasswordMatch

    return (
        <div className='container mx-auto px-6 pt-8 min-h-screen'>
            <SignupHeader />
            <div className="w-full max-w-2xl flex flex-col items-center mx-auto">
            <div className="w-[358px] mt-8">
                {/* 진행 바 */}
                <div className="w-[358px] mb-10 relative h-1 bg-[#ECE9E2] rounded overflow-hidden">
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
                <h1 className="text-base font-medium text-[#322A24] mb-10 leading-[24px]">{t('auth:make_pw_title')}</h1>
                {/* <div className="text-2xl font-bold text-[#222] mb-10">
                {t('auth:make_pw_title')}
                </div> */}
                <div className="mb-2 text-sm font-medium text-[#322A24] leading-[22px]">{t('auth:pw')}</div>
                <div className='mb-4'>
                    <Input
                        type="password"
                        placeholder={t('auth:make_pw_placeholder')}
                        {...form.register('pw')}
                        value={password}
                        className={`w-[342px] h-[46px] border !border-[#C0BCB6] rounded text-[#7B736A] text-sm placeholder-[#C0BCB6] leading-[22px] ${form.formState.errors.pw && '!border-[#FF3E24]'}`}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {form.formState.errors.pw && (
                        <p className="text-[#FF3E24] text-[10px] font-medium leading-[18px]">{form.formState.errors.pw.message}</p>
                    )}
                </div>
                <div className='mb-16'>
                    <Input
                        type="password"
                        placeholder={t('auth:confirm_make_pw_placeholder')}
                        {...form.register('confirmPw')}
                        value={confirmPassword}
                        className={`w-[342px] h-[46px] border !border-[#C0BCB6] rounded text-[#7B736A] text-sm placeholder-[#C0BCB6] leading-[22px] ${form.formState.errors.confirmPw && '!border-[#FF3E24]'}`}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {form.formState.errors.confirmPw && (
                        <p className="text-[#FF3E24] text-[10px] font-medium leading-[18px]">{form.formState.errors.confirmPw.message}</p>
                    )}
                </div>
                <Button
                    className="w-[358px] h-[46px] py-5 bg-[#322A24] text-white text-sm font-bold rounded cursor-pointer disabled:bg-[#DBD7D0]"
                    disabled={!password || !confirmPassword}
                    // onClick={handlePwConfirm}
                    onClick={form.handleSubmit(handlePwConfirm)}
                >
                    {t('next')}
                </Button>
            </div>
            </div>

            </div>
        </div>
    )
}