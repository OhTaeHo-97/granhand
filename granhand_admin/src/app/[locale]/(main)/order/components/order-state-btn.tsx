'use client'

import { Button } from "@/components/ui/button";
import { useState } from "react";
import OrderBaseModal from "./modal/order-base-modal";
import DelayShipmentModal from "./modal/delay-shipment-modal";
import EditOrProcessOrderModal from "./modal/edit-or-process-order-modal";
import ProcessExchangeModalContents from "./modal/process-exchange-modal";
import ProcessRefundModalContents from "./modal/process-refund-modal";
import EditTrackingNumberModal from "./modal/edit-tracking-number-modal";
import CancelOrderModalContents from "./modal/cancel-order-modal";
import { TFunction } from "i18next";

export default function OrderStateBtn({ orderState, setOpenEditEngraving, t }: { orderState?: string, setOpenEditEngraving: (value: boolean) => void, t: TFunction }) {
    const [openConfirmPayment, setOpenConfirmPayment] = useState(false)
    const [openPrepareShip, setOpenPrepareShip] = useState(false)
    const [openShipped, setOpenShipped] = useState(false)
    const [openAwaitPayment, setOpenAwaitPayment] = useState(false)
    const [openForceComplete, setOpenForceComplete] = useState(false)
    const [openDelayShip, setOpenDelayShip] = useState(false)
    const [openEditTracking, setOpenEditTracking] = useState(false)
    const [openProcessExchange, setOpenProcessExchange] = useState(false)
    const [openProcessRefund, setOpenProcessRefund] = useState(false)
    const [openCancelOrder, setOpenCancelOrder] = useState(false)

    return (
        <>
            {orderState === 'awaiting_payment' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenConfirmPayment((prev) => !prev)}>{t('order:confirm_payment')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenCancelOrder((prev) => !prev)}>{t('order:cancel_order')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenEditEngraving(true)}>{t('order:edit_engraving')}</Button>
                </div>
            )}
            {orderState === 'payment_completed' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenPrepareShip((prev) => !prev)}>{t('order:prepare_shipment')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenShipped((prev) => !prev)}>{t('order:mark_as_shipped')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenDelayShip((prev) => !prev)}>{t('order:delay_shipment')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenCancelOrder((prev) => !prev)}>{t('order:cancel_order')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenAwaitPayment((prev) => !prev)}>{t('order:await_payment')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenForceComplete((prev) => !prev)}>{t('order:force_complete')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenEditEngraving(true)}>{t('order:edit_engraving')}</Button>
                </div>
            )}
            {orderState === 'prepare_ship' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenShipped((prev) => !prev)}>{t('order:mark_as_shipped')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenDelayShip((prev) => !prev)}>{t('order:delay_shipment')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenCancelOrder((prev) => !prev)}>{t('order:cancel_order')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenEditEngraving(true)}>{t('order:edit_engraving')}</Button>
                </div>
            )}
            {orderState === 'in_transit' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenEditTracking((prev) => !prev)}>{t('order:edit_tracking')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenProcessExchange((prev) => !prev)}>{t('order:process_exchange')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenProcessRefund((prev) => !prev)}>{t('order:process_return')}</Button>
                </div>
            )}
            {orderState === 'delivery_delayed' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenShipped((prev) => !prev)}>{t('order:mark_as_shipped')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenCancelOrder((prev) => !prev)}>{t('order:cancel_order')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenEditEngraving(true)}>{t('order:edit_engraving')}</Button>
                </div>
            )}
            {orderState === 'delivered' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenProcessExchange((prev) => !prev)}>{t('order:process_exchange')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenProcessRefund((prev) => !prev)}>{t('order:process_return')}</Button>
                </div>
            )}
            
            <OrderBaseModal open={openConfirmPayment} setOpen={setOpenConfirmPayment} title={t('order:confirm_payment')} contents={`${t('order:process_order_confirm_msg1', { count: 1, total: 10 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`} />
            <OrderBaseModal open={openPrepareShip} setOpen={setOpenPrepareShip} title={t('order:prepare_shipment')} contents={`${t('order:process_order_confirm_msg1', { count: 1, total: 10 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`} />
            <OrderBaseModal open={openShipped} setOpen={setOpenShipped} title={t('order:mark_as_shipped')} contents={`${t('order:process_order_confirm_msg1', { count: 1, total: 10 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`} />
            <OrderBaseModal open={openAwaitPayment} setOpen={setOpenAwaitPayment} title={t('order:await_payment')} contents={`${t('order:process_order_confirm_msg1', { count: 1, total: 10 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`} />
            <OrderBaseModal open={openForceComplete} setOpen={setOpenForceComplete} title={t('order:force_complete')} contents={`${t('order:process_order_confirm_msg1', { count: 1, total: 10 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`} />
            <DelayShipmentModal open={openDelayShip} setOpen={setOpenDelayShip} t={t} />
            <EditOrProcessOrderModal title={t('order:edit_tracking')} contentsTxt={`${t('order:process_order_confirm_msg1', { count: 1, total: 10 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`} contents={<EditTrackingNumberModal t={t} />} open={openEditTracking} setOpen={setOpenEditTracking} />
            <EditOrProcessOrderModal title={t('order:process_exchange')} contentsTxt={`${t('order:process_order_confirm_msg1', { count: 1, total: 10 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`} contents={<ProcessExchangeModalContents t={t} />} open={openProcessExchange} setOpen={setOpenProcessExchange} />
            <EditOrProcessOrderModal title={t('order:process_return')} contentsTxt={`${t('order:process_order_confirm_msg1', { count: 1, total: 10 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`} contents={<ProcessRefundModalContents t={t} />} open={openProcessRefund} setOpen={setOpenProcessRefund} />
            <EditOrProcessOrderModal title={t('order:cancel_order')} contentsTxt={`${t('order:process_order_confirm_msg1', { count: 1, total: 10 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`} contents={<CancelOrderModalContents t={t} />} open={openCancelOrder} setOpen={setOpenCancelOrder} />
        </>
    )
}