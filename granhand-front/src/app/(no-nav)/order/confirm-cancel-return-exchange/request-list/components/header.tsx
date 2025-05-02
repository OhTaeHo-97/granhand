import { ChevronLeft } from "lucide-react";

export default function RequestListHeader() {
    const cancelMenu = [
        '상품 선택',
        '사유 작성',
        '취소 정보 확인'
    ]

    const exchangeMenu = [
        '상품 선택',
        '사유 작성',
        '해결 방법 선택'
    ]

    return (
        <div className="flex justify-between">
            <div className="flex items-center mb-8">
                <ChevronLeft className="text-base text-gray-500 mr-3" />
                <h2 className="text-2xl font-semibold">구매 확정</h2>
            </div>
            <div className="text-xs text-gray-400">
                {cancelMenu.map((menu, index) => (
                    <span key={index}>
                        {menu} { index !== cancelMenu.length - 1 ? " > " : "" }
                    </span>
                ))}
            </div>
        </div>
    )
}