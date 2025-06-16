'use client'

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MemberModal from "./modal/modal";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import { useEffect, useState } from "react";
import Pagination from "@/components/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
// import api from "@/utils/api";
import MemberListTable from "./member-list-table";
import { MemberInfo, useMember } from "@/hooks/use-member";
import ExcelDownloadModal from "../../order/components/modal/excel-download-modal";

export default function MemberList() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'member' ,'point', 'coupon', 'push'])
    const currentLocale = useCurrentLocale()
    const { getMembers } = useMember()

    const initialSortCategory = searchParams.get('sortCategory') || 'recently_joined'
    const initialRowCount = searchParams.get('rowCount') || '50'
    const initialCurrentPage = parseInt(searchParams.get('currentPage') || '1', 10)

    const [sortCategory, setSortCategory] = useState(initialSortCategory)
    const [rowCount, setRowCount] = useState(initialRowCount)
    const [selectedIds, setSelectedIds] = useState<number[]>([])
    const [members, setMembers] = useState<MemberInfo[]>([])

    const [openMarkRestricted, setOpenMarkRestricted] = useState(false)
    const [openUnmarkRestricted, setOpenUnmarkRestricted] = useState(false)
    const [openDeleteMember, setOpenDeleteMember] = useState(false)
    const [openCannotProcess, setOpenCannotProcess] = useState(false)
    const [openPoint, setOpenPoint] = useState(false)
    const [openCoupon, setOpenCoupon] = useState(false)
    const [openExcelDown, setOpenExcelDown] = useState(false)
    const [currentPage, setCurrentPage] = useState(initialCurrentPage)
    const [totalPage, setTotalPage] = useState(1)
    const [hydrated, setHydrated] = useState(false)

    const { status } = useSession()

    const handleClickPointOrCoupon = (setOpenModal: React.Dispatch<React.SetStateAction<boolean>>) => {
        // const hasRestrictedMember = members.filter((member) => selectedIds.includes(member.idx!))
        // .some((member) => member.memberType === '불량' || member.memberType === '탈퇴')

        // if(hasRestrictedMember) {
        //     setOpenCannotProcess(true)
        // } else {
        //     setOpenModal((prev) => !prev)
        // }
        setOpenModal((prev) => !prev)
    }

    const fetchMembers = async () => {
        const params: Record<string, number | string> = {}
        params.page = currentPage
        params.size = rowCount

        const { data, error } = await getMembers(params)

        if (error) {
            console.error(`Failed to fetch members for error: `, error)
        } else if (data) {
            console.log('data: ', data)
            if(data.datas) {
                setMembers(data.datas)
                setTotalPage(data.pagination.pages)
            } else {
                setMembers([])
                setTotalPage(0)
            }
        }
    }
    useEffect(() => {
        setHydrated(true)
    }, [])

    useEffect(() => {
        if(status === 'authenticated') {
            fetchMembers()
        }

        if(hydrated) {
            const newSearchParams = new URLSearchParams(searchParams)
            newSearchParams.set('sortCategory', sortCategory)
            newSearchParams.set('rowCount', rowCount.toString())
            newSearchParams.set('currentPage', currentPage.toString())
            // sortCategory=${sortCategory}&rowCount=${rowCount}&currentPage=${currentPage}
            router.push(`${currentLocale}/member?${newSearchParams.toString()}`)
        }
    }, [status, sortCategory, rowCount, currentPage])

    return (
        <div className="p-6 shadow-sm">
            <div>
                <div className="mb-4 justify-between flex items-center">
                    <div className="text-[#5E5955] font-bold text-base">
                        {t('member:total_members')} <span className="text-[#FF3E24] font-bold">{members.length}</span> {t('member:users')}
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
                        <Button className="border" onClick={() => setOpenExcelDown((prev) => !prev)}>{t('excel_down')}</Button>
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
            <Pagination totalPages={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />

            <MemberModal open={openMarkRestricted} setOpen={setOpenMarkRestricted} contents={<span className="text-2xl font-bold">{t('member:restricted_title')}</span>} isTwoBtn={true} btnText1={t('save')} btnText2={t('cancel')} confirmFn={() => setOpenMarkRestricted(false)} />
            <MemberModal open={openUnmarkRestricted} setOpen={setOpenUnmarkRestricted} contents={<span className="text-2xl font-bold">{t('member:unmark_restricted_title')}</span>} isTwoBtn={true} btnText1={t('save')} btnText2={t('cancel')} confirmFn={() => setOpenUnmarkRestricted(false)} />
            {/* 삭제모달 */}
            <MemberModal open={openDeleteMember} setOpen={setOpenDeleteMember} contents={<span className="text-2xl font-bold">{t('member:delete_member_title')}</span>} isTwoBtn={true} btnText1={t('save')} btnText2={t('cancel')} confirmFn={() => setOpenDeleteMember(false)} />
            <ExcelDownloadModal open={openExcelDown} setOpen={setOpenExcelDown} t={t} />
        </div>
    )
}