export default function PointDetailsElement({
    elem,
    t,
    currentLocale
}: {
    elem: {
        id: number,
        date: string,
        brand: {store: string, loc?: string},
        title: string,
        expire?: string,
        amount: string
    },
    t: (key: string) => string,
    currentLocale: string
}) {
    return (
        <li key={elem.id} className="border rounded-md px-6 py-6 bg-white">
            <div className="text-sm text-gray-400 mb-6">
                {elem.date} / {t(elem.brand.store)} {elem.brand.loc && t(`store:${elem.brand.loc}`)}{(elem.brand.loc && currentLocale==='') && '점'}
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <div className="font-bold text-base mb-1">{t(`point:${elem.title}`)}</div>
                    {elem.expire && <div className="text-sm text-gray-500">{elem.expire}</div>}
                </div>
                <div className={`text-base font-bold ${elem.amount.startsWith("-") ? "text-gray-400" : "text-black"}`}>
                    {elem.amount}
                </div>
            </div>
        </li>
    )
}