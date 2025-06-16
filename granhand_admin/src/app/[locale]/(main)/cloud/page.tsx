import { Button } from "@/components/ui/button";
import { ArrowRightToLineIcon } from "lucide-react";
import { LocaleTypes } from "../../../../../utils/localization/settings";
import { translation } from "../../../../../utils/localization/locales/server";

export default async function CloudPage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
    const { locale } = await params
    const { t } = await translation(locale, 'cloud')

    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('cloud')}</h1>
                <div className="h-screen w-full flex justify-center items-center">
                    <Button className="bg-[#322A24] text-white min-w-1/4 w-fit">
                        <ArrowRightToLineIcon size={16} /> {t('move_to_cloud')}
                    </Button>
                </div>
                {/* 페이지네이션 */}
                {/* <Pagination totalPages={15} /> */}
            </div>
        </main>
    )
}