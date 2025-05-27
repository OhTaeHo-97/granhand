'use client'

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MemberModal from "./modal";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import MemberPointCouponModal from "./point-coupon-modal";
import PointModalContents from "./point-modal-contents";
import CouponModalContents from "./coupon-modal-contents";
import Pagination from "@/components/pagination";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import api from "@/utils/api";

export default function MemberList() {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'member' ,'point', 'coupon'])
    const currentLocale = useCurrentLocale()

    const [sortCategory, setSortCategory] = useState('recently_joined')
    const [rowCount, setRowCount] = useState('50')
    const [openMarkRestricted, setOpenMarkRestricted] = useState(false)
    const [openUnmarkRestricted, setOpenUnmarkRestricted] = useState(false)
    const [openDeleteMember, setOpenDeleteMember] = useState(false)
    const [openCannotProcess, setOpenCannotProcess] = useState(false)
    const [openMemo, setOpenMemo] = useState(false)
    const [openPoint, setOpenPoint] = useState(false)
    const [openCoupon, setOpenCoupon] = useState(false)

    const { data: session } = useSession()

    const fetchData = async () => {
        try {
            const response = await api.get('/member/list', {
                token: session?.token,
                params: {
                    sortCategory,
                    rowCount
                }
            })
            console.log('members: ', response)
        } catch (error) {
            console.error('Failed to fetch products:', error)
        }
    }

    useEffect(() => {
        // if(session?.token) {
        //     fetchData()
        // }
        router.push(`${currentLocale}/member?sortCategory=${sortCategory}&rowCount=${rowCount}`)
    }, [sortCategory, rowCount])

    return (
        <div className="p-6 shadow-sm">
            <div>
                <div className="mb-4 justify-between flex items-center">
                    <div className="text-[#5E5955] font-bold text-base">
                        {t('member:total_members')} <span className="text-[#FF3E24] font-bold">12,312,831</span> {t('member:users')}
                    </div>
                    <div className="flex gap-2">
                        <Select value={sortCategory} onValueChange={setSortCategory}>
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
                        <Select value={rowCount} onValueChange={setRowCount}>
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
                <table className="w-full text-center min-w-8xl overflow-auto">
                    <thead className="bg-[#322A2408] border-t h-20">
                        <tr className="border-b text-[#6F6963]">
                            <th className="p-2 items-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
                            <th className="p-2 items-center">{t('member:name')}</th>
                            <th className="p-2 text-center">{t('member:id')}</th>
                            <th className="p-2 text-center">{t('member:phone')}</th>
                            <th className="p-2 text-center">{t('member:membership_level')}</th>
                            <th className="p-2 text-center">{t('member:registration_date')}</th>
                            <th className="p-2 text-center">{t('member:total_purchase_amount')}</th>
                            <th className="p-2 text-center">{t('member:reward_points')}</th>
                            <th className="p-2 text-center">{t('member:view_details')}</th>
                            <th className="p-2 text-center">{t('member:member_type')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                        <tr key={i} className="h-14 text-[#1A1A1A]">
                            <td className="p-2 items-center "><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white" onClick={(e) => e.stopPropagation()}/></td>
                            <td className="p-2 text-center">홍길동</td>
                            <td className="p-2 text-center underline hover:cursor-pointer" onClick={() => router.push(`${currentLocale}/member/${i}`)}>gidksaij@gmail.com</td>
                            <td className="p-2 text-center">010-6545-6546</td>
                            <td className="p-2 text-center">Gold</td>
                            <td className="p-2 text-center">2023-11-23</td>
                            <td className="p-2 text-center">6,340,000원</td>
                            <td className="p-2 text-center">4,300원</td>
                            <td className="p-2">
                                <div className="flex flex-row items-center justify-center gap-2">
                                    <Button className="border rounded px-2 h-6" onClick={(e) => {e.stopPropagation(); setOpenPoint((prev) => !prev);}}>{t('point:point')}</Button>
                                    <Button className="border rounded px-2 h-6" onClick={(e) => {e.stopPropagation(); setOpenCoupon((prev) => !prev);}}>{t('member:coupon')}</Button>
                                    <Button className="border rounded px-2 h-6" onClick={(e) => {e.stopPropagation(); setOpenCannotProcess((prev) => !prev);}}>{t('member:order')}</Button>
                                    <Button className="border rounded px-2 h-6" onClick={(e) => {e.stopPropagation(); setOpenMemo((prev) => !prev);}}>{t('member:note')}</Button>
                                </div>
                            </td>
                            <td className="p-2 text-center">
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
                <Button className="border rounded px-3 py-1" onClick={() => setOpenDeleteMember((prev) => !prev)}>{t('member:delete_member')}</Button>
                <Button className="border rounded px-3 py-1" onClick={() => setOpenPoint((prev) => !prev)}>{t('member:bulk_point')}</Button>
                <Button className="border rounded px-3 py-1" onClick={() => setOpenCoupon((prev) => !prev)}>{t('member:bulk_coupon')}</Button>
            </div>
            <Pagination totalPages={15} />

            <MemberModal open={openMarkRestricted} setOpen={setOpenMarkRestricted} contents={<span className="text-2xl font-bold">{t('member:restricted_title')}</span>} isTwoBtn={true} btnText1={t('save')} btnText2={t('cancel')} confirmFn={() => setOpenMarkRestricted(false)} />
            <MemberModal open={openUnmarkRestricted} setOpen={setOpenUnmarkRestricted} contents={<span className="text-2xl font-bold">{t('member:unmark_restricted_title')}</span>} isTwoBtn={true} btnText1={t('save')} btnText2={t('cancel')} confirmFn={() => setOpenUnmarkRestricted(false)} />
            {/* 삭제모달 */}
            <MemberModal open={openDeleteMember} setOpen={setOpenDeleteMember} contents={<span className="text-2xl font-bold">{t('member:delete_member_title')}</span>} isTwoBtn={true} btnText1={t('save')} btnText2={t('cancel')} confirmFn={() => setOpenDeleteMember(false)} />
            <MemberModal open={openCannotProcess} setOpen={setOpenCannotProcess} contents={<div className="flex flex-col items-center justify-center"><span className="text-2xl font-bold">{t('member:cannot_process_title')}</span><span className="text-base">{t('member:cannot_process_sub')}</span></div>} isTwoBtn={false} btnText1={t('confirm')} confirmFn={() => setOpenCannotProcess(false)} />
            <MemberModal open={openMemo} setOpen={setOpenMemo} title={t('member:member_note')} contents={<Textarea placeholder={t('member:note_placeholder')} className="resize-none min-h-50 bg-[#322A2408] border-none p-4" />} isTwoBtn={true} btnText1={t('save')} btnText2={t('cancel')} confirmFn={() => setOpenMemo(false)} />
            <MemberPointCouponModal open={openPoint} setOpen={setOpenPoint} title={t('member:point_title')} contents={<PointModalContents t={t} />} btnText={t('save')} confirmFn={() => setOpenPoint(false)} />
            <MemberPointCouponModal open={openCoupon} setOpen={setOpenCoupon} title={t('member:issue_coupon_title')} contents={<CouponModalContents t={t} />} btnText={t('coupon:issue_coupon')} confirmFn={() => setOpenCoupon(false)} />
        </div>
    )
}