'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CouponRegisterModal from "./components/coupon-register-modal";
import { useState } from "react";

export default function CouponRegisterPage() {
    const [open, setOpen] = useState(false)
    const [coupon, setCoupon] = useState('')

    return (
        <div className="container mx-auto px-6 pt-8 max-w-4xl">
            <h2 className="text-base font-bold mb-4">쿠폰번호</h2>

            <div className="flex items-center gap-2">
                <Input
                className="flex-1 h-12 text-sm"
                placeholder="쿠폰번호를 입력해 주세요."
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                />
                <Button className={`h-12 px-6 bg-gray-200 text-white text-sm font-semibold ${coupon ? 'bg-gray-800' : 'bg-gray-200'}`} onClick={() => setOpen((prev) => !prev)} disabled={coupon === ''}>
                쿠폰 등록
                </Button>
            </div>
            <CouponRegisterModal isValid={true} open={open} setOpen={setOpen} />
        </div>
    )
}