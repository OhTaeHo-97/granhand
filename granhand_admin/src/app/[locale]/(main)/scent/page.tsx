// import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales"
// import { useTranslation } from "../../../../../utils/localization/client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import ScentList from "./components/scent-list"
// import Pagination from "@/components/pagination"
import { LocaleTypes } from "../../../../../utils/localization/settings"
import { translation } from "../../../../../utils/localization/locales/server"
import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams"

export default async function ScentNotePage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
    const { locale } = await params
    const { t } = await translation(locale, ['common', 'scent', 'wallpaper'])
    const currentLocale = getCurrentLocaleFromParams(locale)

    // const locale = useLocaleAsLocaleTypes()
    // const { t } = useTranslation(locale, ['common', 'scent', 'wallpaper'])
    // const currentLocale = useCurrentLocale()
    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <div className="flex justify-between items-center">
                    <div className="text-black text-sm">
                        <h1 className="text-2xl font-bold text-[#5E5955]">{t('scent:scent_manage')}</h1>
                    </div>
                    <div className="space-x-2">
                        <Link href={`${currentLocale}/scent/register`}>
                            <Button className="bg-[#322A24] text-white">
                                <Pencil />{t('scent:create_description')}
                            </Button>
                        </Link>
                    </div>
                </div>

                <ScentList />
            </div>
        </main>
    )
}