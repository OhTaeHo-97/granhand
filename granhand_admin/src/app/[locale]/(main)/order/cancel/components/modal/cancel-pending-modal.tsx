import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function CancelPendingModal({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="max-w-lg bg-white min-w-150 min-h-80">
            <DialogHeader>
                {/* <h1 className="text-2xl font-bold text-[#5E5955]">{t('member_list')}</h1> */}
                <DialogTitle className="font-bold text-2xl text-[#111111]">취소 보류 해제 처리</DialogTitle>
            </DialogHeader>
            <div className="mb-6 text-[#111111] whitespace-pre-line">
                {`선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다.\n1건에 대해 처리하시겠습니까?`}
                <div className="bg-[#322A2408] p-4">
                    <ul className="text-[#6F6963]">
                        <li>보류 해제한 주문은 ‘취소 요청'에서 확인하실 수 있습니다.</li>
                    </ul>
                </div>
            </div>
            <DialogFooter className="!flex !items-center">
                <Button className="w-1/6 bg-transparent text-[#C0BCB6] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>취소</Button>
                <Button className="w-1/6 text-[#2854f3] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>확인</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}