'use client';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../utils/localization/client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn, useSession } from 'next-auth/react'
import { useConfig } from "@/hooks/use-config";

const loginSchema = z.object({
  id: z.string()
    .min(1, "아이디를 입력해주세요."),
    // .email("올바른 이메일 형식을 입력해주세요."),
  passwd: z.string()
    .min(1, "비밀번호를 입력해주세요.")
    // .min(8, "비밀번호를 8자리 이상 입력해주세요.")
    // .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{8,}$/, '비밀번호는 영문, 숫자, 특수문자 포함 8자리 이상입니다.'),
});

type LoginValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { getConfig } = useConfig()
  const router = useRouter()
  const locale = useLocaleAsLocaleTypes()
  const { t } = useTranslation(locale, ['common', 'auth'])
  const [isLoading, setIsLoading] = useState(false)
  const searchParams = useSearchParams()
  const errorParam = searchParams.get('error')

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      id: "",
      passwd: "",
    },
  })

  const { setError } = form

  async function onSubmit(data: LoginValues) {
    setIsLoading(true)

    try {
      const result = await signIn('credentials', {
        id: data.id,
        passwd: data.passwd,
        redirect: false,
      })

      if(result?.error) {
        console.error('Login failed: ', result.error)
        setError('id', { message: t('auth:invalid_credentials') })
        setError('passwd', { message: t('auth:invalid_credentials') })
      } else {
        console.log('Login Successful!')

        try {
          const { data, error } = await getConfig()
          if(error) {
            console.error('Failed to fetch config for error:', error)
          } else if (data) {
            localStorage.setItem('config', JSON.stringify(data))
            document.cookie = `config=${JSON.stringify(data)}; path=/; max-age=86400; secure; samesite=strict`
          }
        } catch (error) {
          console.error('Failed to fetch Config:', error)
        }

        router.push('/')
      }
    } catch (error) {
      console.error('An unexpected error occurred during sign-in:', error)
      setError('id', { message: '로그인 실패' })
    } finally {
      setIsLoading(false)
    }
  }

  const { data: session } = useSession()
  useEffect(() => {
    if(session) {
      router.replace('/')
    }
  }, [session, router])

  useEffect(() => {
    // URL에 error 파라미터가 있다면 제거하고 리다이렉트
    if (errorParam) {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.delete('error');
        // callbackUrl은 유지할 수 있도록 error만 제거
        router.replace(`${window.location.pathname}?${newSearchParams.toString()}`);
        // 이펙트 종료 후 로직이 바로 실행되지 않도록 여기서 리턴하거나 플래그 사용
        // 리다이렉트 후 컴포넌트가 다시 렌더링될 때 errorParam이 없으므로 이 useEffect는 다시 실행되지 않습니다.
        return; 
    }
}, [errorParam, router, searchParams]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="text-center mb-20">
          <h2 className="text-2xl font-bold tracking-tight">GRANHAND.</h2>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('id')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('id_placeholder')} {...field} className={`h-12 ${ form.formState.errors.id && '!border-red-500' }`} />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="passwd"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('pw')}</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder={t('pw_placeholder')} {...field} className={`h-12 ${ form.formState.errors.passwd && '!border-red-500' }`} />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-[#DBD7D0] text-white hover:bg-gray-300 h-12">
              {isLoading ? '로그인 중' : t('login')}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
} 