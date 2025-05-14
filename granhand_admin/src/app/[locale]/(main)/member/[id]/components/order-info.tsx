export default function OrderInfo({ t }: { t: (key: string) => string }) {
    return (
        <div className="overflow-auto border rounded bg-white">
            <table className="w-full text-center border-collapse border text-[#111111]">
            <thead className="bg-[#322A2408] h-15">
                <tr className="border-b text-[#6F6963]">
                {/* <th className="p-2"><input type="checkbox" /></th> */}
                <th className="p-2 border">{t('order:no')}</th>
                <th className="p-2 border">{t('order:order_date')}</th>
                <th className="p-2 border">{t('order:order_number')}</th>
                <th className="p-2 border">{t('order:order_product')}</th>
                <th className="p-2 border">{t('member:registration_date')}</th>
                <th className="p-2 border">{t('order:payment_method')}</th>
                <th className="p-2 border">{t('order:status')}</th>
                </tr>
            </thead>
            <tbody>
                {Array.from({ length: 12 }).map((_, i) => (
                <tr key={i} className="border-b h-15">
                    <td className="p-2 border">4</td>
                    <td className="p-2 border">2024-01-12 14:54</td>
                    <td className="p-2 underline cursor-pointer  border">2024011212345678</td>
                    <td className="p-2 border">Kyujang Sachet 외 3 건</td>
                    <td className="p-2 border">78,000원</td>
                    <td className="p-2 border">무통장 입금</td>
                    <td className="p-2 border">입금 대기</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}