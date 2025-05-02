import Information from "@/components/information";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function CancelResult() {
    return (
        <main className="w-full max-w-3xl mx-auto items-center mt-[12%]">
            <div className="mb-[10%]">
                <div className="mb-6 w-10 h-10 border flex rounded-full items-center mx-auto text-gray-400 font-bold">
                    <Check className="items-center w-full" />
                </div>
                <h1 className="text-xl font-bold mb-10 text-center">취소 신청이 완료되었습니다.</h1>
            </div>

            <Information bgColor="bg-gray-200" className="w-fit max-w-full mx-auto" contents={[
                {
                    elem: "결제 방식에 따라 환불은 최대 5일(영업일 기준) 정도 소요될 수 있습니다."
                },
                {
                    elem: "상품이 준비되어 배송 예정이라면 취소가 거부될 수 있습니다."
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