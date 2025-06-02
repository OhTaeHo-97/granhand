// import Pagination from "@/components/pagination";
import { Button } from "@/components/ui/button";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pencil } from "lucide-react";
import { LocaleTypes } from "../../../../../utils/localization/settings";
import { translation } from "../../../../../utils/localization/locales/server";
import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";
import Link from "next/link";
import EventList from "./components/event-list";

export default async function EventPage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
    const { locale } = await params
    const { t } = await translation(locale, ['common', 'event', 'journal'])
    const currentLocale = getCurrentLocaleFromParams(locale)

    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <div className="flex justify-between items-center">
                    <div className="text-black text-sm">
                        <h1 className="text-2xl font-bold text-[#5E5955]">{t('event:event_manage')}</h1>
                    </div>
                    <div className="space-x-2">
                        <Link href={`${currentLocale}/event/register`}>
                            <Button className="bg-[#322A24] text-white">
                                <Pencil />{t('event:create_event')}
                            </Button>
                        </Link>
                    </div>
                </div>

                <EventList />
                {/* <Pagination totalPages={15} /> */}
            </div>
        </main>
    )
}