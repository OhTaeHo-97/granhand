'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslation } from "../../../../../../utils/localization/client";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { Label } from "@/components/ui/label";
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import Image from "next/image";

const loginSchema = z.object({
    id: z.string()
        .min(1, "아이디를 입력해 주세요.")
        .email("올바른 이메일 형식으로 입력해 주세요."),
    passwd: z.string()
        .min(1, "비밀번호를 입력해 주세요.")
        .min(8, "비밀번호를 8자리 이상 입력해 주세요.")
        .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{8,}$/, '비밀번호는 영문, 숫자, 특수문자 포함 8자리 이상입니다.'),
})

type LoginValues = z.infer<typeof loginSchema>

export default function LoginPage() {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    const currentLocale = useCurrentLocale()
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<LoginValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            id: "",
            passwd: ""
        },
    })

    const { setError } = form

    // async function onSubmit(data: LoginValues) {
    //     setIsLoading(true)

    //     try {
    //         // 로그인 처리
    //         router.push(`${currentLocale}/`)
    //     } catch(error) {
    //         console.error('로그인 에러')
    //         setError('id', { message: '로그인 실패' })
    //     } finally {
    //         setIsLoading(false)
    //     }
    // }

    async function onSubmit() {
        setIsLoading(true)

        try {
            // 로그인 처리
            router.push(`${currentLocale}/`)
        } catch(error) {
            console.error('로그인 에러:', error)
            setError('id', { message: '로그인 실패' })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="space-y-6 container mx-auto px-6 pt-8">
            <h2 className="text-lg font-medium text-left mb-8 border-b border-b-[#6f6963] pb-4 text-[#6F6963] leading-[26px]">{t('login')}</h2>
            <main className="max-w-sm mx-auto">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <section className="space-y-4 mb-24">
                            <FormField
                                control={form.control}
                                name="id"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#322A24] font-[500]">{t('auth:id')}</FormLabel>
                                        <FormControl>
                                            <Input id="email" type="email" placeholder={`${t('auth:id_placeholder')}`} {...field} className={`w-[358px] border !border-[#C0BCB6] px-[18px] py-[12px] text-sm rounded-none h-[46px] mt-2 placeholder:text-[#C0BCB6] ${ form.formState.errors.id && '!border-[#FF3E24]' }`} />
                                        </FormControl>
                                        <FormMessage className="text-[#FF3E24] text-[10px] font-medium leading-[18px]" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="passwd"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#322A24] font-[500]">{t('auth:pw')}</FormLabel>
                                        <FormControl>
                                            <Input id="password" type="password" placeholder={`${t('auth:pw_placeholder')}`} {...field} className={`w-[358px] border !border-[#C0BCB6] px-[18px] py-[12px] text-sm rounded-none h-[46px] mt-2 placeholder:text-[#C0BCB6] ${ form.formState.errors.passwd && '!border-[#FF3E24]' }`} />
                                        </FormControl>
                                        <FormMessage className="text-[#FF3E24] text-[10px] font-medium leading-[18px]" />
                                    </FormItem>
                                )}
                            />

                            <Label className="flex space-x-2 items-center">
                                <Checkbox id="remember" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white !border-[#C0BCB6]" />
                                <span className="text-sm text-[#322A24] font-[500]">{t('auth:keep')}</span>
                            </Label>
                        </section>

                        {/* 2. 로그인 버튼 */}
                        <Button
                            type="submit"
                            className="w-[358px] h-[46px] bg-[#322A24] text-[#FDFBF5] font-bold mb-4 cursor-pointer disabled:bg-[#DBD7D0]"
                            disabled={!form.getValues('id') || !form.getValues('passwd') || isLoading}
                        >
                            {isLoading ? '로그인 중' : t('login')}
                        </Button>
                    </form>

                    {/* 3. 회원가입 버튼 */}
                    <Link href={`${currentLocale}/signup`}>
                        <Button variant="outline" className="w-[358px] h-[46px] !border-[#6F6963] text-[#322A24] font-bold mb-4 cursor-pointer">{t('auth:signup')}</Button>
                    </Link>
                </Form>

                {/* 4. 아이디/비밀번호 찾기 */}
                <div className="flex justify-center space-x-4 text-sm text-[#322A24]">
                {/* <Link href="/find/id" title="아이디 찾기" className="text-gray-600 hover:text-gray-900">아이디 찾기</Link> */}
                    <Link href={`${currentLocale}/find/id`} className="font-[500]">{t('auth:find_id')}</Link>
                    <span className="text-[#C0BCB6] w-[1px]">|</span>
                    <Link href={`${currentLocale}/find/pw`} className="font-[500]">{t('auth:find_pw')}</Link>
                </div>

                {/* Divider */}
                <div className="flex items-center mt-14 mb-6">
                    <div className="flex-grow border-t !border-[#E9E6E0]" />
                    <span className="px-4 text-sm text-[#322A24] font-[500]">{t('auth:social')}</span>
                    <div className="flex-grow border-t !border-[#E9E6E0]" />
                </div>

                {/* 간편 로그인 아이콘 */}
                <div className="flex justify-around space-x-6 w-full">
                    <button className="text-white rounded-full w-12 h-12 flex items-center justify-center">
                    {/* <Apple className="w-5 h-5" /> */}
                    <Image
                        src="/apple-icon.png"
                        alt="Apple Login"
                        width={120}
                        height={120}
                        className="w-[48px] h-[48px]"
                    />
                    </button>
                    <button className="text-white rounded-full w-12 h-12 flex items-center justify-center">
                    {/* <InstagramLogoIcon className="w-5 h-5" /> */}
                    <Image
                        src="/naver-icon.png"
                        alt="Naver Login"
                        width={120}
                        height={120}
                        className="w-[48px] h-[48px]"
                    />
                    </button>
                    <button className="bg-yellow-300 text-black rounded-full w-12 h-12 flex items-center justify-center">
                    <Image
                        src="/kakao-icon.png"
                        alt="Kakao Login"
                        width={120}
                        height={120}
                        className="w-[48px] h-[48px]"
                    />
                    </button>
                </div>
            </main>
        </div>
    )
}