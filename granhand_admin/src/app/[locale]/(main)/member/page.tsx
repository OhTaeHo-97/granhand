import MemberHeader from "./components/header";
// import Pagination from "@/components/pagination";
import { LocaleTypes } from "../../../../../utils/localization/settings";
import { translation } from "../../../../../utils/localization/locales/server";
import MemberList from "./components/member-list";

export default async function MemberListPage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
    const { locale } = await params
    const { t } = await translation(locale, ['common', 'member'])

    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('member_list')}</h1>
                <MemberHeader />

                <MemberList />
                {/* 페이지네이션 */}
                {/* <Pagination totalPages={15} /> */}
            </div>
        </main>
    )
}