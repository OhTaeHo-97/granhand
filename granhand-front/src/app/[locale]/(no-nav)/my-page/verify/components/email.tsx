'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { useState } from "react";
import { useTranslation } from "../../../../../../../utils/localization/client";

export default function EmailUserVerify() {
    const [password, setPassword] = useState('')
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])

    return (
        <>
            <h2 className="text-lg font-semibold mb-2">{t('auth:verify_pw')}</h2>
            <p className="text-sm text-gray-600 mb-8">
                {t('auth:verify_pw_info')}
            </p>

            <div className="mb-6">
                <Label className="block text-sm font-semibold mb-1">{t('auth:id')}</Label>
                <div className="h-12 px-4 flex items-center border bg-gray-100 rounded text-sm text-gray-600">
                gran****@****l.com
                </div>
            </div>

            <div className="mb-6">
                <Label className="block text-sm font-semibold mb-1">{t('auth:pw')}</Label>
                <Input
                type="password"
                className="h-12 text-sm border"
                placeholder={t('auth:cur_pw_placeholder')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <Button
                className={`w-full h-12 text-sm font-semibold ${password ? "bg-black text-white" : "bg-gray-200 text-white"}`}
                disabled={!password}
            >
                {t('confirm')}
            </Button>
        </>
    )
}