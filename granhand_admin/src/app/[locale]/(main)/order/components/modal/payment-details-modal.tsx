import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function PaymentDetailModal({ open, unit, setOpen, t }: { open: boolean, unit: string, setOpen: (value: boolean) => void, t: (key: string) => string }) {
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="bg-white max-w-150 min-h-80 w-full overflow-auto mx-auto">
            <DialogHeader>
                <DialogTitle><span className="font-bold text-2xl text-[#111111]">{t('order:payment_details')}</span></DialogTitle>
            </DialogHeader>
            <div className="rounded-md text-sm text-[#C0BCB6] space-y-2 w-full">
                <div className="rounded-md p-6 space-y-3">
                    <div className="flex justify-between">
                        <span>{t('order:product_amount')}</span>
                        <span className="text-[#6F6963]">55,000{unit}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>{t('order:ship_fee')}</span>
                        <span className="text-[#6F6963]">0{unit}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>{t('product:coupon_discount')}</span>
                        <span className="text-[#6F6963]">-5,000{unit}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>{t('order:point_used')}</span>
                        <span className="text-[#6F6963]">-5,000{unit}</span>
                    </div>
                    <hr className="my-2 border-dashed" />
                    <div className="flex justify-between font-semibold text-[#322A24]">
                        <span>{t('order:total_pay')}</span>
                        <span className="text-lg">45,000{unit}</span>
                    </div>
                    <div className="flex justify-between text-xs ml-2">
                        <span>└ 신용카드 결제 (현대카드)</span>
                        <span className="text-[#6F6963]">45,000{unit}</span>
                    </div>
                </div>
            </div>
            <DialogFooter className="!flex !items-center">
                <Button className="w-1/6 bg-transparent text-[#C0BCB6] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>{t('cancel')}</Button>
                <Button className="w-1/6 text-[#2854f3] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>{t('save')}</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}