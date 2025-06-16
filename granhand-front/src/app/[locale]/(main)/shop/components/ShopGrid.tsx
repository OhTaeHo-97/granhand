'use client'

import Image from "next/image";
import Link from "next/link";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { FormEventHandler, useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@/components/pagination";
import SearchInput from "@/components/searchInput";
import { useTranslation } from "../../../../../../utils/localization/client";

interface ShopPost {
    id: number
    title: string
    option: string
    price: string
    image: string
}

const post: ShopPost = {
    id: 1,
    title: 'Roland Multi Perfume',
    option: '롤랑 멀티퍼퓸 100ml / 200ml',
    price: '35,000',
    image: "/lovable-uploads/373d6254-162e-4da2-a5ef-e87c36cd99d7.png"
}

export default function ShopGrid({ store, category }: { store?: string, category?: string }) {
// export default async function ShopGrid({ searchParams, locale }: { searchParams: { store?: string; category?: string }, locale: LocaleTypes }) {
    // const { store, category } = await searchParams
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'shop'])
    const currentLocale = useCurrentLocale()

    const sortCategories = [{label: t('shop:recommend'), value: 'recommend'}, {label: t('shop:popularity'), value: 'popularity'}, {label: t('shop:low_price'), value: 'low_price'}, {label: t('shop:high_price'), value: 'high_price'}, {label: t('shop:asc_product'), value: 'asc_product'}, {label: t('shop:desc_product'), value: 'desc_product'}]

    const router = useRouter()
    const searchParams = useSearchParams()
    const [sortCategory, setSortCategory] = useState<string>('recommend')
    const [keyword, setKeyword] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    // const [totalPage, setTotalPage] = useState(0)
    const [totalPage] = useState(0)

    const selectedStore = store
    const selectedCategory = category

    const handleInputChange: FormEventHandler<HTMLInputElement> = (e) => {
        setKeyword((e.target as HTMLInputElement).value)
    }

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        const params = new URLSearchParams(searchParams)
        if(keyword) {
            params.set('q', keyword)
        } else {
            params.delete('q')
        }

        router.replace(`${currentLocale}/shop?${params.toString()}`)
    }

    const handleSortCategoryChange = (value: string) => {
        setSortCategory(value)
        const params = new URLSearchParams(searchParams)
        params.set('sort', value)
        // params.set('menu', menu)
        // console.log('menu: ', menu)
        router.push(`${currentLocale}/shop?${params.toString()}`)
    }

    useEffect(() => {
        const category = searchParams.get('sort')
        if(category) setSortCategory(category)
    }, [searchParams])

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className="text-xs flex items-center gap-1 text-[#6F6963] font-bold min-w-fit">
                    {t(`shop:${sortCategory}`)} <ChevronDown size={18} />
                </DropdownMenuTrigger>

                <DropdownMenuPortal>
                    <DropdownMenuContent sideOffset={4} className="bg-[#FDFBF5] border rounded shadow-md p-1 text-sm">
                        {sortCategories.map(({ label, value }) => (
                            <DropdownMenuItem
                                key={value}
                                className={cn("text-xs font-medium px-4 py-2 hover:bg-[#322A2408] cursor-pointer min-w-fit text-[#322A244D]",
                                    value === sortCategory && "font-bold text-[#6F6963]"
                                )}
                                onSelect={() => handleSortCategoryChange(value)}
                            >
                                {label}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenuPortal>
            </DropdownMenu>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-x-8 gap-y-12 mt-10">
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
                        <div className="overflow-hidden mb-4">
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={205}
                                height={200}
                                className="w-[205px] h-[200px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-sm text-[#111111] font-bolder group-hover:text-granhand-text transition-colors">
                                {post.title}
                            </h3>
                            <div className="flex items-center space-x-2 text-xs text-[#C0BCB6]">
                                <span>{post.option}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs text-[#322A24]">
                                <span>{post.price} KRW</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className='mb-20' />
            <Pagination totalPages={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div className='mb-14' />
            <form onSubmit={handleFormSubmit}>
                <SearchInput value={keyword} onChange={handleInputChange} />
            </form>
        </>
    )
}