export default function PaymentInfo() {
    return (
        // 최종 결제 금액
        <div className="bg-white rounded-md text-sm text-gray-600 space-y-2 w-full">
            <h2 className="font-semibold text-black text-base">최종 결제 금액</h2>
            <div className="border rounded-md p-6 space-y-3 shadow-md">
                <div className="flex justify-between">
                    <span className="text-gray-400">상품금액</span>
                    <span>55,000원</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-400">배송비</span>
                    <span>0원</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-400">쿠폰 할인</span>
                    <span className="text-black">-5,000원</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-400">포인트 사용</span>
                    <span className="text-black">-5,000원</span>
                </div>
                <hr className="my-2 border-dashed" />
                <div className="flex justify-between font-semibold text-black">
                    <span className="text-gray-400">결제 금액</span>
                    <span>45,000원</span>
                </div>
                <div className="text-xs text-gray-400 ml-2">└ 신용카드 결제 (현대카드)</div>
            </div>
        </div>
    )
}