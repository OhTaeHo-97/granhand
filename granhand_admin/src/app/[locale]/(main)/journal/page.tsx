'use client'

// import Pagination from "@/components/pagination";
import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pencil } from "lucide-react";
import Link from "next/link";
// import { LocaleTypes } from "../../../../../utils/localization/settings";
// import { translation } from "../../../../../utils/localization/locales/server";
// import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";
import JournalSearchFilter from "./components/search-filter";
import JournalList from "./components/journal-list";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../utils/localization/client";
import { useState } from "react";

// export default async function JournalListPage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
export default function JournalListPage() {
    // const { locale } = await params
    // const { t } = await translation(locale, ['common', 'journal'])
    // const currentLocale = getCurrentLocaleFromParams(locale)
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'journal'])
    const currentLocale = useCurrentLocale()
    const [currentPage, setCurrentPage] = useState(1)
    // const [totalPage, setTotalPage] = useState(0)
    const [totalPage,] = useState(0)
    const [size, setSize] = useState('50')

    const fetchJournals = (params?: Record<string, boolean | string | number>) => {
        console.log(params)
    }

    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <div className="flex justify-between items-center">
                    <div className="text-black text-sm">
                        <h1 className="text-2xl font-bold text-[#5E5955]">{t('journal:journal_manage')}</h1>
                    </div>
                    <div className="space-x-2">
                        <Link href={`${currentLocale}/journal/register`}>
                            <Button className="bg-[#322A24] text-white">
                                <Pencil />{t('journal:create_post')}
                            </Button>
                        </Link>
                    </div>
                </div>

                <JournalSearchFilter fetchJournals={fetchJournals} />
                {/* <JournalList t={t} /> */}
                <JournalList currentPage={currentPage} totalPage={totalPage} size={size} setCurrentPage={setCurrentPage} setSize={setSize} fetchJournals={fetchJournals} />
                {/* <Pagination totalPages={15} /> */}
            </div>
        </main>
    )
}