import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Monitor, Smartphone } from "lucide-react";
import CancelStateBtn from "./cancel-state-btn";
import AdminNotesModal from "../../components/modal/admin-notes-modal";
import { useState } from "react";
import OrderDetailModal from "./modal/order-detail-modal";
import { Order } from "@/hooks/use-order";
import { CheckedOrder } from "../../components/order-list-table";
import { TFunction } from "i18next";

export default function CancelListTable({ cancelState, orders, t }: { cancelState: string, orders: Order[], t: TFunction }) {
    const [openOrderDetail, setOpenOrderDetail] = useState(false)
    const [openAdminNotes, setOpenAdminNotes] = useState(false)
    const [selectedIds, setSelectedIds] = useState<CheckedOrder[]>([])

    const handleSelectAll = (checked: boolean) => {
        if(checked) {
            const allItems: CheckedOrder[] = orders.flatMap(order => 
                order.products.map(product => ({
                    order_id: order.idx,
                    product_id: product.product_idx
                }))
            );
            setSelectedIds(allItems)
        } else {
            setSelectedIds([])
        }
    }

    const handleCheckboxChange = (orderId: number, productId: number, checked: boolean) => {
        if (checked) {
            setSelectedIds(prev => [...prev, { order_id: orderId, product_id: productId }])
        } else {
            setSelectedIds(prev => 
                prev.filter(item => 
                    !(item.order_id === orderId && item.product_id === productId)
                )
            )
        }
    }

    const isItemChecked = (orderId: number, productId: number) => {
        return selectedIds.some(
            item => item.order_id === orderId && item.product_id === productId
        )
    }

    return (
        <div>
            <CancelStateBtn cancelState={cancelState} t={t} />
            <table className="w-full text-left border-collapse min-w-6xl border">
                <thead className="bg-[#322A2408] border-t h-20">
                    <tr className="border-b text-[#6F6963]">
                        <th className="p-2 items-center border">
                            <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white" onCheckedChange={handleSelectAll} />
                        </th>
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
                    { orders.length === 0 ? (
                        <tr>
                            <td colSpan={11} className="h-32 text-center text-gray-500">{t('no_results')}</td>
                        </tr>
                    ) : (
                        orders.map((order) => (
                            // <tr key={i} className="border-b h-14 text-[#1A1A1A] hover:bg-[#322A2408]" onClick={() => setOpenOrderDetail((prev) => !prev)}>
                            //     <td className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white" onClick={(e) => e.stopPropagation()} /></td>
                            //     <td className="p-2 text-center border"><Smartphone /></td>
                            //     <td className="p-2 text-center border underline">2024021012345678</td>
                            //     <td className="p-2 text-center border">2024-02-10 16:15:35</td>
                            //     <td className="p-2 text-center border text-[#FF3E24]">취소 요청</td>
                            //     <td className="p-2 text-center border">재주문</td>
                            //     <td className="p-2 text-center border"></td>
                            //     <td className="p-2 text-center border">무통장 입금</td>
                            //     <td className="p-2 text-center border">70,000</td>
                            //     <td className="p-2 border">
                            //         <div className="font-semibold text-black">홍길동 / 010-1234-5678</div>
                            //         <div className="text-gray-400 text-xs">honghong@gmail.com</div>
                            //     </td>
                            //     <td className="p-2 border">Roland Multi Perfume</td>
                            //     <td className="p-2 text-center border">2</td>
                            //     <td className="p-2">
                            //         <Button className="border rounded px-2" onClick={(e) => {
                            //             e.stopPropagation()
                            //             setOpenAdminNotes((prev) => !prev)
                            //         }}>{t('order:memo')}</Button>
                            //     </td>
                            // </tr>

                            <>
                                <tr key={`${order.idx}-${order.products[0].product_idx}`} className="border-b h-14 text-[#1A1A1A]">
                                    <td className="p-2 items-center border">
                                        <Checkbox
                                            id={`${order.idx}-${order.products[0].product_idx}`}
                                            className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                                            checked={isItemChecked(order.idx, order.products[0].product_idx)}
                                            onCheckedChange={(checked) => handleCheckboxChange(order.idx, order.products[0].product_idx, checked === true)} />
                                    </td>
                                    <td rowSpan={order.products.length} className="p-2 text-center border"><Monitor /></td>
                                    <td rowSpan={order.products.length} className="p-2 text-center border">2024021012345678</td>
                                    <td rowSpan={order.products.length} className="p-2 text-center border">2024-02-10 16:15:35</td>
                                    <td className="p-2 text-center border text-[#FF3E24]">취소 요청</td>
                                    <td rowSpan={order.products.length} className="p-2 text-center border">단순 변심</td>
                                    <td rowSpan={order.products.length} className="p-2 text-center border"></td>
                                    <td rowSpan={order.products.length} className="p-2 text-center border">신용카드</td>
                                    <td rowSpan={order.products.length} className="p-2 text-center border">53,000</td>
                                    <td rowSpan={order.products.length} className="p-2 border">
                                        <div className="font-semibold text-black">전재준 / 010-1234-5678</div>
                                        <div className="text-gray-400 text-xs">honghong@gmail.com</div>
                                    </td>
                                    <td className="p-2 border">Roland Multi Perfume</td>
                                    <td className="p-2 text-center border">2</td>
                                    <td rowSpan={order.products.length} className="p-2">
                                        <Button className="border rounded px-2" onClick={() => setOpenAdminNotes((prev) => !prev)}>{t('order:memo')}</Button>
                                    </td>
                                </tr>
                                {Array.from({ length: order.products.length - 1 }, (_, i) => (
                                    <tr key={`${order.idx}-${order.products[i + 1].product_idx}`} className="border-b h-14 text-[#1A1A1A]">
                                        <td className="p-2 items-center border">
                                            <Checkbox
                                                id={`${order.idx}-${order.products[i + 1].product_idx}`}
                                                className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                                                checked={isItemChecked(order.idx, order.products[i + 1].product_idx)}
                                                onCheckedChange={(checked) => handleCheckboxChange(order.idx, order.products[i + 1].product_idx, checked === true)} />
                                        </td>
                                        <td className="p-2 text-center border text-[#FF3E24]">취소 요청</td>
                                        <td className="p-2 border">Marine Orchid Sachet</td>
                                        <td className="p-2 text-center border">1</td>
                                    </tr>
                                ))}
                            </>
                        ))
                    ) }
                    {Array.from({ length: 12 }).map((_, i) => (
                        <>
                            <tr key={i} className="border-b h-14 text-[#1A1A1A] hover:bg-[#322A2408]" onClick={() => setOpenOrderDetail((prev) => !prev)}>
                                <td className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white" onClick={(e) => e.stopPropagation()} /></td>
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
                                <td className="p-2">
                                    <Button className="border rounded px-2" onClick={(e) => {
                                        e.stopPropagation()
                                        setOpenAdminNotes((prev) => !prev)
                                    }}>{t('order:memo')}</Button>
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
                                <td rowSpan={2} className="p-2">
                                    <Button className="border rounded px-2" onClick={() => setOpenAdminNotes((prev) => !prev)}>{t('order:memo')}</Button>
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
            </table>
            <AdminNotesModal open={openAdminNotes} setOpen={setOpenAdminNotes} t={t} />
            <OrderDetailModal open={openOrderDetail} setOpen={setOpenOrderDetail} />
        </div>
    )
}