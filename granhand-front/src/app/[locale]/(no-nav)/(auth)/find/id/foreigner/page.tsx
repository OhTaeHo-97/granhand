'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "../../../../../../../../utils/localization/client";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { Label } from "@/components/ui/label";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useState } from "react";

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

// export default function ForeignFindId({ onNext }: { onNext: () => void }) {
export default function ForeignFindId() {
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

        router.push(`${currentLocale}/find/id/result`)
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
                <h1 className="text-lg font-medium mb-2 leading-[24px] text-[#322A24]">{t('auth:verify_phone')}</h1>
            </section>

            {/* 인증 버튼 */}
            <div className="text-left mb-8 w-full">
                <div className="mb-4">
                    <Label className="block mb-2 font-semibold text-sm text-[#322A24] leading-[22px]">{t('auth:phone')}</Label>
                    <div className='flex gap-2 w-full items-start mt-2'>
                        <div className='flex-grow'>
                            <Input
                                type="text"
                                placeholder='+1 10 123 4567'
                                {...form.register('phone')}
                                value={phone}
                                className={`w-[257px] border !border-[#C0BCB6] rounded text-[#7B736A] !text-base placeholder-[#C2BDB6] h-[46px] ${form.formState.errors.phone && '!border-[#FF3E24]'}`}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            {form.formState.errors.phone && (
                                <p className="text-[#FF3E24] text-[10px] font-medium leading-[18px]">{form.formState.errors.phone.message}</p>
                            )}
                        </div>
                        <Button
                            className="w-[88px] h-[46px] py-5 bg-[#302c26] text-white font-bold text-sm rounded cursor-pointer disabled:bg-[#DBD7D0] flex-shrink-0"
                            disabled={!phone.trim()}
                            onClick={handlePhoneVerification}
                        >
                            {t('auth:request_ver')}
                        </Button>
                    </div>
                </div>

                <div className="mb-10">
                    <Label className="block mb-2 font-semibold text-sm text-[#322A24] leading-[22px]">{t('auth:verification')}</Label>
                    <div className="relative mt-2">
                        <Input
                            type="text"
                            placeholder='ex) 000000'
                            {...form.register('verify')}
                            value={validNumber}
                            className={`w-[357px] border !border-[#C0BCB6] rounded text-[#7B736A] px-4 py-4 !text-base placeholder-[#C2BDB6] h-[46px] ${form.formState.errors.verify && '!border-[#FF3E24]'}`}
                            onChange={(e) => setValidNumber(e.target.value)}
                        />
                        {timer > 0 && (
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#FF3E24]">
                                {formatTime(timer)}
                            </span>
                        )}
                    </div>
                    {form.formState.errors.verify && (
                        <p className="text-[#FF3E24] text-[10px] font-medium leading-[18px]">{form.formState.errors.verify.message}</p>
                    )}
                </div>

                <Button className="w-[358px] h-[46px] bg-[#322A24] text-white cursor-pointer font-bold text-sm disabled:bg-[#DBD7D0] px-[24px] py-[12px]" disabled={!validNumber || !phone} onClick={handleVerifyConfirm}>
                    {t('next')}
                </Button>
            </div>
        </div>
    )
}