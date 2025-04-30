import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import PaymentInfo from "../../order/[id]/components/payment-info";

export default function PaymentInfoCheck() {
    return (
        // Right: 결제 요약
        <aside className="space-y-6">
            <PaymentInfo />
            <div className="flex justify-between text-sm font-semibold">
                <span>적립 예정 포인트</span>
                <span className="font-bold">+700</span>
            </div>
            <div className="bg-gray-100 p-3 text-xs text-gray-600 h-20 rounded flex items-center">
                <div className="flex items-center gap-5">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 text-xs">!</div>
                    구매 확정 시 회원 등급별 혜택에 따라 포인트가 지급됩니다.
                </div>
            </div>
            <div className="flex justify-end font-semibold text-black items-center">
                <span className="text-sm mr-3">합계</span><span className="text-bold text-xl">25,500원</span>
            </div>
            <div className="space-y-4 text-sm border-t pt-4 mb-20">
                <label className="flex items-center gap-4">
                    <input type="checkbox" className="accent-black w-4 h-4" />
                    <span className="font-bold text-gray-700">주문 내용을 확인했으며, 아래 내용에 모두 동의합니다.</span>
                </label>
                <hr className="border-dashed" />
                <label className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <input type="checkbox" className="accent-black w-4 h-4" />
                        <span>(필수) <strong>개인정보 수집 · 이용 동의</strong></span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                </label>
                <label className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <input type="checkbox" className="accent-black w-4 h-4" />
                        <span>(필수) <strong>개인정보 제3자 정보 제공 동의</strong></span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                </label>
                <label className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <input type="checkbox" className="accent-black w-4 h-4" />
                        <span>(필수) <strong>결제대행 서비스 이용약관 동의</strong></span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                </label>
            </div>
            <Button className="w-full bg-black text-white py-3 rounded-none">결제하기</Button>
        </aside>
    )
}