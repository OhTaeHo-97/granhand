import RefundInfoBox from "./refund-info-box";

export default function RefundInfo({ t }: { t: (key: string) => string }) {
    return (
        <div className="bg-[#FDFBF5] text-sm text-[#6F6963] space-y-2 w-full">
            <h2 className="font-bold text-[#322A24] text-sm">{t('payment:final_amount')}</h2>
            <RefundInfoBox t={t} />
            {/* <div className="border rounded-md p-4 space-y-3 shadow-md">
                <div className="flex justify-between font-semibold text-black">
                    <span>결제 금액</span>
                    <span>33,539원</span>
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
                        <span>-1,961원</span>
                    </div>
                    <div className="flex justify-between">
                        <span>포인트 사용</span>
                        <span>0</span>
                    </div>
                </div>
                <hr className="my-2 border-dashed" />
                <div className="flex justify-between font-semibold text-black">
                    <span>차감 금액</span>
                    <span>(-) 0원</span>
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
                        <span>-1,961원</span>
                    </div>
                    <div className="flex justify-between">
                        <span>포인트 사용</span>
                        <span>0</span>
                    </div>
                </div>
                <hr className="my-2 border-dashed" />
                <div className="flex justify-between font-semibold text-black">
                    <span>환불 금액</span>
                    <span>33,539원</span>
                </div>
                <div className="text-xs text-gray-400 ml-2">└ 신용카드 (현대카드)</div>
                <div className="flex justify-between">
                    <span className="font-semibold text-black">포인트 환불</span>
                    <span className="font-semibold text-black">0</span>
                </div>
            </div> */}
        </div>
    )
}