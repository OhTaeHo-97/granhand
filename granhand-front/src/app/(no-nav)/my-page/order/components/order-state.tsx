export default function OrderStateCard() {
    return (
        // 요약 상태 바
        <section className="min-w-80">
            <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="space-x-4">
                <span className="text-xl font-semibold text-black">전체</span>
                <span>최근 1년</span>
            </div>
            <button className="text-xs text-gray-400">기간설정</button>
            </div>

            <div className="mt-4 grid grid-cols-5 text-center border rounded-lg px-[2%] py-7 text-sm font-medium text-gray-500">
            <div>
                <div className="text-black text-xl font-bold">1</div>
                <div className="mt-3">
                    <span>입금/결제</span>
                </div>
            </div>
            <div>
                <div className="text-black text-xl font-bold">0</div>
                <div className="mt-3">
                    <span>배송준비</span>
                </div>
            </div>
            <div>
                <div className="text-black text-xl font-bold">0</div>
                <div className="mt-3">
                    <span>배송중</span>
                </div>
            </div>
            <div>
                <div className="text-black text-xl font-bold">1</div>
                <div className="mt-3">
                    <span>배송완료</span>
                </div>
            </div>
            <div>
                <div className="text-black text-xl font-bold">17</div>
                <div className="mt-3">
                    <span>구매확정</span>
                </div>
            </div>
            </div>
        </section>
    )
}