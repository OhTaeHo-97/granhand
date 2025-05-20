'use client'

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { Monitor, Upload } from "lucide-react";
import { useTranslation } from "../../../../../../utils/localization/client";
import EditAddressModal from "./modal/edit-address-modal";
import { useState } from "react";
import SendSmsModal from "./modal/send-sms-modal";
import AdminNotesModal from "./modal/admin-notes-modal";
import PaymentDetailModal from "./modal/payment-details-modal";

export default function OrderList({ category }: { category: string }) {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'product', 'order', 'push'])
    const [openEditAddress, setOpenEditAddress] = useState(false)
    const [openSendSms, setOpenSendSms] = useState(false)
    const [openAdminNotes, setOpenAdminNotes] = useState(false)
    const [openPaymentDetail, setOpenPaymentDetail] = useState(false)

    return (
        <div className="p-6 shadow-sm">
            <div>
                <div className="mb-4 justify-between flex items-center">
                    <div className="text-[#5E5955] font-bold text-base">
                        {t('order:list')} ({t('product:total')} <span className="text-blue-500 font-bold">303 {t('product:items')}</span>)
                    </div>
                    <div className="flex gap-2">
                        <Select defaultValue="50">
                            <SelectTrigger className="w-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="50">50</SelectItem>
                                <SelectItem value="100">100</SelectItem>
                                <SelectItem value="500">500</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button className="border">엑셀 다운로드</Button>
                        {category === 'order_management' && (
                            <>
                                <Button className="border"><Upload />{t('order:bulk_order')}</Button>
                            <Button className="border">{t('order:admin_order')}</Button>
                            <Button className="bg-[#322A24] text-white">{t('order:create_order')}</Button>
                            </>
                        )}
                    </div>
                </div>
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
                        {Array.from({ length: 12 }).map((_, i) => (
                        <tr key={i} className="border-b h-14 text-[#1A1A1A]">
                            <td className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                            <td className="p-2 text-center border"><Monitor /></td>
                            <td className="p-2 text-center border">2024-02-10 16:15:35</td>
                            <td className="p-2 text-center border">2024021012345678</td>
                            <td className="p-2 border">
                                <div className="flex items-start gap-3">
                                    {/* 텍스트 영역 */}
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

                                        {/* 왼쪽 정보 */}
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
                            <td className="p-2">
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <Button className="border rounded px-2" onClick={() => setOpenPaymentDetail((prev) => !prev)}>{t('order:payment_details')}</Button>
                                    <Button className="border rounded px-2">{t('order:order_sheet')}</Button>
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <SendSmsModal open={openSendSms} setOpen={setOpenSendSms} />
            <EditAddressModal open={openEditAddress} setOpen={setOpenEditAddress} />
            <AdminNotesModal open={openAdminNotes} setOpen={setOpenAdminNotes} />
            <PaymentDetailModal open={openPaymentDetail} setOpen={setOpenPaymentDetail} />
        </div>
    )
}