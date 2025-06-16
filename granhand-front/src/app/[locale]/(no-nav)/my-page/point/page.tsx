// import Pagination from "@/components/pagination";
import PointCard from "./components/point-card";
import PointDetails from "./components/point-details/point-details";
import { LocaleTypes } from "../../../../../../utils/localization/settings";
import { translation } from "../../../../../../utils/localization/locales/server";

export default async function PointPage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
    const { locale } = await params
    const { t } = await translation(locale, ['my_page', 'point'])

    return (
        <main className="w-[738px] mx-auto ml-10">
            <PointCard t={t} />
            {/* 포인트 상세 내역 */}
            <PointDetails />
        </main>
    );
}