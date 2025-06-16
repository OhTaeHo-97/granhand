'use client'

import { useState } from "react"
import OrderElement from "./order-elem"
import Pagination from "@/components/pagination"

export default function OrderList() {
    const [currentPage, setCurrentPage] = useState(1)

    return (
        // 상품 없을 때
        // <div className="flex w-full h-[136px] items-center justify-center text-xs text-[#C0BCB6]">
        //         주문한 상품 내역이 없어요.
        //     </div>
        
        <div className="w-[739px]">
            {/* 주문 내역 1 - 입금대기 */}
            <OrderElement state='awaiting_payment' isGift={false} />
            {/* 주문 내역 2 - 배송 완료 */}
            <OrderElement state='delivered' isGift={false} />
            {/* 주문 내역 3 - 배송 완료 (선물 수락) */}
            <OrderElement state='delivered_gift' isGift={true} />
            {/* 주문 내역 4 - 구매 확정 */}
            <OrderElement state='confirm_purchase' isGift={false} />
            <Pagination totalPages={15} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}