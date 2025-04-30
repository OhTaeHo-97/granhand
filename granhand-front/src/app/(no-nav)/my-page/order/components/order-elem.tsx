import { Button } from "@/components/ui/button";
import { ChevronRight, GiftIcon } from "lucide-react";

export default function OrderElement({ state }: { state : string }) {
    const showOtherButtons = () => {
        return state === '배송 중' || state.includes('배송 완료') || state === '구매 확정'
    }

    return (
        <section className="space-y-4 mt-6">
            {
                state.includes('선물') ? (
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <h2 className="text-sm font-semibold">2023.10.23</h2>
                            <div className="w-5 h-5 rounded-full bg-gray-500 flex items-center justify-center">
                                <GiftIcon className="w-3 h-3 text-white" />
                            </div>
                        </div>
                        <Button className="text-sm text-gray-400 p-0 h-fit">
                            <ChevronRight />
                        </Button>
                    </div>
                ) : (
                    <div className="flex justify-between">
                        <span className="text-sm font-semibold">2023.10.23</span>
                        <Button className="text-sm text-gray-400 p-0 h-fit">
                            <ChevronRight />
                        </Button>
                    </div>
                )
            }
            
            <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-4 text-sm">
                    <span className="text-gray-500 font-semibold">{state}</span>
                    <button className="text-gray-400 text-xs">문의하기</button>
                </div>

                <div className="flex gap-4">
                    <img src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png" alt="product" className="w-25 h-25 object-cover rounded" />
                    <div className="flex flex-col justify-between gap-0.5">
                        <div>
                            <div className="text-sm font-semibold leading-relaxed">Roland Multi Perfume</div>
                            <div className="text-xs text-gray-500 leading-relaxed">롤랑 멀티퍼퓸 100ml / 1개</div>
                        </div>
                        <div className="text-base font-bold mt-1">35,000원</div>
                    </div>
                </div>

                <div className="mt-5"></div>
                {
                    showOtherButtons() && (
                        <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                            <button className="rounded py-2 bg-gray-100">배송 조회</button>
                            <button className="rounded py-2 bg-gray-100">교환/반품 신청</button>
                        </div>
                    )
                }
                {
                    state !== '구매 확정' &&
                    (
                        <button className="w-full border rounded py-2 text-sm">주문 취소</button>
                    )
                }
            </div>
        </section>
    )
}