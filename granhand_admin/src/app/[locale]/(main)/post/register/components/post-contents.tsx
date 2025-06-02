import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar, Clock } from "lucide-react"
import CustomCalendarWithTime from "../../../push/components/calendar"
import { Input } from "@/components/ui/input"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import { Board } from "@/hooks/use-board"

export default function PostContents({
    boardContents,
    type,
    date,
    hour,
    minute,
    setBoardContents,
    setType,
    setDate,
    setHour,
    setMinute,
    t,
}: {
    boardContents: Board,
    type: 'immediate' | 'scheduled',
    date: Date | undefined,
    hour: number,
    minute: number,
    setBoardContents: React.Dispatch<React.SetStateAction<Board>>,
    setType: (value: 'immediate' | 'scheduled') => void,
    setDate: (value: Date) => void,
    setHour: (value: number) => void,
    setMinute: (value: number) => void,
    t: (key: string) => string,
}) {
    const handleChangeLanguage = (value: string) => {
        setBoardContents((prev) => ({
            ...prev,
            language: value
        }))
    }

    const handleChangeMemo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBoardContents((prev) => ({
            ...prev,
            memo: e.target.value
        }))
    }

    return (
        <>
            <div className="flex items-end border-b mt-10">
                <div className="flex items-end gap-6 flex-grow">
                    <h2 className="font-bold text-xl text-[#5E5955] mr-6 pb-4">{t('event:write_post')}</h2>
                    {boardContents.boardid === 'event' && (
                        <div className="flex items-center gap-4 pb-3">
                            <RadioGroup
                                className="flex gap-4"
                                value={type}
                                onValueChange={setType}
                                aria-label="Publishing type"
                            >
                                <div className="flex items-center gap-4">
                                    <Label className="flex items-center gap-3 cursor-pointer">
                                        <RadioGroupItem
                                            value="immediate"
                                            id="immediate"
                                        /> {t('event:publish_immediately')}
                                    </Label>
                                    <Label className="flex items-center gap-3 cursor-pointer">
                                        <RadioGroupItem
                                            value="scheduled"
                                            id="scheduled"
                                        /> {t('event:schedule_for_later')}
                                    </Label>
                                </div>
                            </RadioGroup>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="ghost" size="icon" disabled={type !== 'scheduled'}>
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
                                        className={`text-sm px-2 py-1 ${type === 'scheduled' ? '' : 'bg-gray-100'}`}
                                        disabled={type !== 'scheduled'}
                                    />
                                </div>
                                <div className="flex items-center gap-2 text-[#5E5955]">
                                    <Clock className="w-4 h-4" />
                                    <Input
                                        type="text"
                                        value={hour}
                                        size={2}
                                        readOnly
                                        className={`text-sm px-2 py-1 text-center ${type === 'scheduled' ? '' : 'bg-gray-100'}`}
                                        disabled={type !== 'scheduled'}
                                    />
                                    <span>:</span>
                                    <Input
                                        type="text"
                                        value={minute === 0 ? '00' : minute}
                                        size={2}
                                        readOnly
                                        className={`text-sm px-2 py-1 text-center ${type === 'scheduled' ? '' : 'bg-gray-100'}`}
                                        disabled={type !== 'scheduled'}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-4">
                    <RadioGroup value={boardContents.language} onValueChange={handleChangeLanguage} className="flex gap-2 text-sm">
                            <Label
                                key="korean"
                                htmlFor="korean-lang"
                                className={cn(
                                    "py-2 px-4 text-center cursor-pointer text-sm",
                                    boardContents.language === "ko"
                                        ? "border-b-2 !border-[#5E5955] text-[#5E5955]"
                                        : "text-[#C0BCB6]"
                                )}
                            >
                                <RadioGroupItem value="ko" id="korean-lang" className="hidden" />
                                🇰🇷 {t('event:korean')}
                            </Label>
                            <Label
                                key="english"
                                htmlFor="english-lang"
                                className={cn(
                                    "py-2 px-4 text-center cursor-pointer text-sm",
                                    boardContents.language === "en"
                                        ? "border-b-2 !border-[#5E5955] text-[#5E5955]"
                                        : "text-[#C0BCB6]"
                                )}
                            >
                                <RadioGroupItem value="en" id="english-lang" className="hidden" />
                                🇺🇸 {t('event:english')}
                            </Label>
                    </RadioGroup>
                </div>
            </div>
            <div className="mt-10">
                <Textarea className="resize-none min-h-screen" value={boardContents.memo} onChange={handleChangeMemo} placeholder={t('event:enter_content')} />
            </div>
        </>
    )
}