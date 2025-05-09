import Pagination from "@/components/pagination";
import PointCard from "./components/point-card";
import PointDetails from "./components/point-details/point-details";
import { LocaleTypes } from "../../../../../../utils/localization/settings";
import { translation } from "../../../../../../utils/localization/locales/server";
import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";

export default async function PointPage({ params: { locale } }: { params: { locale: LocaleTypes } }) {
    const { t } = await translation(locale, ['my_page', 'point'])
    const currentLocale = getCurrentLocaleFromParams(locale)

    return (
        <main className="w-full mx-auto ml-10">
            <PointCard t={t} />
            {/* 포인트 상세 내역 */}
            <PointDetails />
            <Pagination totalPages={15} />
        </main>
    );
}