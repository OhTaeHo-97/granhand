export default function OrderInfo() {
    return (
        <div className="overflow-auto border rounded bg-white">
            <table className="w-full text-center border-collapse border">
            <thead className="bg-gray-100 h-15">
                <tr className="border-b text-gray-500">
                {/* <th className="p-2"><input type="checkbox" /></th> */}
                <th className="p-2 border">번호</th>
                <th className="p-2 border">주문일</th>
                <th className="p-2 border">주문번호</th>
                <th className="p-2 border">주문상품</th>
                <th className="p-2 border">가입일</th>
                <th className="p-2 border">결제수단</th>
                <th className="p-2 border">상태</th>
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