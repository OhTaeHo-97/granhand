import OrderStateCard from "./components/order-state";
import OrderList from "./components/order-list";

export default async function OrderPage() {
// export default async function OrderPage({ params: { locale } }: { params: { locale: LocaleTypes } }) {
    // const { t } = await translation(locale, ['my_page'])
    // const currentLocale = getCurrentLocaleFromParams(locale)

    return (
        <main className="w-[739px] mx-auto ml-10">
            <OrderStateCard />
            <div className="mb-5" />

            <OrderList />
        </main>
    )
}