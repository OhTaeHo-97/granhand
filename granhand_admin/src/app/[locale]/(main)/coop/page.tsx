import Pagination from "@/components/pagination";
import { translation } from "../../../../../utils/localization/locales/server";
// import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";
import { LocaleTypes } from "../../../../../utils/localization/settings";
import CoopList from "./components/coop-list";

export default async function CooperationPage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
    const { locale } = await params
    const { t } = await translation(locale, ['common', 'event', 'coop'])
    // const currentLocale = getCurrentLocaleFromParams(locale)
        
    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('coop:partnership_manage')}</h1>
                <CoopList />
                <Pagination totalPages={15} />
            </div>
        </main>
    )
}