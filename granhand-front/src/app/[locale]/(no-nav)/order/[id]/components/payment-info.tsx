export default function PaymentInfo({ t }: { t: (key: string) => string }) {
    return (
        // 최종 결제 금액
        <div className="bg-[#FDFBF5] rounded-md text-sm text-gray-600 space-y-2">
            <h2 className="font-bold text-[#322A24] text-sm">{t('payment:final_amount')}</h2>
            <div className="w-[357px] h-[224px] border rounded-md p-6 space-y-3 shadow-md text-[#6F6963] text-xs">
                <div className="flex justify-between">
                    <span className="text-[#C0BCB6]">{t('payment:amount')}</span>
                    <span>55,000원</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#C0BCB6]">{t('payment:ship_fee')}</span>
                    <span>0원</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#C0BCB6]">{t('payment:discount')}</span>
                    <span>-5,000원</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#C0BCB6]">{t('payment:used_points')}</span>
                    <span>-5,000원</span>
                </div>
                <hr className="my-2 border-dashed" />
                <div className="flex justify-between font-semibold text-[#322A24]">
                    <span>{t('payment:total_amount')}</span>
                    <span className="text-base">45,000원</span>
                </div>
                <div className="flex justify-between ml-2">
                    <span className="text-[#C0BCB6]">└ {t('payment:credit_card')} (현대카드)</span>
                    <span>45,000원</span>
                </div>
                {/* <div className="text-xs text-gray-400 ml-2">└ 신용카드 결제 (현대카드)</div> */}
            </div>
        </div>
    )
}