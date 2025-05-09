'use client'

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RequestListHeader({ category }: { category: string }) {
    const router = useRouter()
    
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

    const menuMap = {
        cancel: cancelMenu,
        exchangeRefund: exchangeMenu,
        confirm: null
    } as const

    const curMenu = menuMap[category as keyof typeof menuMap] ?? null

    return (
        <div className="flex justify-between">
            <div className="flex items-center mb-8">
                <ChevronLeft className="text-base text-gray-500 mr-3" onClick={() => router.back()} />
                <h2 className="text-2xl font-semibold">
                    {category === 'confirm' && '구매 확정'}
                    {category === 'cancel' && '주문 취소'}
                    {category === 'exchangeRefund' && '교환/반품 신청'}
                </h2>
            </div>
            {
                curMenu && (
                    <div className="text-xs text-gray-400">
                        {curMenu.map((menu, index) => (
                            <span key={index}>
                                {menu} { index !== cancelMenu.length - 1 ? " > " : "" }
                            </span>
                        ))}
                    </div>
                )
            }

            {/* <div className="text-xs text-gray-400">
                {cancelMenu.map((menu, index) => (
                    <span key={index}>
                        {menu} { index !== cancelMenu.length - 1 ? " > " : "" }
                    </span>
                ))}
            </div> */}
        </div>
    )
}