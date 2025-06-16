import { Checkbox } from "@/components/ui/checkbox";
// import { Member } from "./member-list";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import MemberModal from "./modal/modal";
import { Textarea } from "@/components/ui/textarea";
import MemberPointCouponModal from "./modal/point-coupon-modal";
import PointModalContents from "./modal/contents/point-modal-contents";
import CouponModalContents from "./modal/contents/coupon-modal-contents";
import { MemberInfo } from "@/hooks/use-member";
import { format } from "date-fns";

export default function MemberListTable({
    members,
    currentLocale,
    selectedIds,
    openPoint,
    openCoupon,
    openCannotProcess,
    setSelectedIds,
    setMembers,
    setOpenPoint,
    setOpenCoupon,
    setOpenCannotProcess,
    t
}: {
    members: MemberInfo[],
    currentLocale: string,
    selectedIds: number[],
    openPoint: boolean,
    openCoupon: boolean,
    openCannotProcess: boolean,
    setSelectedIds: React.Dispatch<React.SetStateAction<number[]>>,
    setMembers: React.Dispatch<React.SetStateAction<MemberInfo[]>>,
    setOpenPoint: React.Dispatch<React.SetStateAction<boolean>>,
    setOpenCoupon: React.Dispatch<React.SetStateAction<boolean>>,
    setOpenCannotProcess: React.Dispatch<React.SetStateAction<boolean>>,
    t: (key: string) => string
}) {
    const router = useRouter()
    // const [selectedIds, setSelectedIds] = useState<number[]>([])
    const [hoveredMemberId, setHoveredMemberId] = useState<number | null>(null)
    const [selectedMemberMemo, setSelectedMemberMemo] = useState<string | undefined>(undefined)
    const [memoModalMemberId, setMemoModalMemberId] = useState<number | null>(null)

    const [openMemo, setOpenMemo] = useState(false)

    const getRegDate = (date: string) => {
        const regDate = new Date(date)
        return format(regDate, 'yyyy-MM-dd')
    }

    const handleSelectAll = (checked: boolean) => {
        if(checked) {
            const allIds = members.map(member => member.idx)
            setSelectedIds(allIds)
        } else {
            setSelectedIds([])
        }
    }

    const handleCheckboxChange = (id: number) => {
        setSelectedIds((prev) => {
            if(prev.includes(id)) {
                return prev.filter((itemId) => itemId !== id)
            } else {
                return [...prev, id]
            }
        })
    }

    const handleMemoClick = (memberId: number, memoContent: string | undefined) => {
        setMemoModalMemberId(memberId)
        setSelectedMemberMemo(memoContent)
        setOpenMemo(true)
    }

    const handleSaveMemo = () => {
        if (memoModalMemberId !== null) {
             // TODO: 메모 서버에 저장하는 로직 구현
            console.log(`Saving memo for member ${memoModalMemberId}:`, selectedMemberMemo)

            setMembers(members.map(member =>
                member.idx === memoModalMemberId ? { ...member, memo: selectedMemberMemo } : member
            ))
        }
        setOpenMemo(false)
        setMemoModalMemberId(null)
        setSelectedMemberMemo(undefined)
    }

    const handleCloseMemoModal = () => {
        setOpenMemo(false)
        setMemoModalMemberId(null)
        setSelectedMemberMemo(undefined)
    }

    return (
        <>
            <table className="w-full text-center min-w-8xl overflow-auto">
                <thead className="bg-[#322A2408] border-t h-20">
                    <tr className="border-b text-[#6F6963]">
                        <th className="p-2 items-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white" onCheckedChange={handleSelectAll}/></th>
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
                    {members.length === 0 ? (
                        <tr>
                            <td colSpan={10} className="h-32 text-center text-gray-500">{t('no_results')}</td>
                        </tr>
                    ) : (
                        members.map((member) => (
                            <tr
                                key={member.id}
                                className="h-14 text-[#1A1A1A] hover:bg-[#322A2408] relative"
                                onMouseEnter={() => {
                                    setHoveredMemberId(member.idx)
                                }}
                                onMouseLeave={() => setHoveredMemberId(null)}
                            >
                                <td className="p-2 items-center ">
                                    <Checkbox
                                        id={`${member.id}`}
                                        className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                                        checked={selectedIds.includes(member.idx)}
                                        onCheckedChange={() => handleCheckboxChange(member.idx)}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                </td>
                                <td className="p-2 text-center">{member.name}</td>
                                <td className="p-2 text-center underline hover:cursor-pointer" onClick={() => router.push(`${currentLocale}/member/${member.id}`)}>{member.id}</td>
                                <td className="p-2 text-center">010-6545-6546</td>
                                <td className="p-2 text-center">Gold</td>
                                <td className="p-2 text-center">{getRegDate(member.signdate)}</td>
                                <td className="p-2 text-center">6,340,000원</td>
                                <td className="p-2 text-center">4,300원</td>
                                <td className="p-2 relative">
                                    <div className="flex flex-row items-center justify-center gap-2">
                                        <Button className="border rounded px-2 h-6" onClick={(e) => {e.stopPropagation(); setOpenPoint((prev) => !prev);}}>{t('point:point')}</Button>
                                        <Button className="border rounded px-2 h-6" onClick={(e) => {e.stopPropagation(); setOpenCoupon((prev) => !prev);}}>{t('member:coupon')}</Button>
                                        <Button className="border rounded px-2 h-6" onClick={(e) => {e.stopPropagation();}}>{t('member:order')}</Button>
                                        <div className="relative">
                                            <Button
                                                className="border rounded px-2 h-6"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // handleMemoClick(member.idx, member.memo)
                                                    handleMemoClick(member.idx, '메모')
                                                }}
                                            >
                                                {t('member:note')}
                                            </Button>
                                            {/* {hoveredMemberId === member.idx && member.memo && ( */}
                                            {hoveredMemberId === member.idx && (
                                                <div className="absolute right-0 top-full mt-1 w-64 bg-[#FDFBF5] text-[#C0BCB6] p-3 text-xs rounded-md shadow-lg z-10 text-center"> {/* 스타일 조정: right-0은 부모 relative 컨테이너(메모 버튼 감싼 div) 기준 */}
                                                    {/* {member.memo} */}
                                                    {t('member:note')}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 text-center">
                                    {member.idx === 1 ? <span className="text-red-500">{t('member:withdrawn_btn')}</span> : member.idx === 2 ? <span className="text-red-500">{t('member:restricted_btn')}</span> : `${t('member:active')}`}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            <MemberModal open={openMemo} setOpen={setOpenMemo} title={t('member:member_note')} contents={<Textarea placeholder={t('member:note_placeholder')} value={selectedMemberMemo} onChange={(e) => setSelectedMemberMemo(e.target.value)} className="resize-none min-h-50 bg-[#322A2408] border-none p-4" />} isTwoBtn={true} btnText1={t('save')} btnText2={t('cancel')} cancelFn={handleCloseMemoModal} confirmFn={handleSaveMemo} />
            <MemberPointCouponModal open={openPoint} setOpen={setOpenPoint} title={t('member:point_title')} contents={<PointModalContents t={t} />} btnText={t('save')} confirmFn={() => setOpenPoint(false)} />
            <MemberPointCouponModal open={openCoupon} setOpen={setOpenCoupon} title={t('member:issue_coupon_title')} contents={<CouponModalContents t={t} />} btnText={t('coupon:issue_coupon')} confirmFn={() => setOpenCoupon(false)} />
            <MemberModal open={openCannotProcess} setOpen={setOpenCannotProcess} contents={<div className="flex flex-col items-center justify-center"><span className="text-2xl font-bold">{t('member:cannot_process_title')}</span><span className="text-base">{t('member:cannot_process_sub')}</span></div>} isTwoBtn={false} btnText1={t('confirm')} confirmFn={() => setOpenCannotProcess(false)} />
        </>
    )
}