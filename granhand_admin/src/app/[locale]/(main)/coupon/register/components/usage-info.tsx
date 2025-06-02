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
import { useState } from "react"
import SelectProductModal from "./modal/select-product-modal"
import { UsageInfoType } from "../page"

export default function UsageInfo({
    usageInfo,
    setUsageInfo,
    t
}: {
    usageInfo: UsageInfoType,
    setUsageInfo: React.Dispatch<React.SetStateAction<UsageInfoType>>,
    t: (key: string) => string
}) {
    // const [applyProduct, setApplyProduct] = useState('all_product')
    const [openSelectProduct, setOpenSelectProduct] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    const [modalNotes, setModalNotes] = useState<string[]>([])

    const handleDateChange = (category: string, date: Date) => {
        setUsageInfo({
            ...usageInfo,
            [category === 'start' ? 'startDate': 'endDate']: date
        })
    }

    const handleHourChange = (category: string, hour: string) => {
        setUsageInfo({
            ...usageInfo,
            [category === 'start' ? 'startHour': 'endHour']: Number(hour)
        })
    }

    const handleMinuteChange = (category: string, minute: string) => {
        setUsageInfo({
            ...usageInfo,
            [category === 'start' ? 'startMinute': 'endMinute']: Number(minute)
        })
    }

    const handleCheckedChange = (key: string, checked: boolean | 'indeterminate') => {
        setUsageInfo({
            ...usageInfo,
            [key]: checked === true ? 'Y' : 'N'
        })
    }

    const numberKeys = ['discountAmount', 'minAmount', 'useCount']
    const handleValueChage = (key: string, value: string) => {
        setUsageInfo({
            ...usageInfo,
            [key]: numberKeys.includes(key) ? Number(value) : value
        })
    }

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
                            {usageInfo.startDate ? format(usageInfo.startDate, "yyyy.MM.dd") : "날짜 선택"}
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                                        <CalendarIcon className="h-4 w-4" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 bg-white">
                                    <CustomCalendarWithTime
                                        initialDate={usageInfo.startDate}
                                        // initialTime={startTime}
                                        initialTime={`${String(usageInfo.startHour).padStart(2, '0')}:${String(usageInfo.startMinute).padStart(2, '0')}`}
                                        onCancel={() => alert('취소')}
                                        onSave={(date, time) => {
                                            handleDateChange('start', date)
                                            const times = time.split('?')
                                            handleHourChange('start', times[0])
                                            handleMinuteChange('start', times[1])
                                            // alert(`${startDate?.toLocaleDateString()} ${time}`)
                                        }}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="relative border border-gray-300 rounded px-4 py-2 flex items-center gap-2">
                            {`${String(usageInfo.startHour).padStart(2, '0')}:${String(usageInfo.startMinute).padStart(2, '0')}`}
                        </div>
                        <span>~</span>
                        <div className="relative border border-gray-300 rounded px-4 py-2 flex items-center gap-2">
                            {usageInfo.endDate ? format(usageInfo.endDate, "yyyy.MM.dd") : "날짜 선택"}
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                                        <CalendarIcon className="h-4 w-4" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    {/* <Calendar mode="single" selected={endDate} onSelect={setEndDate}></Calendar> */}
                                    <CustomCalendarWithTime
                                        initialDate={usageInfo.endDate}
                                        initialTime={`${String(usageInfo.endHour).padStart(2, '0')}:${String(usageInfo.endMinute).padStart(2, '0')}`}
                                        onCancel={() => alert('취소')}
                                        onSave={(date, time) => {
                                            handleDateChange('end', date)
                                            const times = time.split('?')
                                            handleHourChange('end', times[0])
                                            handleMinuteChange('end', times[1])
                                            // setEndDate(date)
                                            // setEndTime(time)
                                            // alert(`${endDate?.toLocaleDateString()} ${time}`)
                                        }}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="relative border border-gray-300 rounded px-4 py-2 flex items-center gap-2">
                            {`${String(usageInfo.endHour).padStart(2, '0')}:${String(usageInfo.endMinute).padStart(2, '0')}`}
                        </div>

                        {/* 기간 제한 없음 체크박스 */}
                        <div className="flex items-center gap-1 ml-4 min-w-30">
                            {/* <input type="checkbox" disabled className="accent-gray-400" />
                            <span>기간 제한 없음</span> */}
                            <Label><Checkbox id="no_limit_period" checked={usageInfo.isNoLimit === 'Y'} onCheckedChange={(checked) => handleCheckedChange('isNoLimit', checked)} className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white mr-2" />기간 제한 없음</Label>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('coupon:discount_amount')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5 w-full">
                        <Input type="number" value={usageInfo.discountAmount} onChange={(e) => handleValueChage('discountAmount', e.target.value)} placeholder={t('coupon:enter_amount')} className="w-28"/>원
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('coupon:minimum_amount')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5 w-full">
                        <Select value={usageInfo.hasMinAmount} onValueChange={(value: string) => handleValueChage('hasMinAmount', value)}>
                            <SelectTrigger className="w-60">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="infinite">{t('coupon:no_limit')}</SelectItem>
                                <SelectItem value="limited">{t('coupon:enter_amount')}</SelectItem>
                            </SelectContent>
                        </Select>
                        <Input type="number" value={usageInfo.minAmount} onChange={(e) => handleValueChage('minAmount', e.target.value)} placeholder={t('coupon:enter_amount')} className="w-28"/>원
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('coupon:applicable_product')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5 w-full">
                        <RadioGroup value={usageInfo.applyProduct} onValueChange={(value: string) => {
                            handleValueChage('applyProduct', value)
                            // setApplyProduct(value)
                            
                            if(value === 'specific_product') {
                                setModalTitle('products_for_coupon_application')
                                const notes = ['coupon_application_note1', 'coupon_application_note2']
                                setModalNotes(notes)
                                setOpenSelectProduct(true)
                            } else if(value === 'excluded_product') {
                                setModalTitle('products_exclude_coupon_application')
                                const notes = ['coupon_exclude_note1', 'coupon_exclude_note2']
                                setModalNotes(notes)
                                setOpenSelectProduct(true)
                            }
                        }} className="flex gap-6">
                            <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="all_product" /> {t('coupon:all_product')}
                            </Label>
                            <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="specific_product" /> {t('coupon:specific_product')}
                            </Label>
                            <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="excluded_product" /> {t('coupon:excluded_product')}
                            </Label>
                        </RadioGroup>
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('coupon:usage_limit')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5 w-full">
                        동일 회원이 최대 <Input type="number" value={usageInfo.useCount} onChange={(e) => handleValueChage('useCount', e.target.value)} placeholder="1" className="w-16" />회 까지 사용 가능
                        <Label>
                        <Checkbox id="has_usage_limit" checked={usageInfo.hasUsageLimit === 'Y'} onCheckedChange={(checked) => handleCheckedChange('hasUsageLimit', checked)} className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white mr-2"/>회수 제한 없음
                        </Label>
                    </div>
                </div>
            </div>
            <SelectProductModal title={modalTitle} open={openSelectProduct} setOpen={setOpenSelectProduct} notes={modalNotes} />
        </section>
    )
}