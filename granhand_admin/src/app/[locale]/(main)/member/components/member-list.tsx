'use client'

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MemberModal from "./modal";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import MemberPointCouponModal from "./point-coupon-modal";
import PointModalContents from "./point-modal-contents";
import CouponModalContents from "./coupon-modal-contents";
import Pagination from "@/components/pagination";
import { useRouter } from "next/navigation";

export default function MemberList() {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'member' ,'point', 'coupon'])
    const currentLocale = useCurrentLocale()

    const [openMarkRestricted, setOpenMarkRestricted] = useState(false)
    const [openUnmarkRestricted, setOpenUnmarkRestricted] = useState(false)
    const [openCannotProcess, setOpenCannotProcess] = useState(false)
    const [openMemo, setOpenMemo] = useState(false)
    const [openPoint, setOpenPoint] = useState(false)
    const [openCoupon, setOpenCoupon] = useState(false)

    return (
        <div className="p-6 shadow-sm">
            <div>
                <div className="mb-4 justify-between flex items-center">
                    <div className="text-[#5E5955] font-bold text-base">
                        {t('member:total_members')} <span className="text-[#FF3E24] font-bold">12,312,831</span> {t('member:users')}
                    </div>
                    <div className="flex gap-2">
                        <Select defaultValue="recently_joined">
                            <SelectTrigger className="w-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="recently_joined">{t('member:recently_joined')}</SelectItem>
                                <SelectItem value="highest_spend">{t('member:highest_spend')}</SelectItem>
                                <SelectItem value="lowest_spend">{t('member:lowest_spend')}</SelectItem>
                                <SelectItem value="highest_points">{t('member:highest_points')}</SelectItem>
                                <SelectItem value="lowest_points">{t('member:lowest_points')}</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select defaultValue="50">
                            <SelectTrigger className="w-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="50">50</SelectItem>
                                <SelectItem value="100">100</SelectItem>
                                <SelectItem value="500">500</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button className="border">엑셀 다운로드</Button>
                    </div>
                </div>
                <table className="w-full text-center border-collapse min-w-8xl border overflow-auto">
                    <thead className="bg-[#322A2408] border-t h-20">
                        <tr className="border-b text-[#6F6963]">
                            <th className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
                            <th className="p-2 items-center border">{t('member:name')}</th>
                            <th className="p-2 text-center border">{t('member:id')}</th>
                            <th className="p-2 text-center border">{t('member:phone')}</th>
                            <th className="p-2 text-center border">{t('member:membership_level')}</th>
                            <th className="p-2 text-center border">{t('member:registration_date')}</th>
                            <th className="p-2 text-center border">{t('member:total_purchase_amount')}</th>
                            <th className="p-2 text-center border">{t('member:reward_points')}</th>
                            <th className="p-2 text-center border">{t('member:view_details')}</th>
                            <th className="p-2 text-center border">{t('member:member_type')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                        <tr key={i} className="border-b h-14 text-[#1A1A1A] hover:bg-[#322A2408]" onClick={() => router.push(`${currentLocale}/member/${i}`)}>
                            <td className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white" onClick={(e) => e.stopPropagation()}/></td>
                            <td className="p-2 text-center border">홍길동</td>
                            <td className="p-2 text-center border">gidksaij@gmail.com</td>
                            <td className="p-2 text-center border">010-6545-6546</td>
                            <td className="p-2 text-center border">Gold</td>
                            <td className="p-2 text-center border">2023-11-23</td>
                            <td className="p-2 text-center bodrer">6,340,000원</td>
                            <td className="p-2 text-center border">4,300원</td>
                            <td className="p-2">
                                <div className="flex flex-row items-center justify-center gap-2">
                                    <Button className="border rounded px-2 h-6" onClick={(e) => {e.stopPropagation(); setOpenPoint((prev) => !prev);}}>{t('point:point')}</Button>
                                    <Button className="border rounded px-2 h-6" onClick={(e) => {e.stopPropagation(); setOpenCoupon((prev) => !prev);}}>{t('member:coupon')}</Button>
                                    <Button className="border rounded px-2 h-6" onClick={(e) => {e.stopPropagation(); setOpenCannotProcess((prev) => !prev);}}>{t('member:order')}</Button>
                                    <Button className="border rounded px-2 h-6" onClick={(e) => {e.stopPropagation(); setOpenMemo((prev) => !prev);}}>{t('member:note')}</Button>
                                </div>
                            </td>
                            <td className="p-2 text-center border">
                                {i === 1 ? <span className="text-red-500">{t('member:withdrawn_btn')}</span> : i === 2 ? <span className="text-red-500">{t('member:restricted_btn')}</span> : `${t('member:active')}`}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex gap-2 mt-2 flex-wrap">
                <Button className="border rounded px-3 py-1" onClick={() => setOpenMarkRestricted((prev) => !prev)}>{t('member:mark_restricted')}</Button>
                <Button className="border rounded px-3 py-1" onClick={() => setOpenUnmarkRestricted((prev) => !prev)}>{t('member:unmark_restricted')}</Button>
                <Button className="border rounded px-3 py-1">{t('member:delete_member')}</Button>
                <Button className="border rounded px-3 py-1">{t('member:bulk_point')}</Button>
                <Button className="border rounded px-3 py-1">{t('member:bulk_coupon')}</Button>
            </div>
            <Pagination totalPages={15} />

            <MemberModal open={openMarkRestricted} setOpen={setOpenMarkRestricted} contents={<span className="text-2xl font-bold">{t('member:restricted_title')}</span>} isTwoBtn={true} btnText1={t('save')} btnText2={t('cancel')} confirmFn={() => setOpenMarkRestricted(false)} />
            <MemberModal open={openUnmarkRestricted} setOpen={setOpenUnmarkRestricted} contents={<span className="text-2xl font-bold">{t('member:unmark_restricted_title')}</span>} isTwoBtn={true} btnText1={t('save')} btnText2={t('cancel')} confirmFn={() => setOpenUnmarkRestricted(false)} />
            <MemberModal open={openCannotProcess} setOpen={setOpenCannotProcess} contents={<div className="flex flex-col items-center justify-center"><span className="text-2xl font-bold">{t('member:cannot_process_title')}</span><span className="text-base">{t('member:cannot_process_sub')}</span></div>} isTwoBtn={false} btnText1={t('confirm')} confirmFn={() => setOpenCannotProcess(false)} />
            <MemberModal open={openMemo} setOpen={setOpenMemo} title={t('member:member_note')} contents={<Textarea placeholder={t('member:note_placeholder')} className="resize-none min-h-50 bg-[#322A2408] border-none p-4" />} isTwoBtn={true} btnText1={t('save')} btnText2={t('cancel')} confirmFn={() => setOpenMemo(false)} />
            <MemberPointCouponModal open={openPoint} setOpen={setOpenPoint} title={t('member:point_title')} contents={<PointModalContents t={t} />} btnText={t('save')} confirmFn={() => setOpenPoint(false)} />
            <MemberPointCouponModal open={openCoupon} setOpen={setOpenCoupon} title={t('member:issue_coupon_title')} contents={<CouponModalContents t={t} />} btnText={t('coupon:issue_coupon')} confirmFn={() => setOpenCoupon(false)} />
        </div>
    )
}