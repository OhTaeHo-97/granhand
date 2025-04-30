export default function PointDetailsElement({
    elem
}: {
    elem: {
        id: number,
        date: string,
        brand: string,
        title: string,
        expire?: string,
        amount: string
    }
}) {
    return (
        <li key={elem.id} className="border rounded-md px-6 py-6 bg-white">
            <div className="text-sm text-gray-400 mb-6">
                {elem.date} / {elem.brand}
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <div className="font-bold text-base mb-1">{elem.title}</div>
                    {elem.expire && <div className="text-sm text-gray-500">{elem.expire}</div>}
                </div>
                <div className={`text-base font-bold ${elem.amount.startsWith("-") ? "text-gray-400" : "text-black"}`}>
                    {elem.amount}
                </div>
            </div>
        </li>
    )
}