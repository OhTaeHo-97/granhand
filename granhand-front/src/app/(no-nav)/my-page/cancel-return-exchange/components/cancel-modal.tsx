import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Link from "next/link";

export default function CancelModal({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-lg bg-white">
            <DialogHeader>
                <DialogTitle>GRANHAND.</DialogTitle>
            </DialogHeader>
            <div className="mb-6">
                취소 유의사항 안내 - 출고 중인 상품은 취소 신청이 어려울 수 있어요.
            </div>
            <DialogFooter>
                <div className="flex justify-end gap-3 px-5">
                    <Button className="w-fit bg-transparent text-gray-400" onClick={() => setOpen(false)}>닫기</Button>
                    <Link href="/order/confirm-cancel-return-exchange/request-list?category=cancel">
                        <Button className="text-blue-500 bg-transparent hover:bg-gray-300 w-fit" onClick={() => setOpen(false)}>
                            주문취소
                        </Button>
                    </Link>
                </div>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}