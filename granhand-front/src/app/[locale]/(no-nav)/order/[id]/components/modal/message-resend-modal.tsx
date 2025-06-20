import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function MessageResendModal({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-lg bg-[#FDFBF5]">
            <DialogHeader>
                <DialogTitle className="text-[#5E5955]">GRANHAND.</DialogTitle>
            </DialogHeader>
            <div className="mb-6 text-[#322A24]">
                메시지를 다시 발송했습니다.
            </div>
            <DialogFooter>
                <Button className="w-1/6 bg-gray-100 text-gray-600" onClick={() => setOpen(false)}>확인</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}