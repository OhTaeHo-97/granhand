'use client'

import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale"
import { notFound, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useTranslation } from "../../../../../../utils/localization/client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export default function ShopNavigation() {
    const [selectedStore, setSelectedStore] = useState('granhand')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null)
    const searchParams = useSearchParams()
    const router = useRouter()

    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'shop'])
    const currentLocale = useCurrentLocale()

    const sub_height = 40

    const stores = [
        {label: t('granhand'), value: 'granhand'},
        {label: t('heyon'), value: 'heyon'},
        {label: t('komfortabel'), value: 'komfortabel'}
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

    const handleStoreChange = (store: string) => {
        setSelectedStore(store)

        const params = new URLSearchParams(searchParams)
        params.set('store', store)
        params.set('category', selectedCategory)
        if(selectedSubCategory) params.set('sub', selectedSubCategory)

        router.push(`${currentLocale}/shop?${params.toString()}`)
    }

    const handleCategoryChange = (category: string) => {
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

    const handleSubCategoryChange = (sub: string) => {
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
                    <h2 className="text-lg font-medium text-[#6F6963] m-0 p-0 leading-none">SHOP</h2>
                    <div className="flex items-center text-sm text-gray-400">
                        <RadioGroup
                            value={selectedStore}
                            onValueChange={handleStoreChange}
                            // className="flex text-sm"
                            className="flex items-center rounded overflow-hidden gap-4"
                        >
                            {stores.map(({ label, value }, index) => (
                                <div key={value}>
                                    {index !== 0 && (
                                        <span className="w-[1px] mr-4 text-[#C0BCB6] select-none">|</span>
                                    )}
                                    <Label
                                        key={value}
                                        className={cn(
                                            "text-sm font-bold transition-colors min-w-[5%] hover:text-[#6F6963]",
                                            selectedStore === value
                                                ? "text-[#6F6963]"
                                                : "text-[#C0BCB6]"
                                        )}
                                    >
                                        <RadioGroupItem value={value} className="hidden" />
                                        {label}
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                </div>
                {/* 오른쪽: 카테고리 + (서브메뉴) */}
                <div className="flex flex-col items-start">
                    <div className="flex items-center text-sm text-gray-400 h-10">
                        <RadioGroup
                            value={selectedCategory}
                            onValueChange={handleCategoryChange}
                            // className="flex text-sm"
                            className="flex items-center rounded overflow-hidden gap-[20px]"
                        >
                            {categories.map(({ label, value }) => (
                                <Label
                                    key={value}
                                    className={cn(
                                        "text-sm font-bold transition-colors min-w-5 hover:text-[#6F6963]",
                                        selectedCategory === value
                                            ? "text-[#6F6963]"
                                            : "text-[#C0BCB6]"
                                    )}
                                >
                                    <RadioGroupItem value={value} className="hidden" />
                                    {label}
                                </Label>
                            ))}
                        </RadioGroup>
                    </div>
                    <div
                        className="flex items-center mt-2 text-sm"
                        style={{
                            minHeight: `${sub_height}px`,
                            height: `${sub_height}px`,
                            visibility: subCategories[selectedCategory] ? 'visible' : 'hidden'
                        }}
                    >
                        <RadioGroup
                            value={selectedSubCategory}
                            onValueChange={handleSubCategoryChange}
                            // className="flex text-sm"
                            className="flex items-center rounded overflow-hidden gap-6"
                        >
                            {subCategories[selectedCategory]?.map(({ label, value }) => (
                                <Label
                                    key={value}
                                    className={cn(
                                        "text-sm font-bold transition-colors min-w-[5%] hover:text-[#6F6963]",
                                        selectedSubCategory === value
                                            ? "text-[#6F6963]"
                                            : "text-[#C0BCB6]"
                                    )}
                                >
                                    <RadioGroupItem value={value} className="hidden" />
                                    {label}
                                </Label>
                            ))}
                        </RadioGroup>
                    </div>
                </div>
            </div>
        </nav>
    )
}