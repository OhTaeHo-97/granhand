import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function CouponRegisterModal({ isValid, open, setOpen }: { isValid: boolean, open: boolean, setOpen: (value: boolean) => void }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-lg bg-white">
            <DialogHeader>
                <DialogTitle>GRANHAND.</DialogTitle>
            </DialogHeader>
            <div className="mt-2 mb-4 text-[#322A24]">
                {isValid ? '쿠폰이 등록되었습니다. 보유 쿠폰에서 확인해 주세요!' : '유효하지 않은 쿠폰이에요. 쿠폰번호를 다시 확인해 주세요.'}
            </div>
            <DialogFooter>
                <Button className="w-1/6 bg-[#322A2408] text-[#2854f3]" onClick={() => setOpen(false)}>확인</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}