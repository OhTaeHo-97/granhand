import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

export default function ProductTable({ setOpen }: { setOpen?: (value: boolean) => void }) {
    return (
        <div className="border border-gray-200 overflow-x-auto">
            <div className="min-w-[850px]">
            {/* 헤더 */}
            <div className="grid grid-cols-12 items-center px-4 py-3 border-b border-gray-200 text-sm font-medium bg-gray-50">
                <div className="col-span-2 flex items-center gap-2">
                <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white" />
                <span className="text-xs text-gray-500">전체 선택 (0/0)</span>
                </div>
                <div className="col-span-4 text-center">상품 정보</div>
                <div className="col-span-2 text-center">수량</div>
                <div className="col-span-2 text-center">주문 금액</div>
                <div className="col-span-2 text-center">배송 정보</div>
            </div>

            {/* 상품 */}
            <div className="grid grid-cols-12 items-center px-4 py-6 border-b border-gray-100">
                <div className="col-span-2 flex justify-start h-full items-center">
                <div className="flex items-center">
                    <Checkbox id="item-1" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white" defaultChecked />
                </div>
                <div className="w-25 h-full ml-2 relative">
                    <Image src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png" alt="perfume" fill className="object-contain" />
                </div>
                </div>

                <div className="col-span-4 flex items-center gap-4 space-y-2">
                <div className="text-sm space-y-2">
                    <div className="font-bold">Soie Signature Perfume</div>
                    <div className="text-gray-400 text-xs">수아 시그니처 퍼퓸</div>
                    <div className="text-gray-400 text-xs mb-1">쇼핑백 : 구매안함</div>
                    <div className="font-bold">110,000원</div>
                </div>
                </div>

                <div className="col-span-2 flex flex-col items-center gap-2">
                <div className="flex items-center gap-4 mb-2">
                    <Button size="icon" variant="outline" className="w-5 h-5"><Minus className="w-1.5 h-1.5" /></Button>
                    <span className="text-sm">1</span>
                    <Button size="icon" variant="outline" className="w-5 h-5"><Plus className="w-1.5 h-1.5" /></Button>
                </div>
                {setOpen && (
                    <Button variant="outline" className="h-8 text-xs px-4" onClick={() => setOpen(true)}>옵션 변경</Button>
                )}
                </div>

                <div className="col-span-2 text-center text-sm font-bold">110,000원</div>
                <div className="col-span-2 text-center text-sm font-bold">배송비 무료</div>
            </div>
            </div>
        </div>
    )
}