export default function PointUse() {
    return (
        <section className="space-y-2 mb-10">
            <div className="text-base font-bold flex items-center gap-2">
                포인트
                <div className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 text-xs">?</div>
            </div>
            <div className="flex gap-2">
                <input
                type="text"
                placeholder="사용하실 포인트를 입력해 주세요."
                className="flex-1 border rounded px-3 py-2 text-sm h-15"
                />
                <button className="border px-4 py-2 text-sm font-semibold rounded text-white bg-black">전체 사용</button>
            </div>
            <div className="bg-white shadow-sm border rounded px-4 py-3 text-sm flex justify-between items-center">
                <span className="font-bold text-gray-700">사용 가능한 포인트</span>
                <span className="font-bold text-gray-700">13,900</span>
            </div>
        </section>
    )
}