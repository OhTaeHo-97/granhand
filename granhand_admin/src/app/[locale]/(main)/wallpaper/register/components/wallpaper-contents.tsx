import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar, Clock, ImageUpIcon } from "lucide-react"
import CustomCalendarWithTime from "../../../push/components/calendar"
import { Input } from "@/components/ui/input"
import { format } from "date-fns"
// import { cn } from "@/lib/utils"
import dynamic from "next/dynamic"

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false })

export default function WallpaperContents({
    type,
    language,
    date,
    hour,
    minute,
    contents,
    setType,
    // setLanguage,
    setDate,
    setHour,
    setMinute,
    setContents,
    t
}: {
    type: 'immediate' | 'scheduled',
    language: 'ko' | 'en',
    date: Date | undefined,
    hour: number,
    minute: number,
    contents: string,
    setType: (value: 'immediate' | 'scheduled') => void,
    // setLanguage: (value: 'korean' | 'english') => void,
    setDate: (value: Date) => void,
    setHour: (value: number) => void,
    setMinute: (value: number) => void,
    setContents: React.Dispatch<React.SetStateAction<string>>,
    t: (key: string) => string
}) {
    console.log('language:', language)
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
                    <h2 className="font-bold text-xl text-[#5E5955] mr-6 pb-4">{t('wallpaper:write_post')}</h2>
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
                                    /> {t('wallpaper:publish_immediately')}
                                </Label>
                                <Label className="flex items-center gap-3 cursor-pointer">
                                    <RadioGroupItem
                                        value="scheduled"
                                        id="scheduled"
                                    /> {t('wallpaper:schedule_for_later')}
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
                </div>

                {/* <div className="flex items-center gap-4">
                    <RadioGroup value={language} onValueChange={setLanguage} className="flex gap-2 text-sm">
                            <Label
                                key="ko"
                                // htmlFor="korean-lang"
                                className={cn(
                                    "py-2 px-4 text-center cursor-pointer text-sm",
                                    language === "ko"
                                        ? "border-b-2 !border-[#5E5955] text-[#5E5955]"
                                        : "text-[#C0BCB6]"
                                )}
                            >
                                <RadioGroupItem value="ko" id="korean-lang" className="hidden" />
                                🇰🇷 {t('wallpaper:korean')}
                            </Label>
                            <Label
                                key="en"
                                // htmlFor="english-lang"
                                className={cn(
                                    "py-2 px-4 text-center cursor-pointer text-sm",
                                    language === "en"
                                        ? "border-b-2 !border-[#5E5955] text-[#5E5955]"
                                        : "text-[#C0BCB6]"
                                )}
                            >
                                <RadioGroupItem value="en" id="english-lang" className="hidden" />
                                🇺🇸 {t('wallpaper:english')}
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
                        value={contents}
                        onChange={(val) => setContents(val || "")}
                        preview="live"
                        className="w-full min-h-96"
                    />
                </div>
                {/* <Textarea className="resize-none min-h-screen" placeholder={t('wallpaper:enter_content')} /> */}
            </div>
        </>
    )
}