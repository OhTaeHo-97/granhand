import TodaySummary from './components/main/today-summary';
import SalesStatistics from './components/main/sales-statistics';
import DailySummary from './components/main/daily-summary';
import VisitorSummary from './components/main/visitor-summary';
import PartnershipInquiries from './components/main/partnership_inquiry';
// import { LocaleTypes } from '../../../../utils/localization/settings';
// import { translation } from '../../../../utils/localization/locales/server';
// import { useConfig } from '@/hooks/use-config';
// import { useEffect } from 'react';
// import { useSession } from 'next-auth/react';
// import { useLocaleAsLocaleTypes } from '@/lib/useCurrentLocales';
// import { useTranslation } from '../../../../utils/localization/client';
import { LocaleTypes } from '../../../../utils/localization/settings';
import { translation } from '../../../../utils/localization/locales/server';
// import { useConfig } from '@/hooks/use-config';
// import { getCurrentLocaleFromParams } from '@/lib/getCurrentLocaleFromParams';

export default async function DashboardPage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
    const { locale } = await params
    const { t } = await translation(locale, 'common')

    const stats = [
        { title: t('new_order'), count: "875", color: "text-red-500" },
        { title: t('cancel_manage'), count: "1", color: "text-gray-500" },
        { title: t('return_manage'), count: "1", color: "text-gray-500" },
        { title: t('exchange_manage'), count: "1", color: "text-gray-500" },
        { title: t('pending_inquiry'), count: "1", color: "text-gray-500" },
    ];

    return (
        <main className="flex-1 border text-[#5E5955]">
            <div className="p-8 space-y-6">
                {/* 오늘의 할일 */}
                <TodaySummary stats={stats} t={t} />

                {/* Sales Stats + Daily Summary */}
                <div className="grid grid-cols-2 gap-6">
                    <SalesStatistics />
                    <DailySummary />
                </div>

                {/* Visitor Stats + Partnership Inquiries */}
                <div className="grid grid-cols-2 gap-6">
                    <VisitorSummary t={t} />
                    <PartnershipInquiries t={t} />
                </div>
            </div>
        </main>
    );
}
