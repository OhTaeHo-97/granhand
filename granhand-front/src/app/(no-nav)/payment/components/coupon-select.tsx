import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CouponSelect() {
    return (
        <section className="space-y-2 mb-10">
            <div className="flex items-center gap-2 relative">
                <h2 className="text-base font-bold">사용 가능 쿠폰</h2>
                <div className="relative group">
                    <div className="w-5 h-5 border border-gray-200 rounded-full text-xs text-gray-400 flex items-center justify-center">?</div>
                    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-gray-600 text-white text-xs px-3 py-1 rounded shadow-md whitespace-nowrap
                        before:content-[''] before:absolute before:left-[-6px] before:top-1/2 before:-translate-y-1/2
                        before:border-y-8 before:border-y-transparent before:border-r-8 before:border-r-gray-600">
                        최대 할인이 적용되었어요!
                    </div>
                </div>
            </div>
            <Select>
                <SelectTrigger className="w-full border rounded px-4 py-2 text-sm h-15">
                    <SelectValue placeholder="쿠폰을 적용하세요." />
                </SelectTrigger>
                <SelectContent className="bg-white">
                    <SelectItem value="door">5000원 할인 쿠폰 (10,000원 이상 구매시 사용 가능)</SelectItem>
                    <SelectItem value="call">도착 후 연락주세요</SelectItem>
                    <SelectItem value="none">요청사항 없음</SelectItem>
                </SelectContent>
            </Select>
        </section>
    )
}