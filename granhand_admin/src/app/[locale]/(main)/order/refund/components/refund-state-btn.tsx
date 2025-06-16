'use client'

import { Button } from "@/components/ui/button";
import { useState } from "react";
import OrderBaseModal from "../../components/modal/order-base-modal";
import EditOrProcessOrderModal from "../../components/modal/edit-or-process-order-modal";
import ReturnPickupModalContents from "./modal/return-pickup-modal";
import DenyReturnModalContents from "./modal/deny-return-modal";
import PendingReturnModalContents from "./modal/pending-return-modal";
import CancelPendingReturnModalContents from "./modal/cancel-pending-modal";
import ReturnCompleteModalContents from "./modal/return-complete-modal";
import { TFunction } from "i18next";

export default function RefundStateBtn({ refundState, t }: { refundState?: string, t: TFunction }) {
    const [openReturnPickup, setOpenReturnPickup] = useState(false)
    const [openDenyReturn, setOpenDenyReturn] = useState(false)
    const [openPendingReturn, setPendingReturn] = useState(false)
    const [openCancelPending, setOpenCancelPending] = useState(false)
    const [openPickupComplete, setOpenPickupComplete] = useState(false)
    const [openReturnComplete, setOpenReturnComplete] = useState(false)

    return (
        <>
            {refundState === 'return_requested' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenReturnPickup((prev) => !prev)}>{t('order:register_return_pickup')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenDenyReturn((prev) => !prev)}>{t('order:reject_return')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setPendingReturn((prev) => !prev)}>{t('order:return_hold')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenReturnComplete((prev) => !prev)}>{t('order:process_mark_return_cmpl')}</Button>
                </div>
            )}
            {refundState === 'return_hold' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenCancelPending((prev) => !prev)}>{t('order:release_return_hold')}</Button>
                </div>
            )}
            {refundState === 'return_pickup' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenPickupComplete((prev) => !prev)}>{t('order:return_pickup_cmpl')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenDenyReturn((prev) => !prev)}>{t('order:reject_return')}</Button>
                </div>
            )}
            {refundState === 'return_pickup_cmpl' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenReturnComplete((prev) => !prev)}>{t('order:process_mark_return_cmpl')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenDenyReturn((prev) => !prev)}>{t('order:reject_return')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setPendingReturn((prev) => !prev)}>{t('order:return_hold')}</Button>
                </div>
            )}
            
            <EditOrProcessOrderModal open={openReturnPickup} title={t('order:process_return_pickup')} contentsTxt={`${t('order:process_order_confirm_msg1', { total: 10, count: 1 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`} contents={<ReturnPickupModalContents t={t} />} setOpen={setOpenReturnPickup} />
            <EditOrProcessOrderModal open={openDenyReturn} title={t('order:process_return_reject')} contentsTxt={t('order:process_order_confirm_msg1', { total: 10, count: 1 })} contents={<DenyReturnModalContents t={t} />} setOpen={setOpenDenyReturn} />
            <EditOrProcessOrderModal open={openPendingReturn} title={t('order:process_return_hold')} contentsTxt={t('order:process_order_confirm_msg1', { total: 10, count: 1 })} contents={<PendingReturnModalContents t={t} />} setOpen={setPendingReturn} />
            <EditOrProcessOrderModal open={openCancelPending} width="w-150" title={t('order:process_release_return_hold')} contentsTxt={`${t('order:process_order_confirm_msg1', { total: 10, count: 1 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`} contents={<CancelPendingReturnModalContents t={t} />} setOpen={setOpenCancelPending} />
            <OrderBaseModal open={openPickupComplete} title={t('order:process_mark_return_pickup_cmpl')} contents={`${t('order:process_order_confirm_msg1', { total: 10, count: 1 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`} setOpen={setOpenPickupComplete} />
            <EditOrProcessOrderModal open={openReturnComplete} title={t('order:process_mark_return_cmpl')} contentsTxt={t('order:process_order_confirm_msg1', { total: 10, count: 1 })} contents={<ReturnCompleteModalContents t={t} />} setOpen={setOpenReturnComplete} />
        </>
    )
}