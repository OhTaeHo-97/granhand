import Image from "next/image";
import ProductInfoCard from "../../[id]/components/product-info-card";
import RequestListHeader from "../request-list/components/header";
import PaymentInfo from "../../[id]/components/payment-info";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CancelForm from "./components/cancel";
import ExchangeForm from "./components/exchange";
import RefundForm from "./components/refund";
import Link from "next/link";

export default function FormPage() {
    return (
        <main className="container mx-auto px-6 pt-8">
            <RequestListHeader />
            <div className="w-full max-w-3xl mx-auto mb-20">
                <div className="rounded-lg space-y-4 bg-white mb-10">
                    <h2 className="text-base font-bold text-gray-700">취소 상품 정보</h2>
                    <div className="border rounded-md p-6 space-y-6 bg-white">
                        <ProductInfoCard />
                    </div>
                </div>
                {/* <CancelForm /> */}
                {/* <ExchangeForm /> */}
                <RefundForm />
            </div>
            <div className="py-6 border-t border-b flex justify-end">
                <Link href="/order/confirm-cancel-return-exchange/result" className="w-1/4 min-w-50">
                    <Button className="bg-black text-white rounded-none font-bold p-6 w-full">
                        신청하기
                    </Button>
                </Link>
            </div>
        </main>
    )
}