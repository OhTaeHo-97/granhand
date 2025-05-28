'use client'

import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales"
import { useTranslation } from "../../../../../utils/localization/client"
import { Pencil } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Pagination from "@/components/pagination"
import FaqList from "./components/faq-list"

export default function FaqPage() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'faq', 'wallpaper'])
    const currentLocale = useCurrentLocale()

    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <div className="flex justify-between items-center">
                    <div className="text-black text-sm">
                        <h1 className="text-2xl font-bold text-[#5E5955]">{t('faq:faq_manage')}</h1>
                    </div>
                    <div className="space-x-2">
                        <Link href={`${currentLocale}/faq/register`}>
                            <Button className="bg-[#322A24] text-white">
                                <Pencil />{t('faq:create_faq')}
                            </Button>
                        </Link>
                    </div>
                </div>

                <FaqList t={t} />
                {/* <Pagination totalPages={15} /> */}
            </div>
        </main>
    )
}