import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function CouponModal({ open, setOpen, t }: { open: boolean, setOpen: (value: boolean) => void, t: (key: string) => string }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-white max-w-2xl">
                <DialogHeader>
                    <DialogTitle className="flex text-2xl">{t('coupon:coupon_terms')}</DialogTitle>
                </DialogHeader>
                {/* 본문 */}
                <div className="space-y-8 text-[#48413A] mt-8">
                    {/* 1. 사용 조건 */}
                    <div>
                        <div className="font-bold text-xl mb-2">{t('coupon:first')}</div>
                        <ul className="list-disc pl-6 space-y-1 text-base font-normal">
                        <li>{t('coupon:first-1')}</li>
                        <li>{t('coupon:first-2')}</li>
                        <li>{t('coupon:first-3')}</li>
                        </ul>
                    </div>
                    {/* 2. 유효기간 */}
                    <div>
                        <div className="font-bold text-xl mb-2">{t('coupon:second')}</div>
                        <ul className="list-disc pl-6 space-y-1 text-base font-normal">
                        <li>{t('coupon:second-1')}</li>
                        <li>{t('coupon:second-2')}</li>
                        </ul>
                    </div>
                    {/* 3. 쿠폰의 회수 및 제한 */}
                    <div>
                        <div className="font-bold text-xl mb-2">{t('coupon:third')}</div>
                        <ul className="list-disc pl-6 space-y-1 text-base font-normal">
                        <li>{t('coupon:third-1')}</li>
                        <li>{t('coupon:third-2')}</li>
                        <li>{t('coupon:third-3')}</li>
                        <li>{t('coupon:third-4')}</li>
                        <li>{t('coupon:third-5')}</li>
                        </ul>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}