import Pagination from "@/components/pagination";
import SearchInput from "@/components/searchInput";
import ShopGrid from "./components/ShopGrid";
import { LocaleTypes } from "../../../../../utils/localization/settings";
import { translation } from "../../../../../utils/localization/locales/server";
import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";

export default async function ShopPage({ searchParams, params: { locale } }: { searchParams: { store?: string; category?: string }, params: { locale: LocaleTypes } }) {
    // const { t } = await translation(locale, ['payment', 'order'])
    // const currentLocale = getCurrentLocaleFromParams(locale)

    return (
        <main className="container mx-auto mt-10">
            <ShopGrid searchParams={searchParams} locale={locale} />
            <div className='mb-20' />
            <Pagination totalPages={15} />
            <div className='mb-14' />
            <SearchInput />
        </main>
    )
}