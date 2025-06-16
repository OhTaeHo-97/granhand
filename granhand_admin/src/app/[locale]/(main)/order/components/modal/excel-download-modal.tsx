import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import PeriodElement from "../../../components/period"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function ExcelDownloadModal({ isOrder=false, open, setOpen, t }: { isOrder?: boolean, open: boolean, setOpen: (value: boolean) => void, t: (key: string) => string }) {
    const [startDate, setStartDate] = useState<Date | undefined>(new Date())
    const [endDate, setEndDate] = useState<Date | undefined>(new Date())
    const [quickRange, setQuickRange] = useState('')

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="max-w-lg bg-white min-w-240 min-h-80">
            <DialogHeader>
                <DialogTitle className="font-bold text-2xl text-[#111111]">{t('excel_down')}</DialogTitle>
            </DialogHeader>
            <div className="mb-6 text-[#111111] whitespace-pre-line border">
                <div className="text-[#6f6963] text-sm w-full min-w-120">
                    <div className="grid grid-cols-[100px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                            <Label className="font-semibold">{t('order_date')}</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <PeriodElement startDate={startDate} endDate={endDate} quickRange={quickRange} setStartDate={setStartDate} setEndDate={setEndDate} setQuickRange={setQuickRange} t={t} />
                        </div>
                    </div>
                    {isOrder && (
                        <div className="grid grid-cols-[100px_1fr] border-b border-gray-200 h-full">
                            <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                                <Label className="font-semibold">{t('order:order_status')}</Label>
                            </div>
                            <div className="flex items-center gap-4 p-5">
                                <Select>
                                    <SelectTrigger className="w-fit">
                                        <SelectValue placeholder={t('order:select_order_status')} />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="none">{t('order:select_order_status')}</SelectItem>
                                        <SelectItem value="wait">{t('order:awaiting_payment')}</SelectItem>
                                        <SelectItem value="paid">{t('order:payment_completed')}</SelectItem>
                                        <SelectItem value="prepare_ship">{t('order:prepare_ship')}</SelectItem>
                                        <SelectItem value="ship">{t('order:in_transit')}</SelectItem>
                                        <SelectItem value="delay_ship">{t('order:delivery_delayed')}</SelectItem>
                                        <SelectItem value="shipped">{t('order:delivered')}</SelectItem>
                                        <SelectItem value="confirmed">{t('order:confirm_purchase')}</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    )}
                    <div className="grid grid-cols-[100px_1fr] h-full">
                        <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                            <Label className="font-semibold">{t('file_format')}</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <Select>
                                <SelectTrigger className="w-fit">
                                    <SelectValue placeholder={t('select_file_format')} />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="none">{t('select_file_format')}</SelectItem>
                                    <SelectItem value="korean">{t('domestic_format')}</SelectItem>
                                    <SelectItem value="foreign">{t('international_format')}</SelectItem>
                                </SelectContent>
                            </Select>
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