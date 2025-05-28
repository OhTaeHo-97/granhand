import { translation } from "../../../../../utils/localization/locales/server";
import { LocaleTypes } from "../../../../../utils/localization/settings";
import CoopList from "./components/coop-list";
// import { useState } from "react";
// import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
// import { useTranslation } from "../../../../../utils/localization/client";

export default async function CooperationPage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
    const { locale } = await params
    const { t } = await translation(locale, ['common', 'event', 'coop'])
    // const [currentPage, setCurrentPage] = useState(1)
    // const currentLocale = getCurrentLocaleFromParams(locale)
        
    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('coop:partnership_manage')}</h1>
                <CoopList />
                {/* <Pagination totalPages={15} currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
            </div>
        </main>
    )
}