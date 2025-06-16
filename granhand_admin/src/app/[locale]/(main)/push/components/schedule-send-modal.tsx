'use client'

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { useState } from "react";
import CustomCalendarWithTime from "./calendar";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";

const TIMES = () => {
    const startHour = 9;
    const endHour = 18;
    const interval = 10;

    const times: string[] = [];

    for (let hour = startHour; hour <= endHour; hour++) {
        for (let min = 0; min < 60; min += interval) {
        if (hour === endHour && min > 0) break; // 18:00까지만 포함
        const h = String(hour).padStart(2, '0');
        const m = String(min).padStart(2, '0');
        times.push(`${h}:${m}`);
        }
    }

    return times;
}

export default function ScheduleSendModal({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'push')
    const [startDate, setStartDate] = useState<Date | undefined>(new Date())
    const [startHour, setStartHour] = useState(new Date().getHours())
    const [startMinute, setStartMinute] = useState(new Date().getMinutes())
    const [endDate, setEndDate] = useState<Date | undefined>(new Date())
    const [endHour, setEndHour] = useState(new Date().getHours())
    const [endMinute, setEndMinute] = useState(new Date().getMinutes())
    const [openSendCalendar, setOpenSendCalendar] = useState(false)
    const [openEndCalendar, setOpenEndCalendar] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="bg-white max-w-130 min-h-80 w-full overflow-auto mx-auto">
            <DialogHeader>
                <DialogTitle><span className="font-bold text-2xl text-[#111111]">{t('schedule_send')}</span></DialogTitle>
            </DialogHeader>
            <div className="mt-8 text-[#111111]">
                <div className="space-y-6 mt-8">
                    <Label className="font-semibold block">
                        <h2 className="font-bold text-xl text-[#5E5955]">{t('send_date')}</h2>
                        <Popover open={openSendCalendar} onOpenChange={setOpenSendCalendar}>
                            <PopoverTrigger asChild>
                                <Button variant="ghost" className="pl-0 ml-0 mt-3">
                                    <Input type="text" className="h-14 w-100" readOnly value={`${startDate && format(startDate, "yyyy.MM.dd")} ${startHour} : ${startMinute}`} />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-white">
                                <CustomCalendarWithTime initialDate={startDate} initialTime={`${startDate?.getHours()}:${startDate?.getMinutes()}`} onCancel={() => setOpenSendCalendar(false)} onSave={(selectedDate, time) => {
                                    setStartDate(selectedDate)
                                    const times = time.split(':')
                                    // setHour()
                                    setStartHour(Number(times[0]))
                                    setStartMinute(Number(times[1]))
                                    alert(`${startDate?.toLocaleDateString()} ${time}`)
                                    setOpenSendCalendar(false)
                                }} />
                            </PopoverContent>
                        </Popover>
                    </Label>
                </div>
                <div className="space-y-6 mt-14">
                    <Label className="font-semibold block">
                        <h2 className="font-bold text-xl text-[#5E5955]">{t('repeat')}</h2>
                    </Label>
                    <div>
                        <Label className="block">
                            <h3 className="text-base text-[#5E5955]">{t('repeat_interval')}</h3>
                            <div className="flex gap-4 mt-3">
                                <Select>
                                    <SelectTrigger className="w-fit">
                                        <SelectValue placeholder={t('interval')} className="text-[#111111]" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="daily">{t('daily')}</SelectItem>
                                        <SelectItem value="weekly">{t('weekly')}</SelectItem>
                                        <SelectItem value="monthly">{t('monthly')}</SelectItem>
                                        <SelectItem value="annually">{t('yearly')}</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger className="w-fit">
                                        <SelectValue placeholder={t('day')} className="text-[#111111]" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="mon">{t('mon')}</SelectItem>
                                        <SelectItem value="tue">{t('tue')}</SelectItem>
                                        <SelectItem value="wen">{t('wed')}</SelectItem>
                                        <SelectItem value="thu">{t('thu')}</SelectItem>
                                        <SelectItem value="fri">{t('fri')}</SelectItem>
                                        <SelectItem value="sat">{t('sat')}</SelectItem>
                                        <SelectItem value="sun">{t('sun')}</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger className="w-fit">
                                        <SelectValue placeholder={t('time')} className="text-[#111111]" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        {TIMES().map((time) => (
                                            <SelectItem key={time} value={time} className="px-3 py-2 /cursor-pointer">{time}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </Label>
                    </div>
                </div>
                <div className="space-y-6 mt-8">
                    <Label className="block">
                        <h3 className="text-base text-[#5E5955]">{t('end_date')}</h3>
                        <Popover open={openEndCalendar} onOpenChange={setOpenEndCalendar}>
                            <PopoverTrigger asChild>
                                <Button variant="ghost" className="pl-0 ml-0 mt-3">
                                    <Input type="text" className="h-14 w-100" readOnly value={`${endDate && format(endDate, "yyyy.MM.dd")} ${endHour} : ${endMinute}`} />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-white">
                                <CustomCalendarWithTime initialDate={endDate} initialTime={`${endDate?.getHours()}:${endDate?.getMinutes()}`} onCancel={() => setOpenEndCalendar(false)} onSave={(selectedDate, time) => {
                                    setEndDate(selectedDate)
                                    const times = time.split(':')
                                    // setHour()
                                    setEndHour(Number(times[0]))
                                    setEndMinute(Number(times[1]))
                                    alert(`${endDate?.toLocaleDateString()} ${time}`)
                                    setOpenEndCalendar(false)
                                }} />
                            </PopoverContent>
                        </Popover>
                    </Label>
                </div>
            </div>
            <DialogFooter className="!flex !items-center !justify-center">
                <Button variant="outline" className="text-[#322A24] w-1/6" onClick={() => setOpen(false)}>취소</Button>
                <Button className="bg-[#322A24] text-white rounded px-6 py-1 flex items-center gap-1 w-1/6" onClick={() => setOpen(false)}>저장</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}