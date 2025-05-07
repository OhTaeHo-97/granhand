'use client'

import { ChevronLeft } from "lucide-react";
import CancelProductInfo from "./components/product-info";
import CancelRefundInfo from "./components/refund-info";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function OrderDetailPage() {
    const router = useRouter()

    return (
        <div className="container mx-auto px-6 pt-8 min-w-2xl">
            <section className="py-8">
                <div className="flex justify-start gap-2 items-center">
                    <Button onClick={() => router.back()} className="m-0 p-0">
                        <ChevronLeft />
                    </Button>
                    <h2 className={`text-lg font-medium text-left`}>취소 상세</h2>
                </div>
            </section>

            <main className="w-full max-w-6xl mx-auto px-4 py-4 space-y-10">
                {/* 주문 상품 정보 */}
                <CancelProductInfo />

                {/* 환불 정보 */}
                <CancelRefundInfo />
            </main>
        </div>
    )
}