import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface CreateOrder {
    isMember: string
    memberId: number
    name: string
    phone: string
    email: string
    postalCode: string
    address: string
    detailAddress: string
    deliveryRequest: string
    productId: number
    productAmount: number
    membershipDiscount: string
    couponId: number
    usePoint: string
    point: number
}

export default function CreateOrderModal({ open, setOpen, t }: { open: boolean, setOpen: (value: boolean) => void, t: (key: string) => string }) {
    const [newOrder, setNewOrder] = useState<CreateOrder>({
        isMember: 'user',
        memberId: 0,
        name: '',
        phone: '',
        email: '',
        postalCode: '',
        address: '',
        detailAddress: '',
        deliveryRequest: '',
        productId: 0,
        productAmount: 1,
        membershipDiscount: 'user',
        couponId: 0,
        usePoint: 'use',
        point: 0
    })
    const [searchMember, setSearchMember] = useState('')
    const [searchProduct, setSearchProduct] = useState('')

    const updateOrder = (
        field: keyof CreateOrder,
        value: CreateOrder[keyof CreateOrder]
    ) => {
        setNewOrder(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const closeModal = (open: boolean) => {
        if(!open) {
            setNewOrder({
                isMember: 'user',
                memberId: 0,
                name: '',
                phone: '',
                email: '',
                postalCode: '',
                address: '',
                detailAddress: '',
                deliveryRequest: '',
                productId: 0,
                productAmount: 1,
                membershipDiscount: 'user',
                couponId: 0,
                usePoint: 'use',
                point: 0
            })
        }
        setOpen(open)
    }

    // (e) => updateOrder('name', e.target.value, setNewOrder)

    return (
        <Dialog open={open} onOpenChange={(open) => closeModal(open)} >
            <DialogContent className="bg-white max-w-280 min-h-80 max-h-screen w-full overflow-auto mx-auto">
            <DialogHeader>
                <DialogTitle><span className="font-bold text-2xl text-[#111111]">{t('order:create_order')}</span></DialogTitle>
            </DialogHeader>
            <div className="rounded-md text-sm text-[#C0BCB6] space-y-2 w-full">
                <div className="flex min-h-screen bg-white min-w-250">
                    <div className="w-2/3 p-8">
                        <div className="text-[#111111]">
                            <div className="space-y-2 mt-8">
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                        <Label className="font-semibold">{t('order:customer_info')}</Label>
                                    </div>
                                    <div className="px-5 py-2 w-full">
                                        <div className="flex items-center gap-4">
                                            <RadioGroup value={newOrder.isMember} onValueChange={(value) => updateOrder('isMember', value)} className="flex gap-6">
                                                <Label className="flex items-center gap-2 w-20">
                                                <RadioGroupItem value="user" /> {t('order:member')}
                                                </Label>
                                                <Label className="flex items-center gap-2 w-20">
                                                <RadioGroupItem value="non-user" /> {t('order:guest')}
                                                </Label>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-start p-2 text-[#6F6963]"></div>
                                    <div className="px-5 py-2 w-full">
                                        <div className="flex items-center gap-2">
                                            <Input type="text" placeholder={t('order:customer_info_placeholder')} value={searchMember} onChange={(e) => setSearchMember(e.target.value)} className="w-full" />
                                            <Button className="bg-[#322A24] text-white">
                                                <Search className="w-4 h-4" /> {t('order:search')}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                        <Label className="font-semibold"></Label>
                                    </div>
                                    <div className="px-5 py-2 w-full">
                                        <div className="flex items-center bg-[#322A2408] p-4 rounded-md">
                                            <div className="flex-grow">
                                                <div className="font-semibold text-[#111111]">홍길동</div>
                                                <div className="text-[#5E5955]">honghong@gmail.com</div>
                                            </div>
                                            <div className="flex items-center">
                                                <Button variant="outline" size="sm" className="border-[#C0BCB6] text-[#5E5955]">{t('order:select')}</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                        <Label className="font-semibold">{t('order:name')}</Label>
                                    </div>
                                    <div className="px-5 py-2 w-full">
                                        <div className="flex items-center gap-4">
                                            <Input className="w-full" value={newOrder.name} onChange={(e) => updateOrder('name', e.target.value)} placeholder={t('order:name_placeholder')} />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                        <Label className="font-semibold">{t('order:contact_number')}</Label>
                                    </div>
                                    <div className="px-5 py-2 w-full">
                                        <div className="flex items-center gap-4">
                                            <Input className="w-full" value={newOrder.phone} onChange={(e) => updateOrder('phone', e.target.value)} placeholder={t('order:contact_number_placeholder')} />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                        <Label className="font-semibold">{t('order:email')}</Label>
                                    </div>
                                    <div className="px-5 py-2 w-full">
                                        <div className="flex items-center gap-4">
                                            <Input className="w-full" value={newOrder.email} onChange={(e) => updateOrder('email', e.target.value)} placeholder={t('order:email_placeholder')} />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                        <Label className="font-semibold">{t('order:ship_address')}</Label>
                                    </div>
                                    <div className="px-5 py-2 w-full">
                                        <div className="flex items-center gap-4">
                                            <Input placeholder={t('order:search_postal')} value={newOrder.postalCode} onChange={(e) => updateOrder('postalCode', e.target.value)} className="w-1/2" />
                                            <Button variant="outline" className="p-1">{t('order:postal')}</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-start p-2 text-[#6F6963]"></div>
                                    <div className="px-5 py-2 w-full">
                                        <div className="flex items-center gap-4">
                                            <Input placeholder={t('order:address')} value={newOrder.address} onChange={(e) => updateOrder('address', e.target.value)} defaultValue="서울시 종로구 8" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-start p-2 text-[#6F6963]"></div>
                                    <div className="px-5 py-2 w-full">
                                        <div className="flex items-center gap-4">
                                            <Input placeholder={t('order:detail_address_placeholder')} value={newOrder.detailAddress} onChange={(e) => updateOrder('detailAddress', e.target.value)} defaultValue="1층 101호" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                        <Label className="font-semibold">{t('order:delivery_request')}</Label>
                                    </div>
                                    <div className="px-5 py-2 w-full">
                                        <div className="flex items-center gap-4">
                                            <Input placeholder={t('order:enter_delivery_request')} value={newOrder.deliveryRequest} onChange={(e) => updateOrder('deliveryRequest', e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                        <Label className="font-semibold">{t('order:select_product')}</Label>
                                    </div>
                                    <div className="px-5 py-2 w-full">
                                        <div className="flex items-center gap-2">
                                            <Input type="text" placeholder={t('order:product_placeholder')} value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} className="w-full" />
                                            <Button className="bg-[#322A24] text-white">
                                                <Search className="w-4 h-4" /> {t('order:search')}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                        <Label className="font-semibold"></Label>
                                    </div>
                                    <div className="px-5 py-2 w-full">
                                        <div className="flex items-center bg-[#322A2408] p-4 rounded-md">
                                            <Image src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png" alt="Product" className="w-16 h-16 object-cover mr-4 rounded-sm" width={400} height={400} />
                                            <div className="flex-grow">
                                                <div className="font-semibold text-[#111111]">Roland Multi Perfume</div>
                                                <div className="text-[#5E5955]">25,000원</div>
                                            </div>
                                            <div className="flex items-center">
                                                <Button variant="outline" size="sm" className="border-[#C0BCB6] text-[#5E5955]" onClick={() => updateOrder('productAmount', Math.max(newOrder.productAmount - 1, 0))}>-</Button>
                                                    <Input type="number" value={newOrder.productAmount} onChange={(e) => updateOrder('productAmount', e.target.value)} readOnly className="w-12 text-center mx-1 border-none focus-visible:ring-0 bg-transparent" />
                                                <Button variant="outline" size="sm" className="border-[#C0BCB6] text-[#5E5955]" onClick={() => updateOrder('productAmount', newOrder.productAmount + 1)}>+</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                        <Label className="font-semibold">{t('order:member_grade_discount')}</Label>
                                    </div>
                                    <div className="px-5 py-2 w-full">
                                        <div className="flex items-center gap-4">
                                            <RadioGroup value={newOrder.membershipDiscount} onValueChange={(value) => updateOrder('membershipDiscount', value)} className="flex gap-6">
                                                <Label className="flex items-center gap-2 w-20">
                                                <RadioGroupItem value="user" /> {t('order:apply')}
                                                </Label>
                                                <Label className="flex items-center gap-2 w-20">
                                                <RadioGroupItem value="non-user" /> {t('order:not_apply')}
                                                </Label>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                        <Label className="font-semibold">{t('order:apply_coupon')}</Label>
                                    </div>
                                    <div className="px-5 py-2 w-full">
                                        <div className="flex items-center gap-4">
                                            <Select value={newOrder.couponId.toString()} onValueChange={(value) => updateOrder('couponId', Number(value))}>
                                                <SelectTrigger className="">
                                                    <SelectValue className="w-full" placeholder="쿠폰 사용 대상이 아닙니다." />
                                                </SelectTrigger>
                                                <SelectContent className="bg-white">
                                                    {/* <SelectItem value="select">분류 선택</SelectItem>
                                                    <SelectItem value="이메일">이메일</SelectItem>
                                                    <SelectItem value="전화번호">전화번호</SelectItem> */}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                        <Label className="font-semibold">{t('order:use_point')}</Label>
                                    </div>
                                    <div className="px-5 py-2 w-full">
                                        <div className="flex items-center gap-4">
                                            <RadioGroup defaultValue={newOrder.usePoint} onValueChange={(value) => updateOrder('usePoint', value)} className="flex gap-6">
                                                <Label className="flex items-center gap-2 w-20">
                                                <RadioGroupItem value="use" /> {t('order:use')}
                                                </Label>
                                                <Label className="flex items-center gap-2 w-20">
                                                <RadioGroupItem value="unuse" /> {t('order:not_use')}
                                                </Label>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-start p-2 text-[#6F6963]"></div>
                                    <div className="px-5 py-2 w-full">
                                        <div className="flex items-center gap-4">
                                            <Input type="number" value={newOrder.point} onChange={(e) => updateOrder('point', e.target.value)} defaultValue={0} className="text-right w-1/2" disabled={newOrder.usePoint === 'unuse'} />원
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    {/* Right Section: 결제 내역 */}
                    <div className="w-1/3 p-8">
                        <div className="rounded-md text-sm bg-[#322A2408] text-[#C0BCB6] space-y-2 w-full">
                            <div className="rounded-md p-6 space-y-3">
                                <div className="flex justify-between items-center mb-10">
                                    <h2 className="text-xl font-bold text-[#111111]">{t('order:payment_details')}</h2>
                                    <X className="!w-4 !h-4 text-[#5E5955]" />
                                </div>
                                <div className="flex justify-between">
                                    <span>{t('order:product_amount')}</span>
                                    <span className="text-[#6F6963]">25,000원</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>{t('order:coupon_discount')}</span>
                                    <span className="text-[#6F6963]">0원</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>{t('order:point_used')}</span>
                                    <span className="text-[#6F6963]">0</span>
                                </div>
                                <hr className="my-2 border-dashed" />
                                <div className="flex justify-between font-semibold text-[#322A24]">
                                    <span>{t('order:total_pay')}</span>
                                    <span className="text-lg">25,000원</span>
                                </div>
                                <div className="flex justify-between text-xs ml-2">
                                    <span>└ {t('order:total')}</span>
                                    <span className="text-[#6F6963]">25,000원</span>
                                </div>
                                {/* <div className="text-xs text-gray-400 ml-2">└ 신용카드 결제 (현대카드)</div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DialogFooter className="!flex !items-center">
                <Button className="w-1/6 bg-transparent text-[#C0BCB6] hover:bg-[#322A2408]" onClick={() => closeModal(false)}>{t('cancel')}</Button>
                <Button className="w-1/6 text-[#2854f3] hover:bg-[#322A2408]" onClick={() => closeModal(false)}>{t('order:create_order')}</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}