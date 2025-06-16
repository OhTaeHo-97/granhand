'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
import { useTranslation } from "../../../../../../../../utils/localization/client";
import BasicModal from "@/app/[locale]/components/modal";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

export default function ResetPasswordPage() {
    // const [name, setName] = useState("");
    // const [phone, setPhone] = useState("");
    const [open, setOpen] = useState(false)
    const [pw, setPw] = useState('')
    const [confirmPw, setConfirmPw] = useState('')
    // const router = useRouter()

    // const locale = useParams()?.locale as LocaleTypes
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    // const pathname = usePathname()
    // const currentLocale = pathname.split('/')[1] === 'en' ? '/en' : ''
    const currentLocale = useCurrentLocale()

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log("Find ID attempt:", { name, phone });
    // };

    const form = useForm<PasswordValues>({
        resolver: zodResolver(passwordSchema),
        defaultValues: {
            pw: '',
            confirmPw: ''
        }
    })

    const { setError } = form

    const handleResetPw = () => {
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

        setOpen(true)
    }

    return (
        <>
            <div className="max-w-xl w-[358px] mx-auto text-left min-h-screen">
                {/* Title */}
                <section className="mb-12">
                    <h1 className="text-lg font-bold mb-2 text-[#322A24] leading-[26px]">{t('auth:reset_pw')}</h1>
                    <p className="text-sm text-[#6F6963] font-medium leading-[22px]">
                    {t('auth:korean_reset_pw1')}<br />{t('auth:korean_reset_pw2')}
                    </p>
                </section>

                {/* 인증 버튼 */}
                <div className="mb-10 w-full space-y-2">
                    <h2 className="text-sm mb-2 text-[#322A24] leading-[22px] font-medium">{t('auth:pw')}</h2>
                    <Input
                        type="password"
                        {...form.register('pw')}
                        placeholder={t('auth:new_pw_placeholder')}
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                        className={`w-[358px] h-[46px] !border-[#C0BCB6] placeholder:text-[#C0BCB6] text-sm leading-[22px] ${form.formState.errors.pw && '!border-[#FF3E24]'}`}
                    />
                    {form.formState.errors.pw && (
                        <p className="text-[#FF3E24] text-[10px] font-medium leading-[18px]">{form.formState.errors.pw.message}</p>
                    )}
                    <Input
                        type="password"
                        {...form.register('confirmPw')}
                        placeholder={t('auth:confirm_pw_placeholder')}
                        value={confirmPw}
                        onChange={(e) => setConfirmPw(e.target.value)}
                        className={`w-[358px] h-[46px] !border-[#C0BCB6] placeholder:text-[#C0BCB6] text-sm leading-[22px] ${form.formState.errors.confirmPw && '!border-[#FF3E24]'}`}
                    />
                    {form.formState.errors.confirmPw && (
                        <p className="text-[#FF3E24] text-[10px] font-medium leading-[18px]">{form.formState.errors.confirmPw.message}</p>
                    )}
                </div>

                {/* 인증 버튼 */}
                <div className="text-center mb-4 w-full">
                    <Button
                        className="w-[358px] h-[46px] bg-[#322A24] disabled:bg-[#DBD7D0] text-[#FDFBF5] text-sm font-bold leading-[22px]"
                        disabled={!pw || !confirmPw}
                        // onClick={handleResetPw}
                        onClick={form.handleSubmit(handleResetPw)}
                    >
                    {t('auth:reset_pw')}
                    </Button>
                </div>
            </div>
            <BasicModal open={open} setOpen={setOpen} contents="complete_reset_pw" btnText="confirm" locale={locale} nextLink={`${currentLocale}/login`} />
        </>
    )
}