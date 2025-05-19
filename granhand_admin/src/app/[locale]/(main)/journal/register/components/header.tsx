import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";

export default function CreateJournalHeader({ selected, setSelected, t }: { selected: string[], setSelected: (value: string[]) => void, t: (key: string) => string }) {
    const OPTIONS = ["News", "Culture", "Life", "Team", "Essay", "Film"]

    const handleSelect = (value: string) => {
        if (!selected.includes(value)) {
            setSelected([...selected, value])
        }
    }

    const handleRemove = (value: string) => {
        setSelected(selected.filter((v) => v !== value))
    }

    return (
        <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white min-w-120">
            <div className="grid grid-cols-[150px_2fr_150px_1fr] border-b border-gray-200 h-full min-h-20">
                {/* 첫 번째 행 */}
                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 border-b h-full text-[#6F6963]">
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
                        {selected.map((item) => (
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
                <div className="border-r border-gray-200 flex items-center justify-center p-2 border-l bg-[#322A2408] border-b h-full text-[#6F6963]">
                    {t('journal:cover_image')}
                </div>
                <div className="flex items-center p-5 h-full text-[#5E5955]">
                    <Button className="border">
                        {t('journal:upload_file')}
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-[150px_1fr]">
                <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                    {t('journal:title')}
                </div>
                <div className="grid divide-y divide-gray-200">
                    <div className="p-5">
                        <Input placeholder={t('journal:korean_title_placeholder')} />
                    </div>
                    <div className="p-5">
                        <Input placeholder={t('journal:english_title_placeholder')} />
                    </div>
                </div>
            </div>
        </div>
    )
}