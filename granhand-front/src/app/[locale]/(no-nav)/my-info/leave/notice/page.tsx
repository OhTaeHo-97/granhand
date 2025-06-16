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
        <div className="max-w-md w-[358px] space-y-6 mx-auto mt-10">
            <h1 className="font-medium mb-16 text-[#322A24]">{t('auth:notice_title')}</h1>

            <section className="mb-6">
            <h2 className="text-sm font-bold mb-4 text-[#322A24]">{t('auth:notice_subtitle')}</h2>
            <div className="bg-[#322A2408] h-[348px] p-6 space-y-6 text-[10px] font-medium text-[#6F6963]">
                <div>
                <strong className="block mb-1 font-bold">{t('auth:notice1')}</strong>
                {t('auth:notice1_info')}
                </div>
                <div>
                <strong className="block mb-1 font-bold">{t('auth:notice2')}</strong>
                {t('auth:notice2_info')}
                </div>
                <div>
                <strong className="blockmb-1 font-bold">{t('auth:notice3')}</strong>
                {t('auth:notice3_info')}
                </div>
                <div>
                <strong className="block mb-1 font-bold">{t('auth:notice4')}</strong>
                {t('auth:notice4_info')}
                </div>
                <div>
                <strong className="block mb-1 font-bold">{t('auth:notice5')}</strong>
                {t('auth:notice5_info')}
                </div>
            </div>
            </section>

            <div className="flex items-center gap-2 mb-10">
            <Checkbox
                id="agree"
                className="w-[14px] h-[14px] data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                onCheckedChange={(checked) => {
                    if(typeof checked === 'boolean') {
                        setAgree(checked)
                    }
                }}
            />
            <Label htmlFor="agree" className="text-xs font-bold text-[#6F6963]">
                {t('auth:leave_agree_info')}
            </Label>
            </div>

            <div className="flex gap-4">
            <Button className="flex-1 border !border-[#C0BCB6] bg-[#FDFBF5] text-[#322A24] w-[171px] h-[46px] text-sm font-bold" onClick={() => router.push(`${currentLocale}/my-info`)}>{t('cancel')}</Button>
            <Button className="flex-1 bg-[#322A24] text-white disabled:bg-[#DBD7D0] w-[171px] h-[46px] text-sm font-bold" onClick={() => setOpen((prev) => !prev)} disabled={!agree}>{t('auth:verify_leave')}</Button>
            </div>
            {hasExistedOrder ? (
                <LeaveDenyModal open={open} setOpen={setOpen} setHasExistedOrder={setHasExistedOrder} t={t} />
            ) : (
                <BasicModal open={open} setOpen={setOpen} setHasExistedOrder={setHasExistedOrder} contents={t('auth:leave_cmpl')} btnText="confirm" locale={locale} nextLink={`${currentLocale}/`}  />
            )}
        </div>
    )
}