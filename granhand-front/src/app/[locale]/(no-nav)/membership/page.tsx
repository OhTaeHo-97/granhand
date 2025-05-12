'use client'

import { Avatar } from "@/components/ui/avatar";
import { getLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../utils/localization/client";

export default function MembershipPage() {
    const locale = getLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'membership')
    const currentLocale = useCurrentLocale()

    return (
        <div className="container mx-auto px-6 pt-8">
            <div className="w-full py-10 mx-auto">
                <h2 className="text-2xl font-semibold">{t('title')}</h2>
            </div>
            {/* <div className="flex w-full min-h-screen bg-white text-gray-900">
            </div> */}
            <main className="w-full max-w-3xl mx-auto px-4 space-y-16 text-gray-800">
            {/* Section 1: 나의 멤버십 등급 */}
            <section>
                <h2 className="text-lg font-semibold mb-4">{t('my_membership')}</h2>
                <div className="w-full border rounded-lg py-8 flex flex-col items-center shadow-2xs">
                <Avatar className="w-20 h-20 bg-gray-300 text-white text-2xl flex items-center justify-center">B</Avatar>
                <div className="mt-4 text-center">
                    <p className="font-semibold">홍길동 님</p>
                    {currentLocale === ''
                        ? (
                            <p className="text-sm text-gray-500 mt-2">현재 등급은 
                            <span className="font-semibold text-black">Basic</span> 입니다.</p>
                        )
                        : (
                            <p className="text-sm text-gray-500 mt-2">Your current tier is 
                            <span className="font-semibold text-black">Basic</span>.</p>
                        )
                    }
                    {/* <p className="text-sm text-gray-500 mt-2">현재 등급은 <span className="font-semibold text-black">Basic</span> 입니다.</p> */}
                </div>
                </div>
            </section>

            {/* Section 2: 등급 혜택 안내 */}
            <section className="w-full">
                <h2 className="text-base font-semibold mb-6">{t('benefit')}</h2>
                <ul className="space-y-8 flex flex-col items-center mx-auto divide-y divide-dashed divide-gray-300 border-t border-b border-dashed border-gray-300 w-full">
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
                    <li key={item.level} className="flex gap-4 w-full items-center justify-center py-6">
                        <div className="pt-1 mr-6">
                            <div className={`w-10 h-10 rounded-full  text-sm flex items-center justify-center font-bold text-white`} style={{ backgroundColor: item.color }}>
                                {item.level[0]}
                            </div>
                        </div>
                        <div className="space-y-2 w-full">
                            <div className="flex items-center gap-2">
                            <h3 className="font-bold text-lg">{item.level}</h3>
                            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-500">{item.badge}</span>
                            </div>
                            <div className="text-sm">
                            <div className={`flex ${currentLocale === '' ? 'gap-2' : 'gap-6'}`}>
                                <span className="text-gray-400 font-semibold w-10">{t('criteria')}</span>
                                <span>{item.criteria}</span>
                            </div>
                            <div className={`flex mt-1 ${currentLocale === '' ? 'gap-2' : 'gap-6'}`}>
                                <span className="text-gray-400 font-semibold w-10">{t('benefits')}</span>
                                <div className="space-y-0.5">
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
                <h2 className="text-base font-semibold mb-6">{t('tier_criteria')}</h2>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    <li>{t('criteria1')}</li>
                    <li>{t('criteria2')}</li>
                    <li>{t('criteria3')}</li>
                    <li>{t('criteria4')}</li>
                </ul>
                </div>
                <div>
                <h2 className="text-base font-semibold mb-6">{t('tier_benefit')}</h2>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
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