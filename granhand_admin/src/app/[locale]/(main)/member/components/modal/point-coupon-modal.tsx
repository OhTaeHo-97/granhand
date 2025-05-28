import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function MemberPointCouponModal({
    open,
    setOpen,
    title,
    contents,
    btnText,
    confirmFn
}: {
    open: boolean,
    setOpen: (value: boolean) => void,
    title?: string,
    contents: React.ReactNode,
    btnText: string,
    confirmFn: () => void
}) {
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="max-w-5xl bg-white min-w-150 min-h-80 overflow-auto">
            <DialogHeader>
                {/* <h1 className="text-2xl font-bold text-[#5E5955]">{t('member_list')}</h1> */}
                <DialogTitle className="font-bold text-2xl text-[#111111]">{(title) && title}</DialogTitle>
            </DialogHeader>
            {/* <div className="flex gap-4 my-4">
                <Button variant={size === '100ml' ? 'outline' : 'default'} onClick={() => setSize('100ml')}>100ml</Button>
                <Button variant={size === '200ml' ? 'outline' : 'default'} onClick={() => setSize('200ml')}>200ml</Button>
            </div> */}
            <div className="mb-6 text-center text-[#111111]">
                {contents}
                {/* 출석체크 완료! 방금 100 포인트가 지급되었어요. */}
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
                {/* <div className="mt-10 flex justify-center gap-4">
                    {isTwoBtn && (
                        <Button className="border rounded px-6 py-1 flex items-center gap-1 text-[#322A24] w-1/6">
                            {btnText2}
                        </Button>
                    )}
                    <Button className="bg-[#322A24] text-white rounded px-6 py-1 flex items-center gap-1 w-1/6" onClick={confirmFn}>
                        {btnText1}
                    </Button>
                </div> */}
            </div>
            <DialogFooter>
                <Button className="bg-[#322A24] text-white rounded px-6 py-1 flex items-center gap-1 w-1/6" onClick={confirmFn}>{btnText}</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}