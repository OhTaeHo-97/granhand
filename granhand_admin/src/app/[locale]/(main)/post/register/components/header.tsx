'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Board } from "@/hooks/use-board";
import { PostCategory } from "../../page";

interface FileItem {
    file: File
    previewUrl: string
    localId: string
}

export default function CreatePostHeader({ categories, boardContents, setBoardContents, t }: { categories: PostCategory[], boardContents: Board, setBoardContents: React.Dispatch<React.SetStateAction<Board>>, t: (key: string) => string }) {
    const [images, setImages] = useState<FileItem[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleChangeCategory = (category: string) => {
        setBoardContents((prev) => ({
            ...prev,
            boardid: category
        }))
    }

    const handleChangeLanguage = (language: 'ko' | 'en') => {
        setBoardContents((prev) => ({
            ...prev,
            language: language
        }))
    }

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBoardContents((prev) => ({
            ...prev,
            subject: e.target.value
        }) )
    }

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
            <div className="grid grid-cols-[150px_1fr_150px_1fr] border-b border-gray-200 h-full">
                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                    <Label className="font-semibold">{t('post:category')}</Label>
                </div>
                <div className="flex items-center gap-4 p-5">
                    <Select value={boardContents.boardid} onValueChange={handleChangeCategory}>
                        <SelectTrigger className="w-fit">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            {categories.map((category) => (
                                <SelectItem key={category.id} value={`${category.id}`}>{category.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="bg-[#322A2408] border-l border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                    <Label className="font-semibold">{t('language')}</Label>
                </div>
                <div className="flex items-center gap-4 p-5">
                    <Select value={boardContents.language} onValueChange={(language: 'ko' | 'en') => handleChangeLanguage(language)}>
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
            {boardContents.boardid === 'event' && (
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('event:cover_image')}</Label>
                    </div>
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
            )}
            <div className="grid grid-cols-[150px_1fr]">
                <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                    {t('event:title')}
                </div>
                <div className="flex items-center gap-4 p-5">
                    <Input value={boardContents.subject} onChange={handleChangeTitle} placeholder={t('event:korean_title_placeholder')} />
                </div>
            </div>
        </div>
    )
}