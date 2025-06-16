'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { EventInfo } from "./event-contents";
import { useRef } from "react";
import { X } from "lucide-react";
import { FileItem } from "../../../banner/components/modal/register-attachment";

// export default function CreateEventHeader({ eventInfo, images, koTitle, enTitle, setImages, setKoTitle, setEnTitle, t }: { eventInfo?: EventInfo, images: FileItem[], koTitle: string, enTitle: string, setImages: React.Dispatch<React.SetStateAction<FileItem[]>>, setKoTitle: React.Dispatch<React.SetStateAction<string>>, setEnTitle: React.Dispatch<React.SetStateAction<string>>, t: (key: string) => string }) {
export default function CreateEventHeader({ images, koTitle, enTitle, setImages, setKoTitle, setEnTitle, t }: { images: FileItem[], koTitle: string, enTitle: string, setImages: React.Dispatch<React.SetStateAction<FileItem[]>>, setKoTitle: React.Dispatch<React.SetStateAction<string>>, setEnTitle: React.Dispatch<React.SetStateAction<string>>, t: (key: string) => string }) {
    // const [images, setImages] = useState<FileItem[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files)

            const filesWithPreview: FileItem[] = filesArray.map((file) => {
                const localId = `${file.name}-${file.size}-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`
                const previewUrl = URL.createObjectURL(file)
                return {
                    file: file,
                    localId: localId,
                    previewUrl: previewUrl,
                } as FileItem
            })
            setImages((prevFiles) => [...prevFiles, ...filesWithPreview])
            e.target.value = ''
        }
    }

    const handleDelete = (index: number) => {
        setImages((prev) => prev.filter((_, i) => i !== index))
    }

    return (
        <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white min-w-120">
            {/* <div className="grid grid-cols-[150px_2fr_150px_1fr] border-b border-gray-200 h-full min-h-20"> */}
            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                    <Label className="font-semibold">{t('event:cover_image')}</Label>
                </div>
                {/* <div className="flex items-center p-5 h-full text-[#5E5955]">
                    <Button className="border">
                        {t('journal:upload_file')}
                    </Button>
                </div> */}
                <div className="flex items-center gap-4 p-5">
                    <Button variant="outline" className="text-[#5E5955] !p-1" onClick={() => inputRef.current?.click()}>
                        {t('event:upload_file')}
                        <Input
                            ref={inputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </Button>
                    {images.map((img, idx) => (
                        <div key={img.localId} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded">
                            <span>{img.file.name}</span>
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

                {/* <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 border-b h-full text-[#6F6963]">
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
                </div> */}
            {/* </div> */}
            <div className="grid grid-cols-[150px_1fr]">
                <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                    {t('event:title')}
                </div>
                <div className="grid divide-y divide-gray-200">
                    <div className="p-5">
                        <Input value={koTitle} onChange={(e) => setKoTitle(e.target.value)} placeholder={t('event:korean_title_placeholder')} />
                    </div>
                    <div className="p-5">
                        <Input value={enTitle} onChange={(e) => setEnTitle(e.target.value)} placeholder={t('event:english_title_placeholder')} />
                    </div>
                </div>
            </div>
        </div>
    )
}