export default function PointInfo({ t }: { t: (key: string) => string }) {
    return (
        <div className="border border-gray-200 text-[#111111] text-sm w-full bg-white">
            <div className="grid grid-cols-[150px_1fr_150px_1fr] border-b border-gray-200 h-full min-h-14">
            {/* 첫 번째 행 */}
                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 border-b h-full text-[#6F6963]">
                {t('point:total_earned')}
                </div>
                <div className="flex gap-2 items-center p-2 h-full">
                30,600
                </div>
                <div className="border-r border-gray-200 flex items-center justify-center p-2 border-l bg-[#322A2408] border-b h-full text-[#6F6963]">
                {t('point:used')}
                </div>
                <div className="flex items-center p-2 h-full">
                9,500
                </div>
            </div>
            <div className="grid grid-cols-[150px_1fr_150px_1fr] border-b border-gray-200 h-full min-h-14">
                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 border-b h-full text-[#6F6963]">
                {t('point:balance')}
                </div>
                <div className="text-blue-600 flex gap-2 items-center p-2 h-full">
                500
                </div>
                <div className="border-r border-gray-200 flex items-center justify-center p-2 border-l bg-[#322A2408] border-b h-full text-[#6F6963]">
                {t('point:expired')}
                </div>
                <div className="flex items-center p-2 h-full">
                20,600
                </div>
            </div>
        </div>
    )
}