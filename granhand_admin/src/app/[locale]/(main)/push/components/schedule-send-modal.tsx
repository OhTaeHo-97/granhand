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
    const [startDate, setStartDate] = useState<Date | undefined>(new Date())
    const [startHour, setStartHour] = useState(new Date().getHours())
    const [startMinute, setStartMinute] = useState(new Date().getMinutes())
    const [endDate, setEndDate] = useState<Date | undefined>(new Date())
    const [endHour, setEndHour] = useState(new Date().getHours())
    const [endMinute, setEndMinute] = useState(new Date().getMinutes())

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="bg-white max-w-130 min-h-80 w-full overflow-auto mx-auto">
            <DialogHeader>
                <DialogTitle><span className="font-bold text-2xl text-[#111111]">예약 발송</span></DialogTitle>
            </DialogHeader>
            <div className="mt-8 text-[#111111]">
                <div className="space-y-6 mt-8">
                    <Label className="font-semibold block">
                        <h2 className="font-bold text-xl text-[#5E5955]">발송 일자</h2>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="ghost" className="pl-0 ml-0 mt-3">
                                    <Input type="text" className="h-14 w-100" readOnly value={`${startDate && format(startDate, "yyyy.MM.dd")} ${startHour} : ${startMinute}`} />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-white">
                                <CustomCalendarWithTime initialDate={startDate} initialTime={`${startDate?.getHours()}:${startDate?.getMinutes()}`} onCancel={() => alert('취소')} onSave={(selectedDate, time) => {
                                    setStartDate(selectedDate)
                                    const times = time.split(':')
                                    // setHour()
                                    setStartHour(Number(times[0]))
                                    setStartMinute(Number(times[1]))
                                    alert(`${startDate?.toLocaleDateString()} ${time}`)
                                }} />
                            </PopoverContent>
                        </Popover>
                    </Label>
                </div>
                <div className="space-y-6 mt-14">
                    <Label className="font-semibold block">
                        <h2 className="font-bold text-xl text-[#5E5955]">반복 여부</h2>
                    </Label>
                    <div>
                        <Label className="block">
                            <h3 className="text-base text-[#5E5955]">반복 주기</h3>
                            <div className="flex gap-4 mt-3">
                                <Select>
                                    <SelectTrigger className="w-fit">
                                        <SelectValue placeholder="주기" className="text-[#111111]" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="daily">매일</SelectItem>
                                        <SelectItem value="weekly">매주</SelectItem>
                                        <SelectItem value="monthly">매월</SelectItem>
                                        <SelectItem value="annually">매년</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger className="w-fit">
                                        <SelectValue placeholder="요일" className="text-[#111111]" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="mon">월</SelectItem>
                                        <SelectItem value="tue">화</SelectItem>
                                        <SelectItem value="wen">수</SelectItem>
                                        <SelectItem value="thu">목</SelectItem>
                                        <SelectItem value="fri">금</SelectItem>
                                        <SelectItem value="sat">토</SelectItem>
                                        <SelectItem value="sun">일</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger className="w-fit">
                                        <SelectValue placeholder="시간" className="text-[#111111]" />
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
                        <h3 className="text-base text-[#5E5955]">종료 일정</h3>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="ghost" className="pl-0 ml-0 mt-3">
                                    <Input type="text" className="h-14 w-100" readOnly value={`${endDate && format(endDate, "yyyy.MM.dd")} ${endHour} : ${endMinute}`} />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-white">
                                <CustomCalendarWithTime initialDate={endDate} initialTime={`${endDate?.getHours()}:${endDate?.getMinutes()}`} onCancel={() => alert('취소')} onSave={(selectedDate, time) => {
                                    setEndDate(selectedDate)
                                    const times = time.split(':')
                                    // setHour()
                                    setEndHour(Number(times[0]))
                                    setEndMinute(Number(times[1]))
                                    alert(`${endDate?.toLocaleDateString()} ${time}`)
                                }} />
                            </PopoverContent>
                        </Popover>
                    </Label>
                </div>
            </div>
            <DialogFooter className="!flex !items-center !justify-center">
                <Button variant="outline" className="text-[#322A24] w-1/6">취소</Button>
                <Button className="bg-[#322A24] text-white rounded px-6 py-1 flex items-center gap-1 w-1/6">저장</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}