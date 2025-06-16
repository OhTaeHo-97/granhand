export default function PointCard({ t }: { t: (key: string) => string }) {
    const points = 13900;
    const upcomingPoints = 0;
    
    return (
        <section className="border rounded-md shadow-sm bg-[#FDFBF5]">
            <div className="px-6 pt-6">
                <p className="text-xs font-medium text-[#322A24]">{t('my_page:point')}</p>
                <p className="text-[32px] font-bold text-right text-[#322A24]">{points.toLocaleString()}</p>
            </div>
            <div className="border-t border-dashed border-[#E9E6E0] my-4 mt-8 mx-6" />
            <div className="px-6 pb-6 flex justify-between items-center text-xs font-medium text-[#C0BCB6]">
                <span>{t('point:expired_this_month')}</span>
                <span className="text-[#322A24]">{upcomingPoints}</span>
            </div>
        </section>
    )
}