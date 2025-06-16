'use client'

import { Button } from "@/components/ui/button";
import { useState } from "react";
import OrderBaseModal from "../../components/modal/order-base-modal";
import DenyCancelModal from "./modal/deny-cancel-modal";
import CancelPendingModal from "./modal/cancel-pending-modal";
import { TFunction } from "i18next";

export default function CancelStateBtn({ cancelState, t }: { cancelState?: string, t: TFunction }) {
    const [openConfirmCancel, setOpenConfirmCancel] = useState(false)
    const [openPendingCancel, setOpenPendingCancel] = useState(false)
    const [openDenyCancel, setOpenDenyCancel] = useState(false)
    const [openCancelPending, setOpenCancelPending] = useState(false)

    return (
        <>
            {cancelState === 'cancel_requested' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenConfirmCancel((prev) => !prev)}>{t('order:approve_cancel')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenDenyCancel((prev) => !prev)}>{t('order:reject_cancel')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenPendingCancel((prev) => !prev)}>{t('order:cancel_pending')}</Button>
                </div>
            )}
            {cancelState === 'cancel_pending' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenCancelPending((prev) => !prev)}>{t('order:release_hold')}</Button>
                </div>
            )}
            
            <OrderBaseModal open={openConfirmCancel} setOpen={setOpenConfirmCancel} title={t('order:process_cancel_complete')} contents={`${t('order:process_order_confirm_msg1', { total: 10, count: 1 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`} />
            <OrderBaseModal open={openPendingCancel} setOpen={setOpenPendingCancel} title={t('order:process_hold_cancel')} contents={`${t('order:process_order_confirm_msg1', { total: 10, count: 1 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`} />
            <DenyCancelModal open={openDenyCancel} setOpen={setOpenDenyCancel} t={t} />
            <CancelPendingModal open={openCancelPending} setOpen={setOpenCancelPending} t={t} />
        </>
    )
}