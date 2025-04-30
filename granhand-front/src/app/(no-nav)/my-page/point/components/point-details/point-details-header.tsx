'use client'

export default function PointListHeader({
    tabs,
    selectedState,
    onClickState
}: {
    tabs: Array<string>,
    selectedState: string,
    onClickState: (state: string) => void
}) {
    return (
        <>
            <div className="text-base font-bold flex items-center gap-2">
                포인트 상세 내역
                <div className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 text-xs">?</div>
            </div>

            {/* 탭 */}
            <div className="flex gap-4 text-sm text-gray-400 items-center">
            {tabs.map((tab, index) => (
                <button
                    key={tab}
                    onClick={() => onClickState(tab)}
                    className={`text-sm py-1 font-medium ${index !== 0 && 'px-2'}
                    ${
                        selectedState === tab
                            ? 'text-black semibold'
                            : 'text-gray-400'
                    } hover:text-black transition-colors min-w-[5%]`}
                >
                {tab}
                </button>
            ))}
            </div>
        </>
    )
}