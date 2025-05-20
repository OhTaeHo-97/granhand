import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar, Clock } from "lucide-react"
import CustomCalendarWithTime from "../push/components/calendar"
import { Input } from "@/components/ui/input"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function SelectDateComponent({
    date,
    hour,
    minute,
    setDate,
    setHour,
    setMinute,
    disabledCondition,
    className
}: {
    date: Date | undefined,
    hour: number,
    minute: number,
    setDate: (value: Date) => void,
    setHour: (value: number) => void,
    setMinute: (value: number) => void,
    disabledCondition?: boolean,
    className?: string
}) {
    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon" disabled={disabledCondition}>
                            <Calendar className="w-4 h-4 text-[#C0BCB6]" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white">
                        <CustomCalendarWithTime initialDate={date} initialTime="12:00" onCancel={() => alert('취소')} onSave={(selectedDate, time) => {
                            setDate(selectedDate)
                            const times = time.split(':')
                            // setHour()
                            setHour(Number(times[0]))
                            setMinute(Number(times[1]))
                            alert(`${date?.toLocaleDateString()} ${time}`)
                        }} />
                    </PopoverContent>
                </Popover>
                <Input
                    type="text"
                    value={date ? format(date, "yyyy.MM.dd") : "날짜 선택"}
                    className={cn('text-sm px-2 py-1', className)}
                    // className={`text-sm px-2 py-1 ${type === 'scheduled' ? '' : 'bg-gray-100'}`}
                    disabled={disabledCondition}
                />
            </div>
            <div className="flex items-center gap-2 text-[#5E5955]">
                <Clock className="w-4 h-4" />
                <Input
                    type="text"
                    value={hour}
                    size={2}
                    readOnly
                    className={cn('text-sm px-2 py-1 text-center', className)}
                    // className={`text-sm px-2 py-1 text-center ${type === 'scheduled' ? '' : 'bg-gray-100'}`}
                    disabled={disabledCondition}
                />
                <span>:</span>
                <Input
                    type="text"
                    value={minute === 0 ? '00' : minute}
                    size={2}
                    readOnly
                    className={cn('text-sm px-2 py-1 text-center', className)}
                    // className={`text-sm px-2 py-1 text-center ${type === 'scheduled' ? '' : 'bg-gray-100'}`}
                    disabled={disabledCondition}
                />
            </div>
        </div>
    )
}