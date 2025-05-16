import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function InfoModal({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-lg bg-white">
            <DialogHeader>
                <DialogTitle>GRANHAND.</DialogTitle>
            </DialogHeader>
            {/* <div className="flex gap-4 my-4">
                <Button variant={size === '100ml' ? 'outline' : 'default'} onClick={() => setSize('100ml')}>100ml</Button>
                <Button variant={size === '200ml' ? 'outline' : 'default'} onClick={() => setSize('200ml')}>200ml</Button>
            </div> */}
            <div className="mb-6">
                출석체크 완료! 방금 100 포인트가 지급되었어요.
                {/* <label className="block mb-1 text-sm font-medium">쇼핑백</label>
                <Select value={bag} onValueChange={setBag}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="구매 안함" />
                </SelectTrigger>
                <SelectContent className=' bg-white'>
                    <SelectItem value="none">구매 안함</SelectItem>
                    <SelectItem value="include">구매함</SelectItem>
                </SelectContent>
                </Select> */}
            </div>
            <DialogFooter>
                {/* <Button className="w-1/4" variant="outline" onClick={() => setOpen(false)}>취소</Button> */}
                {/* <Button className="w-1/4 bg-black text-white" onClick={() => setOpen(false)}>완료</Button> */}
                <Button className="w-1/6 bg-gray-100 text-gray-600" onClick={() => setOpen(false)}>확인</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}