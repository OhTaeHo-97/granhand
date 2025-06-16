'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
        <div className="container mx-auto px-6 pt-8 max-w-4xl w-[639px]">
            <h2 className="text-sm font-bold mb-4 text-[#322A24]">{t('code')}</h2>

            <div className="flex items-center gap-2">
                <Input
                className="flex-1 w-[639px] h-[46px] text-sm !border-[#C0BCB6] placeholder:text-[#C0BCB6]"
                placeholder={t('enter_code_placeholder')}
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                />
                <Button className={`w-[88px] h-[46px] px-6 text-white text-sm font-semibold bg-[#322A24] disabled:bg-[#DBD7D0]`} onClick={() => setOpen((prev) => !prev)} disabled={coupon === ''}>
                {t('register')}
                </Button>
            </div>
            {/* <CouponRegisterModal isValid={true} open={open} setOpen={setOpen} /> */}
            {/* open, setOpen, contents, btnText, locale, nextLink */}
            <BasicModal open={open} setOpen={setOpen} btnText='확인' locale={locale} contents={ isValid ? 'register_cmpl' : 'register_fail' } />
        </div>
    )
}