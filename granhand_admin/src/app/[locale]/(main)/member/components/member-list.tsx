'use client'

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MemberModal from "./modal/modal";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import { useCallback, useEffect, useState } from "react";
import Pagination from "@/components/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import api from "@/utils/api";
import MemberListTable from "./member-list-table";

export interface Member {
    id: number;
    name: string;
    email: string;
    phone: string;
    membershipLevel: string;
    registrationDate: string;
    totalPurchaseAmount: string; // 또는 number
    rewardPoints: string; // 또는 number
    memberType: string;
    memo?: string; // 메모 필드 추가
}

const mockMembers: Member[] = [
    { id: 1, name: '홍길이', email: 'gidklsaj@gmail.com', phone: '010-6545-6546', membershipLevel: 'Silver', registrationDate: '2023-11-23', totalPurchaseAmount: '6,340,000원', rewardPoints: '4,300원', memberType: '탈퇴', memo: '탈퇴 사유: 개인 사정입니다. 재가입 의사 없음.' },
    { id: 2, name: '홍길삼', email: 'gidklsaj@gmail.com', phone: '010-6545-6546', membershipLevel: 'Bronze', registrationDate: '2023-11-23', totalPurchaseAmount: '6,340,000원', rewardPoints: '4,300원', memberType: '불량', memo: '블랙 컨슈머. 상습적으로 환불 요청 및 컴플레인. 응대 시 주의 요망.' },
    { id: 3, name: '홍길사', email: 'gidklsaj@gmail.com', phone: '010-6545-6546', membershipLevel: 'Basic', registrationDate: '2023-11-23', totalPurchaseAmount: '6,340,000원', rewardPoints: '4,300원', memberType: '일반', memo: '친절하고 응대가 좋은 고객. 재구매율 높음.' },
    { id: 4, name: '홍길오', email: 'gidklsaj@gmail.com', phone: '010-6545-6546', membershipLevel: 'VIP', registrationDate: '2023-11-23', totalPurchaseAmount: '6,340,000원', rewardPoints: '4,300원', memberType: '일반' },
    { id: 5, name: '홍길육', email: 'gidklsaj@gmail.com', phone: '010-6545-6546', membershipLevel: 'Gold', registrationDate: '2023-11-23', totalPurchaseAmount: '6,340,000원', rewardPoints: '4,300원', memberType: '일반' },
    { id: 6, name: '홍길칠', email: 'gidklsaj@gmail.com', phone: '010-6545-6546', membershipLevel: 'Gold', registrationDate: '2023-11-23', totalPurchaseAmount: '6,340,000원', rewardPoints: '4,300원', memberType: '일반' },
    { id: 7, name: '홍길팔', email: 'gidklsaj@gmail.com', phone: '010-6545-6546', membershipLevel: 'Gold', registrationDate: '2023-11-23', totalPurchaseAmount: '6,340,000원', rewardPoints: '4,300원', memberType: '일반' },
    { id: 8, name: '홍길구', email: 'gidklsaj@gmail.com', phone: '010-6545-6546', membershipLevel: 'Gold', registrationDate: '2023-11-23', totalPurchaseAmount: '6,340,000원', rewardPoints: '4,300원', memberType: '일반' },
    { id: 9, name: '홍길일', email: 'gidklsaj@gmail.com', phone: '010-6545-6546', membershipLevel: 'Gold', registrationDate: '2023-11-23', totalPurchaseAmount: '6,340,000원', rewardPoints: '4,300원', memberType: '일반', memo: '특이사항 없음. 일반적인 고객.' },
    // 12개 채우기 위해 더미 추가
    { id: 10, name: '가나다', email: 'ganada@gmail.com', phone: '010-1111-2222', membershipLevel: 'Basic', registrationDate: '2024-01-01', totalPurchaseAmount: '1,000,000원', rewardPoints: '100원', memberType: '일반' },
    { id: 11, name: '라마바', email: 'ramaba@gmail.com', phone: '010-3333-4444', membershipLevel: 'Silver', registrationDate: '2024-02-15', totalPurchaseAmount: '2,500,000원', rewardPoints: '500원', memberType: '일반' },
    { id: 12, name: '사아자', email: 'saaza@gmail.com', phone: '010-5555-6666', membershipLevel: 'Bronze', registrationDate: '2024-03-30', totalPurchaseAmount: '800,000원', rewardPoints: '50원', memberType: '일반', memo: '자주 문의함. 궁금증이 많은 편.' },
]

export default function MemberList() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'member' ,'point', 'coupon'])
    const currentLocale = useCurrentLocale()

    const initialSortCategory = searchParams.get('sortCategory') || 'recently_joined'
    const initialRowCount = searchParams.get('rowCount') || '50'
    const initialCurrentPage = parseInt(searchParams.get('currentPage') || '1', 10)

    const [sortCategory, setSortCategory] = useState(initialSortCategory)
    const [rowCount, setRowCount] = useState(initialRowCount)
    const [selectedIds, setSelectedIds] = useState<number[]>([])
    const [members, setMembers] = useState<Member[]>(mockMembers)

    const [openMarkRestricted, setOpenMarkRestricted] = useState(false)
    const [openUnmarkRestricted, setOpenUnmarkRestricted] = useState(false)
    const [openDeleteMember, setOpenDeleteMember] = useState(false)
    const [openCannotProcess, setOpenCannotProcess] = useState(false)
    const [openPoint, setOpenPoint] = useState(false)
    const [openCoupon, setOpenCoupon] = useState(false)
    const [currentPage, setCurrentPage] = useState(initialCurrentPage)
    const [hydrated, setHydrated] = useState(false)

    const { data: session, status } = useSession()

    const handleClickPointOrCoupon = (setOpenModal: React.Dispatch<React.SetStateAction<boolean>>) => {
        const hasRestrictedMember = members.filter((member) => selectedIds.includes(member.id))
        .some((member) => member.memberType === '불량' || member.memberType === '탈퇴')

        if(hasRestrictedMember) {
            setOpenCannotProcess(true)
        } else {
            setOpenModal((prev) => !prev)
        }
    }

    const fetchMembers = useCallback(async () => {
        if(status !== 'authenticated' || !session?.token) {
            return
        }

        try {
            const response = await api.get('/member/list', {
                token: session.token,
                params: {
                    sortCategory,
                    rowCount
                }
            })
            console.log('members: ', response)
        } catch (error) {
            console.error('Failed to fetch members:', error)
        }
    }, [sortCategory, rowCount, currentPage, status])

    // const deleteMembers = async () => {
    //     if(status !== 'authenticated' || !session?.token) {
    //         console.log('Cannot delete member - no valid session')
    //         return
    //     }

    //     try {
    //         selectedIds.map(async (id) => {
    //             const response = await api.delete(`/member/${id}`, {}, {
    //                 token: session.token
    //             })
    //         })
    //     } catch (error) {
    //         console.error('Failed to delete member:', error)
    //     }
    // }

    // const updateMembers = async () => {
    //     if(status !== 'authenticated' || !session?.token) {
    //         console.log('Cannot update member - no valid session')
    //         return
    //     }

    //     try {
    //         selectedIds
    //     }
    // }

    useEffect(() => {
        setHydrated(true)
    }, [])

    useEffect(() => {
        // if(session?.token) {
        //     fetchMembers()
        // }
        if(hydrated) {
            const newSearchParams = new URLSearchParams(searchParams.toString())
            newSearchParams.set('sortCategory', sortCategory)
            newSearchParams.set('rowCount', rowCount.toString())
            newSearchParams.set('currentPage', currentPage.toString())

            router.push(`${currentLocale}/member?sortCategory=${sortCategory}&rowCount=${rowCount}&currentPage=${currentPage}`)
        }
    }, [sortCategory, rowCount, currentPage])

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
                <MemberListTable members={members} selectedIds={selectedIds} openPoint={openPoint} openCoupon={openCoupon} openCannotProcess={openCannotProcess} currentLocale={currentLocale} setSelectedIds={setSelectedIds} setMembers={setMembers} setOpenPoint={setOpenPoint} setOpenCoupon={setOpenCoupon} setOpenCannotProcess={setOpenCannotProcess} t={t} />
            </div>

            <div className="flex gap-2 mt-2 flex-wrap">
                <Button className="border rounded px-3 py-1" onClick={() => setOpenMarkRestricted((prev) => !prev)} disabled={selectedIds.length === 0}>{t('member:mark_restricted')}</Button>
                <Button className="border rounded px-3 py-1" onClick={() => setOpenUnmarkRestricted((prev) => !prev)} disabled={selectedIds.length === 0}>{t('member:unmark_restricted')}</Button>
                <Button className="border rounded px-3 py-1" onClick={() => setOpenDeleteMember((prev) => !prev)} disabled={selectedIds.length === 0}>{t('member:delete_member')}</Button>
                <Button className="border rounded px-3 py-1" onClick={() => handleClickPointOrCoupon(setOpenPoint)} disabled={selectedIds.length === 0}>{t('member:bulk_point')}</Button>
                <Button className="border rounded px-3 py-1" onClick={() => handleClickPointOrCoupon(setOpenCoupon)} disabled={selectedIds.length === 0}>{t('member:bulk_coupon')}</Button>
            </div>
            <Pagination totalPages={15} currentPage={currentPage} setCurrentPage={setCurrentPage} />

            <MemberModal open={openMarkRestricted} setOpen={setOpenMarkRestricted} contents={<span className="text-2xl font-bold">{t('member:restricted_title')}</span>} isTwoBtn={true} btnText1={t('save')} btnText2={t('cancel')} confirmFn={() => setOpenMarkRestricted(false)} />
            <MemberModal open={openUnmarkRestricted} setOpen={setOpenUnmarkRestricted} contents={<span className="text-2xl font-bold">{t('member:unmark_restricted_title')}</span>} isTwoBtn={true} btnText1={t('save')} btnText2={t('cancel')} confirmFn={() => setOpenUnmarkRestricted(false)} />
            {/* 삭제모달 */}
            <MemberModal open={openDeleteMember} setOpen={setOpenDeleteMember} contents={<span className="text-2xl font-bold">{t('member:delete_member_title')}</span>} isTwoBtn={true} btnText1={t('save')} btnText2={t('cancel')} confirmFn={() => setOpenDeleteMember(false)} />
        </div>
    )
}