import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { t } from "i18next";
import { GiftIcon, Smartphone } from "lucide-react";
import { ChangeEvent, useState } from "react";

interface OrderDetail {
    buyerName: string
    buyerId: string
    buyerPhone: string
    receiverName: string
    receiverPhone: string
    receiverPostal: string
    receiverAddress: string
    receiverDetailAddress: string
    deliveryRequest: string
    orderNumber: string
    orderDate: Date | undefined
    order: OrderInfo
    paymentInfo: PaymentInfo
    memo: string
}

interface OrderInfo {
    idx: number
    orderno: number
    name: string
    email: string
    phone: string
    products: ProductInfo[]
}

interface ProductInfo {
    idx: number
    productNumber: string
    name: string
    option?: string
    isBag: string
    amount: number
    isEngraved: string
    engraveMessage?: string
    orderStatus: string
    paymentAmount: number
}

interface PaymentInfo {
    productAmount: number
    shipFee: number
    couponDiscount: number
    pointAmount: number
    totalAmount: number
    paymentMethod: string
}

const updateOrderDetail = (
    field: keyof OrderDetail,
    value: string | Date | undefined,
    setOrderInfo: React.Dispatch<React.SetStateAction<OrderDetail>>
) => {
    setOrderInfo(prev => ({
        ...prev,
        [field]: value
    }))
}

export default function OrderDetailModal({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
    const [orderInfo, setOrderInfo] = useState<OrderDetail>({
        buyerName: '홍길동',
        buyerId: 'honghong@gmail.com',
        buyerPhone: '01099991111',
        receiverName: '홍길순',
        receiverPhone: '01099991111',
        receiverPostal: '00100',
        receiverAddress: '서울시 종로구 8',
        receiverDetailAddress: '1층 101호',
        deliveryRequest: '벨 누르지 말고 똑똑 2번만 해주세요.',
        orderNumber: '2024021012345678',
        orderDate: new Date(),
        order: {
            idx: 1,
            orderno: 2024021012345678,
            name: '홍길동',
            email: 'honghong@gmail.com',
            phone: '01099991111',
            products: [
                {
                    idx: 1,
                    productNumber: '2024021012345678',
                    name: 'Roland Multi Perfume',
                    option: '100ml',
                    isBag: '구매 안함',
                    amount: 1,
                    isEngraved: 'Y',
                    engraveMessage: 'GRANHAND❤️',
                    orderStatus: '결제 완료',
                    paymentAmount: 35000
                },
                {
                    idx: 2,
                    productNumber: '2024021012345680',
                    name: 'Marine Orchid Sachet',
                    isBag: '추가 구매 (+500원)',
                    amount: 1,
                    isEngraved: 'N',
                    orderStatus: '결제 완료',
                    paymentAmount: 18500
                }
            ]
        },
        paymentInfo: {
            productAmount: 55000,
            shipFee: 0,
            couponDiscount: 5000,
            pointAmount: 5000,
            totalAmount: 45000,
            paymentMethod: '신용카드 결제 (현대카드)'
        },
        memo: ''
    })

    const handleChangeMemo = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value.slice(0, 500)
        handleInputChange('memo', value)
    }

    const handleInputChange = (field: keyof OrderDetail, value: string) => {
        updateOrderDetail(field, value, setOrderInfo)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="bg-white max-w-400 min-w-100 max-h-200 min-h-80 w-full overflow-auto mx-auto">
            <DialogHeader>
                <DialogTitle><span className="font-bold text-2xl text-[#111111]">{t('order:order_details')}</span></DialogTitle>
            </DialogHeader>
            <div className="rounded-md text-sm text-[#111111] space-y-2 p-6 w-full">
                <section>
                    <h2 className="font-bold text-xl">{t('order:buyer_info')}</h2>
                    <div className="rounded-md p-6 space-y-3">
                        <div className="grid grid-cols-[100px_1fr_100px_1fr] h-full m-0">
                            <div className="flex items-center justify-start p-2">
                                <Label>{t('order:buyer_name')}</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center border border-[#E9E6E0] rounded-sm bg-[#322A2408] gap-2 h-10 px-4">
                                    {orderInfo.buyerName}
                                </div>
                            </div>
                            <div className="flex items-center justify-start p-2">
                                <Label>{t('order:id')}</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center border border-[#E9E6E0] rounded-sm bg-[#322A2408] gap-2 h-10 px-4">
                                    {orderInfo.buyerId}
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr_100px_1fr] h-full">
                            <div className="flex items-center justify-start p-2">
                                <Label>{t('order:contact_number')}</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center border border-[#E9E6E0] rounded-sm bg-[#322A2408] gap-2 h-10 px-4">
                                    {orderInfo.buyerPhone}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-10">
                    <h2 className="font-bold text-xl">{t('order:ship_info')}</h2>
                    <div className="rounded-md p-6 space-y-3">
                        <div className="grid grid-cols-[100px_1fr_100px_1fr] h-full m-0">
                            <div className="flex items-center justify-start p-2">
                                <Label>{t('order:recipient_name')}</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-2">
                                    <Input type="text" value={orderInfo.receiverName} onChange={(e) => handleInputChange('receiverName', e.target.value)} className="h-10" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr_100px_1fr] h-full m-0">
                            <div className="flex items-center justify-start p-2">
                                <Label>{t('order:contact_number')}</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-2">
                                    <Input value={orderInfo.buyerPhone} onChange={(e) => handleInputChange('receiverPhone', e.target.value)} className="h-10" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr_100px_1fr] h-full m-0">
                            <div className="flex items-center justify-start p-2">
                                <Label>{t('order:ship_address')}</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-4">
                                    <Input placeholder={t('order:search_postal')} value={orderInfo.receiverPostal} onChange={(e) => handleInputChange('receiverPostal', e.target.value)} className="w-1/2" />
                                    <Button variant="outline" className="p-1">{t('order:edit_address')}</Button>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full m-0">
                            <div className="flex items-center justify-start p-2"></div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-4">
                                    <Input placeholder={t('order:address')} value={orderInfo.receiverAddress} onChange={(e) => handleInputChange('receiverAddress', e.target.value)} className="w-1/2" />
                                    <Input placeholder={t('order:detail_address_placeholder')} value={orderInfo.receiverDetailAddress} onChange={(e) => handleInputChange('receiverDetailAddress' ,e.target.value)} className="w-1/2" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-start p-2">
                                <Label>{t('order:delivery_request')}</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                            <div className="flex items-center gap-4">
                                    <Input placeholder={t('order:enter_delivery_request')} value={orderInfo.deliveryRequest} onChange={(e) => handleInputChange('deliveryRequest', e.target.value)} className="w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-dashed" />

                <section className="mt-10">
                    <div className="flex items-center gap-2">
                        <h2 className="font-bold text-xl">{t('order:order_info')}</h2>
                        <div className="w-5 h-5 rounded-full bg-[#D0505D] flex items-center justify-center">
                            <GiftIcon className="w-3 h-3 text-white" />
                        </div>
                    </div>
                    <div className="rounded-md p-6 space-y-3">
                        <div className="grid grid-cols-[100px_1fr_100px_1fr] h-full m-0">
                            <div className="flex items-center justify-start p-2">
                                <Label>{t('order:order_number')}</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center border border-[#E9E6E0] rounded-sm bg-[#322A2408] gap-2 h-10 px-4">
                                    {orderInfo.orderNumber}
                                </div>
                            </div>
                            <div className="flex items-center justify-start p-2">
                                <Label>{t('order:order_time')}</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center border border-[#E9E6E0] rounded-sm bg-[#322A2408] gap-2 h-10 px-4">
                                    {orderInfo.orderDate && format(orderInfo.orderDate, 'yyyy-MM-dd hh:mm:ss')}
                                    {/* 2024-02-10 16:15:35 */}
                                </div>
                            </div>
                        </div>
                        <section>
                            <div className="flex items-center justify-start p-2">
                                <Label>{t('order:ordered_items')}</Label>
                            </div>
                            <table className="w-full text-left border-collapse min-w-6xl border">
                                <thead className="bg-[#322A2408] border-t h-10">
                                    <tr className="border-b text-[#6F6963]">
                                        <th className="p-2 items-center border"></th>
                                        <th className="p-2 text-center border">{t('order:item_order_number')}</th>
                                        <th className="p-2 text-center border">{t('order:order_item')}</th>
                                        <th className="p-2 text-center border">{t('order:quantity')}</th>
                                        <th className="p-2 text-center border">{t('order:engraving_status')}</th>
                                        <th className="p-2 text-center border">{t('order:engraving_text')}</th>
                                        <th className="p-2 text-center border">{t('order:order_status')}</th>
                                        <th className="p-2 text-center border">{t('order:total_pay')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderInfo.order.products.map((product) => (
                                        <tr key={product.idx} className="border-b h-20 text-[#1A1A1A]">
                                            <td className="p-2 flex items-center justify-center h-20"><Smartphone /></td>
                                            <td className="p-2 text-center border">{product.productNumber}</td>
                                            <td className="p-2 border">
                                                <div className="space-y-1 text-sm">
                                                    <div className="flex items-center gap-1 font-semibold text-black">{product.name}</div>
                                                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                                                        <span>{product.option}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                                                        <span>쇼핑백 : {product.isBag}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-2 text-center border">{product.amount}</td>
                                            <td className="p-2 text-center border">{product.isEngraved}</td>
                                            <td className="p-2 text-center bodrer">{product.engraveMessage}</td>
                                            <td className="p-2 text-center border">{product.orderStatus}</td>
                                            <td className="p-2 text-center border">{product.paymentAmount.toLocaleString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>
                    </div>
                </section>

                <hr className="border-dashed" />

                <section>
                <div className="flex justify-between gap-8 p-8 bg-white">
                    <div className="w-1/3 rounded-md p-6">
                        <h2 className="font-bold text-xl">{t('order:payment_info')}</h2>
                        <div className="rounded-md text-sm text-[#C0BCB6] space-y-2 w-full border mt-4">
                            <div className="rounded-md p-3 py-6 space-y-3">
                                <div className="flex justify-between">
                                    <span>{t('order:product_amount')}</span>
                                    <span className="text-[#6F6963]">{orderInfo.paymentInfo.productAmount.toLocaleString()}원</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>{t('order:ship_fee')}</span>
                                    <span className="text-[#6F6963]">{orderInfo.paymentInfo.shipFee.toLocaleString()}원</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>{t('order:coupon_discount')}</span>
                                    <span className="text-[#6F6963]">-{orderInfo.paymentInfo.couponDiscount.toLocaleString()}원</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>{t('order:point_used')}</span>
                                    <span className="text-[#6F6963]">-{orderInfo.paymentInfo.pointAmount.toLocaleString()}원</span>
                                </div>
                                <hr className="my-2 border-dashed" />
                                <div className="flex justify-between font-semibold text-[#322A24]">
                                    <span>{t('order:total_pay')}</span>
                                    <span className="text-lg">{orderInfo.paymentInfo.totalAmount.toLocaleString()}원</span>
                                </div>
                                <div className="flex justify-between text-xs ml-2">
                                    <span>└ {orderInfo.paymentInfo.paymentMethod}</span>
                                    <span className="text-[#6F6963]">{orderInfo.paymentInfo.totalAmount.toLocaleString()}원</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: 관리자 메모 */}
                    <div className="w-1/2 rounded-md p-6">
                        <h2 className="font-bold text-xl">{t('note')}</h2>
                        <div className="relative rounded-md mb-8 mt-4">
                            <Textarea
                                placeholder={t('only_admin_note')}
                                value={orderInfo.memo}
                                onChange={(e) => handleChangeMemo(e)}
                                className="w-full h-46 border-none focus:ring-0 resize-none bg-[#322A2408] text-[#111111] placeholder-[#C0BCB6]"
                            />
                            <div className="absolute bottom-3 right-3 text-right text-sm text-[#C0BCB6]">
                                {orderInfo.memo.length}/500
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end gap-3">
                            {/* 이미지에 맞춰 취소 버튼에 border 클래스 추가 */}
                            <Button variant="outline" className="bg-transparent text-[#322A24] w-1/6" onClick={() => setOpen(false)}>{t('cancel')}</Button>
                            <Button className="bg-[#322A24] text-white w-1/6" onClick={() => setOpen(false)}>{t('save')}</Button>
                        </div>
                    </div>
                </div>
                </section>
            </div>
            </DialogContent>
        </Dialog>
    )
}