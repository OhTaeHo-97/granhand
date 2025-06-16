'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { useRouter } from "next/navigation";
import { useTranslation } from "../../../../../../../../utils/localization/client";
import { useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

export default function ForeignFindPw() {
// export default function ForeignFindPw({ onNext }: { onNext: () => void }) {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    const currentLocale = useCurrentLocale()
    const [phone, setPhone] = useState('')
    const [validNumber, setValidNumber] = useState('')
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

        router.push(`${currentLocale}/find/pw/reset`)
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

    // const handleClickValidReq = () => {
    //     startTimer()
    // }

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
        <div className="max-w-xl w-[358px] mx-auto text-left min-h-screen">
            {/* Title */}
            <section className="mb-10">
                <h1 className="text-base font-medium mb-2 text-[#322A24]">{t('auth:verify_phone')}</h1>
            </section>

            {/* 인증 버튼 */}
            <div className="text-left mb-8 w-full">
                <div className="mb-4">
                    <Label className="block mb-2 text-sm font-medium leading-[22px] text-[#322A24]">{t('auth:phone')}</Label>
                    <div className='flex gap-2 w-fullitems-start'>
                        <div className='flex-grow'>
                            <Input
                                type="text"
                                placeholder='+1 10 123 4567'
                                {...form.register('phone')}
                                value={phone}
                                className={`w-[257px] h-[46px] border !border-[#C0BCB6] rounded text-[#7B736A] text-sm placeholder-[#C2BDB6] ${form.formState.errors.phone && '!border-[#FF3E24]'}`}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            {form.formState.errors.phone && (
                                <p className="text-[#FF3E24] text-[10px] font-medium leading-[18px]">{form.formState.errors.phone.message}</p>
                            )}
                        </div>
                        <Button
                            className="h-[46px] w-[88px] px-[18px] py-[12px] bg-[#302c26] text-sm text-[#FDFBF5] font-bold rounded cursor-pointer leading-[22px] disabled:bg-[#DBD7D0] flex-shrink-0"
                            disabled={!phone.trim()}
                            onClick={handlePhoneVerification}
                        >
                            {t('auth:request_ver')}
                        </Button>
                    </div>
                </div>

                <div className="mb-10">
                    <Label className="block mb-2 font-medium text-sm text-[#322A24]">{t('auth:verification')}</Label>
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder='ex) 000000'
                            {...form.register('verify')}
                            value={validNumber}
                            className={`w-[357px] h-[46px] border !border-[#C0BCB6] rounded text-[#7B736A] px-[16px] py-[12px] text-sm placeholder-[#C2BDB6] ${form.formState.errors.verify && '!border-[#FF3E24]'}`}
                            onChange={(e) => setValidNumber(e.target.value)}
                        />
                        {timer > 0 && (
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#FF3E24] text-sm font-semibold">
                                {formatTime(timer)}
                            </span>
                        )}
                    </div>
                    {form.formState.errors.verify && (
                        <p className="text-[#FF3E24] text-[10px] font-medium leading-[18px]">{form.formState.errors.verify.message}</p>
                    )}
                </div>

                <Button className="w-[358px] h-[46px] bg-[#322A24] text-[#FDFBF5] cursor-pointer font-bold text-sm disabled:bg-[#DBD7D0] leading-[22px]" disabled={!validNumber || !phone} onClick={handleVerifyConfirm}>
                    {t('next')}
                </Button>
            </div>
        </div>
    )
}