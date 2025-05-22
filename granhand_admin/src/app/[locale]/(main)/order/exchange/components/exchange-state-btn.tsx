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

export default function ExchangeStateBtn({ exchangeState, t }: { exchangeState?: string, t: (key: string) => string }) {
    const [openExchangePickup, setOpenExchangePickup] = useState(false)
    const [openDenyExchange, setOpenDenyExchange] = useState(false)
    const [openPendingExchange, setOpenPendingExchange] = useState(false)
    const [openCancelPending, setOpenCancelPending] = useState(false)
    const [openPickupComplete, setOpenPickupComplete] = useState(false)
    const [openReShipping, setOpenReShipping] = useState(false)
    const [openExchangeComplete, setOpenExchangeComplete] = useState(false)

    const [openConfirmCancel, setOpenConfirmCancel] = useState(false)
    const [openPendingCancel, setOpenPendingCancel] = useState(false)
    const [openDenyCancel, setOpenDenyCancel] = useState(false)
    // const [openCancelPending, setOpenCancelPending] = useState(false)

    return (
        <>
            {exchangeState === 'exchange_requested' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenExchangePickup((prev) => !prev)}>수거 검수</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenDenyExchange((prev) => !prev)}>교환 거부</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenPendingExchange((prev) => !prev)}>교환 보류</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenPickupComplete((prev) => !prev)}>교환 수거 완료</Button>
                </div>
            )}
            {exchangeState === 'exchange_pending' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenCancelPending((prev) => !prev)}>교환 보류 해제</Button>
                </div>
            )}
            {exchangeState === 'pickup' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenPickupComplete((prev) => !prev)}>교환 수거 완료</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenDenyExchange((prev) => !prev)}>교환 거부</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenPendingCancel((prev) => !prev)}>교환 상품정보 수정</Button>
                </div>
            )}
            {exchangeState === 'pickup_cmpl' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenReShipping((prev) => !prev)}>교환 재발송</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenDenyExchange((prev) => !prev)}>교환 거부</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenPendingExchange((prev) => !prev)}>교환 보류</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenPendingCancel((prev) => !prev)}>교환 상품정보 수정</Button>
                </div>
            )}
            {exchangeState === 're_ship' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenConfirmCancel((prev) => !prev)}>운송장 정보 수정</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenExchangeComplete((prev) => !prev)}>교환 완료 처리</Button>
                </div>
            )}

            <EditOrProcessOrderModal open={openExchangePickup} title="교환 수거 접수 처리" contentsTxt={`선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다.\n1건에 대해 처리하시겠습니까?`} contents={<ExchangePickupModalContents t={t} />} setOpen={setOpenExchangePickup} />
            <EditOrProcessOrderModal open={openDenyExchange} title="교환 거부 처리" contentsTxt="선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다." contents={<DenyExchangeModalContents t={t} />} setOpen={setOpenDenyExchange} />
            <EditOrProcessOrderModal open={openPendingExchange} title="교환 보류 처리" contentsTxt="선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다." contents={<PendingExchangeModalContents t={t} />} setOpen={setOpenPendingExchange} />
            <EditOrProcessOrderModal open={openCancelPending} width="w-150" title="교환 보류 해제 처리" contentsTxt={`선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다.\n1건에 대해 처리하시겠습니까?`} contents={<CancelPendingExchangeModalContents />} setOpen={setOpenCancelPending} />
            <OrderBaseModal open={openPickupComplete} title="교환 수거 완료 처리" contents={`선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다.\n1건에 대해 처리하시겠습니까?`} setOpen={setOpenPickupComplete} />
            <EditOrProcessOrderModal open={openReShipping} title="교환 재발송 처리" contentsTxt={`선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다.\n1건에 대해 처리하시겠습니까?`} contents={<ReShippingModalContents t={t} />} setOpen={setOpenReShipping} />
            <OrderBaseModal open={openExchangeComplete} title="교환 완료 처리" contents={`선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다.\n1건에 대해 처리하시겠습니까?`} setOpen={setOpenExchangeComplete} />
        </>
    )
}