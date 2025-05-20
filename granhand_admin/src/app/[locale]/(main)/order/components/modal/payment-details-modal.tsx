import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function PaymentDetailModal({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="bg-white max-w-150 min-h-80 w-full overflow-auto mx-auto">
            <DialogHeader>
                <DialogTitle><span className="font-bold text-2xl text-[#111111]">결제 내역</span></DialogTitle>
            </DialogHeader>
            <div className="rounded-md text-sm text-[#C0BCB6] space-y-2 w-full">
                <div className="rounded-md p-6 space-y-3">
                    <div className="flex justify-between">
                        <span>상품금액</span>
                        <span className="text-[#6F6963]">55,000원</span>
                    </div>
                    <div className="flex justify-between">
                        <span>배송비</span>
                        <span className="text-[#6F6963]">0원</span>
                    </div>
                    <div className="flex justify-between">
                        <span>쿠폰 할인</span>
                        <span className="text-[#6F6963]">-5,000원</span>
                    </div>
                    <div className="flex justify-between">
                        <span>포인트 사용</span>
                        <span className="text-[#6F6963]">-5,000원</span>
                    </div>
                    <hr className="my-2 border-dashed" />
                    <div className="flex justify-between font-semibold text-[#322A24]">
                        <span>결제 금액</span>
                        <span className="text-lg">45,000원</span>
                    </div>
                    <div className="flex justify-between text-xs ml-2">
                        <span>└ 신용카드 결제 (현대카드)</span>
                        <span className="text-[#6F6963]">45,000원</span>
                    </div>
                    {/* <div className="text-xs text-gray-400 ml-2">└ 신용카드 결제 (현대카드)</div> */}
                </div>
            </div>
            {/* <div className="text-[#111111]">
                <div className="space-y-6 mt-8">
                    <div className="text-[#6f6963] text-sm w-full min-w-120">
                        <div className="flex justify-between">
                            <div>상품금액</div>
                            <div>55,000원</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-6 text-center text-[#111111]">
                <Textarea placeholder="관리자만 볼 수 있는 메모입니다." className="resize-none min-h-50 bg-[#322A2408] border-none p-4" />
            </div> */}
            <DialogFooter className="!flex !items-center">
                <Button className="w-1/6 bg-transparent text-[#C0BCB6] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>취소</Button>
                <Button className="w-1/6 text-[#2854f3] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>저장</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}