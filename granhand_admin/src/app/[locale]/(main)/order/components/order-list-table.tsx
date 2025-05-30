'use client'

import { Button } from "@/components/ui/button";
import OrderStateBtn from "./order-state-btn";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import SendSmsModal from "./modal/send-sms-modal";
import EditAddressModal from "./modal/edit-address-modal";
import AdminNotesModal from "./modal/admin-notes-modal";
import PaymentDetailModal from "./modal/payment-details-modal";
import EditEngravingModal from "./modal/edit-engraving-modal";
import { Checkbox } from "@/components/ui/checkbox";
import { Monitor } from "lucide-react";
import { Order } from "@/hooks/use-order";
import { format } from "date-fns";

export default function OrderListTable({ orderState, category, orders, setOrders, t }: { orderState?: string, category: string, orders: Order[], setOrders: React.Dispatch<React.SetStateAction<Order[]>>, t: (key: string) => string }) {
    const [openEditAddress, setOpenEditAddress] = useState(false)
    const [openSendSms, setOpenSendSms] = useState(false)
    const [openAdminNotes, setOpenAdminNotes] = useState(false)
    const [openPaymentDetail, setOpenPaymentDetail] = useState(false)
    const [openEditEngraving, setOpenEditEngraving] = useState(false)

    const getOrderDate = (date: string) => {
        const orderDate = new Date(date)
        return format(orderDate, 'yyyy-MM-dd hh:mm:ss')
    }
    
    const getShipInfo = (order: Order, idx: number) => {
        if(order.products[idx].godate === '') {
            return <>-</>
        }
        if(order.products[idx].gonumber === '') {
            return (
                <>
                    CJ 대한통운<br/>
                    <span className="underline">{order.products[idx].gonumber}</span>
                </>
            )
        }
        return(
            <>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={t('order:select_courier')} />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectItem value="대한">CJ 대한통운</SelectItem>
                        <SelectItem value="한진">한진택배</SelectItem>
                    </SelectContent>
                </Select>
                <Input placeholder={t('order:track_number')} className="w-full" />
            </>
        )
    }

    const getProductInfo = (order: Order, idx: number) => {
        return (
            <div className="space-y-1 text-sm">
                <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <span>{order.products[idx].product_info.code}</span>
                </div>
                <div className="flex items-center gap-1 font-semibold text-black">{order.products[idx].product_info.name}</div>
                <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <span>각인 여부 : Y</span>
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <span>문구: GRANHAND</span>
                </div>
            </div>
        )
    }

    return (
        <div>
            <OrderStateBtn orderState={orderState} setOpenEditEngraving={setOpenEditEngraving} t={t} />
            <table className="w-full text-left border-collapse min-w-6xl border">
                <thead className="bg-[#322A2408] border-t h-20">
                    <tr className="border-b text-[#6F6963]">
                        <th className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
                        <th className="p-2 items-center border"></th>
                        <th className="p-2 text-center border">{t('order:order_time')}</th>
                        <th className="p-2 text-center border">{t('order:order_number')}</th>
                        <th className="p-2 text-center border">{t('order:buyer')}</th>
                        <th className="p-2 text-center border">{t('order:ordered_items')}</th>
                        <th className="p-2 text-center border">{t('order:quantity')}</th>
                        <th className="p-2 text-center border">{t('order:order_status')}</th>
                        <th className="p-2 text-center border">{t('order:track_info')}</th>
                        <th className="p-2 text-center border">{t('order:ship_info')}</th>
                        <th className="p-2 text-center border">{t('order:payment_info')}</th>
                    </tr>
                </thead>
                <tbody>
                    { orders.length === 0 ? (
                        <tr>
                            <td colSpan={11} className="h-32 text-center text-gray-500">결과가 없습니다.</td>
                        </tr>
                    ) : (
                        orders.map((order) => (
                            <>
                                <tr key={order.idx} className="border-b h-36 text-[#1A1A1A]">
                                    <td className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                                    <td rowSpan={order.products.length} className="p-2 flex justify-center items-center h-36"><Monitor /></td>
                                    <td rowSpan={order.products.length} className="p-2 text-center border">{getOrderDate(order.odate)}</td>
                                    <td rowSpan={order.products.length} className="p-2 text-center border">{order.orderno}</td>
                                    <td rowSpan={order.products.length} className="p-2 border">
                                        <div className="flex items-start gap-3">
                                            {/* 텍스트 영역 */}
                                            <div>
                                                <div className="font-semibold text-black">{order.name} / {order.phone}</div>
                                                <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
                                                    <span>{order.email}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-2 border">{getProductInfo(order, 0)}</td>
                                    <td rowSpan={order.products.length} className="p-2 text-center bodrer">2</td>
                                    <td rowSpan={order.products.length} className="p-2 text-center border">결제 완료</td>
                                    <td className="p-2 text-center border">{getShipInfo(order, 0)}
                                    </td>
                                    <td rowSpan={order.products.length} className="p-2 border">
                                        <div className="flex items-center w-full h-full">
                                            <div className="flex gap-9 items-center justify-between w-full">
                                                {/* 왼쪽 정보 */}
                                                <div className="space-y-1 text-sm">
                                                    <div className="font-semibold text-black">
                                                        {order.name} / <span className="font-semibold">{order.phone}</span>
                                                    </div>
                                                    <div className="text-gray-400">
                                                        부산 부산진구 서전로 8<br/>
                                                        위워크 7층<br/>
                                                        우) 12345
                                                    </div>
                                                    <div className="text-blue-600 mt-1">
                                                        부재 시 문 앞에 놓아주세요.
                                                    </div>
                                                </div>
                                                {/* 오른쪽 버튼들 */}
                                                <div className="flex flex-col items-center gap-2 shrink-0">
                                                    {category === 'order_management' && (
                                                        <Button variant="outline" size="sm" onClick={() => setOpenSendSms((prev) => !prev)}>{t('order:send_noti')}</Button>
                                                    )}
                                                    <Button variant="outline" size="sm" onClick={() => setOpenEditAddress((prev) => !prev)}>{t('order:edit_address')}</Button>
                                                    <Button variant="outline" size="sm" onClick={() => setOpenAdminNotes((prev) => !prev)}>{t('order:admin_note')}</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td rowSpan={order.products.length} className="p-2">
                                        <div className="flex flex-col items-center justify-center gap-2">
                                            <Button className="border rounded px-2" onClick={() => setOpenPaymentDetail((prev) => !prev)}>{t('order:payment_details')}</Button>
                                            <Button className="border rounded px-2">{t('order:order_sheet')}</Button>
                                        </div>
                                    </td>
                                </tr>

                                {Array.from({ length: order.products.length - 1 }, (_, i) => (
                                    <tr key={order.idx} className="border-b h-14 text-[#1A1A1A]">
                                        <td className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                                        <td className="p-2 border">{getProductInfo(order, i + 1)}</td>
                                        <td className="p-2 text-center border">{getShipInfo(order, i + 1)}</td>
                                    </tr>
                                ))}
                            </>
                        ))
                    ) }
                    {/* {Array.from({ length: 12 }).map((_, i) => (
                    <tr key={i} className="border-b h-14 text-[#1A1A1A]">
                        <td className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                        <td className="p-2 text-center border"><Monitor /></td>
                        <td className="p-2 text-center border">2024-02-10 16:15:35</td>
                        <td className="p-2 text-center border">2024021012345678</td>
                        <td className="p-2 border">
                            <div className="flex items-start gap-3">
                                <div>
                                    <div className="font-semibold text-black">홍길동 / 010-1234-5678</div>
                                    <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
                                        <span>honghong@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="p-2 border">
                            <div className="space-y-1 text-sm">
                                <div className="flex items-center gap-1 text-gray-400 text-xs">
                                    <span>24021099987651</span>
                                </div>
                                <div className="flex items-center gap-1 font-semibold text-black">Roland Multi Perfume 100ml</div>
                                <div className="flex items-center gap-1 text-gray-400 text-xs">
                                    <span>각인 여부 : Y</span>
                                </div>
                                <div className="flex items-center gap-1 text-gray-400 text-xs">
                                    <span>문구: GRANHAND</span>
                                </div>
                            </div>
                        </td>
                        <td className="p-2 text-center bodrer">2</td>
                        <td className="p-2 text-center border">결제 완료</td>
                        <td className="p-2 text-center border">
                            {category === 'all_orders' && (
                                <>
                                    CJ 대한통운<br/>
                                    <span className="underline">56780001234</span>
                                </>
                            )}
                            {
                                category === 'order_management' && (
                                    <>
                                        <Select>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder={t('order:select_courier')} />
                                            </SelectTrigger>
                                            <SelectContent className="bg-white">
                                                <SelectItem value="대한">CJ 대한통운</SelectItem>
                                                <SelectItem value="한진">한진택배</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Input placeholder={t('order:track_number')} className="w-full" />
                                    </>
                                )
                            }
                        </td>
                        <td className="p-2 border">
                            <div className="flex items-center justify-center w-full h-full">
                                <div className="flex gap-9 items-center justify-center">

                                    <div className="space-y-1 text-sm">
                                        <div className="font-semibold text-black">
                                            홍길순 / <span className="font-semibold">010-0000-0000</span>
                                        </div>
                                        <div className="text-gray-400">
                                            부산 부산진구 서전로 8<br/>
                                            위워크 7층<br/>
                                            우) 12345
                                        </div>
                                        <div className="text-blue-600 mt-1">
                                            부재 시 문 앞에 놓아주세요.
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 shrink-0">
                                        {category === 'order_management' && (
                                            <Button variant="outline" size="sm" onClick={() => setOpenSendSms((prev) => !prev)}>{t('order:send_noti')}</Button>
                                        )}
                                        <Button variant="outline" size="sm" onClick={() => setOpenEditAddress((prev) => !prev)}>{t('order:edit_address')}</Button>
                                        <Button variant="outline" size="sm" onClick={() => setOpenAdminNotes((prev) => !prev)}>{t('order:admin_note')}</Button>
                                    </div>

                                </div>
                            </div>
                        </td>
                        <td className="p-2">
                            <div className="flex flex-col items-center justify-center gap-2">
                                <Button className="border rounded px-2" onClick={() => setOpenPaymentDetail((prev) => !prev)}>{t('order:payment_details')}</Button>
                                <Button className="border rounded px-2">{t('order:order_sheet')}</Button>
                            </div>
                        </td>
                    </tr>
                    ))} */}
                </tbody>
            </table>

            <SendSmsModal open={openSendSms} setOpen={setOpenSendSms} />
            <EditAddressModal open={openEditAddress} setOpen={setOpenEditAddress} />
            <AdminNotesModal open={openAdminNotes} setOpen={setOpenAdminNotes} />
            <PaymentDetailModal open={openPaymentDetail} setOpen={setOpenPaymentDetail} />
            <EditEngravingModal open={openEditEngraving} setOpen={setOpenEditEngraving} />
        </div>
    )
}