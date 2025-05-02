import { Button } from "@/components/ui/button";

export default function DeliveryList() {
    return (
        <section className="space-y-2 mb-10">
            <h2 className="text-base font-bold">배송 정보</h2>
            <Button className="border rounded-none text-sm text-center w-full h-12">새 배송지 추가</Button>
            <div className="text-xs text-gray-700 bg-gray-100 p-6 px-10">
                <ul className="list-disc space-y-1.5">
                    <li>정확한 배송을 위해 도로명 주소만 사용합니다</li>
                    <li>배송지 불분명으로 반송되지 않도록 한 번 더 확인해 주세요.</li>
                </ul>
            </div>
        </section>
    )
}