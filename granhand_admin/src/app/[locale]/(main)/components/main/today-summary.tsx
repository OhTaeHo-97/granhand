interface Stat {
    title: string,
    count: string,
    color: string
}

export default function TodaySummary({ stats, t }: { stats: Stat[], t: (key: string) => string }) {
    return (
        <div className='bg-white rounded-lg p-6 shadow-md'>
            <div className="flex justify-between items-center mb-4">
            <h2 className='font-semibold'>{t('today_task')}</h2>
            <div className="text-gray-500 text-sm">
                {new Date().toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    weekday: 'short',
                })}
                </div>
                </div>
            {/* Status Bar */}
            <section className="flex justify-between items-center bg-white rounded-lg p-4 pl-0">
                <div className="flex items-center space-x-6">
                {stats.map((stat) => (
                    <div key={stat.title} className="flex items-center space-x-2">
                    <span className="text-gray-700 text-sm">{stat.title}</span>
                    <span className='text-red-600 text-sm'>{stat.count}</span>
                    </div>
                ))}
                </div>
            </section>
        </div>
    )
}