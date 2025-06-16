'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import CouponModal from "./modal/coupon-modal";

export default function CouponSelect({ t }: { t: (key: string) => string }) {
    const [open, setOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState('')

    return (
        <section className="space-y-2 mb-10">
            <div className="flex items-center gap-2 relative">
                <h2 className="text-sm font-bold text-[#322A24]">{t('payment:coupons')}</h2>
                <div className="relative group">
                    <div className="w-[24px] h-[24px] border border-gray-200 rounded-full text-xs text-[#C0BCB6] text-[8px] font-bold flex items-center justify-center" onClick={() => setOpen((prev) => !prev)}>?</div>
                    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-[#E34234] text-white text-xs px-3 py-1 rounded shadow-md w-[137px] h-[24.49px] text-[10px] font-bold whitespace-nowrap
                        before:content-[''] before:absolute before:left-[-6px] before:top-1/2 before:-translate-y-1/2
                        before:border-y-8 before:border-y-transparent before:border-r-8 before:border-r-[#E34234]">
                        {t('payment:applied_discount')}
                    </div>
                </div>
            </div>
            <Select value={selectedValue} onValueChange={(value) => setSelectedValue(value)}>
                <SelectTrigger className="w-full border !border-[#C0BCB6] rounded px-4 py-2 text-sm h-[46px] text-[#6F6963] data-[placeholder]:text-[#C0BCB6] text-[10px] font-bold">
                    <SelectValue placeholder={t('payment:coupon_placeholder')} />
                </SelectTrigger>
                <SelectContent className="bg-[#FDFBF5]">
                    <SelectItem value="door" className="text-[10px] font-bold hover:bg-[#322A2408]">5,000원 할인 쿠폰 (10,000원 이상 구매시 사용 가능)</SelectItem>
                    <SelectItem value="call" className="text-[10px] font-bold hover:bg-[#322A2408]">6,000원 할인 쿠폰 (10,000원 이상 구매시 사용 가능)</SelectItem>
                    <SelectItem value="none" className="text-[10px] font-bold hover:bg-[#322A2408]">2,000원 할인 쿠폰 (10,000원 이상 구매시 사용 가능)</SelectItem>
                </SelectContent>
            </Select>
            <CouponModal open={open} setOpen={setOpen} t={t} />
        </section>
    )
}