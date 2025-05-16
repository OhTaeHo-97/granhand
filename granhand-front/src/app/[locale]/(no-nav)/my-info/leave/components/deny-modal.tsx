import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function LeaveDenyModal({ open, setOpen, setHasExistedOrder, t }: { open: boolean, setOpen: (value: boolean) => void, setHasExistedOrder: (value: boolean) => void, t: (key: string) => string }) {
    const clickConfirm = () => {
        // setOpen(false)
        setHasExistedOrder(false)
    }

    const changeOpen = () => {
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={changeOpen}>
            <DialogContent className="max-w-lg bg-white">
            <DialogHeader>
                <DialogTitle className="flex justify-center items-center text-2xl">{t('auth:ongoing_order')}</DialogTitle>
            </DialogHeader>
            <div className="mb-6 text-center text-gray-400">
                {t('auth:ongoing_order_impossible')}<br/>{t('auth:retry_directive')}
            </div>
            <DialogFooter className="w-full">
                {/* <DialogPrimitive.Close></DialogPrimitive.Close> */}
                <div className="w-full">
                    <Button className="w-full border-t text-center pt-3 text-[#6F6963] text-xl font-semibold" onClick={clickConfirm}>
                        {t('confirm')}
                    </Button>
                </div>
                {/* <DialogClose className="w-full">
                    <div className="border-t w-full text-center pt-3">
                        확인
                    </div>
                </DialogClose> */}
                {/* <Button className="w-1/6 bg-gray-100 text-gray-600" onClick={() => setOpen(false)}>확인</Button> */}
            </DialogFooter>

            {/* <DialogFooter>
                <div className="flex justify-end gap-3 px-5 w-full">
                    <Button className="w-1/6 bg-transparent text-[#C0BCB6]" onClick={() => setOpen(false)}>{t(btnText1)}</Button>
                    <Button className="w-1/6 bg-[#322A2408] text-[#2854f3]" onClick={onClickConfirm}>{t(btnText2)}</Button>
                </div>
            </DialogFooter> */}
            </DialogContent>
        </Dialog>
    )
}