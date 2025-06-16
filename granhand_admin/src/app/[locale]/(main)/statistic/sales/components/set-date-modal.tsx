'use client'

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { useState } from "react";
import CustomCalendarWithTime from "../../../push/components/calendar";

// const TIMES = () => {
//     const startHour = 9;
//     const endHour = 18;
//     const interval = 10;

//     const times: string[] = [];

//     for (let hour = startHour; hour <= endHour; hour++) {
//         for (let min = 0; min < 60; min += interval) {
//         if (hour === endHour && min > 0) break; // 18:00까지만 포함
//         const h = String(hour).padStart(2, '0');
//         const m = String(min).padStart(2, '0');
//         times.push(`${h}:${m}`);
//         }
//     }

//     return times;
// }

export default function SetDateModal({ startDate, endDate, open, setStartDate, setEndDate, setOpen }: { startDate: Date | undefined, endDate: Date | undefined, open: boolean, setStartDate: React.Dispatch<React.SetStateAction<Date | undefined>>, setEndDate: React.Dispatch<React.SetStateAction<Date | undefined>>, setOpen: (value: boolean) => void }) {
    // const [startDate, setStartDate] = useState<Date | undefined>(new Date())
    // const [startHour, setStartHour] = useState(new Date().getHours())
    // const [startMinute, setStartMinute] = useState(new Date().getMinutes())
    // const [endDate, setEndDate] = useState<Date | undefined>(new Date())
    // const [endHour, setEndHour] = useState(new Date().getHours())
    // const [endMinute, setEndMinute] = useState(new Date().getMinutes())
    const [openStartCalendar, setOpenStartCalendar] = useState(false)
    const [openEndCalendar, setOpenEndCalendar] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="bg-white max-w-130 min-h-80 w-full overflow-auto mx-auto">
            <DialogHeader>
                <DialogTitle><span className="font-bold text-2xl text-[#111111]">날짜 선택</span></DialogTitle>
            </DialogHeader>
            <div className="mt-8 text-[#111111]">
                <div className="space-y-6 mt-8">
                    <Label className="font-semibold block">
                        <h2 className="font-bold text-xl text-[#5E5955]">시작 일자</h2>
                        <Popover open={openStartCalendar} onOpenChange={setOpenStartCalendar}>
                            <PopoverTrigger asChild>
                                <Button variant="ghost" className="pl-0 ml-0 mt-3">
                                    <Input type="text" className="h-14 w-100" readOnly value={`${startDate && format(startDate, "yyyy.MM.dd")}`} />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-white">
                                <CustomCalendarWithTime needTime={false} initialDate={startDate} onCancel={() => setOpenStartCalendar(false)} onSave={(selectedDate) => {
                                    setStartDate(selectedDate)
                                    setOpenStartCalendar(false)
                                }} />
                            </PopoverContent>
                        </Popover>
                    </Label>
                </div>
                <div className="space-y-6 mt-8">
                    <Label className="block">
                        <h3 className="text-base text-[#5E5955]">종료 일자</h3>
                        <Popover open={openEndCalendar} onOpenChange={setOpenEndCalendar}>
                            <PopoverTrigger asChild>
                                <Button variant="ghost" className="pl-0 ml-0 mt-3">
                                    <Input type="text" className="h-14 w-100" readOnly value={`${endDate && format(endDate, "yyyy.MM.dd")}`} />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-white">
                                <CustomCalendarWithTime needTime={false} initialDate={endDate} onCancel={() => setOpenEndCalendar(false)} onSave={(selectedDate) => {
                                    setEndDate(selectedDate)
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