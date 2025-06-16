import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function MainItemLayout({ title, itemCount, items, t, currentLocale, listLink, emptyMsg }: { title: string, itemCount: number, items: Array<{id: number, sort: string, name: string, price: number, image: string}>, t: (key: string) => string, currentLocale: string, listLink: string, emptyMsg: string }) {
    return (
        <div className="mb-16 w-full">
            <div className="flex py-3 justify-between mb-4 border-b items-center">
                <div className="flex gap-4 items-center">
                <span className="font-bold text-[#6F6963]">{title}</span>
                <span className="text-[10px] font-medium text-[#C0BCB6]">{t('my_page:items')} {itemCount}{currentLocale === '' && '개'}</span>
                </div>
                <Link href={listLink}>
                    <Button variant="ghost" className="text-xs font-bold text-[#322A244D] hover:cursor-pointer">{t('my_page:view_more')}</Button>
                </Link>
            </div>
            {
                !items || items.length === 0 ? (
                    <div className="bg-[#322A2408] w-full h-[136px] flex items-center justify-center text-[#C0BCB6]">
                        {emptyMsg}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-6 mt-8 w-full">
                        {items.map((item) => (
                            <Link key={item.id} href={`${currentLocale}/shop/${item.id}`}>
                                <div key={item.id} className="flex gap-4">
                                    <Image src={item.image} alt={item.name} width={80} height={80} className="w-[80px] h-[80px] object-cover" />
                                    <div className="space-y-2">
                                        <div className="text-[10px] font-medium text-[#C0BCB6]">{item.sort}</div>
                                        <div className="font-bold text-xs text-[#322A24]">{item.name}</div>
                                        <div className="text-xs text-[#322A24]">{item.price} KRW</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )
            }
        </div>
    )
}