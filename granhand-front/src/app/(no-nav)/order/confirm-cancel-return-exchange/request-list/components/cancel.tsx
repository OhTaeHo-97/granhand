import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OrderCancelRequestList() {
    return (
        <>
            <div className="w-full flex justify-end py-8">
                <span className="text-xs font-semibold text-gray-400">상품이 준비되어 배송 예정일 경우 취소가 거부될 수 있어요. 주문 제작 상품은 취소가 불가능해요.</span>
            </div>

            <div className="mt-20 text-base font-medium border-b pb-3">총 취소 상품 1개</div>

            <div className="mt-6 border-b pb-6">
                <div className="flex justify-between items-center text-lg font-semibold">
                <div>
                    <span>취소 상품을 선택해주세요.</span>
                </div>
                <Link href="/order/confirm-cancel-return-exchange/reason" className="min-w-32 w-[25%]">
                    <Button className="text-base px-10 py-2 text-white bg-black rounded-none w-full h-11">다음</Button>
                </Link>
                </div>
            </div>
        </>
    )
}