'use client'

import { Label } from "@/components/ui/label";
import PeriodElement from "../../components/period";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import CategorySelect from "./category-select";
import { ProductCategoryNode } from "@/lib/product/product-state";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { ProductInfo } from "../page";
// import api from "@/utils/api";
// import { useSession } from "next-auth/react";
// import { string } from "zod";

interface SelectedCategory extends ProductCategoryNode {
    path: string;
}

export default function ProductListHeader({ selectedCategories, currentPage, itemCnt, setSelectedCategories, setContents, setTotalPage, fetchProductList }: { selectedCategories: SelectedCategory[], currentPage: number, itemCnt: string, setSelectedCategories: React.Dispatch<React.SetStateAction<SelectedCategory[]>>, setContents: React.Dispatch<React.SetStateAction<ProductInfo[]>>, setTotalPage: React.Dispatch<React.SetStateAction<number>>, fetchProductList: (params: Record<string, any>) => void }) {
    // const { data: session, status } = useSession()
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'product', 'push'])
    const currentLocale = useCurrentLocale()
    const [quickRange, setQuickRange] = useState('')
    const [startDate, setStartDate] = useState<Date | undefined>(new Date())
    const [endDate, setEndDate] = useState<Date | undefined>(new Date())
    // const [selectedCategories, setSelectedCategories] = useState<SelectedCategory[]>([])
    const [saleStatus, setSaleStatus] = useState('all')
    const [searchCategory, setSearchCategory] = useState('product_name')
    const [searchValue, setSearchValue] = useState('')
    const filterOptions = [
        { label: t('product:product_name'), value: 'product_name' },
        { label: t('product:product_code'), value: 'product_code' }
    ]

    const handleInitiate = () => {
        setStartDate(new Date())
        setEndDate(new Date())
        setSelectedCategories([])
        setSaleStatus('all')
        setSearchCategory('product_name')
        setSearchValue('')
    }

    // const fetchProductList = async (params: Record<string, any>) => {
    //     if(status !== 'authenticated' || !session?.token) {
    //         console.log('Cannot fetch data - no valid session')
    //         return
    //     }
        
    //     try {
    //         const param = new URLSearchParams({
    //             page: params.page,
    //             size: params.size
    //         })

    //         const response = await fetch(`/api/product?${param.toString()}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Authorization': `${session?.token}`
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

    const handleClickSearch = async () => {
        // const pathname = `${currentLocale}/product`
        // const startDateStr = startDate ? format(startDate, 'yyyy-MM-dd') : ''
        // const endDateStr = endDate ? format(endDate, 'yyyy-MM-dd') : ''
        // const queryParams = {
        //     startDate: startDateStr,
        //     endDate: endDateStr,
        //     selectedCategories: selectedCategories.toString(),
        //     saleStatus: saleStatus,
        //     searchCategory: searchCategory,
        //     searchValue: searchValue
        // }

        // const params = new URLSearchParams(queryParams)
        // const queryString = params.toString()

        const backendParams: Record<string, any> = {}
        if(selectedCategories.length !== 0) {
            backendParams.category = selectedCategories[0].path
        }
        backendParams.page = currentPage
        backendParams.size = Number(itemCnt)
        
        fetchProductList(backendParams)

        // router.push(`${pathname}?${queryString}`)
    }

    return (
        <div className="p-6 shadow-sm space-y-4 mb-12">
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:date_registered')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <PeriodElement startDate={startDate} endDate={endDate} quickRange={quickRange} setStartDate={setStartDate} setEndDate={setEndDate} setQuickRange={setQuickRange} t={t} />
                    </div>
                </div>

                {/* 두 번째 행 */}
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:category')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <CategorySelect selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
                    </div>
                </div>
                
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:sale_status')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <RadioGroup value={saleStatus} onValueChange={setSaleStatus} className="flex gap-6">
                            <Label className="flex items-center gap-2 min-w-20">
                            <RadioGroupItem value="all" /> {t('product:all')}
                            </Label>
                            <Label className="flex items-center gap-2 min-w-20">
                            <RadioGroupItem value="on_sale" /> {t('product:on_sale')}
                            </Label>
                            <Label className="flex items-center gap-2 min-w-20">
                            <RadioGroupItem value="out_of_stock" /> {t('product:out_of_stock')}
                            </Label>
                            <Label className="flex items-center gap-2 min-w-20">
                            <RadioGroupItem value="hidden" /> {t('product:hidden')}
                            </Label>
                        </RadioGroup>
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 border-b text-[#6F6963]">
                        <Label className="font-semibold">{t('product:filters')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                    <Select value={searchCategory} onValueChange={setSearchCategory}>
                        <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-24 h-8">
                        <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white border rounded shadow-md">
                            {filterOptions.map(({ label, value }) => (
                                <SelectItem key={value} value={value} className="px-3 py-2 cursor-pointer">{label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Input
                        type="text"
                        defaultValue={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder={t('search')}
                        className="border rounded px-2 py-1 flex-1 min-w-[200px] h-8"
                    />
                    </div>
                </div>
            </div>

            <div className="flex mx-auto justify-center items-center w-full gap-10 mt-10 mb-10">
                <Button className="bg-white text-[#322A24] border w-32" onClick={handleInitiate}>
                    <RefreshCw />
                    {t('reset')}
                </Button>
                <Button className="bg-[#322A24] text-white w-32" onClick={handleClickSearch}>
                    <Search />
                    {t('search')}
                </Button>
            </div>
        </div>
    )
}