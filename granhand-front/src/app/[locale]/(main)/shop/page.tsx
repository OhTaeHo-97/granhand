// import Pagination from "@/components/pagination";
// import SearchInput from "@/components/searchInput";
import ShopGrid from "./components/ShopGrid";
// import { LocaleTypes } from "../../../../../utils/localization/settings";

// export default async function ShopPage({ searchParams, params }: { searchParams: Promise<{ store?: string; category?: string }>, params: Promise<{ locale: LocaleTypes }> }) {
export default async function ShopPage({ searchParams }: { searchParams: Promise<{ store?: string; category?: string }> }) {
    // const { t } = await translation(locale, ['payment', 'order'])
    // const currentLocale = getCurrentLocaleFromParams(locale)

    // const { locale } = await params
    const { store, category } = await searchParams

    return (
        <main className="container mx-auto">
            <ShopGrid store={store} category={category} />
        </main>
    )
}