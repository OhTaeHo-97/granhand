'use client'

import { Button } from "@/components/ui/button";
import { useCurrentLocale } from "@/lib/useCurrentLocale";
import { useRouter, useSearchParams } from "next/navigation";

export default function NextButton() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentLocale = useCurrentLocale()
    const queryString = new URLSearchParams(searchParams).toString()

    return (
        <>
            <div className="mt-20 text-base font-medium border-b pb-3"></div>

            <div className="mt-6 border-b pb-6">
                <div className="flex justify-end items-center text-lg font-semibold">
                    <Button className="text-base px-10 py-2 text-white bg-black rounded-none h-11 min-w-32 w-[25%]" onClick={() => router.push(`${currentLocale}/order/confirm-cancel-return-exchange/form?${queryString}`)}>다음</Button>
                </div>
            </div>
        </>
    )
}