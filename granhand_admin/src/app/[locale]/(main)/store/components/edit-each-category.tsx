import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";
import { useRef } from "react";

export default function EditEachCategory({ images, language, handleFileChange, handleDelete, handleSave, setLanguage, setOpen, t }: { images: File[], language: 'ko' | 'en', handleFileChange: (value: React.ChangeEvent<HTMLInputElement>) => void, handleDelete: (value: number) => void, handleSave: () => void, setLanguage: React.Dispatch<React.SetStateAction<'ko' | 'en'>>, setOpen: (value: boolean) => void, t: (key: string) => string }) {
    const fileInputRef = useRef<HTMLInputElement | null>(null)

    return (
        <div className="flex-1 p-12 mt-12">
            {/* <h2 className="font-bold text-xl text-[#5E5955] mb-6">카테고리 상세</h2> */}
            {/* ... existing detail form ... */}
            <div className="border border-gray-200 text-[#6f6963] text-sm w-full min-w-120">
                <div className="grid grid-cols-[150px_1fr] border-b">
                    <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                        {t('language')}
                    </div>
                    <div className="flex items-center gap-4 p-5 text-[#231815B2]">
                        <Select value={language} onValueChange={(value: 'ko' | 'en') => setLanguage(value)}>
                            <SelectTrigger className="w-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="ko">{t('korean')}</SelectItem>
                                <SelectItem value="en">{t('english')}</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b">
                    <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                        {t('store:branch_name')}
                    </div>
                    <div className="flex items-center gap-4 p-5 text-[#231815B2]">
                        <Input className="p-4 w-[2/3]" />
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b">
                    <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                        {t('store:address')}
                    </div>
                    <div className="flex items-center gap-4 p-5 text-[#231815B2]">
                        <Input className="p-4 w-[2/3]" />
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b">
                    <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                        {t('store:visibility_setting')}
                    </div>
                    <div className="flex items-center gap-4 p-5 text-[#231815B2]">
                        <RadioGroup defaultValue="exposure" className="flex gap-6">
                            <Label className="flex items-center gap-2 min-w-20">
                            <RadioGroupItem value="exposure" /> {t('store:visible')}
                            </Label>
                            <Label className="flex items-center gap-2 min-w-20">
                            <RadioGroupItem value="hidden" /> {t('store:hidden')}
                            </Label>
                        </RadioGroup>
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b">
                    <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                        {t('store:passport')}
                    </div>
                    <div className="flex items-center gap-4 p-5 text-[#231815B2]">
                        <Button
                            variant="outline"
                            className="text-[#5E5955]"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            {t('store:attachment')}
                            <Input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </Button>
                        {images.map((img, idx) => (
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
            </div>
            <div className="flex justify-end gap-4 mt-8">
                <Button className="px-8 py-2 border rounded w-1/6" onClick={() => setOpen(false)}>{t('cancel')}</Button>
                <Button className="px-8 py-2 rounded bg-[#322A24] text-white w-1/6" onClick={handleSave}>{t('save')}</Button>
            </div>
        </div>
    )
}