'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CouponRegisterModal from "./components/coupon-register-modal";
import { useState } from "react";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../../../utils/localization/client";
import BasicModal from "@/app/[locale]/components/modal";

export default function CouponRegisterPage() {
    const [open, setOpen] = useState(false)
    const [coupon, setCoupon] = useState('')
    // const [isValid, setIsValid] = useState(false)
    const [isValid] = useState(false)
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'coupon')

    return (
        <div className="container mx-auto px-6 pt-8 max-w-4xl">
            <h2 className="text-base font-bold mb-4">{t('code')}</h2>

            <div className="flex items-center gap-2">
                <Input
                className="flex-1 h-12 text-sm"
                placeholder={t('enter_code_placeholder')}
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                />
                <Button className={`h-12 px-6 bg-gray-200 text-white text-sm font-semibold ${coupon ? 'bg-gray-800' : 'bg-gray-200'}`} onClick={() => setOpen((prev) => !prev)} disabled={coupon === ''}>
                {t('register')}
                </Button>
            </div>
            <CouponRegisterModal isValid={true} open={open} setOpen={setOpen} />
            {/* open, setOpen, contents, btnText, locale, nextLink */}
            <BasicModal open={open} setOpen={setOpen} btnText='확인' locale={locale} contents={ isValid ? 'register_cmpl' : 'register_fail' } />
        </div>
    )
}