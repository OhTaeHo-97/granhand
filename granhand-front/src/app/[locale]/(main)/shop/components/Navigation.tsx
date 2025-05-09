'use client'

import { Button } from "@/components/ui/button"
import { getLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale"
import { notFound, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useTranslation } from "../../../../../../utils/localization/client"

export default function ShopNavigation() {
    const [selectedStore, setSelectedStore] = useState('granhand')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const searchParams = useSearchParams()
    const router = useRouter()

    const locale = getLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'shop'])
    const currentLocale = useCurrentLocale()

    const stores = [{label: t('granhand'), value: 'granhand'}, {label: t('heyon'), value: 'heyon'}, {label: t('comfortable'), value: 'comfortable'}]
    const categories = [{label: t('shop:all'), value: 'all'}, {label: t('shop:giftset'), value: 'giftset'}, {label: t('shop:perfume'), value: 'perfume'}, {label: t('shop:space'), value: 'space'}, {label: t('shop:body'), value: 'body'}, {label: t('shop:guide'), value: 'guide'}]

    const onClickStore = (store: string) => {
        setSelectedStore(store)
        const params = new URLSearchParams(searchParams)
        params.set('store', store)
        params.set('category', selectedCategory)

        router.push(`${currentLocale}/shop?${params.toString()}`)
    }

    const onClickPlace = (category: string) => {
        setSelectedCategory(category)
        if(category === 'guide') {
            router.push('/shop/scent-guide')
            return
        }

        const params = new URLSearchParams(searchParams)
        params.set('store', selectedStore)
        params.set('category', category)

        router.push(`${currentLocale}/shop?${params.toString()}`)
    }

    useEffect(() => {
        const store = searchParams.get('store')
        const storeList = stores.map(store => store.value)
        if(store && !storeList.includes(store)) notFound()
        if(store) setSelectedStore(store)
        const category = searchParams.get('category')
        const categoryList = categories.map(category => category.value)
        if(category && !categoryList.includes(category)) notFound()
        if(category) setSelectedCategory(category)
    }, [searchParams])

    return (
        // 상단: STORE + 드롭다운 + 서브메뉴
        <nav className="w-full flex items-center justify-between pt-4">
            <div className="flex items-center gap-4 h-10">
                <h2 className="text-lg font-medium text-gray-900 m-0 p-0 leading-none">SHOP</h2>
                <div className="relative">
                    <div className="flex items-center text-sm text-gray-400">
                        {stores.map(({ label, value }, index) => (
                            <div key={value} className="flex item-center">
                                {index !== 0 && (
                                    <span className="mx-3 text-gray-300 select-none">|</span>
                                )}

                                <Button
                                    key={value}
                                    onClick={() => onClickStore(value)}
                                    className={`text-sm ${
                                        selectedStore === value
                                            ? 'text-black semibold'
                                            : 'text-gray-400'
                                    } hover:text-black transition-colors min-w-[5%] h-2`}
                                >
                                    {label}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="flex items-center text-sm text-gray-400">
                {categories.map(({ label, value }) => (
                    <Button
                        key={value}
                        onClick={() => onClickPlace(value)}
                        className={`text-sm ${
                            selectedCategory === value
                                ? 'text-black semibold'
                                : 'text-gray-400'
                        } hover:text-black transition-colors min-w-[5%]`}
                    >
                        {label}
                    </Button>
                ))}
            </div>
        </nav>
    )


    // <div className="flex justify-between items-center">
    //         {/* 왼쪽: STORE + 드롭다운 */}
    //         <div className="flex items-center gap-4">
    //             <h2 className="text-lg font-medium text-gray-900 m-0 p-0 leading-none">SHOP</h2>

    //             <div className="flex items-center text-sm text-gray-400">
    //             {stores.map((store, index) => (
    //                 <div key={index} className="flex item-center">
    //                     {index !== 0 && (
    //                         <span className="mx-3 text-gray-300 select-none">|</span>
    //                     )}

    //                     <Button
    //                         key={store}
    //                         onClick={() => onClickStore(store)}
    //                         className={`text-sm ${
    //                             selectedStore === store
    //                                 ? 'text-black semibold'
    //                                 : 'text-gray-400'
    //                         } hover:text-black transition-colors min-w-[5%] h-2`}
    //                     >
    //                         {store}
    //                     </Button>
    //                 </div>
    //             ))}
    //             </div>
    //         </div>

    //         {/* 오른쪽: 서브메뉴 */}
    //         <div className="flex items-center text-sm text-gray-400">
    //         {categories.map((category) => (
    //             <Button
    //                 key={category}
    //                 onClick={() => onClickPlace(category)}
    //                 className={`text-sm ${
    //                     selectedCategory === category
    //                         ? 'text-black semibold'
    //                         : 'text-gray-400'
    //                 } hover:text-black transition-colors min-w-[5%]`}
    //             >
    //                 {category}
    //             </Button>
    //         ))}
    //         </div>
    //     </div>
}