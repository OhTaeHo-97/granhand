'use client'

import { Button } from "@/components/ui/button"
import { notFound, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const stores = ['그랑핸드', '헤이온', '콤포타블']
const categories = ['전체', '기프트 세트', '퍼퓸', '공간', '바디', '가이드']

export default function ShopNavigation() {
    const [selectedStore, setSelectedStore] = useState('그랑핸드')
    const [selectedCategory, setSelectedCategory] = useState('전체')
    const searchParams = useSearchParams()
    const router = useRouter()

    const onClickStore = (store: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('store', store)
        params.set('category', selectedCategory)

        router.push(`/shop?${params.toString()}`)
    }

    const onClickPlace = (category: string) => {
        console.log(category)
        if(category === '가이드') {
            router.push('/shop/scent-guide')
            return
        }

        const params = new URLSearchParams(searchParams)
        params.set('store', selectedStore)
        params.set('category', category)

        router.push(`/shop?${params.toString()}`)
    }

    useEffect(() => {
        const store = searchParams.get('store')
        if(store && !stores.includes(store)) notFound()
        if(store) setSelectedStore(store)
        const category = searchParams.get('category')
        if(category && !categories.includes(category)) notFound()
        if(category) setSelectedCategory(category)
    }, [searchParams])

    return (
        // 상단: STORE + 드롭다운 + 서브메뉴
        <div className="flex justify-between items-center">
            {/* 왼쪽: STORE + 드롭다운 */}
            <div className="flex items-center gap-4">
                <h2 className="text-lg font-medium text-gray-900 m-0 p-0 leading-none">STORE</h2>

                <div className="flex items-center text-sm text-gray-400">
                {stores.map((store, index) => (
                    <div key={index} className="flex item-center">
                        {index !== 0 && (
                            <span className="mx-3 text-gray-300 select-none">|</span>
                        )}

                        <Button
                            key={store}
                            onClick={() => onClickStore(store)}
                            className={`text-sm ${
                                selectedStore === store
                                    ? 'text-black semibold'
                                    : 'text-gray-400'
                            } hover:text-black transition-colors min-w-[5%] h-2`}
                        >
                            {store}
                        </Button>
                    </div>
                ))}
                </div>
            </div>

            {/* 오른쪽: 서브메뉴 */}
            <div className="flex items-center text-sm text-gray-400">
            {categories.map((category) => (
                <Button
                    key={category}
                    onClick={() => onClickPlace(category)}
                    className={`text-sm ${
                        selectedCategory === category
                            ? 'text-black semibold'
                            : 'text-gray-400'
                    } hover:text-black transition-colors min-w-[5%]`}
                >
                    {category}
                </Button>
            ))}
            </div>
        </div>
    )
}