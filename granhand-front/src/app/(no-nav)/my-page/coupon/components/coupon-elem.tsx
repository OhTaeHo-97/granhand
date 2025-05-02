export default async function CouponElement({ key, coupon }: { key: number, coupon: { brand: string, title: string, condition: string, validUntil: string } }) {
    const { brand, title, condition, validUntil } = await coupon

    return (
        <li
            key={key}
            className="border rounded-md px-6 py-5 bg-white shadow-sm"
        >
            <div className="text-sm font-bold text-gray-300 mb-1">
            {brand}
            </div>
            <div className="text-xl font-bold text-gray-900 mb-3">
            {title}
            </div>
            <div className="text-sm font-semibold text-gray-500">
            {condition}
            </div>
            <div className="text-sm text-gray-400 mt-1">
            {validUntil}
            </div>
        </li>
    )
}