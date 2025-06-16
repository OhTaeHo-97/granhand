'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { useState } from "react";
import { useTranslation } from "../../../../../../../utils/localization/client";
import { useRouter } from "next/navigation";

export default function EmailUserVerify() {
    const router = useRouter()
    const [password, setPassword] = useState('')
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    const currentLocale = useCurrentLocale()

    return (
        <>
            <h2 className="text-lg font-bold mb-2 text-[#322A24]">{t('auth:verify_pw')}</h2>
            <p className="text-sm text-[#6F6963] font-medium mb-8">
                {t('auth:verify_pw_info')}
            </p>

            <div className="mb-6">
                <Label className="block text-sm font-medium mb-1 text-[#322A24]">{t('auth:id')}</Label>
                <div className="w-[358px] h-[46px] px-4 flex items-center border !border-[#C0BCB6] bg-[#E9E6E0] rounded text-sm text-[#6F6963]">
                gran****@****l.com
                </div>
            </div>

            <div className="mb-6">
                <Label className="block text-sm font-semibold mb-1 text-[#322A24]">{t('auth:pw')}</Label>
                <Input
                type="password"
                className="w-[358px] h-[46px] text-sm border !border-[#C0BCB6] placeholder:text-[#C0BCB6]"
                placeholder={t('auth:cur_pw_placeholder')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <Button
                className={`w-[358px] h-[46px] text-sm font-bold text-white bg-[#322A24] disabled:bg-[#DBD7D0]`}
                disabled={!password}
                onClick={() => router.push(`${currentLocale}/my-info`)}
            >
                {t('confirm')}
            </Button>
        </>
    )
}