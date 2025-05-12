'use client'

import { Button } from "@/components/ui/button"
import { getLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale"
import { notFound, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useTranslation } from "../../../../../../utils/localization/client"

export default function ShopNavigation() {
    const [selectedStore, setSelectedStore] = useState('granhand')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null)
    const searchParams = useSearchParams()
    const router = useRouter()

    const locale = getLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'shop'])
    const currentLocale = useCurrentLocale()

    const sub_height = 40

    const stores = [
        {label: t('granhand'), value: 'granhand'},
        {label: t('heyon'), value: 'heyon'},
        {label: t('comfortable'), value: 'comfortable'}
    ]

    const categories = [
        {label: t('shop:all'), value: 'all'},
        {label: t('shop:giftset'), value: 'giftset'},
        {label: t('shop:perfume'), value: 'perfume'},
        {label: t('shop:space'), value: 'space'},
        {label: t('shop:body'), value: 'body'},
        {label: t('shop:guide'), value: 'guide'}
    ]

    const subCategories: Record<string, {label: string, value: string}[]> = {
        perfume: [
            {label: t('shop:signature'), value: 'signature'},
            {label: t('shop:perfume'), value: 'perfume'},
            {label: t('shop:multiperfume'), value: 'multiperfume'}
        ],
        space: [
            {label: t('shop:diffuser'), value: 'diffuser'},
            {label: t('shop:candle'), value: 'candle'},
            {label: t('shop:sachet'), value: 'sachet'}
        ],
        body: [
            {label: t('shop:handcream'), value: 'handcream'},
            {label: t('shop:handwash'), value: 'handwash'}
        ]
    }

    const onClickStore = (store: string) => {
        setSelectedStore(store)

        const params = new URLSearchParams(searchParams)
        params.set('store', store)
        params.set('category', selectedCategory)
        if(selectedSubCategory) params.set('sub', selectedSubCategory)

        router.push(`${currentLocale}/shop?${params.toString()}`)
    }

    const onClickCategory = (category: string) => {
        setSelectedCategory(category)

        if(subCategories[category]) {
            setSelectedSubCategory(subCategories[category][0].value)
        } else {
            setSelectedSubCategory(null)
        }

        if(category === 'guide') {
            router.push(`${currentLocale}/shop/scent-guide`)
            return
        }

        const params = new URLSearchParams(searchParams)
        params.set('store', selectedStore)
        params.set('category', category)
        if(subCategories[category]) params.set('sub', subCategories[category][0].value)

        router.push(`${currentLocale}/shop?${params.toString()}`)
    }

    const onClickSubCategories = (sub: string) => {
        setSelectedSubCategory(sub)

        const params = new URLSearchParams(searchParams)
        params.set('store', selectedStore)
        params.set('category', selectedCategory)
        params.set('sub', sub)

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
        
        const subCategory = searchParams.get('sub')
        if(category && subCategories[category]) {
            const subList = subCategories[category].map(sub => sub.value)
            if(subCategory && subList.includes(subCategory)) setSelectedSubCategory(subCategory)
            else setSelectedSubCategory(subCategories[category][0].value)
        } else {
            setSelectedSubCategory(null)
        }
    }, [searchParams])

    return (
        // 상단: STORE + 드롭다운 + 서브메뉴
        <nav className="w-full flex flex-col pt-4">
            <div className="w-full flex items-start justify-between">
                <div className="flex items-center gap-4 h-10">
                    <h2 className="text-lg font-medium text-gray-900 m-0 p-0 leading-none">SHOP</h2>
                    <div className="flex items-center text-sm text-gray-400">
                        {stores.map(({ label, value }, index) => (
                            <div key={value} className="flex items-center">
                                {index !== 0 && (
                                    <span className="mx-3 text-gray-300 select-none">|</span>
                                )}
                                <Button
                                    value={value}
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
                {/* 오른쪽: 카테고리 + (서브메뉴) */}
                <div className="flex flex-col items-start">
                    <div className="flex items-center text-sm text-gray-400">
                        {categories.map(({ label, value }) => (
                            <Button
                                key={value}
                                onClick={() => onClickCategory(value)}
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
                    <div
                        className="flex items-center mt-2 text-sm"
                        style={{
                            minHeight: `${sub_height}px`,
                            height: `${sub_height}px`,
                            visibility: subCategories[selectedCategory] ? 'visible' : 'hidden'
                        }}
                    >
                        {subCategories[selectedCategory]?.map(({ label, value }) => (
                            <Button
                                key={value}
                                onClick={() => onClickSubCategories(value)}
                                className={`text-sm ${
                                    selectedSubCategory === value
                                        ? 'text-black semibold'
                                        : 'text-gray-400'
                                } hover:text-black transition-colors min-w-[5%]`}
                            >
                                {label}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}