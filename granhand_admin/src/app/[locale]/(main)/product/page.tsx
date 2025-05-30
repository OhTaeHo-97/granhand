'use client'

import { Button } from "@/components/ui/button";
import { BookOpen, List, Plus } from "lucide-react";
import ProductSidebar from "./components/sidebar";
import ProductListHeader from "./components/header";
import ProductList from "./components/product-list";
import { LocaleTypes } from "../../../../../utils/localization/settings";
// import { translation } from "../../../../../utils/localization/locales/server";
import Link from "next/link";
// import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../utils/localization/client";
import { useEffect, useState } from "react";
import { SelectedCategory } from "./components/category-select";
import { useSession } from "next-auth/react";
import { useProduct } from "@/hooks/use-product";
import { ProductCategoryNode } from "@/lib/product/product-state";
import { useCategory } from "@/hooks/use-category";

export interface ProductInfo {
    idx: number,
    code: string,
    name: string,
    dprice: number,
    sprice: number,
    dan: string,
    memo: string,
    isshow: string,
    regidate: string,
    moddate: string,
    images: string[],
    categories: string[]
    // category: string,
    // options: string[],
    // price: number,
    // status: string,
    // stock: number,
    // registeredDate: Date | undefined
}

export default function ProductListPage() {
    // const { locale } = await params
    // const { t } = await translation(locale, 'product')

    const { data: session, status } = useSession()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'product')
    const currentLocale = useCurrentLocale()
    const { getProducts } = useProduct()
    const { getCategories } = useCategory()

    // const currentLocale = getCurrentLocaleFromParams(locale)
    const [selectedCategories, setSelectedCategories] = useState<SelectedCategory[]>([])
    const [contents, setContents] = useState<ProductInfo[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemCnt, setItemCnt] = useState('50')
    const [totalPage, setTotalPage] = useState(0)

    const fetchProductList = async (params: Record<string, any>) => {
        const { data, error } = await getProducts(params)

        if(error) {
            console.error('Failed to fetch products for error:', error)
            alert('상품을 가져오는 데에 실패하였습니다.')
            setContents([])
            setTotalPage(0)
        } else if(data) {
            if(data.datas) {
                setContents(data.datas)
                setTotalPage(data.pagination.pages)
            } else {
                setContents([])
                setTotalPage(0)
            }
        }
    }

    // const fetchProductList = async (params: Record<string, any>) => {
    //     if(status !== 'authenticated' || !session?.token) {
    //         console.log('Cannot fetch data - no valid session')
    //         return
    //     }
        
    //     try {
    //         console.log('token:', session.token)
    //         const param = new URLSearchParams({
    //             page: params.page,
    //             size: params.size
    //         })

    //         const response = await fetch(`/api/product?${param.toString()}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Authorization': `${session.token}`
    //             }
    //         })

    //         if(!response.ok) {
    //             const error = await response.json()
    //             throw new Error(error.message)
    //         }

    //         const data = await response.json()
    //         console.log('data:', data)
    //         return data
    //     } catch (error) {
    //         console.error('Failed to fetch products:', error)
    //     }
    // }

    return (
        <div className="flex-1 border">
            <div className="flex justify-between items-center p-12">
                <div className="text-black text-sm">
                    <h1 className="text-2xl font-bold text-[#5E5955]">{t('product_manage')}</h1>
                </div>
                <div className="space-x-2">
                    <Link href={`${currentLocale}/product/template`}>
                        <Button variant="outline" className="text-[#5E5955]"><BookOpen className="!w-4 !h-4" />{t('template_manage')}</Button>
                    </Link>
                    <Link href={`${currentLocale}/product/recommend`}>
                        <Button variant="outline" className="text-[#5E5955]"><List className="!w-4 !h-4" />{t('recommendation_manage')}</Button>
                    </Link>
                    <Link href={`${currentLocale}/product/register`}>
                        <Button className="bg-[#322A24] text-white"><Plus className="!w-4 !h-4" />{t('register_product')}</Button>
                    </Link>
                </div>
            </div>

            <div className="flex min-h-screen text-sm text-[#1A1A1A]">
                {/* ------------------- 좌측 사이드바 ------------------- */}
                <ProductSidebar />
        
                {/* ------------------- 우측 콘텐츠 ------------------- */}
                <main className="flex-1 p-6 space-y-4 w-full">
                    {/* ------------------- 검색 필터 ------------------- */}
                    <ProductListHeader selectedCategories={selectedCategories} currentPage={currentPage} itemCnt={itemCnt} setSelectedCategories={setSelectedCategories} setContents={setContents} setTotalPage={setTotalPage} fetchProductList={fetchProductList} />
                    {/* ------------------- 상품 목록 테이블 ------------------- */}
                    <ProductList currentPage={currentPage} itemCnt={itemCnt} totalPage={totalPage} contents={contents} setCurrentPage={setCurrentPage} selectedCategories={selectedCategories} setItemCnt={setItemCnt} setContents={setContents} setTotalPage={setTotalPage} fetchProductList={fetchProductList} />
                </main>
            </div>
        </div>
    )
}