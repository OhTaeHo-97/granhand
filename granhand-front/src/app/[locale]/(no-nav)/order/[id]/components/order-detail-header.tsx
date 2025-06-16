'use client'

import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { ChevronLeftIcon } from "lucide-react";
import { useTranslation } from "../../../../../../../utils/localization/client";
import { useRouter } from "next/navigation";

export default function OrderDetailHeader() {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'order'])

    return (
        <section className="py-8">
            <div className="flex gap-4 items-center">
                <ChevronLeftIcon size={24} className="text-[#6F6963]" onClick={() => router.back()} />
                <h2 className={`text-lg font-medium text-left text-[#6F6963]`}>{t('order:detail')}</h2>
            </div>
        </section>
    )
}