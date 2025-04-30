import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function DeliveryRequest() {
    return (
        <section className="space-y-2 mb-10">
            <h2 className="text-base font-bold">배송 요청사항</h2>
            <Select>
                <SelectTrigger className="w-full border rounded px-4 py-2 text-sm h-15">
                    <SelectValue placeholder="배송 시 요청사항을 선택해 주세요." />
                </SelectTrigger>
                <SelectContent className="bg-white">
                    <SelectItem value="door">문 앞에 놓아주세요</SelectItem>
                    <SelectItem value="call">도착 후 연락주세요</SelectItem>
                    <SelectItem value="none">요청사항 없음</SelectItem>
                </SelectContent>
            </Select>
        </section>
    )
}