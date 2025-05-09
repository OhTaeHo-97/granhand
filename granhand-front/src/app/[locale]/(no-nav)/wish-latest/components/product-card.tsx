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
            <div className="aspect-[4/3] overflow-hidden mb-4">
                <Image
                    src={image}
                    alt={title}
                    width={205}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <div className="space-y-2">
                <h3 className="text-base font-medium group-hover:text-granhand-text transition-colors">
                    {title}
                </h3>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>{option}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                    <span>{price} KRW</span>
                </div>
            </div>
        </Link>
    )
}