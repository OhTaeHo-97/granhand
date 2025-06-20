'use client'

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import CancelDetail from "./components/cancel";
import RefundDetail from "./components/refund";
import ProductInfo from "./components/product-info";
import ExchangeDetail from "./components/exchange";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../../../utils/localization/client";

export default function OrderDetailPage() {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['order', 'payment'])

    return (
        <div className="container mx-auto px-6 pt-8 min-w-2xl">
            <section className="py-8">
                <div className="flex justify-start gap-2 items-center">
                    <Button onClick={() => router.back()} className="m-0 p-0">
                        <ChevronLeft />
                    </Button>
                    <h2 className={`text-lg font-medium text-left text-[#6F6963]`}>취소 상세</h2>
                </div>
            </section>
            <main className="w-[739px] max-w-6xl mx-auto px-4 py-4 space-y-10">
                {/* 환불 정보
                <CancelRefundInfo /> */}
                {/* 상품 상태에 따라 선택하여 이용 */}
                <ProductInfo t={t} />
                <CancelDetail />
                <RefundDetail />
                <ExchangeDetail />
            </main>
        </div>
    )
}