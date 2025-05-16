import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import MemberHeader from "./components/header";
import { LocaleTypes } from "../../../../../utils/localization/settings";
import { translation } from "../../../../../utils/localization/locales/server";

export default async function MemberList({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
    const { locale } = await params
    const { t } = await translation(locale, ['common', 'member'])

    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('member_list')}</h1>
                <MemberHeader />

                {/* 전체 회원 수 */}
                <div className="text-[#5E5955] font-bold text-base">
                    {t('member:total_members')} <span className="text-red-500">12,312,831</span> {t('member:users')}
                </div>
                {/* 테이블 */}
                <div className="overflow-auto rounded bg-white text-center">
                    <table className="w-full items-center">
                    <thead>
                        <tr className="border-b border-t text-[#6F6963] bg-[#322A2408]">
                        <th className="p-2"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
                        <th className="p-2">{t('member:name')}</th>
                        <th className="p-2">{t('member:id')}</th>
                        <th className="p-2">{t('member:phone')}</th>
                        <th className="p-2">{t('member:membership_level')}</th>
                        <th className="p-2">{t('member:registration_date')}</th>
                        <th className="p-2">{t('member:total_purchase_amount')}</th>
                        <th className="p-2">{t('member:reward_points')}</th>
                        <th className="p-2">{t('member:view_details')}</th>
                        <th className="p-2">{t('member:member_type')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                        <tr key={i} className="text-[#1A1A1A]">
                            <td className="p-2 text-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                            <td className="p-2 text-center">홍길동</td>
                            <td className="p-2 underline cursor-pointer text-center">gidksaij@gmail.com</td>
                            <td className="p-2 text-center">010-6545-6546</td>
                            <td className="p-2 text-center">Gold</td>
                            <td className="p-2 text-center">2023-11-23</td>
                            <td className="p-2 text-center">6,340,000원</td>
                            <td className="p-2 text-center">4,300원</td>
                            <td className="w-full p-2 flex gap-1 flex-wrap justify-center">
                                <Button className="border rounded px-2 h-6">포인트</Button>
                                <Button className="border rounded px-2 h-6">쿠폰</Button>
                                <Button className="border rounded px-2 h-6">주문</Button>
                                <Button className="border rounded px-2 h-6">메모</Button>
                            </td>
                            <td className="p-2 text-center">{i === 1 ? <span className="text-red-500">탈퇴</span> : i === 2 ? <span className="text-red-500">불량</span> : '일반'}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>

                {/* 하단 버튼 */}
                <div className="flex gap-2 mt-2 flex-wrap">
                    <Button className="border rounded px-3 py-1">{t('member:mark_restricted')}</Button>
                    <Button className="border rounded px-3 py-1">{t('member:unmark_restricted')}</Button>
                    <Button className="border rounded px-3 py-1">{t('member:delete_member')}</Button>
                    <Button className="border rounded px-3 py-1">{t('member:bulk_point')}</Button>
                    <Button className="border rounded px-3 py-1">{t('member:bulk_coupon')}</Button>
                </div>

                {/* 페이지네이션 */}
                <div className="flex justify-center items-center gap-2 mt-4">
                    <Button>{'<'}</Button>
                    {Array.from({ length: 9 }).map((_, i) => (
                    <button key={i} className="px-2">{i + 1}</button>
                    ))}
                    <button>{'>'}</button>
                </div>
            </div>
        </main>
    )
}