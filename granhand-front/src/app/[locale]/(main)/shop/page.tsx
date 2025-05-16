import Pagination from "@/components/pagination";
// import SearchInput from "@/components/searchInput";
import ShopGrid from "./components/ShopGrid";
import { LocaleTypes } from "../../../../../utils/localization/settings";

export default async function ShopPage({ searchParams, params }: { searchParams: Promise<{ store?: string; category?: string }>, params: Promise<{ locale: LocaleTypes }> }) {
    // const { t } = await translation(locale, ['payment', 'order'])
    // const currentLocale = getCurrentLocaleFromParams(locale)

    const { locale } = await params
    const { store, category } = await searchParams

    return (
        <main className="container mx-auto mt-10">
            <ShopGrid store={store} category={category} locale={locale} />
            <div className='mb-20' />
            <Pagination totalPages={15} />
            <div className='mb-14' />
            {/* <SearchInput /> */}
        </main>
    )
}