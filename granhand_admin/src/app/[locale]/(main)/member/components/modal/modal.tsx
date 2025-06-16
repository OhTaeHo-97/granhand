import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function MemberModal({
    open,
    setOpen,
    title,
    contents,
    isTwoBtn,
    btnText1,
    btnText2,
    cancelFn,
    confirmFn
}: {
    open: boolean,
    setOpen: (value: boolean) => void,
    title?: string,
    contents: React.ReactNode,
    isTwoBtn: boolean,
    btnText1: string,
    btnText2?: string,
    cancelFn?: () => void,
    confirmFn: () => void
}) {
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="max-w-lg bg-white min-w-150 min-h-80">
            <DialogHeader>
                <DialogTitle className="font-bold text-2xl text-[#111111]">{(title) && title}</DialogTitle>
            </DialogHeader>
            <div className="mb-6 text-center text-[#111111]">
                {contents}
                <div className="mt-10 flex justify-center gap-4">
                    {isTwoBtn && (
                        <Button className="border rounded px-6 py-1 flex items-center gap-1 text-[#322A24] w-1/6" onClick={cancelFn ? cancelFn : () => setOpen(false)}>
                            {btnText2}
                        </Button>
                    )}
                    <Button className="bg-[#322A24] text-white rounded px-6 py-1 flex items-center gap-1 w-1/6" onClick={confirmFn}>
                        {btnText1}
                    </Button>
                </div>
            </div>
            </DialogContent>
        </Dialog>
    )
}