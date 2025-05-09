// 'use client'

// import { usePathname } from "next/navigation"

export default function MyPageTitle({ t }: { t: (key: string) => string }) {
    // const pathname = usePathname()
    // const paths = pathname.split('/')
    // const title = {
    //     'coupon': '보유 쿠폰',
    //     "":""
    // }

    return (
        <div className="w-full py-10 mx-auto">
            <h2 className="text-2xl font-semibold mb-8">{t('my_page:mypage')}</h2>
        </div>
    )
}