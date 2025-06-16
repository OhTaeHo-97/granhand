import { translation } from "../../../../../utils/localization/locales/server";
import { LocaleTypes } from "../../../../../utils/localization/settings";

export default async function BannerLayout({ children, params }: { children: React.ReactNode, params: Promise<{ locale: LocaleTypes }> }) {
    const { locale } = await params
    const { t } = await translation(locale, ['common', 'banner'])

    return (
        <main className="flex-1 border">
        <div className="p-12 text-black text-sm space-y-4">
            <h1 className="text-2xl font-bold text-[#5E5955]">{t('banner:banner_manage')}</h1>
            {children}
        </div>
        </main>
    )
}