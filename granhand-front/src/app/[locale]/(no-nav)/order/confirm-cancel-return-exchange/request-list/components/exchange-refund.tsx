'use client'

import { Button } from "@/components/ui/button";
import { useCurrentLocale } from "@/lib/useCurrentLocale";
import { useRouter, useSearchParams } from "next/navigation";

export default function OrderExchangeRefundRequestList() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentLocale = useCurrentLocale()
    const queryString = new URLSearchParams(searchParams).toString()

    return (
        <>
            <div className="mt-20 text-base font-medium border-b pb-3"></div>

            <div className="mt-6 border-b pb-6">
                <div className="flex justify-between items-center text-lg font-semibold">
                <div>
                    <span>교환/반품 상품을 선택해 주세요.</span>
                </div>
                <Button className="text-base px-10 py-2 text-white bg-black rounded-none h-12 min-w-32 w-[25%]" onClick={() => router.push(`${currentLocale}/order/confirm-cancel-return-exchange/reason?${queryString}`)}>
                    다음
                </Button>
                {/* <Button className="text-base px-10 py-2 text-white bg-black rounded-none min-w-32 w-[25%] h-11">다음</Button> */}
                </div>
            </div>
        </>
    )
}