export default function VisitorSummary({ t }: { t: (key: string) => string }) {
    return (
        <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="font-semibold text-base mb-4">{t('visitor_overview')}</h2>
            <div className="h-[280px] bg-gray-50 rounded flex items-center justify-center text-gray-400">
            그래프 영역
            </div>
        </section>
    )
}