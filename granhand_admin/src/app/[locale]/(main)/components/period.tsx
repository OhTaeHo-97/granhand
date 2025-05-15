import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import CustomCalendarWithTime from "../push/components/calendar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export default function PeriodElement({
    startDate,
    endDate,
    quickRange,
    setStartDate,
    setEndDate,
    setQuickRange,
    t
}: {
    startDate: Date | undefined,
    endDate: Date | undefined,
    quickRange: string,
    setStartDate: (value: Date) => void,
    setEndDate: (value: Date) => void,
    setQuickRange: (value:string) => void,
    t: (key: string) => string
}) {
    const quickRanges = [
        { label: t('push:today'), value: 'today' },
        { label: t('push:last_3_days'), value: 'last_3_days' },
        { label: t('push:last_7_days'), value: 'last_7_days' },
        { label: t('push:last_1_month'), value: 'last_1_month' }
    ]

    return (
        <>
            <div className="flex border border-gray-300 divide-x divide-gray-300 rounded overflow-hidden">
                <div className="flex flex-col space-y-4">
                    <RadioGroup
                        value={quickRange}
                        onValueChange={setQuickRange}
                        // className="flex text-sm"
                        className="inline-flex border rounded overflow-hidden !gap-0"
                    >
                        {quickRanges.map(({ value, label }, idx) => (
                            <Label
                                key={value}
                                className={cn(
                                    "py-2 px-4 text-center cursor-pointer text-sm border-0 border-l border-gray-200",
                                    idx === 0 && "border-l-0",
                                    quickRange === value
                                        ? "bg-[#C0BCB6] text-white"
                                        : "text-[#5E5955]"
                                )}
                            >
                                <RadioGroupItem value={value} className="hidden" />
                                {label}
                            </Label>
                        ))}
                    </RadioGroup>
                </div>
            </div>
            <div className="relative border border-gray-300 rounded px-4 py-2 flex items-center gap-2">
                {startDate ? format(startDate, "yyyy.MM.dd") : "날짜 선택"}
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                            <CalendarIcon className="h-4 w-4" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white">
                        <CustomCalendarWithTime initialDate={startDate} initialTime="12:00" onCancel={() => alert('취소')} onSave={(date, time) => {
                            setStartDate(date)
                            alert(`${startDate?.toLocaleDateString()} ${time}`)
                        }} />
                    </PopoverContent>
                </Popover>
            </div>
            <span>~</span>
            <div className="relative border border-gray-300 rounded px-4 py-2 flex items-center gap-2">
                {endDate ? format(endDate, "yyyy.MM.dd") : "날짜 선택"}
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                            <CalendarIcon className="h-4 w-4" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        {/* <Calendar mode="single" selected={endDate} onSelect={setEndDate}></Calendar> */}
                        <CustomCalendarWithTime initialDate={endDate} initialTime="12:00" onCancel={() => alert('취소')} onSave={(date, time) => {
                            setEndDate(date)
                            alert(`${endDate?.toLocaleDateString()} ${time}`)
                        }} />
                    </PopoverContent>
                </Popover>
            </div>
        </>
    )
}