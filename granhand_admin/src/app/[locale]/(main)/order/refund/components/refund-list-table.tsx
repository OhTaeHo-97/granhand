import { Checkbox } from "@/components/ui/checkbox";
import RefundStateBtn from "./refund-state-btn";
import { Smartphone } from "lucide-react";
import { useState } from "react";
import ReturnReasonModal from "./modal/return-reason-modal";

export default function RefundListTable({ refundState, t }: { refundState: string, t: (key: string) => string }) {
    const [openRefundReason, setOpenRefundReason] = useState(false)

    return (
        <div>
            <RefundStateBtn refundState={refundState} t={t} />
            <table className="w-full text-left border-collapse min-w-6xl border">
                <thead className="bg-[#322A2408] border-t h-20">
                    <tr className="border-b text-[#6F6963]">
                        <th className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
                        <th className="p-2 items-center border"></th>
                        <th className="p-2 text-center border">{t('order:order_number')}</th>
                        <th className="p-2 text-center border">{t('order:return_request_date')}</th>
                        <th className="p-2 text-center border">{t('order:buyer')}</th>
                        <th className="p-2 text-center border">{t('order:ordered_items')}</th>
                        <th className="p-2 text-center border">{t('order:quantity')}</th>
                        <th className="p-2 text-center border">{t('order:order_status')}</th>
                        <th className="p-2 text-center border">{t('order:return_reason')}</th>
                        <th className="p-2 text-center border">{t('order:return_track_number')}</th>
                        <th className="p-2 text-center border">{t('order:return_pickup_date')}</th>
                        <th className="p-2 text-center border">{t('order:refund_amount')}</th>
                        <th className="p-2 text-center border">{t('order:pickup_address')}</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 12 }).map((_, i) => (
                        <tr key={i} className="border-b h-14 text-[#1A1A1A]">
                            <td className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                            <td className="p-2 text-center border"><Smartphone /></td>
                            <td className="p-2 text-center border underline">2024021012345678</td>
                            <td className="p-2 border">
                                {/* <div className="text-gray-400">교환 요청일</div> */}
                                <div className="font-semibold">2024-02-10 16:15:35</div>
                            </td>
                            <td className="p-2 border">
                                <div className="font-semibold">홍길동 / 010-1234-5678</div>
                                <div className="text-gray-400 text-xs">honghong@gmail.com</div>
                            </td>
                            <td className="p-2 border">
                                <div className="space-y-1 text-sm">
                                    <div className="font-semibold text-black">Roland Multi Perfume 100ml</div>
                                    <div>
                                        <div className="text-gray-400 text-xs">
                                            <span>각인 여부 : Y / 문구: GRANHAND</span>
                                        </div>
                                        <div className="text-gray-400 text-xs">
                                            <span>용량: 100ml</span>
                                        </div>
                                        <div className="text-gray-400 text-xs">
                                            <span>쇼핑백: 구매 안함</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="p-2 text-center border">1</td>
                            <td className="p-2 text-center border text-[#FF3E24]">반품 요청</td>
                            <td className="p-2 text-center border underline">
                                <span className="hover:cursor-pointer" onClick={(e) => {
                                    e.stopPropagation()
                                    setOpenRefundReason((prev) => !prev)
                                }}>오배송</span>
                            </td>
                            <td className="p-2 border"></td>
                            <td className="p-2 text-center border">2024-02-10 16:15:35</td>
                            <td className="p-2 text-center border">35,000원</td>
                            <td className="p-2 border">
                                <div className="space-y-1 text-sm">
                                    <div className="font-semibold text-black">홍길동 / 010-1234-5678</div>
                                    <div className="text-gray-400 text-xs">
                                        부산 부산진구 서전로 8<br/>
                                        위워크 7층<br/>
                                        우) 12345
                                    </div>
                                    <div className="text-blue-600 text-xs">
                                        부재 시 문 앞에 놓아주세요.
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ReturnReasonModal open={openRefundReason} setOpen={setOpenRefundReason} t={t} />
            {/* <AdminNotesModal open={openAdminNotes} setOpen={setOpenAdminNotes} />
            <OrderDetailModal open={openOrderDetail} setOpen={setOpenOrderDetail} /> */}
        </div>
    )
}