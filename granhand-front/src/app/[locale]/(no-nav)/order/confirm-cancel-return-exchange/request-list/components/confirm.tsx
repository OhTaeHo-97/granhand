'use client'

import BasicModal from "@/app/[locale]/components/modal";
import { Button } from "@/components/ui/button";
import { getLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useState } from "react";

export default function OrderConfirmRequestList() {
    const [open, setOpen] = useState(false)
    const locale = getLocaleAsLocaleTypes()
    const currentLocale = useCurrentLocale()

    return (
        <>
            <div className="w-full flex justify-end py-8">
                <span className="text-xs font-semibold text-gray-400">구매 확정 이후에는 교환/반품이 어려워요. 꼭 상품을 받으신 후 확정해 주세요.</span>
            </div>

            <div className="mt-20 text-base font-medium border-b pb-3">총 주문 상품 1개</div>

            <div className="mt-6 border-b pb-6">
                <div className="flex justify-between items-center text-lg font-semibold">
                <div>
                    <span>주문하신 상품은 잘 받으셨나요?</span>
                </div>
                <Button className="text-base px-10 py-2 text-white bg-black rounded-none min-w-32 w-[25%] h-11" onClick={() => setOpen((prev) => !prev)}>구매 확정</Button>
                </div>
            </div>
            {/* open, setOpen, title, contents, btnText, currentLocale, locale, nextLink */}
            <BasicModal open={open} setOpen={setOpen} contents="confirm_cmpl" category="order" btnText="확인" locale={locale} nextLink={`${currentLocale}/my-page/order`} />
        </>
    )
}