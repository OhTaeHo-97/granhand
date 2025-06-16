'use client'

import StoreSidebar from "./components/sidebar";
import StoreFilter from "./components/store-filter";
import StoreContents from "./components/store-contents";
// import { LocaleTypes } from "../../../../../utils/localization/settings";
// import { translation } from "../../../../../utils/localization/locales/server";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../utils/localization/client";
import { useState } from "react";
// import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";

// export default async function StorePage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
export default function StorePage() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'store'])

    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage] = useState(0)
    // const { locale } = await params
    // const { t } = await translation(locale, ['common', 'store'])
    // const currentLocale = getCurrentLocaleFromParams(locale)

    return (
        <div className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('store:store_manage')}</h1>
            </div>
            <div className="flex min-h-screen text-sm text-[#1A1A1A]">
                <StoreSidebar />

                <main className="flex-1 p-6 space-y-4 w-full">
                    <StoreFilter t={t} />
                    <StoreContents totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </main>
            </div>
        </div>
    )
}