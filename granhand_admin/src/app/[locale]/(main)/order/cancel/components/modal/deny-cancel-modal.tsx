import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TFunction } from "i18next"

export default function DenyCancelModal({ open, setOpen, t }: { open: boolean, setOpen: (value: boolean) => void, t: TFunction }) {
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="max-w-300 bg-white min-w-150 max-h-150 min-h-80 overflow-auto">
            <DialogHeader>
                <DialogTitle className="font-bold text-2xl text-[#111111]">{t('order:reject_cancel_req')}</DialogTitle>
            </DialogHeader>
            <div className="mb-6 text-[#111111] whitespace-pre-line">
                {t('order:process_order_confirm_msg1', { total: 10, count: 1 })}
                <div className="p-4">
                    <ul className="text-[#6F6963] list-disc">
                        <li>{t('order:reject_cancel_info1')}</li>
                        <li>{t('order:reject_cancel_info2')}</li>
                    </ul>
                </div>
                <div className="text-[#6f6963] text-sm w-full min-w-120">
                    <table className="w-full text-left border-collapse min-w-6xl border">
                        <thead className="bg-[#322A2408] border-t h-20">
                            <tr className="border-b text-[#6F6963]">
                                <th className="p-2 text-center border">{t('order:order_number')}</th>
                                <th className="p-2 text-center border">{t('order:cancel_request_date')}</th>
                                <th className="p-2 text-center border">{t('order:order_status')}</th>
                                <th className="p-2 text-center border">{t('order:cancel_reason')}</th>
                                <th className="p-2 text-center border">{t('order:ordered_items')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 12 }).map((_, i) => (
                                <>
                                    <tr key={i} className="border-b h-14 text-[#1A1A1A]">
                                        <td className="p-2 text-center border">2024021012345678</td>
                                        <td className="p-2 text-center border">2024-02-10 16:15:35</td>
                                        <td className="p-2 text-center border text-[#FF3E24]">취소 요청</td>
                                        <td className="p-2 text-center border">재주문</td>
                                        <td className="p-2 border">Roland Multi Perfume</td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>

                    <div className="rounded-md p-6 space-y-3">
                        <div className="grid grid-cols-[100px_1fr] h-full m-0">
                            <div className="flex items-center justify-start p-2">
                                <Label>{t('order:enter_ship_info')}</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-2">
                                    <Select>
                                        <SelectTrigger className="w-fit min-w-35">
                                            <SelectValue placeholder={t('order:select_courier')} />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white">
                                            <SelectItem value="cj">CJ 대한통운</SelectItem>
                                            <SelectItem value="post">우체국 택배</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Input placeholder={t('order:track_number')} className="h-10" />
                                </div>
                            </div>
                        </div>
                    </div>
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