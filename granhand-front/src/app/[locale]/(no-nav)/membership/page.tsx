'use client'

import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../utils/localization/client";
import { Trans } from "react-i18next";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MembershipPage() {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'membership')
    const currentLocale = useCurrentLocale()

    return (
        <div className="container mx-auto px-6 pt-8">
            <div className="w-full py-10 mx-auto">
                <div className="flex gap-4 items-center">
                    <ChevronLeftIcon size={24} onClick={() => router.back()} />
                    <h2 className="text-lg font-medium text-[#6F6963]">{t('title')}</h2>
                </div>
            </div>
            {/* <div className="flex w-full min-h-screen bg-white text-gray-900">
            </div> */}
            <main className="w-full max-w-3xl mx-auto px-4 space-y-16 text-gray-800">
            {/* Section 1: 나의 멤버십 등급 */}
            <section>
                <h2 className="text-base font-bold mb-4 text-[#6F6963]">{t('my_membership')}</h2>
                <div className="w-[739px] h-[166px] rounded-lg py-4 flex flex-col items-center shadow-sm">
                {/* <Avatar className="w-20 h-20 bg-[#e9e6e0] text-white text-2xl flex items-center justify-center">B</Avatar> */}
                <div className="pt-1">
                    <div className={`w-[60px] h-[60px] rounded-full text-sm flex items-center justify-center text-white text-[33.71px] font-bold`} style={{ backgroundColor: '#e9e6e0' }}>
                        B
                    </div>
                </div>
                <div className="mt-4 text-center font-medium">
                    <p className="font-bold text-[#322A24] text-sm">홍길동 님</p>
                    <p className="text-sm text-[#C0BCB6] mt-2">
                        <Trans
                            i18nKey={"membership:my_membership_info"}
                            values={{ level: 'Basic' }}
                            components={{
                                black: <span className="text-[#322A24]" />
                            }}
                        />
                    </p>
                </div>
                </div>
            </section>

            {/* Section 2: 등급 혜택 안내 */}
            <section className="w-full">
                <h2 className="text-sm font-bold mb-6 text-[#6F6963]">{t('benefit')}</h2>
                <ul className="flex flex-col items-center mx-auto divide-y divide-dashed divide-gray-300 border-t border-b border-dashed border-gray-300 w-full">
                {[
                    {
                    level: "Basic",
                    badge: t('basic_point_acc'),
                    criteria: t('basic_criteria'),
                    benefits: [
                        t('basic_benefits_1'),
                        t('basic_benefits_2')
                    ],
                    color: "#e9e6e0"
                    },
                    {
                    level: "Bronze",
                    badge: t('bronze_point_acc'),
                    criteria: t('bronze_criteria'),
                    benefits: [
                        t('bronze_benefits_1'),
                        t('bronze_benefits_2')
                    ],
                    color: "#F9E3BE"
                    },
                    {
                    level: "Silver",
                    badge: t('silver_point_acc'),
                    criteria: t('silver_criteria'),
                    benefits: [
                        t('silver_benefits_1'),
                        t('silver_benefits_2')
                    ],
                    color: "#f9b78d"
                    },
                    {
                    level: "Gold",
                    badge: t('gold_point_acc'),
                    criteria: t('gold_criteria'),
                    benefits: [
                        t('gold_benefits_1'),
                        t('gold_benefits_2')
                    ],
                    color: "#d0505d"
                    },
                    {
                    level: "VIP",
                    badge: t('vip_point_acc'),
                    criteria: t('vip_criteria'),
                    benefits: [
                        t('vip_benefits_1'),
                        t('vip_benefits_2')
                    ],
                    color: "#1d1717"
                    }
                ].map((item) => (
                    <li key={item.level} className="flex gap-4 w-full items-center justify-center py-6 h-[133px]">
                        <div className="pt-1 mr-6">
                            <div className={`w-[24px] h-[24px] rounded-full text-xs flex items-center justify-center font-bold text-white`} style={{ backgroundColor: item.color }}>
                                {item.level[0]}
                            </div>
                        </div>
                        <div className="space-y-2 w-[full]">
                            <div className="flex items-center gap-2">
                            <h3 className="font-bold text-sm text-[#322A24]">{item.level}</h3>
                            <span className="w-[63px] h-[16px] text-[8px] text-center py-[0.7] bg-[#E9E6E0] rounded-full text-[#6F6963]">{item.badge}</span>
                            </div>
                            <div className="text-sm">
                                <div className={`flex gap-1`}>
                                    <span className="text-[#C0BCB6] text-[10px] font-bold w-10">{t('criteria')}</span>
                                    <span className="text-[#322A24] text-[10px]">{item.criteria}</span>
                                </div>
                            <div className={`flex mt-1 gap-1`}>
                                    <span className="text-[#C0BCB6] text-[10px] font-bold w-10">{t('benefits')}</span>
                                    <div className="space-y-0.5 text-[10px] text-[#322A24]">
                                        {item.benefits.map((b, i) => (
                                            <div key={i}>{b}</div>
                                        ))}
                                    </div>
                            </div>
                            </div>
                        </div>
                    </li>
                ))}
                </ul>
            </section>

            {/* Section 3: 등급 기준 및 안내 */}
            <section className="space-y-10">
                <div>
                    <h2 className="text-sm font-bold mb-6 text-[#322A24]">{t('tier_criteria')}</h2>
                    <ul className="list-disc pl-5 space-y-1 text-[10px] text-[#6F6963]">
                        <li>{t('criteria1')}</li>
                        <li>{t('criteria2')}</li>
                        <li>{t('criteria3')}</li>
                        <li>{t('criteria4')}</li>
                    </ul>
                    </div>
                <div>
                    <h2 className="text-sm font-bold mb-6 text-[#322A24]">{t('tier_benefit')}</h2>
                    <ul className="list-disc pl-5 space-y-1 text-[10px] text-[#6F6963]">
                        <li>{t('benefit1')}</li>
                        <li>{t('benefit2')}</li>
                        <li>{t('benefit3')}</li>
                    </ul>
                    </div>
            </section>
            </main>
        </div>
    )
}