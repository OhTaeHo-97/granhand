'use client'

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import BasicModal from "@/app/[locale]/components/modal";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import LeaveDenyModal from "../components/deny-modal";
import { useTranslation } from "../../../../../../../utils/localization/client";
import { useRouter } from "next/navigation";

export default function LeaveNote() {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [agree, setAgree] = useState(false)
    const [hasExistedOrder, setHasExistedOrder] = useState(true)
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    const currentLocale = useCurrentLocale()

    return (
        <div className="max-w-md space-y-6 mx-auto mt-10">
            <h1 className="text-2xl font-semibold mb-16">{t('auth:notice_title')}</h1>

            <section className="mb-6">
            <h2 className="text-lg font-bold mb-4">{t('auth:notice_subtitle')}</h2>
            <div className="bg-[#322A2408] p-6 space-y-6 text-sm text-gray-700">
                <div>
                <strong className="block text-gray-800 mb-1">{t('auth:notice1')}</strong>
                {t('auth:notice1_info')}
                </div>
                <div>
                <strong className="block text-gray-800 mb-1">{t('auth:notice2')}</strong>
                {t('auth:notice2_info')}
                </div>
                <div>
                <strong className="block text-gray-800 mb-1">{t('auth:notice3')}</strong>
                {t('auth:notice3_info')}
                </div>
                <div>
                <strong className="block text-gray-800 mb-1">{t('auth:notice4')}</strong>
                {t('auth:notice4_info')}
                </div>
                <div>
                <strong className="block text-gray-800 mb-1">{t('auth:notice5')}</strong>
                {t('auth:notice5_info')}
                </div>
            </div>
            </section>

            <div className="flex items-center gap-2 mb-10">
            <Checkbox
                id="agree"
                className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                onCheckedChange={(checked) => {
                    if(typeof checked === 'boolean') {
                        setAgree(checked)
                    }
                }}
            />
            <Label htmlFor="agree" className="text-sm font-semibold">
                {t('auth:leave_agree_info')}
            </Label>
            </div>

            <div className="flex gap-4">
            <Button className="flex-1 border border-gray-300 bg-white text-black" onClick={() => router.push(`${currentLocale}/my-info`)}>{t('cancel')}</Button>
            <Button className="flex-1 bg-[#DBD7D0] text-white" onClick={() => setOpen((prev) => !prev)} disabled={!agree}>{t('auth:verify_leave')}</Button>
            </div>
            {hasExistedOrder ? (
                <LeaveDenyModal open={open} setOpen={setOpen} setHasExistedOrder={setHasExistedOrder} t={t} />
            ) : (
                <BasicModal open={open} setOpen={setOpen} setHasExistedOrder={setHasExistedOrder} contents={t('auth:leave_cmpl')} btnText="confirm" locale={locale} nextLink={`${currentLocale}`}  />
            )}
        </div>
    )
}