export default function PointCard({ t }: { t: (key: string) => string }) {
    const points = 13900;
    const upcomingPoints = 0;
    
    return (
        <section className="border rounded-md shadow-sm bg-white">
            <div className="px-6 pt-6">
                <p className="text-base font-bold text-gray-800">{t('my_page:point')}</p>
                <p className="text-4xl font-extrabold text-right">{points.toLocaleString()}</p>
            </div>
            <div className="border-t border-dashed border-gray-300 my-4 mt-8 mx-6" />
            <div className="px-6 pb-6 flex justify-between items-center text-sm text-gray-400">
                <span>{t('point:expired_this_month')}</span>
                <span className="text-black font-medium">{upcomingPoints}</span>
            </div>
        </section>
    )
}