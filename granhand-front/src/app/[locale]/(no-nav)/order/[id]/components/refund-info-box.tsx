export default function RefundInfoBox({ t, width="w-[357px]", height="h-[378px]" }: { t: (key: string) => string, width?: string, height?: string }) {
    return (
        <div className={`${width} ${height} border rounded-md p-4 space-y-3 shadow-md text-xs`}>
            <div className="flex justify-between font-bold text-[#322A24]">
                <span>{t('payment:total_amount')}</span>
                <span>33,539원</span>
            </div>
            <div className="ml-2 space-y-2">
                <div className="flex justify-between">
                    <span className="text-[#C0BCB6]">{t('payment:amount')}</span>
                    <span>35,500원</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#C0BCB6]">{t('payment:ship_fee')}</span>
                    <span>0원</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#C0BCB6]">{t('order:coupon')}</span>
                    <span>-1,961원</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#C0BCB6]">{t('payment:used_points')}</span>
                    <span>0</span>
                </div>
            </div>
            <hr className="my-5 border-dashed" />
            <div className="flex justify-between font-semibold text-[#FF3E24]">
                <span>{t('order:deducted_amount')}</span>
                <span>(-) 0원</span>
            </div>
            <div className="ml-2 space-y-2">
                <div className="flex justify-between">
                    <span className="text-[#C0BCB6]">{t('order:additional_ship_fee')}</span>
                    <span>0원</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#C0BCB6]">{t('order:refund_ship_fee')}</span>
                    <span>3,000원</span>
                </div>
            </div>
            <hr className="my-5 border-dashed" />
            <div className="flex justify-between font-semibold text-[#322A24]">
                <span>{t('order:refund')}</span>
                <span className="text-base">33,539원</span>
            </div>
            <div className="text-xs text-[#C0BCB6] ml-2">└ {t('payment:credit_card')} (현대카드)</div>
            <div className="flex justify-between text-[#322A24] mt-3">
                <span className="font-semibold">{t('order:refunded_points')}</span>
                <span className="font-semibold">0</span>
            </div>
        </div>
    )
}