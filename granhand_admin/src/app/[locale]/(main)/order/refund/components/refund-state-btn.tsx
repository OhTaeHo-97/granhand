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

export default function RefundStateBtn({ refundState, t }: { refundState?: string, t: (key: string) => string }) {
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
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenReturnPickup((prev) => !prev)}>반품 수거 접수</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenDenyReturn((prev) => !prev)}>반품 거부</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setPendingReturn((prev) => !prev)}>반품 보류</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenReturnComplete((prev) => !prev)}>반품 완료 처리</Button>
                </div>
            )}
            {refundState === 'return_hold' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenCancelPending((prev) => !prev)}>반품 보류 해제</Button>
                </div>
            )}
            {refundState === 'return_pickup' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenPickupComplete((prev) => !prev)}>반품 수거 완료</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenDenyReturn((prev) => !prev)}>반품 거부</Button>
                </div>
            )}
            {refundState === 'return_pickup_cmpl' && (
                <div className="flex gap-3 mb-5">
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenReturnComplete((prev) => !prev)}>반품 완료 처리</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setOpenDenyReturn((prev) => !prev)}>반품 거부</Button>
                    <Button variant="outline" className="text-[#5E5955] p-1 hover:cursor-pointer" onClick={() => setPendingReturn((prev) => !prev)}>반품 보류</Button>
                </div>
            )}
            
            <EditOrProcessOrderModal open={openReturnPickup} title="반품 수거 접수 처리" contentsTxt={`선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다.\n1건에 대해 처리하시겠습니까?`} contents={<ReturnPickupModalContents t={t} />} setOpen={setOpenReturnPickup} />
            <EditOrProcessOrderModal open={openDenyReturn} title="반품 거부 처리" contentsTxt="선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다." contents={<DenyReturnModalContents t={t} />} setOpen={setOpenDenyReturn} />
            <EditOrProcessOrderModal open={openPendingReturn} title="반품 보류 처리" contentsTxt="선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다." contents={<PendingReturnModalContents t={t} />} setOpen={setPendingReturn} />
            <EditOrProcessOrderModal open={openCancelPending} width="w-150" title="반품 보류 해제 처리" contentsTxt={`선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다.\n1건에 대해 처리하시겠습니까?`} contents={<CancelPendingReturnModalContents />} setOpen={setOpenCancelPending} />
            <OrderBaseModal open={openPickupComplete} title="반품 수거 완료 처리" contents={`선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다.\n1건에 대해 처리하시겠습니까?`} setOpen={setOpenPickupComplete} />
            <EditOrProcessOrderModal open={openReturnComplete} title="반품 완료 처리" contentsTxt="선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다." contents={<ReturnCompleteModalContents t={t} />} setOpen={setOpenReturnComplete} />
        </>
    )
}