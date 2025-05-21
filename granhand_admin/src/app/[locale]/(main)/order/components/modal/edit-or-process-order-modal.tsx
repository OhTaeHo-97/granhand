import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function EditOrProcessOrderModal({ open, title, contentsTxt, contents, setOpen }: { open: boolean, title: string, contentsTxt: string, contents: React.ReactNode, setOpen: (value: boolean) => void }) {
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="max-w-7xl bg-white min-w-150 min-h-80">
            <DialogHeader>
                <DialogTitle className="font-bold text-2xl text-[#111111]">{title}</DialogTitle>
            </DialogHeader>
            <div className="mb-6 text-[#111111] whitespace-pre-line">
                {contentsTxt}
                {contents}
            </div>
            <DialogFooter className="!flex !items-center">
                <Button className="w-1/6 bg-transparent text-[#C0BCB6] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>취소</Button>
                <Button className="w-1/6 text-[#2854f3] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>확인</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}