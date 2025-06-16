'use client'
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale"
import { usePathname } from "next/navigation"
import { useTranslation } from "../../../../../../utils/localization/client"
import { useState } from "react"
import CouponModal from "../../payment/components/modal/coupon-modal"

export default function MyPageTitle() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['my_page', 'coupon'])
    const [open, setOpen] = useState(false)

    const pathname = usePathname()
    const paths = pathname.split('/')
    const title = () => {

        const category = paths[paths.length - 1]
        switch (category) {
            case 'my-page':
                return '마이페이지'
            case 'point':
                return '포인트'
            case 'attendance':
                return '출석 체크'
            case 'lucky':
                return '행운 뽑기'
            case 'order':
                return '주문 내역'
            case 'cancel-return-exchange':
                return '취소/교환/반품 내역'
            case 'coupon':
                return '보유 쿠폰'
            case 'registration':
                return '쿠폰 등록'
            case 'verify':
                return '회원 정보 수정'
            case 'payment':
                return '결제 정보'
            default:
                return '마이페이지'
        }
    }

    return (
        <div className="w-full py-10 mx-auto text-[#6F6963]">
            <div className="flex justify-between">            
                <h1 className="text-lg font-medium mb-8">{title()}</h1>
                {paths[paths.length - 1] && (
                    <div className="w-[16px] h-[16px] border border-gray-200 rounded-full text-xs text-[#C0BCB6] text-[8px] font-bold flex items-center justify-center" onClick={() => setOpen((prev) => !prev)}>?</div>
                )}
            </div>
            <CouponModal open={open} setOpen={setOpen} t={t} />
            {/* <h1 className="text-xl font-medium mb-8">{t('my_page:mypage')}</h1> */}
        </div>
    )
}