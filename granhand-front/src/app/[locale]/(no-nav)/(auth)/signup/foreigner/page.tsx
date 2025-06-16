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

const signupSchema = z.object({
    name: z.string()
        .min(1, "이름을 입력해 주세요."),
    birth: z.string()
        .min(1, "생년월일을 입력해 주세요.")
        .regex(/^\d{2}\/\d{2}\/\d{2}$/, {
            message: "생년월일은 yy/dd/mm 형식이어야 합니다 (예: 24/01/15)"
        })
        .refine((val) => {
            const parts = val.split('/')
            if (parts.length !== 3) {
                return false
            }
        
            const year = parseInt(parts[0], 10)
            const day = parseInt(parts[1], 10)
            const month = parseInt(parts[2], 10)
        
            if (isNaN(year) || isNaN(day) || isNaN(month) ||
                parts[0].length !== 2 || parts[1].length !== 2 || parts[2].length !== 2) {
                return false;
            }
        
            const dateObj = new Date(year, month - 1, day)
        
            if (isNaN(dateObj.getTime())) {
                return false;
            }
        
            return dateObj.getFullYear() % 100 === year &&
                    dateObj.getMonth() + 1 === month &&
                    dateObj.getDate() === day;
        }, {
            message: "유효하지 않은 생년월일입니다."
        }),
    email: z.string()
        .min(1, "이메일을 입력해 주세요.")
        .email('올바른 이메일 형식으로 입력해 주세요.'),
    pw: z.string()
        .min(1, "비밀번호를 입력해 주세요.")
        .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{8,20}$/, '영문, 숫자, 특수문자 포함 8~20자 이내로 입력해 주세요.'),
    confirmPw: z.string()
}).refine((data) => data.pw === data.confirmPw, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"]
})

type SignupValues = z.infer<typeof signupSchema>

export default function ForeignerSignupPage() {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    const currentLocale = useCurrentLocale()

    const [name, setName] = useState('')
    const [birth, setBirth] = useState('')
    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')
    const [confirmPw, setConfirmPw] = useState('')

    const isValid = name.trim() && birth.trim() && email.trim() && pw.trim() && confirmPw.trim()

    const form = useForm<SignupValues>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: '',
            birth: '',
            email: '',
            pw: '',
            confirmPw: ''
        }
    })

    const { setError } = form

    const handleSignupConfirm = () => {
        const values = form.getValues()
        const result = signupSchema.safeParse(values)

        if(!result.success) {
            result.error.errors.forEach((err) => {
                const field = err.path[0]
                if(field === 'name') {
                    setError('name', { message: err.message })
                }
                if(field === 'birth') {
                    setError('birth', { message: err.message })
                }
                if(field === 'email') {
                    setError('email', { message: err.message })
                }
                if(field === 'pw') {
                    setError('pw', { message: err.message })
                }
                if(field === 'confirmPw') {
                    setError('confirmPw', { message: err.message })
                }
            })
            return
        }

        router.push(`${currentLocale}/signup/foreigner/verify`)
    }

    return (
        <div className='container mx-auto px-6 pt-8 min-h-screen'>
            <SignupHeader />
            <div className="w-full max-w-2xl flex flex-col items-center mx-auto">
            <div className="w-[358px] mt-8">
            
            {/* 안내문구 및 입력 */}
            <div className='space-y-6'>
                <h1 className="text-lg font-bold text-[#322A24]">{t('auth:signup')}</h1>
                <p className="text-base font-medium text-[#6F6963]">{t('auth:make_id_pw_title')}</p>
                <div className='space-y-4'>
                    <section>
                        <div className="mb-2 text-sm font-medium text-[#322A24]">{t('auth:foreign_name')}*</div>
                        <div>
                            <Input
                                type="text"
                                placeholder={t('auth:foreign_name_placeholder')}
                                {...form.register('name')}
                                value={name}
                                className={`w-full border border-[#CFC9BC] rounded text-[#7B736A] !text-sm placeholder-[#C2BDB6] h-[46px] ${form.formState.errors.name && '!border-[#FF3E24]'}`}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {form.formState.errors.name && (
                                <p className="text-[#FF3E24] text-[10px] font-medium leading-[18px]">{form.formState.errors.name.message}</p>
                            )}
                        </div>
                    </section>
                    <section>
                        <div className="mb-2 text-sm font-medium text-[#322A24]">{t('auth:birth')}*</div>
                        <div>
                            <Input
                                type="text"
                                placeholder="YY/DD/MM"
                                {...form.register('birth')}
                                value={birth}
                                className={`w-full h-[46px] text-sm border border-[#CFC9BC] rounded text-[#7B736A] placeholder-[#C2BDB6] ${form.formState.errors.birth && '!border-[#FF3E24]'}`}
                                onChange={(e) => setBirth(e.target.value)}
                            />
                            {form.formState.errors.birth && (
                                <p className="text-[#FF3E24] text-[10px] font-medium leading-[18px]">{form.formState.errors.birth.message}</p>
                            )}
                        </div>
                    </section>
                    <section>
                        <div className="mb-2 text-base font-normal text-[#322A24]">{t('auth:id')}*</div>
                        <div>
                            <Input
                                type="email"
                                placeholder={t('auth:id_placeholder')}
                                {...form.register('email')}
                                value={email}
                                className={`w-full h-[46px] text-sm border border-[#CFC9BC] rounded text-[#7B736A] placeholder-[#C2BDB6] ${form.formState.errors.email && '!border-[#FF3E24]'}`}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {form.formState.errors.email && (
                                <p className="text-[#FF3E24] text-[10px] font-medium leading-[18px]">{form.formState.errors.email.message}</p>
                            )}
                        </div>
                    </section>
                    <section>
                        <div className="mb-2 text-base font-normal text-[#322A24]">{t('auth:pw')}*</div>
                        <div>
                            <Input
                                type="password"
                                placeholder={t('auth:make_pw_placeholder')}
                                {...form.register('pw')}
                                value={pw}
                                className={`w-full h-[46px] text-sm mb-2 border border-[#CFC9BC] rounded text-[#7B736A] placeholder-[#C2BDB6] ${form.formState.errors.pw && '!border-[#FF3E24]'}`}
                                onChange={(e) => setPw(e.target.value)}
                            />
                            {form.formState.errors.pw && (
                                <p className="text-[#FF3E24] text-[10px] font-medium leading-[18px]">{form.formState.errors.pw.message}</p>
                            )}
                            <Input
                                type="password"
                                placeholder={t('auth:foreign_confirm_pw_placeholder')}
                                {...form.register('confirmPw')}
                                value={confirmPw}
                                className={`w-full h-[46px] text-sm border border-[#CFC9BC] rounded text-[#7B736A] placeholder-[#C2BDB6] ${form.formState.errors.confirmPw && '!border-[#FF3E24]'}`}
                                onChange={(e) => setConfirmPw(e.target.value)}
                            />
                            {form.formState.errors.confirmPw && (
                                <p className="text-[#FF3E24] text-[10px] font-medium leading-[18px]">{form.formState.errors.confirmPw.message}</p>
                            )}
                        </div>
                    </section>
                </div>
                <Button
                    className="w-full h-[46px] px-[24px] py-[12px] bg-[#302c26] text-[#FDFBF5] text-sm font-bold rounded cursor-pointer disabled:bg-[#DBD7D0]"
                    disabled={!isValid}
                    onClick={handleSignupConfirm}
                >
                    {t('auth:signup_with_verify')}
                </Button>
            </div>
            </div>
            </div>
        </div>
    );
} 