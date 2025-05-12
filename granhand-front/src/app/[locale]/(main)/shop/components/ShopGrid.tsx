import Image from "next/image";
import Link from "next/link";
import { LocaleTypes } from "../../../../../../utils/localization/settings";
import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";

const post = {
    id: 1,
    title: 'Roland Multi Perfume',
    option: '롤랑 멀티퍼퓸 100ml / 200ml',
    price: '35,000',
    image: "/lovable-uploads/373d6254-162e-4da2-a5ef-e87c36cd99d7.png"
}

export default async function ShopGrid({ searchParams, locale }: { searchParams: { store?: string; category?: string }, locale: LocaleTypes }) {
    const { store, category } = await searchParams
    const currentLocale = getCurrentLocaleFromParams(locale)

    const selectedStore = store
    const selectedCategory = category

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-8 gap-y-12">
            {Array.from({ length: 15 }).map((_, index) => (
                <Link
                    key={index}
                    href={{
                        pathname: `${currentLocale}/shop/${index}`,
                        query: {
                            selectedStore,
                            selectedCategory
                        }
                    }}
                    className="group cursor-pointer"
                >
                    <div className="aspect-[4/3] overflow-hidden mb-4">
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={205}
                            height={200}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-medium group-hover:text-granhand-text transition-colors">
                            {post.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <span>{post.option}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs">
                            <span>{post.price} KRW</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}