export default function CancelRefundInfo() {
    return (
        <div className="bg-white text-sm text-gray-600 space-y-2 w-full">
            <h2 className="font-semibold text-black">환불 정보</h2>
            <div className="border rounded-md p-4 space-y-3 shadow-md">
                <div className="flex justify-between font-semibold text-black">
                    <span>결제 금액</span>
                    <span>25,500원</span>
                </div>
                <div className="text-sm text-gray-400 ml-2 space-y-2">
                    <div className="flex justify-between">
                        <span>상품금액</span>
                        <span>35,500원</span>
                    </div>
                    <div className="flex justify-between">
                        <span>배송비</span>
                        <span>0원</span>
                    </div>
                    <div className="flex justify-between">
                        <span>쿠폰 사용</span>
                        <span>-5,000원</span>
                    </div>
                    <div className="flex justify-between">
                        <span>포인트 사용</span>
                        <span>-5,000</span>
                    </div>
                </div>
                <hr className="my-2 border-dashed" />
                <div className="flex justify-between font-semibold text-red-400">
                    <span>차감 금액</span>
                    <span>(-) 0원</span>
                </div>
                <div className="text-sm text-gray-400 ml-2 space-y-2">
                    <div className="flex justify-between">
                        <span>추가 배송비</span>
                        <span>0원</span>
                    </div>
                    <div className="flex justify-between">
                        <span>반품 배송비</span>
                        <span>0원</span>
                    </div>
                </div>
                <hr className="my-2 border-dashed" />
                <div className="flex justify-between font-semibold text-black">
                    <span>환불 금액</span>
                    <span className="text-base">25,500원</span>
                </div>
                <div className="text-xs text-gray-400 ml-2">└ 신용카드 (현대카드)</div>
                <div className="flex justify-between">
                    <span className="font-semibold text-black">포인트 환불</span>
                    <span className="font-semibold text-black">5,000</span>
                </div>
            </div>
        </div>
    )
}