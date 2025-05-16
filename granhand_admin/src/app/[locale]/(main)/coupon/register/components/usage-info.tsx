import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import CustomCalendarWithTime from "../../../push/components/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function UsageInfo({
    startDate,
    endDate,
    startTime,
    endTime,
    setStartDate,
    setEndDate,
    setStartTime,
    setEndTime,
    t
}: {
    startDate: Date | undefined,
    endDate: Date | undefined,
    startTime: string,
    endTime: string,
    setStartDate: (value: Date | undefined) => void,
    setEndDate: (value: Date | undefined) => void,
    setStartTime: (value: string) => void,
    setEndTime: (value: string) => void,
    t: (key: string) => string
}) {
    return (
        <section className="text-[#5E5955]">
            <h2 className="font-bold text-xl text-[#5E5955]">{t('coupon:usage_info')}</h2>

            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('coupon:valid_period')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5 w-full">
                        {/* 시작일 */}
                        <div className="relative border border-gray-300 rounded px-4 py-2 flex items-center gap-2">
                            {startDate ? format(startDate, "yyyy.MM.dd") : "날짜 선택"}
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                                        <CalendarIcon className="h-4 w-4" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 bg-white">
                                    <CustomCalendarWithTime initialDate={startDate} initialTime={startTime} onCancel={() => alert('취소')} onSave={(date, time) => {
                                        setStartDate(date)
                                        setStartTime(time)
                                        alert(`${startDate?.toLocaleDateString()} ${time}`)
                                    }} />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="relative border border-gray-300 rounded px-4 py-2 flex items-center gap-2">
                            {startTime}
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
                                    <CustomCalendarWithTime initialDate={endDate} initialTime={endTime} onCancel={() => alert('취소')} onSave={(date, time) => {
                                        setEndDate(date)
                                        setEndTime(time)
                                        alert(`${endDate?.toLocaleDateString()} ${time}`)
                                    }} />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="relative border border-gray-300 rounded px-4 py-2 flex items-center gap-2">
                            {endTime}
                        </div>

                        {/* 기간 제한 없음 체크박스 */}
                        <div className="flex items-center gap-1 ml-4">
                            {/* <input type="checkbox" disabled className="accent-gray-400" />
                            <span>기간 제한 없음</span> */}
                            <Label><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white mr-2"/>기간 제한 없음</Label>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('coupon:discount_amount')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5 w-full">
                        <Input placeholder={t('coupon:enter_amount')} className="w-20"/>원
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('coupon:minimum_amount')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5 w-full">
                        <Select defaultValue="infinite">
                            <SelectTrigger className="w-60">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="infinite">{t('coupon:no_limit')}</SelectItem>
                                <SelectItem value="limited">{t('coupon:enter_amount')}</SelectItem>
                            </SelectContent>
                        </Select>
                        <Input placeholder={t('coupon:enter_amount')} className="w-20"/>원
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('coupon:applicable_product')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5 w-full">
                        <RadioGroup defaultValue="now" className="flex gap-6">
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="granhand" /> {t('coupon:all_product')}
                            </Label>
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="comfortable" /> {t('coupon:specific_product')}
                            </Label>
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="comfortable" /> {t('coupon:excluded_product')}
                            </Label>
                        </RadioGroup>
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('coupon:usage_limit')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5 w-full">
                        동일 회원이 최대 <Input placeholder="1" className="w-10" />회 까지 사용 가능
                        <Label>
                        <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white mr-2"/>회수 제한 없음
                        </Label>
                    </div>
                </div>
            </div>
        </section>
    )
}