export default function PointCard() {
    const points = 13900;
    const upcomingPoints = 0;
    
    return (
        <section className="border rounded-md shadow-sm bg-white">
            <div className="px-6 pt-6">
                <p className="text-base font-bold text-gray-800">포인트</p>
                <p className="text-4xl font-extrabold text-right">{points.toLocaleString()}</p>
            </div>
            <div className="border-t border-dashed border-gray-300 my-4 mt-8 mx-6" />
            <div className="px-6 pb-6 flex justify-between items-center text-sm text-gray-400">
                <span>이번 달 소멸 예정 포인트</span>
                <span className="text-black font-medium">{upcomingPoints}</span>
            </div>
        </section>
    )
}