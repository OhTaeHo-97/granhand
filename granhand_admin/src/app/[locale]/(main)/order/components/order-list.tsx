'use client'

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { Upload } from "lucide-react";
import { useTranslation } from "../../../../../../utils/localization/client";
import { useEffect, useState } from "react";
import BulkOrderModal from "./modal/bulk-order-modal";
import OrderListTable from "./order-list-table";
import ExcelDownloadModal from "./modal/excel-download-modal";
import CreateOrderModal from "./modal/create-order-modal";
import Pagination from "@/components/pagination";
import { useSession } from "next-auth/react";
// import api from "@/utils/api";
import { Order, useOrder } from "@/hooks/use-order";

export default function OrderList({ orderState, category }: { orderState?: string, category: string }) {
    const { status } = useSession()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'product', 'order', 'push'])
    const [openBulkOrder, setOpenBulkOrder] = useState(false)
    const [openExcelDown, setOpenExcelDown] = useState(false)
    const [openCreateOrder, setOpenCreateOrder] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemCnt, setItemCnt] = useState('50')
    const [totalPage, setTotalPage] = useState(0)
    // const { data: session, status } = useSession()
    const { getOrders } = useOrder()
    const [orders, setOrders] = useState<Order[]>([])

    // const fetchOrders = async () => {
    //     if(status !== 'authenticated' || !session?.token) {
    //         console.log('Cannot fetch data - no valid session')
    //         return
    //     }

    //     try {
    //         const response = await api.get('/order', {
    //             token: session.token
    //         })
    //     } catch (error) {
    //         console.error('Failed to fetch orders:', error)
    //     }
    // }

    const fetchOrders = async () => {
        const params: Record<string, any> = {}
        params.page = currentPage
        params.size = itemCnt

        const { data, error } = await getOrders(params)

        if(error) {
            console.error(`Failed to fetch orders for error:`, error)
            alert('주문을 가져오는 데에 실패하였습니다.')
            setOrders([])
            setTotalPage(0)
        } else if(data) {
            if(data.datas) {
                setOrders(data.datas)
                setTotalPage(data.pagination.pages)
            } else {
                setOrders([])
                setTotalPage(0)
            }
        }
    }

    useEffect(() => {
        if(status === 'authenticated') {
            fetchOrders()
        }
    }, [status])

    return (
        <>
            <div className="p-6 shadow-sm">
                <div>
                    <div className="mb-4 justify-between flex items-center">
                        <div className="text-[#5E5955] font-bold text-base">
                            {t('order:list')} ({t('product:total')} <span className="text-[#4C89E4] font-bold">{orders.length} {t('product:items')}</span>)
                        </div>
                        <div className="flex gap-2">
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
                            <Button className="border" onClick={() => setOpenExcelDown((prev) => !prev)}>엑셀 다운로드</Button>
                            {category === 'order_management' && (
                                <>
                                <Button className="border" onClick={() => setOpenBulkOrder((prev) => !prev)}><Upload />{t('order:bulk_order')}</Button>
                                <Button className="border">{t('order:admin_order')}</Button>
                                <Button className="bg-[#322A24] text-white" onClick={() => setOpenCreateOrder((prev) => !prev)}>{t('order:create_order')}</Button>
                                </>
                            )}
                        </div>
                    </div>
                    <OrderListTable orderState={orderState} category={category} orders={orders} setOrders={setOrders} t={t} />
                </div>
                <BulkOrderModal open={openBulkOrder} setOpen={setOpenBulkOrder} />
                <ExcelDownloadModal open={openExcelDown} setOpen={setOpenExcelDown} t={t} />
                <CreateOrderModal open={openCreateOrder} setOpen={setOpenCreateOrder} />
            </div>
            <Pagination totalPages={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
    )
}