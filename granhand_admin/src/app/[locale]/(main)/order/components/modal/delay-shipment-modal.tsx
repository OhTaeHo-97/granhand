'use client'

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon } from "lucide-react";
import CustomCalendarWithTime from "../../../push/components/calendar";
import { useState } from "react";
import { format } from "date-fns";
import { TFunction } from "i18next";

export default function DelayShipmentModal({ open, setOpen, t }: { open: boolean, setOpen: (value: boolean) => void, t: TFunction }) {
    const [scheduledDate, setScheduledDate] = useState<Date | undefined>(new Date())
    
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="max-w-lg bg-white min-w-150 min-h-80">
            <DialogHeader>
                <DialogTitle className="font-bold text-2xl text-[#111111]">{t('order:delay_shipment')}</DialogTitle>
            </DialogHeader>
            <div className="mb-6 text-[#111111] whitespace-pre-line">
                {`${t('order:process_order_confirm_msg1', { count: 1, total: 10 })}\n${t('order:process_order_confirm_msg2', { count: 1 })}`}
                <div className="bg-[#322A2408] p-4 px-8">
                    <ul className="text-[#6F6963] list-disc">
                        <li>{t('order:delay_ship_info1')}</li>
                        <li>{t('order:delay_ship_info2')}</li>
                    </ul>
                </div>
                <div className="text-[#6f6963] text-sm w-full min-w-120">
                    <div className="grid grid-cols-[130px_1fr] h-full">
                        <div className="flex items-center justify-start p-2 text-[#6F6963]">
                            <Label className="font-semibold">{t('order:expected_date')}</Label>
                        </div>
                        <div className="px-5 py-4 w-full">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-between p-2 border rounded-md">
                                    <div className="text-[#5E5955]">
                                        {scheduledDate && format(scheduledDate, "yyyy.MM.dd")}
                                    </div>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                                                <CalendarIcon className="h-4 w-4" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0 bg-white">
                                            <CustomCalendarWithTime initialDate={scheduledDate} initialTime="12:00" onCancel={() => alert('취소')} onSave={(date, time) => {
                                                setScheduledDate(date)
                                                alert(`${date?.toLocaleDateString()} ${time}`)
                                            }} />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[130px_1fr] h-full">
                        <div className="flex items-center justify-start p-2 text-[#6F6963]">
                            <Label className="font-semibold">{t('order:delay_reason')}</Label>
                        </div>
                        <div className="px-5 py-4 w-full">
                            <div className="flex items-center gap-4">
                                <Select>
                                    <SelectTrigger className="w-fit">
                                        <SelectValue placeholder={t('order:select_delay_reason')} />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="none">{t('order:select_delay_reason')}</SelectItem>
                                        <SelectItem value="prepare">{t('order:prepare_product')}</SelectItem>
                                        <SelectItem value="custom">{t('order:made_order')}</SelectItem>
                                        <SelectItem value="customer">{t('order:customer_request')}</SelectItem>
                                        <SelectItem value="scheduled">{t('order:scheduled_delivery')}</SelectItem>
                                        <SelectItem value="other">{t('order:other_reason')}</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[130px_1fr] h-full">
                        <div className="flex items-center justify-start p-2 text-[#6F6963]">
                            <Label className="font-semibold">{t('order:detail_delay_reason')}</Label>
                        </div>
                        <div className="px-5 py-4 w-full">
                            <div className="flex items-center gap-4">
                                <Textarea placeholder={t('order:detail_reason_placeholder')} className="resize-none w-full h-20" />
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