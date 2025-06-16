import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileItem } from "../../../banner/components/modal/register-attachment";
import React, { useRef } from "react";
import { X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CreateWallpaperHeader({ language, images, koTitle, setLanguage, setImages, setKoTitle, t }: { language: 'ko' | 'en', images: FileItem[], koTitle: string, setLanguage: React.Dispatch<React.SetStateAction<'ko' | 'en'>>, setImages: React.Dispatch<React.SetStateAction<FileItem[]>>, setKoTitle: React.Dispatch<React.SetStateAction<string>>, t: (key: string) => string }) {
// export default function CreateWallpaperHeader({ language, images, koTitle, enTitle, setLanguage, setImages, setKoTitle, setEnTitle, t }: { language: 'ko' | 'en', images: FileItem[], koTitle: string, enTitle: string, setLanguage: React.Dispatch<React.SetStateAction<'ko' | 'en'>>, setImages: React.Dispatch<React.SetStateAction<FileItem[]>>, setKoTitle: React.Dispatch<React.SetStateAction<string>>, setEnTitle: React.Dispatch<React.SetStateAction<string>>, t: (key: string) => string }) {
    const inputRef = useRef<HTMLInputElement | null>(null)
    // const [language, setLanguage] = useState('ko')

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
            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                    <Label className="font-semibold">{t('language')}</Label>
                </div>
                <div className="flex items-center gap-4 p-5">
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
            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                    <Label className="font-semibold">{t('wallpaper:cover_image')}</Label>
                </div>
                <div className="flex items-center gap-4 p-5">
                    <Button variant="outline" className="text-[#5E5955] !p-1" onClick={() => inputRef.current?.click()}>
                        {t('wallpaper:upload_file')}
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
            <div className="grid grid-cols-[150px_1fr]">
                <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                    {t('wallpaper:title')}
                </div>
                <div className="flex items-center gap-4 p-5">
                    <Input value={koTitle} onChange={(e) => setKoTitle(e.target.value)} placeholder={t('wallpaper:korean_title_placeholder')} />
                </div>
                {/* <div className="grid divide-y divide-gray-200">
                    <div className="p-5">
                        <Input value={koTitle} onChange={(e) => setKoTitle(e.target.value)} placeholder={t('wallpaper:korean_title_placeholder')} />
                    </div>
                    <div className="p-5">
                        <Input value={enTitle} onChange={(e) => setEnTitle(e.target.value)} placeholder={t('wallpaper:english_title_placeholder')} />
                    </div>
                </div> */}
            </div>
        </div>
    )
}