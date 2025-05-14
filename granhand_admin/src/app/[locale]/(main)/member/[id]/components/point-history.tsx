export default function PointHistory({ t, currentLocale }: { t: (key: string) => string, currentLocale: string }) {
    return (
        <table className="w-full text-center border-collapse border">
        <thead className="bg-[#322A2408] h-15">
            <tr className="border-b text-[#6F6963]">
            <th className="p-2 border">{t('point:date')}</th>
            <th className="p-2 border">{t('point:description')}</th>
            <th className="p-2 border">{t('point:point')}</th>
            <th className="p-2 border">{t('point:related_order_number')}</th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b h-15 text-[#111111]">
                <td className="p-2 border">2023-11-23 09:16</td>
                <td className="p-2 border">구매확정 적립</td>
                <td className="p-2 border text-blue-400">721{currentLocale === '' ? '원' : ' KRW'}</td>
                <td className="p-2 border underline">2023112365674620</td>
            </tr>
            <tr className="border-b h-15 text-[#111111]">
                <td className="p-2 border">2023-10-09 21:33</td>
                <td className="p-2 border">주문 사용</td>
                <td className="p-2 border text-red-400">-5000{currentLocale === '' ? '원' : ' KRW'}</td>
                <td className="p-2 border underline">2023100933138412</td>
            </tr>
        </tbody>
        </table>
    )
}