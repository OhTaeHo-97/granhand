'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar, Clock, ImageUpIcon } from "lucide-react";
import CustomCalendarWithTime from "../../../push/components/calendar";
import { format } from "date-fns";
import dynamic from "next/dynamic";
import { JournalContent } from "../../components/journal-info";
import { useState } from "react";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false })

interface JournalFormProps {
    data: JournalContent
    onChange: <K extends keyof JournalContent>(
        field: K,
        value: JournalContent[K] extends (infer U)[] ? U : JournalContent[K],
        action?: 'add' | 'remove',
        index?: number
    ) => void
}

export default function JournalContents({
    data, onChange, t
}: JournalFormProps & { t: (key: string) => string }) {
    const [openCalendar, setOpenCalendar] = useState(false)

    const handleImageUpload = async () => {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = 'image/*'

        input.onchange = async () => {
            const file = input.files?.[0]
            if(file) {
                // 서버 업로드
                // const formData = new FormData()
                // formData.append('file', file)
                // const res = await fetch('url', {
                //     method: 'POST',
                //     body: formData
                // })
                // const { url } = await res.json()

                // 업로드한 이미지 url 서버로부터 수신 및 마크다운 언어로 변경
                // const imageMarkdown = `![image](${url})`
                // 마크다운 언어로 작성하여 이미지 보여주기
                // setValue((prev) => (prev || '') + `\n${imageMarkdown}`)
            }
        }

        input.click()
    }

    return (
        <>
            <div className="flex items-end border-b mt-10">
                <div className="flex items-end gap-6 flex-grow">
                    <h2 className="font-bold text-xl text-[#5E5955] mr-6 pb-4">{t('journal:write_post')}</h2>
                    <div className="flex items-center gap-4 pb-3">
                        <RadioGroup
                            className="flex gap-4"
                            // value={type}
                            value={data.isScheduled}
                            onValueChange={(value) => onChange('isScheduled', value)}
                            aria-label="Publishing type"
                        >
                            <div className="flex items-center gap-4">
                                <Label className="flex items-center gap-3 cursor-pointer">
                                    <RadioGroupItem
                                        value="immediate"
                                        id="immediate"
                                    /> {t('journal:publish_immediately')}
                                </Label>
                                <Label className="flex items-center gap-3 cursor-pointer">
                                    <RadioGroupItem
                                        value="scheduled"
                                        id="scheduled"
                                    /> {t('journal:schedule_for_later')}
                                </Label>
                            </div>
                        </RadioGroup>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <Popover open={openCalendar} onOpenChange={setOpenCalendar}>
                                    <PopoverTrigger asChild>
                                        <Button variant="ghost" size="icon" disabled={data.isScheduled !== 'scheduled'}>
                                            <Calendar className="w-4 h-4 text-[#C0BCB6]" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 bg-white">
                                        <CustomCalendarWithTime initialDate={data.scheduleDate} initialTime={`${String(data.scheduleHour).padStart(2, '0')}:$${String(data.scheduleMinute).padStart(2, '0')}`} onCancel={() => alert('취소')} onSave={(selectedDate, time) => {
                                            onChange('scheduleDate', selectedDate)
                                            const times = time.split(':')
                                            onChange('scheduleHour', Number(times[0]))
                                            onChange('scheduleMinute', Number(times[1]))
                                            setOpenCalendar(false)
                                        }} />
                                    </PopoverContent>
                                </Popover>
                                <Input
                                    type="text"
                                    value={data.scheduleDate ? format(data.scheduleDate, "yyyy.MM.dd") : "날짜 선택"}
                                    className={`text-sm px-2 py-1 ${data.isScheduled === 'scheduled' ? '' : 'bg-gray-100'}`}
                                    disabled={data.isScheduled !== 'scheduled'}
                                />
                            </div>
                            <div className="flex items-center gap-2 text-[#5E5955]">
                                <Clock className="w-4 h-4" />
                                <Input
                                    type="text"
                                    value={String(data.scheduleHour).padStart(2, '0')}
                                    size={2}
                                    readOnly
                                    className={`text-sm px-2 py-1 text-center ${data.isScheduled === 'scheduled' ? '' : 'bg-gray-100'}`}
                                    disabled={data.isScheduled !== 'scheduled'}
                                />
                                <span>:</span>
                                <Input
                                    type="text"
                                    value={String(data.scheduleMinute).padStart(2, '0')}
                                    size={2}
                                    readOnly
                                    className={`text-sm px-2 py-1 text-center ${data.isScheduled === 'scheduled' ? '' : 'bg-gray-100'}`}
                                    disabled={data.isScheduled !== 'scheduled'}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="flex items-center gap-4">
                    <RadioGroup value={language} onValueChange={setLanguage} className="flex gap-2 text-sm">
                            <Label
                                key="korean"
                                htmlFor="korean-lang"
                                className={cn(
                                    "py-2 px-4 text-center cursor-pointer text-sm",
                                    language === "korean"
                                        ? "border-b-2 !border-[#5E5955] text-[#5E5955]"
                                        : "text-[#C0BCB6]"
                                )}
                            >
                                <RadioGroupItem value="korean" id="korean-lang" className="hidden" />
                                🇰🇷 {t('journal:korean')}
                            </Label>
                            <Label
                                key="english"
                                htmlFor="english-lang"
                                className={cn(
                                    "py-2 px-4 text-center cursor-pointer text-sm",
                                    language === "english"
                                        ? "border-b-2 !border-[#5E5955] text-[#5E5955]"
                                        : "text-[#C0BCB6]"
                                )}
                            >
                                <RadioGroupItem value="english" id="english-lang" className="hidden" />
                                🇺🇸 {t('journal:english')}
                            </Label>
                    </RadioGroup>
                </div> */}
            </div>
            <div className="mt-10">
                <div data-color-mode="light" className="w-full">
                    {/* 커스텀 툴바 */}
                    <div className="flex items-center px-2 py-1 gap-2 text-sm rounded-t-md w-full">
                        <Button
                            onClick={handleImageUpload}
                            className="!p-0 !m-0 hover:underline"
                        >
                            <ImageUpIcon size={16} /> Upload Image
                        </Button>
                    </div>
                    {/* 마크다운 에디터 */}
                    <MDEditor
                        value={data.contents}
                        onChange={(val) => onChange('contents', val || "")}
                        preview="live"
                        className="w-full min-h-96"
                    />
                </div>
            </div>
        </>
    )
}