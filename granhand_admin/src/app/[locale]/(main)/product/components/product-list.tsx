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
import api from "@/utils/api";
import { SelectedCategory } from "./category-select";

export default function ProductList({ selectedCategories}: { selectedCategories: SelectedCategory[] }) {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const currentLocale = useCurrentLocale()
    const { t } = useTranslation(locale, 'product')
    const [openStockUpdate, setOpenStockUpdate] = useState(false)
    const [openCategory, setOpenCategory] = useState(false)
    const [openOptionSettings, setOpenOptionSettings] = useState(false)
    const [openViewModal, setOpenViewModal] = useState(false)
    const [sortCategory, setSortCategory] = useState('newest_first')
    const [itemCnt, setItemCnt] = useState('50')

    const [currentPage, setCurrentPage] = useState(1)

    const { data: session, status } = useSession()

    const fetchData = async (page: number, size: number) => {
        if(status !== 'authenticated' || !session?.token) {
            console.log('Cannot fetch data - no valid session')
            return
        }

        try {
            const params: Record<string, any> = {
                page,
                size
            }
            if(selectedCategories.length !== 0) params.category = selectedCategories[0].path
            
            console.log('product list: ', session.token)

            const response = await api.get('/product/list', {
                token: session.token,
                params
            })
            console.log('product list response: ', response)
        } catch (error) {
            console.error('Failed to fetch products:', error)
        }
    }

    useEffect(() => {
        if(status === 'authenticated') {
            fetchData(currentPage, Number(itemCnt))
        }
    }, [status, itemCnt, sortCategory, currentPage])

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

    // useEffect(() => {
    //     const response = await api.get('/product/list', {
    //     })
    // }, [currentPage])

    useEffect(() => {
        router.push(`${currentLocale}/product?sortCategory=${sortCategory}&itemCnt=${itemCnt}`)
    }, [sortCategory, itemCnt])

    // const { data: session } = useSession()

    // const clickPage = async (page: number) => {
    //     const params: Record<string, any> = {
    //         page: currentPage,
    //         size: size
    //     }

    //     if(category) {
    //         params.category = category
    //     }

    //     const response = await api.get('/product/list', {
    //         token: session?.token,
    //         isFormData: false,
    //         params
    //     })
    //     console.log('product list response: ', response)
    //     setCurrentPage(page)
    // }

    return (
        <div className="p-6 shadow-sm">
            {/* ------------------- 상품 목록 테이블 ------------------- */}
            <div>
                <div className="mb-4 justify-between flex items-center">
                    <div className="text-[#5E5955] font-bold text-base">
                        {t('list')} ({t('total')} <span className="text-blue-500">303</span> {t('items')})
                    </div>
                    <div className="flex gap-2">
                        <Select value={sortCategory} onValueChange={setSortCategory}>
                            <SelectTrigger className="w-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="newest_first">{t('newest_first')}</SelectItem>
                                <SelectItem value="by_category">{t('by_category')}</SelectItem>
                                <SelectItem value="by_recommendation">{t('by_recommendation')}</SelectItem>
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
                        <Button className="border ">엑셀 다운로드</Button>
                    </div>
                </div>
                <table className="w-full text-left border-collapse min-w-6xl">
                    <thead className="bg-[#322A2408] border-t h-20">
                        <tr className="border-b text-[#6F6963]">
                            <th className="p-2 items-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
                            <th className="p-2 text-center">No</th>
                            <th className="p-2 text-center">{t('product_code')}</th>
                            <th className="p-2 text-center">{t('category')}</th>
                            <th className="p-2 text-center">{t('product_name')}</th>
                            <th className="p-2 text-center">{t('price')}</th>
                            <th className="p-2 text-center">{t('status')}</th>
                            <th className="p-2 text-center">{t('stock')}</th>
                            <th className="p-2 text-center">{t('registration_date')}</th>
                            <th className="p-2 text-center">{t('manage')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                        <tr key={i} className="border-b h-14 text-[#1A1A1A]">
                            <td className="p-2 items-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                            <td className="p-2 text-center">303</td>
                            <td className="p-2 text-center">000000003</td>
                            <td className="p-2 text-center">그랑핸드 {">"} 퍼퓸 {">"} 멀티퍼퓸</td>
                            <td className="p-2 text-center">
                                <div className="flex items-start gap-3">
                                    {/* 이미지 영역 */}
                                    <Image src="/placeholder.png" alt="하이" width={48} height={48} className="w-12 h-12 bg-gray-100 border border-gray-300 flex items-center justify-center text-xs"/>

                                    {/* 텍스트 영역 */}
                                    <div>
                                        <div className="font-semibold">Roland Multi Perfume</div>
                                        <div className="flex items-center gap-1 text-[#C0BCB6] text-xs mt-1">
                                            <span className="text-lg leading-none">•</span>
                                            <span>쇼핑백</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="p-2 text-center">35,000</td>
                            <td className="p-2 flex gap-1 flex-wrap items-center justify-center">판매 증</td>
                            <td className="p-2 text-center">2,345</td>
                            <td className="p-2 text-center">2023-11-23</td>
                            <td className="p-2 flex gap-1 flex-wrap items-center justify-center text-[#5E5955]">
                                <Button className="border rounded px-2" onClick={() => setOpenViewModal((prev) => !prev)}>{t('view')}</Button>
                                <Button className="border rounded px-2" onClick={() => setOpenOptionSettings((prev) => !prev)}>{t('edit_options')}</Button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ------------------- 하단 버튼 ------------------- */}
            <div className="flex gap-2 mt-4">
                <Button variant="outline" onClick={handleDuplicate}>{t('duplicate')}</Button>
                <Button variant="outline" onClick={handleDelete}>{t('delete')}</Button>
                <Select defaultValue="default">
                    <SelectTrigger className="w-fit">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectItem value="default">{t('change_status')}</SelectItem>
                        <SelectItem value="이메일">이메일</SelectItem>
                        <SelectItem value="전화번호">전화번호</SelectItem>
                    </SelectContent>
                </Select>
                <Button variant="outline" onClick={() => setOpenCategory((prev) => !prev)}>{t('change_category')}</Button>
                <Button variant="outline" onClick={() => router.push(`${currentLocale}/product/register`)}>{t('change_price')}</Button>
                <Button variant="outline" onClick={() => router.push(`${currentLocale}/product/register`)}>{t('edit_sale_period')}</Button>
                <Button variant="outline" onClick={() => setOpenStockUpdate((prev) => !prev)}>{t('update_stock')}</Button>
            </div>

            {/* ------------------- 페이지네이션 ------------------- */}
            <Pagination totalPages={10} currentPage={currentPage} setCurrentPage={setCurrentPage} />

            <StockUpdateModal open={openStockUpdate} setOpen={setOpenStockUpdate} />
            <CateogrySettingsModal open={openCategory} setOpen={setOpenCategory} t={t} />
            <OptionEditModal open={openOptionSettings} setOpen={setOpenOptionSettings} />
            <SearchModal open={openViewModal} setOpen={setOpenViewModal} />
        </div>
    )
}