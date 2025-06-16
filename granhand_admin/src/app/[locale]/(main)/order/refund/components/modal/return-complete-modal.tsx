export default function ReturnCompleteModalContents({ t }: { t: (key: string) => string }) {
    return (
        <>
            <div className="p-4">
                <ul className="list-disc text-[#6F6963]">
                    <li>{t('order:process_return_cmpl_info')}</li>
                </ul>
            </div>
            <div className="text-[#6f6963] text-sm w-full min-w-120 mt-6">
                <table className="w-full text-left border-collapse min-w-6xl border">
                    <thead className="bg-[#322A2408] border-t h-20">
                        <tr className="border-b text-[#6F6963]">
                            <th className="p-2 text-center border">{t('order:order_number')}</th>
                            <th className="p-2 text-center border">{t('order:ordered_items')}</th>
                            <th className="p-2 text-center border">{t('order:quantity')}</th>
                            <th className="p-2 text-center border">{t('order:return_reason')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                            <tr key={i} className="border-b h-14 text-[#1A1A1A]">
                                <td className="p-2 text-center border">2024021012345678</td>
                                <td className="p-2">
                                    <div className="space-y-1 text-sm">
                                        <div className="flex items-center gap-1 font-semibold text-black">Roland Multi Perfume 100ml</div>
                                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                                            <span>각인 여부 : Y / 문구 : GRANHAND</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                                            <span>용량: 100ml</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                                            <span>쇼핑백: 구매 안함</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 text-center border">1</td>
                                <td className="p-2 text-center border">상품 불량/파손</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                <div className="border rounded-md p-4 space-y-3 shadow-md mt-10">
                    <div className="flex justify-between font-bold text-[#111111]">
                        <span>{t('order:total_pay')}</span>
                        <span>45,000원</span>
                    </div>
                    <div className="text-gray-400 ml-2 space-y-2">
                        <div className="flex justify-between">
                            <span className="text-[#C0BCB6]">{t('order:product_amount')}</span>
                            <span className="text-[#5E5955]">55,000원</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#C0BCB6]">{t('order:ship_fee')}</span>
                            <span className="text-[#5E5955]">0원</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#C0BCB6]">{t('order:coupon_discount')}</span>
                            <span className="text-[#5E5955]">-5,000원</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#C0BCB6]">{t('order:point_used')}</span>
                            <span className="text-[#5E5955]">-5,000</span>
                        </div>
                    </div>
                    <hr className="my-2 border-dashed" />
                    <div className="flex justify-between font-semibold text-[#FF3E24]">
                        <span>{t('order:deducted_amount')}</span>
                        <span>(-) 3,000원</span>
                    </div>
                    <div className="text-gray-400 ml-2 space-y-2">
                        <div className="flex justify-between">
                            <span className="text-[#C0BCB6]">{t('order:additional_ship_fee')}</span>
                            <span className="text-[#5E5955]">0원</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#C0BCB6]">{t('order:return_ship_fee')}</span>
                            <span className="text-[#5E5955]">3,000원</span>
                        </div>
                    </div>
                    <hr className="my-2 border-dashed" />
                    <div className="flex justify-between text-[#111111]">
                        <span>{t('order:other_charge')}</span>
                        <span>2,000원</span>
                    </div>
                    <div className="flex justify-between text-[#111111]">
                        <span>{t('order:refund_point')}</span>
                        <span>1,000</span>
                    </div>
                    <div className="flex justify-between font-bold text-[#111111]">
                        <span>{t('order:final_refund_amount')}</span>
                        <span className="text-lg">40,000원</span>
                    </div>
                    <div className="text-xs text-[#C0BCB6] ml-2">└ 신용카드 (현대카드)</div>
                    <div className="flex justify-between text-[#111111]">
                        <span className="font-semibold">{t('order:point_refund')}</span>
                        <span className="font-semibold">1,000</span>
                    </div>
                </div>
            </div>
        </>
    )
}