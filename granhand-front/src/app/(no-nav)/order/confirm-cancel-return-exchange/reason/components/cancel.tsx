import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CancelReason() {
    const cancelOptions = [
        "상품이 마음에 들지 않아요.",
        "다른 상품 추가 후 재주문 예정이에요.",
        "쿠폰 등 혜택 미사용으로 재주문 예정이에요.",
    ];

    return (
        <div className="max-w-md space-y-6">
            <div>
                <h2 className="text-lg font-semibold">취소 사유를 선택해 주세요.</h2>
            </div>

            <RadioGroup>
                {cancelOptions.map((label, index) => (
                    <label key={index} className="flex items-start gap-3 cursor-pointer space-y-4">
                        <RadioGroupItem
                            value={label}
                        >
                            <span className="text-sm text-gray-800">{label}</span>
                        </RadioGroupItem>
                        <span className="text-sm text-gray-800">{label}</span>
                    </label>
                ))}
            </RadioGroup>

            <div className="mt-16">
                <label className="block mb-2 text-sm font-medium text-gray-800">상세 설명</label>
                <div className="relative">
                <textarea
                    maxLength={100}
                    placeholder="상세 사유를 입력해 주세요. (선택사항)"
                    className="w-full h-28 border border-gray-300 rounded px-4 py-3 text-sm placeholder-gray-400 resize-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                <div className="absolute bottom-2 right-3 text-xs text-gray-400">0/100</div>
                </div>
            </div>
        </div>
    )
}