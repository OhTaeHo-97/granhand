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
        <li key={elem.id} className="border !border-[#E9E6E0] rounded-md px-6 py-6 bg-[#FDFBF5]">
            <div className="text-sm font-medium text-[#C0BCB6] mb-6">
                {elem.date} / {t(elem.brand.store)} {elem.brand.loc && t(`store:${elem.brand.loc}`)}{(elem.brand.loc && currentLocale==='') && '점'}
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <div className="font-bold text-base mb-1 text-[#322A24]">{t(`point:${elem.title}`)}</div>
                    {elem.expire && <div className="text-[10px] font-medium text-[#6F6963]">{elem.expire}</div>}
                </div>
                <div className={`text-base font-bold ${elem.amount.startsWith("-") ? "text-[#C0BCB6]" : "text-[#322A24]"}`}>
                    {elem.amount}
                </div>
            </div>
        </li>
    )
}