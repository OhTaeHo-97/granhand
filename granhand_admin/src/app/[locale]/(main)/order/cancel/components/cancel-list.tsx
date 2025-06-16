'use client'

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import OrderDetailModal from "./modal/order-detail-modal";
import CancelListTable from "./cancel-list-table";
import ExcelDownloadModal from "../../components/modal/excel-download-modal";
import Pagination from "@/components/pagination";
import { Order, useOrder } from "@/hooks/use-order";
import { useSession } from "next-auth/react";
import { TFunction } from "i18next";

export default function CancelList({ cancelState, t }: { cancelState: string, t: TFunction }) {
    const { status } = useSession()
    const [openOrderDetail, setOpenOrderDetail] = useState(false)
    const [openExcelDown, setOpenExcelDown] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [itemCnt, setItemCnt] = useState('50')
    const [orders, setOrders] = useState<Order[]>([])
    const { getOrders } = useOrder()

    const fetchOrders = async () => {
        const params: Record<string, number | string> = {}
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
                setTotalPage(data.datas.length)
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
    }, [status, currentPage, itemCnt])

    return (
        <div className="p-6 shadow-sm">
            <div>
                <div className="mb-4 justify-between flex items-center">
                    <div className="text-[#5E5955] font-bold text-base">
                        {t('order:list')} ({t('product:total')} <span className="text-blue-500 font-bold">303 {t('product:items')}</span>)
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
                        <Button className="border" onClick={() => setOpenExcelDown((prev) => !prev)}>{t('excel_down')}</Button>
                    </div>
                </div>
                <CancelListTable cancelState={cancelState} orders={orders} t={t} />
            </div>
            <Pagination totalPages={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <OrderDetailModal open={openOrderDetail} setOpen={setOpenOrderDetail} />
            <ExcelDownloadModal isOrder={true} open={openExcelDown} setOpen={setOpenExcelDown} t={t} />
        </div>
    )
}