export default async function CouponElement({ key, coupon }: { key: number, coupon: { brand: string, title: string, condition: string, validUntil: string } }) {
    const { brand, title, condition, validUntil } = await coupon

    return (
        <li
            key={key}
            className="border rounded-md px-6 py-5 bg-[#FDFBF5] shadow-sm"
        >
            <div className="text-sm font-bold text-[#DBD7D0] mb-1">
            {brand}
            </div>
            <div className="text-lg font-bold text-[#322A24] mb-3">
            {title}
            </div>
            <div className="text-xs font-semibold text-[#6F6963]">
            {condition}
            </div>
            <div className="text-[10px] text-[#C0BCB6] mt-1">
            {validUntil}
            </div>
        </li>
    )
}