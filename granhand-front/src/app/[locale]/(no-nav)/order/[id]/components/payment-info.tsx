export default function PaymentInfo({ t }: { t: (key: string) => string }) {
    return (
        // 최종 결제 금액
        <div className="bg-white rounded-md text-sm text-gray-600 space-y-2 w-full">
            <h2 className="font-semibold text-black text-base">{t('payment:final_amount')}</h2>
            <div className="border rounded-md p-6 space-y-3 shadow-md text-gray-400">
                <div className="flex justify-between">
                    <span>{t('payment:amount')}</span>
                    <span>55,000원</span>
                </div>
                <div className="flex justify-between">
                    <span>{t('payment:ship_fee')}</span>
                    <span>0원</span>
                </div>
                <div className="flex justify-between">
                    <span>{t('payment:discount')}</span>
                    <span>-5,000원</span>
                </div>
                <div className="flex justify-between">
                    <span>{t('payment:used_points')}</span>
                    <span>-5,000원</span>
                </div>
                <hr className="my-2 border-dashed" />
                <div className="flex justify-between font-semibold text-black">
                    <span>{t('payment:total_amount')}</span>
                    <span className="text-lg">45,000원</span>
                </div>
                <div className="flex justify-between text-xs ml-2">
                    <span>└ {t('payment:credit_card')} (현대카드)</span>
                    <span>45,000원</span>
                </div>
                {/* <div className="text-xs text-gray-400 ml-2">└ 신용카드 결제 (현대카드)</div> */}
            </div>
        </div>
    )
}