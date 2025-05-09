import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";
import { translation } from "../../../../../utils/localization/locales/server";
import { LocaleTypes } from "../../../../../utils/localization/settings";
import MyPageSidebar from "./components/sidebar/sidebar";
import MyPageTitle from "./components/title";

export default async function MyPageLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: LocaleTypes } }) {
    const { t } = await translation(locale, ['my_page'])
    const currentLocale = getCurrentLocaleFromParams(locale)
    
    return (
        <div className="container mx-auto px-6 pt-8">
            <MyPageTitle t={t} />
            <div className="flex w-full min-h-screen bg-white text-gray-900">
                <MyPageSidebar t={t} currentLocale={currentLocale} />
                {children}
            </div>
        </div>
    )
}