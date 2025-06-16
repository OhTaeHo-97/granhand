import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";
import { useRef } from "react";
import { JournalContent, JournalImageType } from "../../components/journal-info";

export interface JournalInformation {
    titleKo: string,
    titleEn: string,
    tags: string[],
    images: (File | JournalImageType)[],
    isScheduled: boolean,
    scheduleDate: Date | undefined,
    scheduleHour: number | undefined,
    scheduleMinute: number | undefined,
    language: string,
    contents: string
}

interface JournalFormProps {
    data: JournalContent
    onChange: <K extends keyof JournalContent>(
        field: K,
        value: JournalContent[K] extends (infer U)[] ? U : JournalContent[K],
        action?: 'add' | 'remove',
        index?: number
    ) => void
}

export default function CreateJournalHeader({ data, onChange, t }: JournalFormProps & { t: (key: string) => string }) {
    const OPTIONS = ["News", "Culture", "Life", "Team", "Essay", "Film"]
    const inputRef = useRef<HTMLInputElement | null>(null)
    
    const handleSelect = (value: string) => {
        if (!data.tags.includes(value)) {
            onChange('tags', value, 'add');
        }
    }

    const handleRemove = (value: string) => {
        onChange('tags', value, 'remove')
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            const file = e.target.files[0];
            onChange('images', file, 'add');
        }
    }

    const handleDelete = (index: number) => {
        onChange('images', new File([], 'temp'), 'remove', index)
    }

    return (
        <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white min-w-120">
            <div className="grid grid-cols-[150px_1fr] border-b">
                <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                    {t('language')}
                </div>
                <div className="flex items-center gap-4 p-5 text-[#231815B2]">
                    {/* <Select value={language} onValueChange={setLanguage}> */}
                    <Select value={data.language} onValueChange={(value: 'ko' | 'en') => onChange('language', value)}>
                        <SelectTrigger className="w-32 h-8 border-gray-300 data-[placeholder]:text-[#5E5955]">
                            <SelectValue placeholder={t('journal:tag_palceholder')} />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            <SelectItem value="ko">
                                {t('korean')}
                            </SelectItem>
                            <SelectItem value="en">
                                {t('english')}
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="grid grid-cols-[150px_2fr_150px_1fr] border-b border-gray-200 h-full min-h-20">
                {/* 첫 번째 행 */}
                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 h-full text-[#6F6963] font-semibold">
                    {t('journal:tag')}
                </div>
                <div className="flex gap-2 items-center p-5 h-full text-[#111111]">
                    <Select onValueChange={handleSelect}>
                        <SelectTrigger className="w-32 h-8 border-gray-300 data-[placeholder]:text-[#5E5955]">
                            <SelectValue placeholder={t('journal:tag_palceholder')} />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            {OPTIONS.map((option) => (
                                <SelectItem key={option} value={option}>
                                    {option}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <div className="flex gap-2 flex-wrap">
                        {data.tags.map((item) => (
                            <div key={item} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded">
                                <span className="text-gray-700">{item}</span>
                                <Button
                                    onClick={() => handleRemove(item)}
                                    className="text-gray-500 hover:text-black h-5 p-0"
                                >
                                    <X size={16} />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-r border-gray-200 flex items-center justify-center p-2 border-l bg-[#322A2408] h-full text-[#6F6963]">
                    {t('journal:cover_image')}
                </div>
                <div className="flex items-center gap-4 p-5 h-full text-[#5E5955]">
                    <Button
                        variant="outline"
                        className="text-[#5E5955]"
                        onClick={() => inputRef.current?.click()}
                    >
                        {t('journal:upload_file')}
                        <Input
                            ref={inputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </Button>
                    {data.images.map((img, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded">
                            <span>{img.name}</span>
                            <Button
                                onClick={() => handleDelete(idx)}
                                className="text-gray-500 hover:text-black h-5 p-0"
                            >
                                <X size={16} />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-[150px_1fr]">
                <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                    {t('journal:title')}
                </div>
                <div className="flex items-center gap-4 p-5 text-[#231815B2]">
                    <Input value={data.titleKo} onChange={(e) => onChange('titleKo', e.target.value)} placeholder={t('journal:korean_title_placeholder')} />
                </div>
            </div>
        </div>
    )
}