export default function CouponHistory({ t, itemCnt }: { t: (key: string) => string, itemCnt: number }) {
    return (
        <table className="w-full text-center border-collapse border">
            <thead className="bg-[#322A2408] h-15">
                <tr className="border-b text-[#6F6963]">
                <th className="p-2">{t('coupon:coupon_number')}</th>
                <th className="p-2">{t('coupon:coupon_name')}</th>
                <th className="p-2">{t('coupon:applicable_products')}</th>
                <th className="p-2">{t('coupon:purchase_amount')}</th>
                <th className="p-2">{t('coupon:discount_amount')}</th>
                <th className="p-2">{t('coupon:issue_date')}</th>
                <th className="p-2">{t('coupon:validity_period')}</th>
                <th className="p-2">{t('coupon:usage_status')}</th>
                </tr>
            </thead>
            <tbody>
                {Array.from({ length: itemCnt }).map((_, i) => (
                    <tr className="border-b h-15 text-[#111111]">
                        <td className="p-2">150932G28DDF3494</td>
                        <td className="p-2">콤포타블 음료 교환권</td>
                        <td className="p-2
                        ">콤포타블 전체 상품</td>
                        <td className="p-2">제한 없음</td>
                        <td className="p-2">4,500원</td>
                        <td className="p-2">2023.12.24 00:00</td>
                        <td className="p-2">2024.05.23 11:59</td>
                        <td className="p-2">미사용</td>
                    </tr>
                ))}
                {/* <tr className="border-b h-15 text-[#111111]">
                    <td className="p-2">150932G28DDF3494</td>
                    <td className="p-2">콤포타블 음료 교환권</td>
                    <td className="p-2
                    ">콤포타블 전체 상품</td>
                    <td className="p-2">제한 없음</td>
                    <td className="p-2">4,500원</td>
                    <td className="p-2">2023.12.24 00:00</td>
                    <td className="p-2">2024.05.23 11:59</td>
                    <td className="p-2">미사용</td>
                </tr> */}
            </tbody>
        </table>
    )
}