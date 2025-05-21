'use client'

import { Button } from "@/components/ui/button";
import { useState } from "react";
import OrderBaseModal from "../../components/modal/order-base-modal";
import DenyCancelModal from "./modal/deny-cancel-modal";
import CancelPendingModal from "./modal/cancel-pending-modal";

export default function CancelStateBtn({ cancelState, t }: { cancelState?: string, t: (key: string) => string }) {
    const [openConfirmCancel, setOpenConfirmCancel] = useState(false)
    const [openPendingCancel, setOpenPendingCancel] = useState(false)
    const [openDenyCancel, setOpenDenyCancel] = useState(false)
    const [openCancelPending, setOpenCancelPending] = useState(false)

    return (
        <>
            {cancelState === 'cancel_requested' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenConfirmCancel((prev) => !prev)}>취소 승인</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenDenyCancel((prev) => !prev)}>취소 거부</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenPendingCancel((prev) => !prev)}>취소 보류</Button>
                </div>
            )}
            {cancelState === 'cancel_pending' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenCancelPending((prev) => !prev)}>취소 보류 해제</Button>
                </div>
            )}
            
            <OrderBaseModal open={openConfirmCancel} setOpen={setOpenConfirmCancel} title="취소 완료 처리" contents={`선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다.\n1건에 대해 처리하시겠습니까?`} />
            <OrderBaseModal open={openPendingCancel} setOpen={setOpenPendingCancel} title="취소 보류 처리" contents={`선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다.\n1건에 대해 처리하시겠습니까?`} />
            <DenyCancelModal open={openDenyCancel} setOpen={setOpenDenyCancel} t={t} />
            <CancelPendingModal open={openCancelPending} setOpen={setOpenCancelPending} />
        </>
    )
}