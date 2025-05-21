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

export default function OrderStateBtn({ orderState, setOpenEditEngraving, t }: { orderState?: string, setOpenEditEngraving: (value: boolean) => void, t: (key: string) => string }) {
    const [openConfirmPayment, setOpenConfirmPayment] = useState(false)
    const [openPrepareShip, setOpenPrepareShip] = useState(false)
    const [openShipped, setOpenShipped] = useState(false)
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
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer">{t('order:await_payment')}</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer">{t('order:force_complete')}</Button>
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
            
            <OrderBaseModal open={openConfirmPayment} setOpen={setOpenConfirmPayment} title="입금 확인 처리" contents={`선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다.\n1건에 대해 처리하시겠습니까?`} />
            <OrderBaseModal open={openPrepareShip} setOpen={setOpenPrepareShip} title="배송 준비 처리" contents={`선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다.\n1건에 대해 처리하시겠습니까?`} />
            <OrderBaseModal open={openShipped} setOpen={setOpenShipped} title="배송 중 처리" contents={`선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다.\n1건에 대해 처리하시겠습니까?`} />
            <DelayShipmentModal open={openDelayShip} setOpen={setOpenDelayShip} />
            <EditOrProcessOrderModal title="운송장 정보 수정" contentsTxt={`선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다.\n1건에 대해 처리하시겠습니까?`} contents={<EditTrackingNumberModal t={t} />} open={openEditTracking} setOpen={setOpenEditTracking} />
            <EditOrProcessOrderModal title="교환 처리" contentsTxt={`선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다.\n1건에 대해 처리하시겠습니까?`} contents={<ProcessExchangeModalContents t={t} />} open={openProcessExchange} setOpen={setOpenProcessExchange} />
            <EditOrProcessOrderModal title="반품 처리" contentsTxt={`선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다.\n1건에 대해 처리하시겠습니까?`} contents={<ProcessRefundModalContents t={t} />} open={openProcessRefund} setOpen={setOpenProcessRefund} />
            <EditOrProcessOrderModal title="주문 취소 처리" contentsTxt={`선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다.\n1건에 대해 처리하시겠습니까?`} contents={<CancelOrderModalContents t={t} />} open={openCancelOrder} setOpen={setOpenCancelOrder} />
        </>
    )
}