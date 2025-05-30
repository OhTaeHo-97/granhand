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

export default function CancelList({ cancelState, t }: { cancelState: string, t: (key: string) => string }) {
    const { status } = useSession()
    const [openOrderDetail, setOpenOrderDetail] = useState(false)
    const [openExcelDown, setOpenExcelDown] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [itemCnt, setItemCnt] = useState('50')
    const [orders, setOrders] = useState<Order[]>([])
    const { getOrders } = useOrder()

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
                        <Button className="border" onClick={() => setOpenExcelDown((prev) => !prev)}>엑셀 다운로드</Button>
                    </div>
                </div>
                <CancelListTable cancelState={cancelState} t={t} />
                {/* <table className="w-full text-left border-collapse min-w-6xl border">
                    <thead className="bg-[#322A2408] border-t h-20">
                        <tr className="border-b text-[#6F6963]">
                            <th className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
                            <th className="p-2 items-center border"></th>
                            <th className="p-2 text-center border">{t('order:order_number')}</th>
                            <th className="p-2 text-center border">{t('order:cancel_request_date')}</th>
                            <th className="p-2 text-center border">{t('order:order_status')}</th>
                            <th className="p-2 text-center border">{t('order:cancel_reason')}</th>
                            <th className="p-2 text-center border">{t('order:cancel_complete_date')}</th>
                            <th className="p-2 text-center border">{t('order:payment_method2')}</th>
                            <th className="p-2 text-center border">{t('order:cancel_amount')}</th>
                            <th className="p-2 text-center border">{t('order:buyer')}</th>
                            <th className="p-2 text-center border">{t('order:ordered_items')}</th>
                            <th className="p-2 text-center border">{t('order:quantity')}</th>
                            <th className="p-2 text-center border">{t('order:memo')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                            <>
                                <tr key={i} className="border-b h-14 text-[#1A1A1A]">
                                    <td className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                                    <td className="p-2 text-center border"><Smartphone /></td>
                                    <td className="p-2 text-center border underline">2024021012345678</td>
                                    <td className="p-2 text-center border">2024-02-10 16:15:35</td>
                                    <td className="p-2 text-center border text-[#FF3E24]">취소 요청</td>
                                    <td className="p-2 text-center border">재주문</td>
                                    <td className="p-2 text-center border"></td>
                                    <td className="p-2 text-center border">무통장 입금</td>
                                    <td className="p-2 text-center border">70,000</td>
                                    <td className="p-2 border">
                                        <div className="font-semibold text-black">홍길동 / 010-1234-5678</div>
                                        <div className="text-gray-400 text-xs">honghong@gmail.com</div>
                                    </td>
                                    <td className="p-2 border">Roland Multi Perfume</td>
                                    <td className="p-2 text-center border">2</td>
                                    <td className="p-2 flex flex-col items-center justify-center">
                                        <Button className="border rounded px-2">{t('order:memo')}</Button>
                                    </td>
                                </tr>

                                <tr className="border-b h-14 text-[#1A1A1A]">
                                    <td className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                                    <td rowSpan={2} className="p-2 text-center border"><Monitor /></td>
                                    <td rowSpan={2} className="p-2 text-center border">2024021012345678</td>
                                    <td rowSpan={2} className="p-2 text-center border">2024-02-10 16:15:35</td>
                                    <td className="p-2 text-center border text-[#FF3E24]">취소 요청</td>
                                    <td rowSpan={2} className="p-2 text-center border">단순 변심</td>
                                    <td rowSpan={2} className="p-2 text-center border"></td>
                                    <td rowSpan={2} className="p-2 text-center border">신용카드</td>
                                    <td rowSpan={2} className="p-2 text-center border">53,000</td>
                                    <td rowSpan={2} className="p-2 border">
                                        <div className="font-semibold text-black">전재준 / 010-1234-5678</div>
                                        <div className="text-gray-400 text-xs">honghong@gmail.com</div>
                                    </td>
                                    <td className="p-2 border">Roland Multi Perfume</td>
                                    <td className="p-2 text-center border">2</td>
                                    <td rowSpan={2} className="p-2 flex flex-col items-center justify-center">
                                        <Button className="border rounded px-2">{t('order:memo')}</Button>
                                    </td>
                                </tr>
                                <tr className="border-b h-14 text-[#1A1A1A]">
                                    <td className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                                    <td className="p-2 text-center border text-[#FF3E24]">취소 요청</td>
                                    <td className="p-2 border">Marine Orchid Sachet</td>
                                    <td className="p-2 text-center border">1</td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table> */}
            </div>
            <Pagination totalPages={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <OrderDetailModal open={openOrderDetail} setOpen={setOpenOrderDetail} />
            <ExcelDownloadModal open={openExcelDown} setOpen={setOpenExcelDown} t={t} />
        </div>
    )
}