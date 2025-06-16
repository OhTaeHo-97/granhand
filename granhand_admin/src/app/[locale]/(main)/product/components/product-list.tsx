'use client'

import Pagination from "@/components/pagination";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import StockUpdateModal from "../register/components/modal/stock-update-modal";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import { useEffect, useState } from "react";
import CateogrySettingsModal from "./category-settings";
import { useRouter } from "next/navigation";
// import OptionSettings from "../register/components/option-settings";
import OptionEditModal from "../register/components/modal/option-edit-modal";
import SearchModal from "./search-modal";
import { useSession } from "next-auth/react";
// import api from "@/utils/api";
// import { SelectedCategory } from "./category-select";
import { ProductInfo } from "../page";
import { ProductCategoryNode } from "@/lib/product/product-state";
import { useCategory } from "@/hooks/use-category";
import { format } from "date-fns";
import ExcelDownloadModal from "../../order/components/modal/excel-download-modal";

export default function ProductList({
    // selectedCategories,
    currentPage,
    itemCnt,
    totalPage,
    contents,
    setCurrentPage,
    setItemCnt,
    // setContents,
    // setTotalPage,
    fetchProductList
}: {
    // selectedCategories: SelectedCategory[],
    currentPage: number,
    itemCnt: string,
    totalPage: number,
    contents: ProductInfo[],
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
    setItemCnt: React.Dispatch<React.SetStateAction<string>>,
    // setContents: React.Dispatch<React.SetStateAction<ProductInfo[]>>,
    // setTotalPage: React.Dispatch<React.SetStateAction<number>>,
    fetchProductList: (params: Record<string, string | number | boolean | undefined | null>) => void }) {
    const { status } = useSession()
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const currentLocale = useCurrentLocale()
    const { t } = useTranslation(locale, ['common', 'product', 'order', 'push'])

    const [sortCategory, setSortCategory] = useState('newest_first')
    const [changedState, setChangedState] = useState('default')
    const [categories, setCategories] = useState<ProductCategoryNode[]>([])
    // const [selectedIds, setSelectedIds] = useState<number[]>([])
    const [, setSelectedIds] = useState<number[]>([])

    const [openStockUpdate, setOpenStockUpdate] = useState(false)
    const [openCategory, setOpenCategory] = useState(false)
    const [openOptionSettings, setOpenOptionSettings] = useState(false)
    const [openViewModal, setOpenViewModal] = useState(false)
    const [openExcelDown, setOpenExcelDown] = useState(false)

    const { getCategories } = useCategory()

    const handleSelectAll = (checked: boolean) => {
        if(checked) {
            const allIds = contents.map((product) => product.idx)
            setSelectedIds(allIds)
        } else {
            setSelectedIds([])
        }
    }

    const handleCheckboxChange = (id: number) => {
        setSelectedIds((prev) => {
            if(prev.includes(id)) {
                return prev.filter((itemId) => itemId !== id)
            } else {
                return [...prev, id]
            }
        })
    }

    const fetchCategoriesRecursively = async (upcate: string = ''): Promise<ProductCategoryNode[]> => {
        try {
            const { data, error } = await getCategories({ upcate })

            if (error) {
                console.error(`Failed to fetch categories for upcate: ${upcate}`, error)
                return []
            }

            if (data && data.length > 0) {
                const categoriesWithChildren: ProductCategoryNode[] = []
                for (const category of data) {
                    // 자신과 자식 노드를 재귀적으로 가져옴
                    const children = await fetchCategoriesRecursively(category.catename)
                    categoriesWithChildren.push({
                        ...category,
                        children: children.length > 0 ? children : undefined, // 자식이 없으면 children 속성 제거 또는 빈 배열로 설정
                    })
                }
                return categoriesWithChildren
            } else {
                return [] // 해당 upcate에 자식이 없으면 빈 배열 반환
            }

        } catch (error) {
            console.error(`Failed to fetch categories recursively for upcate: ${upcate}`, error)
            return []
        }
    }

    useEffect(() => {
        if(status === 'authenticated') {
            const fetchProducts = async () => {
                const params: Record<string, string | number | boolean | undefined | null> = {}
                params.page = currentPage
                params.size = Number(itemCnt)
    
                fetchProductList(params)
            }

            const loadCategories = async () => {
                const allCategories = await fetchCategoriesRecursively()
                setCategories(allCategories)
            }

            loadCategories()
            fetchProducts()
        }
    }, [status])

    useEffect(() => {
        const fetchProducts = async () => {
            const params: Record<string, string | number | boolean | undefined | null> = {}
            params.page = currentPage
            params.size = Number(itemCnt)

            fetchProductList(params)
        }
        
        if(status === 'authenticated') {
            fetchProducts()
        }
    }, [itemCnt, sortCategory, currentPage])

    const handleDuplicate = () => {
        const confirmed = window.confirm('해당 상품을 복제하시겠습니까?')

        if(confirmed) {
            console.log('상품 복제')
        } else {
            console.log('상품 복제 취소')
        }
    }

    const handleDelete = () => {
        const confirmed = window.confirm('해당 상품을 삭제하시겠습니까?')

        if(confirmed) {
            console.log('상품 복제')
        } else {
            console.log('상품 복제 취소')
        }
    }

    const findCategoryPathByCode = (
        nodes: ProductCategoryNode[], 
        targetCode: string, 
        currentPath: string[] = []
    ): string[] | null => {
        for (const node of nodes) {
            const newPath = [...currentPath, node.catename];
            
            if (node.catecode === targetCode) {
                return newPath;
            }
            
            if (node.children) {
                const foundPath = findCategoryPathByCode(node.children, targetCode, newPath);
                if (foundPath) return foundPath;
            }
        }
        return null;
    }

    const getCategoryPaths = (categories: string[], categoryTree: ProductCategoryNode[]): string[] => {
        return categories.map(catecode => {
            const path = findCategoryPathByCode(categoryTree, catecode)
            return path ? path.join(' > ') : catecode; // 경로를 찾지 못하면 원래 catecode 반환
        })
    }

    const getRegDate = (date: string) => {
        const regDate = new Date(date)
        return format(regDate, 'yyyy-MM-dd')
    }

    return (
        <div className="p-6 shadow-sm">
            {/* ------------------- 상품 목록 테이블 ------------------- */}
            <div>
                <div className="mb-4 justify-between flex items-center">
                    <div className="text-[#5E5955] font-bold text-base">
                        {t('product:list')} ({t('product:total')} <span className="text-blue-500">{contents.length}</span> {t('product:items')})
                    </div>
                    <div className="flex gap-2">
                        <Select value={sortCategory} onValueChange={setSortCategory}>
                            <SelectTrigger className="w-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="newest_first">{t('product:newest_first')}</SelectItem>
                                <SelectItem value="by_category">{t('product:by_category')}</SelectItem>
                                <SelectItem value="by_recommendation">{t('product:by_recommendation')}</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select value={itemCnt} onValueChange={setItemCnt}>
                            <SelectTrigger className="w-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="50">50</SelectItem>
                                <SelectItem value="100">100</SelectItem>
                                <SelectItem value="500">500</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button className="border" onClick={() => setOpenExcelDown((prev) => !prev)}>{t('excel_down')}</Button>
                    </div>
                </div>
                <table className="w-full text-left border-collapse min-w-6xl">
                    <thead className="bg-[#322A2408] border-t h-20">
                        <tr className="border-b text-[#6F6963]">
                            <th className="p-2 items-center">
                                <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white" onCheckedChange={handleSelectAll} />
                            </th>
                            <th className="p-2 text-center">No</th>
                            <th className="p-2 text-center">{t('product:product_code')}</th>
                            <th className="p-2 text-center">{t('product:category')}</th>
                            <th className="p-2 text-center">{t('product:product_name')}</th>
                            <th className="p-2 text-center">{t('product:price')}</th>
                            <th className="p-2 text-center">{t('product:status')}</th>
                            <th className="p-2 text-center">{t('product:stock')}</th>
                            <th className="p-2 text-center">{t('product:registration_date')}</th>
                            <th className="p-2 text-center">{t('product:manage')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contents.length === 0 ? (
                            <tr>
                                <td colSpan={10} className="h-32 text-center text-gray-500">{t('no_results')}</td>
                            </tr>
                        ) : (
                            contents.map((product) => (
                                <tr key={product.idx} className="border-b h-14 text-[#1A1A1A]">
                                    <td className="p-2 items-center">
                                        <Checkbox id={`product-${product.idx}`} className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white" onCheckedChange={() => handleCheckboxChange(product.idx)} />
                                    </td>
                                    <td className="p-2 text-center cursor-pointer underline" onClick={() => router.push(`${currentLocale}/product/${product.idx}`)}>{product.idx}</td>
                                    <td className="p-2 text-center">{product.code}</td>
                                    <td className="p-2 text-center">
                                        {getCategoryPaths(product.categories, categories).map((category) => (
                                            <div key={category} className="text-center">
                                                {category}
                                            </div>
                                        ))}
                                    </td>
                                    <td className="p-2 text-center">
                                        <div className="flex items-start gap-3">
                                            <Image src={`/${product.images[0]}`} alt="이미지" width={48} height={48} className="w-12 h-12 bg-gray-100 border border-gray-300 flex items-center justify-center text-xs"/>
    
                                            <div>
                                                <div className="font-semibold text-left">{product.name}</div>
                                                <div className="flex items-center gap-1 text-[#C0BCB6] text-xs mt-1">
                                                    <span className="text-lg leading-none">•</span>
                                                    <span>쇼핑백</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-2 text-center">{product.sprice}</td>
                                    <td className="p-2 text-center min-w-20">판매 증</td>
                                    <td className="p-2 text-center">2,345</td>
                                    <td className="p-2 text-center">{getRegDate(product.regidate)}</td>
                                    <td className="p-2 flex gap-1 flex-wrap items-center justify-center text-[#5E5955]">
                                        <Button className="border rounded px-2" onClick={() => setOpenViewModal((prev) => !prev)}>{t('product:view')}</Button>
                                        <Button className="border rounded px-2" onClick={() => setOpenOptionSettings((prev) => !prev)}>{t('product:edit_options')}</Button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* ------------------- 하단 버튼 ------------------- */}
            <div className="flex gap-2 mt-4">
            {/* disabled={selectedIds.length === 0} */}
                <Button variant="outline" onClick={handleDuplicate}>{t('product:duplicate')}</Button>
                <Button variant="outline" onClick={handleDelete}>{t('product:delete')}</Button>
                <Select defaultValue={changedState} onValueChange={setChangedState}>
                    <SelectTrigger className="w-fit">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectItem value="default">{t('product:change_status')}</SelectItem>
                        <SelectItem value="on_sale">{t('product:on_sale')}</SelectItem>
                        <SelectItem value="out_of_stock">{t('product:out_of_stock')}</SelectItem>
                        <SelectItem value="hidden">{t('product:hidden')}</SelectItem>
                    </SelectContent>
                </Select>
                <Button variant="outline" onClick={() => setOpenCategory((prev) => !prev)}>{t('product:change_category')}</Button>
                <Button variant="outline" onClick={() => router.push(`${currentLocale}/product/register`)}>{t('product:change_price')}</Button>
                <Button variant="outline" onClick={() => router.push(`${currentLocale}/product/register`)}>{t('product:edit_sale_period')}</Button>
                <Button variant="outline" onClick={() => setOpenStockUpdate((prev) => !prev)}>{t('product:update_stock')}</Button>
            </div>

            {/* ------------------- 페이지네이션 ------------------- */}
            <Pagination totalPages={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />

            <StockUpdateModal open={openStockUpdate} setOpen={setOpenStockUpdate} t={t} />
            <CateogrySettingsModal open={openCategory} setOpen={setOpenCategory} t={t} />
            <OptionEditModal open={openOptionSettings} setOpen={setOpenOptionSettings} t={t} />
            <SearchModal open={openViewModal} setOpen={setOpenViewModal} t={t} />
            <ExcelDownloadModal open={openExcelDown} setOpen={setOpenExcelDown} t={t} />
        </div>
    )
}