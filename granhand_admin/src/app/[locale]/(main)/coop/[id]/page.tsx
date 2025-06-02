'use client'

import { Button } from "@/components/ui/button";
import CoopInfo from "./components/coop-info";
import ReplyInfo from "./components/reply-info";
import { useState } from "react";
import ReplyModal from "./components/reply-modal";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";

export default function CooperationDetaliPage() {
    const [open, setOpen] = useState(false)
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'coop'])
    // const [coopContent, setCoopContent] = useState()

    return (
        <div className="flex-1 border">
            <div className="flex justify-between items-center p-12">
                <div className="text-black text-sm">
                    <h1 className="text-2xl font-bold text-[#5E5955]">{t('coop:partnership_manage')}</h1>
                </div>
                <div className="space-x-2">
                    <Button variant="outline" className="text-[#5E5955]">{t('cancel')}</Button>
                    <Button className="bg-[#322A24] text-white" onClick={() => setOpen((prev) => !prev)}>{t('coop:reply')}</Button>
                </div>
            </div>
            <div className="mx-auto px-6 py-8 space-y-12">
                <div className="shadow-sm p-8">
                    <CoopInfo t={t} />
                    <div className="mt-20" />
                    <ReplyInfo t={t} />
                </div>
            </div>
            <ReplyModal open={open} setOpen={setOpen} t={t} />
        </div>
    )
}