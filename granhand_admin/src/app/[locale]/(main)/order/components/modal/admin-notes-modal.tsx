import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export default function AdminNotesModal({ open, setOpen, t }: { open: boolean, setOpen: (value: boolean) => void, t: (key: string) => string }) {
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="bg-white max-w-150 min-h-80 w-full overflow-auto mx-auto">
            <DialogHeader>
                <DialogTitle><span className="font-bold text-2xl text-[#111111]">{t('note')}</span></DialogTitle>
            </DialogHeader>
            <div className="mb-6 text-center text-[#111111]">
                <Textarea placeholder={t('only_admin_note')} className="resize-none min-h-50 bg-[#322A2408] border-none p-4" />
            </div>
            <DialogFooter className="!flex !items-center">
                <Button className="w-1/6 bg-transparent text-[#C0BCB6] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>{t('cancel')}</Button>
                <Button className="w-1/6 text-[#2854f3] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>{t('save')}</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}