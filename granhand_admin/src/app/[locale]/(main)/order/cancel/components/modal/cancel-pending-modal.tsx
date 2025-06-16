import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { TFunction } from "i18next";

export default function CancelPendingModal({ open, setOpen, t }: { open: boolean, setOpen: (value: boolean) => void, t: TFunction }) {
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="max-w-lg bg-white min-w-150 min-h-80">
            <DialogHeader>
                {/* <h1 className="text-2xl font-bold text-[#5E5955]">{t('member_list')}</h1> */}
                <DialogTitle className="font-bold text-2xl text-[#111111]">{t('order:process_release_hold')}</DialogTitle>
            </DialogHeader>
            <div className="mb-6 text-[#111111] whitespace-pre-line">
                {`${t('order:process_order_confirm_msg1', { total: 10, count: 1 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`}
                <div className="bg-[#322A2408] p-4 px-8">
                    <ul className="text-[#6F6963] list-disc">
                        <li>{t('order:process_release_hold_info')}</li>
                    </ul>
                </div>
            </div>
            <DialogFooter className="!flex !items-center">
                <Button className="w-1/6 bg-transparent text-[#C0BCB6] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>{t('cancel')}</Button>
                <Button className="w-1/6 text-[#2854f3] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>{t('confirm')}</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}