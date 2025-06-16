import { Button } from "@/components/ui/button";
import { useState } from "react";
import MemberPointCouponModal from "../../components/modal/point-coupon-modal";
import CouponModalContents from "../../components/modal/contents/coupon-modal-contents";

export default function CouponInformation({ t }: { t: (key: string) => string }) {
    const [openCoupon, setOpenCoupon] = useState(false)
    
    return (
        <div className="flex justify-between items-center border border-gray-200 p-4 text-sm mb-5">
            {/* 왼쪽 쿠폰 정보 */}
            <div className="flex gap-3 items-center flex-wrap text-[#111111]">
                <span>
                {t('coupon:issued_coupon')} <span className="font-bold">3 {t('coupon:items')}</span>
                </span>
                <span className="text-[#C0BCB6]">|</span>
                <span>
                {t('coupon:purchase_amount')} <span className="font-bold"><span className="text-blue-600">1</span> {t('coupon:items')}</span>
                </span>
                <span className="text-[#C0BCB6]">|</span>
                <span>
                {t('coupon:expired_coupon')} <span className="font-bold">2 {t('coupon:items')}</span>
                </span>
            </div>

            {/* 오른쪽 버튼 */}
            <Button variant="outline" className="h-8 px-3 py-1 text-sm border-gray-300" onClick={() => setOpenCoupon((prev) => !prev)}>
                {t('coupon:instant_issue')}
            </Button>

            <MemberPointCouponModal open={openCoupon} setOpen={setOpenCoupon} title={t('member:issue_coupon_title')} contents={<CouponModalContents t={t} />} btnText={t('coupon:issue_coupon')} confirmFn={() => setOpenCoupon(false)} />
        </div>
    )
}