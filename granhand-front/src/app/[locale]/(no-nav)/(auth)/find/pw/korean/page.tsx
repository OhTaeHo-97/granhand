'use client'

// import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../../../../utils/localization/client";
import { useState } from "react";
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const emailSchema = z.object({
    email: z.string()
        .min(1, "이메일을 입력해 주세요.")
        .email('올바른 이메일 형식으로 입력해 주세요.')
})

type EmailValues = z.infer<typeof emailSchema>

export default function FindPasswordPage() {
    // const [name, setName] = useState("");
    // const [phone, setPhone] = useState("");
    const router = useRouter()

    // const locale = useParams()?.locale as LocaleTypes
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    const currentLocale = useCurrentLocale()

    const [email, setEmail] = useState('')

    const form = useForm<EmailValues>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: ''
        }
    })

    const { setError } = form

    const handleCertifyReq = () => {
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

        router.push(`${currentLocale}/find/pw/reset`)
    }

    return (
        <div className="max-w-xl w-[358px] mx-auto text-left min-h-screen">
            {/* Title */}
            <section className="mb-12">
                <h1 className="text-lg font-bold mb-2 text-[#322A24] leading-[26px]">{t('auth:find_pw')}</h1>
                <p className="text-sm text-[#6F6963] font-medium leading-[22px]">
                {t('auth:korean_find_pw1')}<br />{t('auth:korean_find_pw2')}
                </p>
            </section>

            {/* 인증 버튼 */}
            <div className="mb-36 w-full">
                <h2 className="text-sm mb-2 font-medium text-[#322A24] leading-[22px]">{t('auth:id')}</h2>
                <Input
                    type="email"
                    {...form.register('email')}
                    placeholder={`${t('auth:id_placeholder')}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-[357px] h-[46px] !border-[#C0BCB6] placeholder:text-[#C0BCB6] px-[16px] py-[12px] ${form.formState.errors.email && '!border-[#FF3E24]'}`}
                />
                {form.formState.errors.email && (
                    <p className="text-[#FF3E24] text-[10px] font-medium leading-[18px]">{form.formState.errors.email.message}</p>
                )}
            </div>

            {/* 인증 버튼 */}
            <div className="text-center mb-8 w-full">
                <Button className="bg-[#322A24] disabled:bg-[#DBD7D0] text-[#FDFBF5] h-[46px] text-sm font-bold w-[358px] leading-[22px]" disabled={!email} onClick={handleCertifyReq}>
                    {t('next')}
                </Button>
            </div>
        </div>
    )
}