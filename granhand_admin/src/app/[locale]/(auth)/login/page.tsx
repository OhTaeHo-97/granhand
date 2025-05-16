'use client';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../utils/localization/client";

const loginSchema = z.object({
  email: z.string().min(1, "아이디를 입력해주세요."),
  password: z.string().min(1, "비밀번호를 입력해주세요."),
});

type LoginValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const locale = useLocaleAsLocaleTypes()
  const { t } = useTranslation(locale, ['common', 'auth'])

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const {
  //   register,
  //   handleSubmit,
  //   setError,
  //   formState: { errors }
  // } = form
  const { setError } = form

  function onSubmit(data: LoginValues) {
    console.log(data);
    setError('email', { message: '계정 정보를 다시 확인해 주세요.' })
    setError('password', { message: '비밀번호를 다시 확인해 주세요.' })
  }

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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('id')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('id_placeholder')} {...field} className={`h-12 ${ form.formState.errors.email && '!border-red-500' }`} />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('pw')}</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder={t('pw_placeholder')} {...field} className={`h-12 ${ form.formState.errors.password && '!border-red-500' }`} />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-[#DBD7D0] text-white hover:bg-gray-300 h-12">
              {t('login')}
            </Button>
          </form>
        </Form>

        <div className="text-center">
          <a href="#" className="text-sm text-[#C0BCB6] hover:text-gray-900 underline">
            {t('auth:find_pw')}
          </a>
        </div>
      </div>
    </div>
  );
} 