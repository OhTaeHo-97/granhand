export default function PaymentInfoBox() {
    return (
        <div className="border rounded-md p-6 space-y-3 shadow-md text-sm">
            <div className="flex justify-between text-gray-400">
                <span>상품금액</span>
                <span>55,000원</span>
            </div>
            <div className="flex justify-between text-gray-400">
                <span>배송비</span>
                <span>0원</span>
            </div>
            <div className="flex justify-between text-gray-400">
                <span>쿠폰 할인</span>
                <span>-5,000원</span>
            </div>
            <div className="flex justify-between text-gray-400">
                <span>포인트 사용</span>
                <span>-5,000원</span>
            </div>
            <hr className="my-2 border-dashed" />
            <div className="flex justify-between font-semibold text-black">
                <span className="text-black">결제 금액</span>
                <span className="text-base font-bold">45,000원</span>
            </div>
            <div className="flex justify-between ml-2 text-xs text-gray-400">
                <span>└ 신용카드 결제 (현대카드)</span>
                <span>45,000원</span>
            </div>
            {/* <div className="text-xs text-gray-400 ml-2">└ 신용카드 결제 (현대카드)</div> */}
        </div>
    )
}