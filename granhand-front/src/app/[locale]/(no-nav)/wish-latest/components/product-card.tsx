import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ key, image, title, option, price }: { key: number, image: string, title: string, option: string, price: string }) {    
    return (
        <Link
            key={key}
            href={{
                pathname: `/shop/${key}`,
            }}
            className="group cursor-pointer"
        >
            <div className="overflow-hidden mb-4">
                <Image
                    src={image}
                    alt={title}
                    width={205}
                    height={200}
                    className="!w-[205px] !h-[200px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <div className="space-y-2">
                <h3 className="text-sm text-[#322A24] font-bold group-hover:text-granhand-text transition-colors">
                    {title}
                </h3>
                <div className="flex items-center space-x-2 text-xs text-[#C0BCB6]">
                    <span>{option}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-[#322A24]">
                    <span>{price} KRW</span>
                </div>
            </div>
        </Link>
    )
}