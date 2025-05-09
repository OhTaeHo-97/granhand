export default function RefundInfoBox({ t }: { t: (key: string) => string }) {
    return (
        <div className="border rounded-md p-4 space-y-3 shadow-md">
            <div className="flex justify-between font-semibold text-black">
                <span>{t('payment:total_amount')}</span>
                <span>33,539원</span>
            </div>
            <div className="text-sm text-gray-400 ml-2 space-y-2">
                <div className="flex justify-between">
                    <span>{t('payment:amount')}</span>
                    <span>35,500원</span>
                </div>
                <div className="flex justify-between">
                    <span>{t('payment:ship_fee')}</span>
                    <span>0원</span>
                </div>
                <div className="flex justify-between">
                    <span>{t('order:coupon')}</span>
                    <span>-1,961원</span>
                </div>
                <div className="flex justify-between">
                    <span>{t('payment:used_points')}</span>
                    <span>0</span>
                </div>
            </div>
            <hr className="my-2 border-dashed" />
            <div className="flex justify-between font-semibold text-black">
                <span>{t('order:deducted_amount')}</span>
                <span>(-) 0원</span>
            </div>
            <div className="text-sm text-gray-400 ml-2 space-y-2">
                <div className="flex justify-between">
                    <span>{t('payment:amount')}</span>
                    <span>35,500원</span>
                </div>
                <div className="flex justify-between">
                    <span>{t('payment:ship_fee')}</span>
                    <span>0원</span>
                </div>
                <div className="flex justify-between">
                    <span>{t('order:coupon')}</span>
                    <span>-1,961원</span>
                </div>
                <div className="flex justify-between">
                    <span>{t('payment:used_points')}</span>
                    <span>0</span>
                </div>
            </div>
            <hr className="my-2 border-dashed" />
            <div className="flex justify-between font-semibold text-black">
                <span>{t('order:refund')}</span>
                <span>33,539원</span>
            </div>
            <div className="text-xs text-gray-400 ml-2">└ 신용카드 (현대카드)</div>
            <div className="flex justify-between">
                <span className="font-semibold text-black">{t('order:refunded_points')}</span>
                <span className="font-semibold text-black">0</span>
            </div>
        </div>
    )
}