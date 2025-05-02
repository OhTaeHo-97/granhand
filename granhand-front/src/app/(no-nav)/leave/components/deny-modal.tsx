import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function LeaveDenyModal({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-lg bg-white">
            <DialogHeader>
                <DialogTitle className="flex justify-center items-center text-2xl">아직 진행 중인 주문이 있어요!</DialogTitle>
            </DialogHeader>
            <div className="mb-6 text-center text-gray-400">
                진행 중인 주문이 있는 경우에는 탈퇴가 불가능해요.<br/>주문 취소나 구매확정 이후 다시 시도해 주세요.
            </div>
            <DialogFooter className="w-full">
                {/* <DialogPrimitive.Close></DialogPrimitive.Close> */}
                <DialogClose className="w-full">
                    <div className="border-t w-full text-center pt-3">
                        확인
                    </div>
                </DialogClose>
                {/* <Button className="w-1/6 bg-gray-100 text-gray-600" onClick={() => setOpen(false)}>확인</Button> */}
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}