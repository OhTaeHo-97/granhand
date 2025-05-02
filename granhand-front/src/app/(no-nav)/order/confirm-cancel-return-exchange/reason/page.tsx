'use client'

import RequestListHeader from "../request-list/components/header";
import { Button } from "@/components/ui/button";
import CancelReason from "./components/cancel";
import ExchangeRefundReason from "./components/exchange-refund";

export default function ReasonPage() {
    return (
        <main className="container mx-auto px-6 pt-8">
            <RequestListHeader />
            <ExchangeRefundReason />

            <div className="mt-20 text-base font-medium border-b pb-3"></div>

            <div className="mt-6 border-b pb-6">
                <div className="flex justify-between items-center text-lg font-semibold">
                    <div></div>
                    <Button className="text-base px-10 py-2 text-white bg-black rounded-none min-w-32 w-[25%] h-11">다음</Button>
                </div>
            </div>
        </main>
    )
}