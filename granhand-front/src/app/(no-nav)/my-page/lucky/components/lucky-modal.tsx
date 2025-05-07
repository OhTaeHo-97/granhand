import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function LuckyModal({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-lg bg-white">
            <DialogHeader>
                <DialogTitle>GRANHAND.</DialogTitle>
            </DialogHeader>
            <div className="mb-6">
                행운뽑기 완료! 100 포인트가 지급되었어요.
            </div>
            <DialogFooter>
                <Button className="w-1/6 bg-gray-100 text-gray-600" onClick={() => setOpen(false)}>확인</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}