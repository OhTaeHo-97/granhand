'use client'

import { Button } from "@/components/ui/button";
import { useState } from "react";
import OrderBaseModal from "../../components/modal/order-base-modal";
import EditOrProcessOrderModal from "../../components/modal/edit-or-process-order-modal";
import ExchangePickupModalContents from "./modal/exchange-pickup-modal";
import DenyExchangeModalContents from "./modal/deny-exchange-modal";
import CancelPendingExchangeModalContents from "./modal/cancel-pending-modal";
import PendingExchangeModalContents from "./modal/pending-exchange-modal";
import ReShippingModalContents from "./modal/re-shipping-modal";
import EditTrackingNumberModal from "../../components/modal/edit-tracking-number-modal";
import { TFunction } from "i18next";

export default function ExchangeStateBtn({ exchangeState, t }: { exchangeState?: string, t: TFunction }) {
    const [openExchangePickup, setOpenExchangePickup] = useState(false)
    const [openDenyExchange, setOpenDenyExchange] = useState(false)
    const [openPendingExchange, setOpenPendingExchange] = useState(false)
    const [openCancelPending, setOpenCancelPending] = useState(false)
    const [openPickupComplete, setOpenPickupComplete] = useState(false)
    const [openReShipping, setOpenReShipping] = useState(false)
    const [openExchangeComplete, setOpenExchangeComplete] = useState(false)
    const [openEditTracking, setOpenEditTracking] = useState(false)

    // const [openConfirmCancel, setOpenConfirmCancel] = useState(false)
    // const [openPendingCancel, setOpenPendingCancel] = useState(false)
    const [, setOpenPendingCancel] = useState(false)
    // const [openDenyCancel, setOpenDenyCancel] = useState(false)
    // const [openCancelPending, setOpenCancelPending] = useState(false)

    return (
        <>
            {exchangeState === 'exchange_requested' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenExchangePickup((prev) => !prev)}>{t('order:return_inspection')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenDenyExchange((prev) => !prev)}>{t('order:reject_exchange')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenPendingExchange((prev) => !prev)}>{t('order:exchange_pending')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenPickupComplete((prev) => !prev)}>{t('order:pickup_cmpl')}</Button>
                </div>
            )}
            {exchangeState === 'exchange_pending' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenCancelPending((prev) => !prev)}>{t('order:release_exchange_hold')}</Button>
                </div>
            )}
            {exchangeState === 'pickup' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenPickupComplete((prev) => !prev)}>{t('order:pickup_cmpl')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenDenyExchange((prev) => !prev)}>{t('order:reject_exchange')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenPendingCancel((prev) => !prev)}>{t('order:edit_exchange_info')}</Button>
                </div>
            )}
            {exchangeState === 'pickup_cmpl' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenReShipping((prev) => !prev)}>{t('order:re_ship')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenDenyExchange((prev) => !prev)}>{t('order:reject_exchange')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenPendingExchange((prev) => !prev)}>{t('order:exchange_pending')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenPendingCancel((prev) => !prev)}>{t('order:edit_exchange_info')}</Button>
                </div>
            )}
            {exchangeState === 're_ship' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenEditTracking((prev) => !prev)}>{t('order:edit_tracking')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenExchangeComplete((prev) => !prev)}>{t('order:process_mark_exchange_cmpl')}</Button>
                </div>
            )}

            <EditOrProcessOrderModal open={openExchangePickup} title={t('order:process_register_exchange_pickup')} contentsTxt={`${t('order:process_order_confirm_msg1', { total: 10, count: 1 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`} contents={<ExchangePickupModalContents t={t} />} setOpen={setOpenExchangePickup} />

            <EditOrProcessOrderModal open={openDenyExchange} title={t('order:process_exchange_rejection')} contentsTxt={t('order:process_order_confirm_msg1', { total: 10, count: 1 })} contents={<DenyExchangeModalContents t={t} />} setOpen={setOpenDenyExchange} />

            <EditOrProcessOrderModal open={openPendingExchange} title={t('order:process_exchange_hold')} contentsTxt={t('order:process_order_confirm_msg1', { total: 10, count: 1 })} contents={<PendingExchangeModalContents t={t} />} setOpen={setOpenPendingExchange} />

            <EditOrProcessOrderModal open={openCancelPending} width="w-150" title={t('order:process_release_exchange_hold')} contentsTxt={`${t('order:process_order_confirm_msg1', { total: 10, count: 1 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`} contents={<CancelPendingExchangeModalContents t={t} />} setOpen={setOpenCancelPending} />

            <OrderBaseModal open={openPickupComplete} title={t('order:process_mark_pickup_cmpl')} contents={`${t('order:process_order_confirm_msg1', { total: 10, count: 1 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`} setOpen={setOpenPickupComplete} />

            <EditOrProcessOrderModal open={openReShipping} title={t('order:process_resend_exchange')} contentsTxt={`${t('order:process_order_confirm_msg1', { total: 10, count: 1 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`} contents={<ReShippingModalContents t={t} />} setOpen={setOpenReShipping} />

            <OrderBaseModal open={openExchangeComplete} title={t('order:process_mark_exchange_cmpl')} contents={`${t('order:process_order_confirm_msg1', { total: 10, count: 1 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`} setOpen={setOpenExchangeComplete} />

            <EditOrProcessOrderModal title={t('order:edit_tracking')} contentsTxt={`${t('order:process_order_confirm_msg1', { total: 10, count: 1 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`} contents={<EditTrackingNumberModal t={t} />} open={openEditTracking} setOpen={setOpenEditTracking} />
        </>
    )
}