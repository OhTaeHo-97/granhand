import Information from "@/components/information";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function RefundResult() {
    return (
        <main className="w-full max-w-3xl mx-auto items-center mt-[12%]">
            <div className="mb-[10%]">
                <div className="mb-6 w-10 h-10 border flex rounded-full items-center mx-auto text-gray-400 font-bold">
                    <Check className="items-center w-full" />
                </div>
                <h1 className="text-xl font-bold mb-10 text-center">반품 신청이 완료되었습니다.</h1>
            </div>

            <Information bgColor="bg-gray-200" className="w-fit max-w-full mx-auto" contents={[
                {
                    elem: "반품 상품 회수 완료 이후 최대 7 영업일 내 검수 후 결제하신 방법에 따라 환불되며, 접수 내역 및 진행 상황은 '빈픔 상세 보기'에서 확인 가능합니다."
                },
                {
                    elem: "상품에 이상이 있는 경우 반품 거부가 될 수 있으며, CS팀에서 안내드립니다."
                }
            ]} />

            <div className="w-full flex justify-center mt-[6%]">
                <Button className="mt-8 px-6 py-3 border border-gray-300 rounded text-sm font-medium h-14 hover:bg-gray-200">
                    신청 내역 확인
                </Button>
            </div>
        </main>
    )
}