'use client'

import { usePathname } from "next/navigation"

export default function MyPageTitle() {
    const pathname = usePathname()
    const paths = pathname.split('/')
    const title = {
        'coupon': '보유 쿠폰',
        "":""
    }

    return (
        <div className="w-full py-10 mx-auto">
            <h2 className="text-2xl font-semibold mb-8">마이페이지</h2>
        </div>
    )
}