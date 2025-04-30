import { Button } from "@/components/ui/button";

export default function OrderExchangeRefundRequestList() {
    return (
        <>
            <div className="mt-20 text-base font-medium border-b pb-3">총 교환/반품 상품 1개</div>

            <div className="mt-6 border-b pb-6">
                <div className="flex justify-between items-center text-lg font-semibold">
                <div>
                    <span>교환/반품 상품을 선택해 주세요.</span>
                </div>
                <Button className="text-base px-10 py-2 text-white bg-black rounded-none min-w-32 w-[25%] h-11">다음</Button>
                </div>
            </div>
        </>
    )
}