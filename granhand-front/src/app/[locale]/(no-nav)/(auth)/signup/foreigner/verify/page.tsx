'use client';

import { Button } from '@/components/ui/button';
import { useLocaleAsLocaleTypes, useCurrentLocale } from '@/lib/useCurrentLocale';
import SignupHeader from '../../components/header';
import { Input } from '@/components/ui/input';
import { useEffect, useRef, useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useTranslation } from '../../../../../../../../utils/localization/client';

const verifySchema = z.object({
    phone: z.string()
        .min(1, "휴대폰 번호를 입력해 주세요.")
        .regex(
            /^\+\d+ \d+ \d{3} \d{4}$/,
            {
                message: "휴대폰 번호는 +국가코드 지역코드 번호-1 번호-2 형식이어야 합니다 (예: +1 10 123 4567)"
            }
        ),
    verify: z.string()
})

type VerifyValues = z.infer<typeof verifySchema>

export default function ForeignIdentificationPage() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    const currentLocale = useCurrentLocale()
    const router = useRouter()
    const [phone, setPhone] = useState('')
    const [verify, setVerify] = useState('')
    const [timer, setTimer] = useState(0)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    const form = useForm<VerifyValues>({
        resolver: zodResolver(verifySchema),
        defaultValues: {
            phone: '',
            verify: ''
        }
    })

    const { setError } = form

    const handlePhoneVerification = () => {
        const values = form.getValues()
        const result = verifySchema.safeParse(values)

        if(!result.success) {
            result.error.errors.forEach((err) => {
                const field = err.path[0]
                if(field === 'phone') {
                    setError('phone', { message: err.message })
                }
            })
            return
        }

        startTimer()
    }

    const handleVerifyConfirm = () => {
        const values = form.getValues()
        const result = verifySchema.safeParse(values)

        if(!result.success) {
            result.error.errors.forEach((err) => {
                const field = err.path[0]
                if(field === 'phone') {
                    setError('phone', { message: err.message })
                }
                if(field === 'verify') {
                    setError('verify', { message: err.message })
                }
            })
            return
        }

        router.push(`${currentLocale}/signup/welcome`)
    }

    const startTimer = () => {
        setTimer(180)
        if(timerRef.current) clearInterval(timerRef.current)
        
        timerRef.current = setInterval(() => {
            setTimer((prev) => {
                if(prev <= 1) {
                    clearInterval(timerRef.current!)
                    return 0
                }
                return prev - 1
            })
        }, 1000)
    }

    useEffect(() => {
        return () => {
            if(timerRef.current) clearInterval(timerRef.current)
        }
    }, [])

    const formatTime = (sec: number) => {
        const m = String(Math.floor(sec / 60)).padStart(2, '0')
        const s = String(sec % 60).padStart(2, '0')
        return `${m}:${s}`
    }

    return (
        <div className='container mx-auto px-6 pt-8 min-h-screen'>
            <SignupHeader />
            <div className="w-full max-w-2xl flex flex-col items-center mx-auto">
            <div className="w-[358px] mt-8">
            <div className='space-y-10'>
                <h1 className="text-base font-medium text-[#322A24]">{t('auth:verify_phone')}</h1>
                <div className='space-y-4'>
                    <section>
                        <div className="mb-2 text-sm font-medium text-[#322A24]">{t('auth:phone')}</div>
                        <div className='flex gap-3 w-fullitems-start'>
                            <div className='flex-grow'>
                                <Input
                                    type="text"
                                    placeholder='+1 10 123 4567'
                                    {...form.register('phone')}
                                    value={phone}
                                    className={`w-[257px] h-[46px] text-sm border border-[#CFC9BC] rounded text-[#7B736A] placeholder-[#C2BDB6] ${form.formState.errors.phone && '!border-[#FF3E24]'}`}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                {form.formState.errors.phone && (
                                    <p className="text-[#FF3E24] text-[10px] font-medium leading-[18px]">{form.formState.errors.phone.message}</p>
                                )}
                            </div>
                            <Button
                                className="w-[88px] h-[46px] py-5 bg-[#322A24] text-white text-sm font-bold rounded cursor-pointer disabled:bg-[#DBD7D0] flex-shrink-0"
                                disabled={!phone.trim()}
                                onClick={handlePhoneVerification}
                            >
                                {t('auth:request_ver')}
                            </Button>
                        </div>
                    </section>
                    <section>
                        <div className="mb-2 text-base font-normal text-[#222]">{t('auth:verification')}*</div>
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder='ex) 000000'
                                {...form.register('verify')}
                                value={verify}
                                className={`w-full h-[46px] text-sm border border-[#CFC9BC] rounded text-[#7B736A] placeholder-[#C2BDB6] ${form.formState.errors.verify && '!border-[#FF3E24]'}`}
                                onChange={(e) => setVerify(e.target.value)}
                            />
                            {timer > 0 && (
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 text-sm font-semibold">
                                    {formatTime(timer)}
                                </span>
                            )}
                        </div>
                        {form.formState.errors.verify && (
                            <p className="text-[#FF3E24] text-[10px] font-medium leading-[18px]">{form.formState.errors.verify.message}</p>
                        )}
                    </section>
                </div>
                <Button
                    className="w-full h-[46px] px-[24px] py-[12px] bg-[#322A24] text-white text-sm font-bold rounded cursor-pointer disabled:bg-[#DBD7D0]"
                    // disabled={!isValid}
                    onClick={handleVerifyConfirm}
                >
                    {t('next')}
                </Button>
            </div>
            </div>

            </div>
        </div>
    );
} 