import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function MainItemLayout({ title, itemCount, items, t, currentLocale, listLink }: { title: string, itemCount: number, items: Array<{id: number, sort: string, name: string, price: number, image: string}>, t: (key: string) => string, currentLocale: string, listLink: string }) {
    return (
        <div className="mb-16">
            <div className="flex py-3 justify-between mb-4 border-b items-center">
                <div className="flex gap-4 items-center">
                <span className="font-semibold text-xl">{title}</span>
                <span className="text-sm text-gray-400">{t('my_page:items')} {itemCount}{currentLocale === '' && '개'}</span>
                </div>
                <Link href={listLink}>
                    <Button variant="ghost" className="text-sm text-gray-400 hover:cursor-pointer">{t('my_page:view_more')}</Button>
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-8">
                {
                    items.map((item) => (
                        <Link key={item.id} href={`${currentLocale}/shop/${item.id}`}>
                            <div key={item.id} className="flex gap-4">
                            <Image src={item.image} alt={item.name} width={1448} height={1080} className="w-24 h-24 object-cover" />
                            <div className="flex flex-col justify-center grid grid-rows-3">
                                <div className="text-xs text-gray-400 mb-1">{item.sort}</div>
                                <div className="font-semibold">{item.name}</div>
                                <div className="text-sm">{item.price} KRW</div>
                            </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}