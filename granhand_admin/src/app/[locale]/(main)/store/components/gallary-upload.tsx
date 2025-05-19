'use client'

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";
import { useRef, useState } from "react";

export default function GallaryUpload({ open, setOpen, t }: { open: boolean, setOpen: (value: boolean) => void, t: (key: string) => string }) {
    const [images, setImages] = useState<File[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null)
    

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setImages((prev) => [...prev, e.target.files![0]])
        }
    }

    const handleDelete = (index: number) => {
        setImages((prev) => prev.filter((_, i) => i !== index))
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-white !min-w-fit !min-h-fit">
                <div className="w-full h-full overflow-y-auto p-8">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-[#5E5955]">{t('store:gallery_upload')}</DialogTitle>
                    </DialogHeader>
                    <div className="text-[#6F6963] text-sm w-full bg-white min-w-120 mt-5">
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-center p-2">
                                <Label className="font-semibold">{t('store:category')}</Label>
                            </div>
                            <div className="flex items-center gap-4 p-5">
                                <Select>
                                    <SelectTrigger className="w-fit">
                                        <SelectValue placeholder={t('store:sub_category')} className="text-[#322A24] data-[placeholder]:text-[#C0BCB6]" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="granhand">그랑핸드</SelectItem>
                                        <SelectItem value="komfortabel">콤포타블</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger className="w-fit">
                                        <SelectValue placeholder={t('store:detail_category')} className="text-[#322A24] data-[placeholder]:text-[#C0BCB6]" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="gwanghwa">광화문</SelectItem>
                                        <SelectItem value="dosan">도산</SelectItem>
                                        <SelectItem value="namsan">남산</SelectItem>
                                        <SelectItem value="mapo">마포</SelectItem>
                                        <SelectItem value="seochon">서촌</SelectItem>
                                        <SelectItem value="sogyek">소격</SelectItem>
                                        <SelectItem value="bukchon">북촌</SelectItem>
                                        <SelectItem value="seokyo">서교</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-center p-2">
                                <Label className="font-semibold">{t('store:attachment')}</Label>
                            </div>
                            <div className="flex items-center gap-4 p-5">
                                <Button
                                    variant="outline"
                                    className="text-[#5E5955]"
                                    onClick={() => inputRef.current?.click()}
                                >
                                    {t('store:attachment')}
                                    <Input
                                        ref={inputRef}
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

                                {/* <Input type="text" placeholder={t('challenge:challenge_name_placeholder')} /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <div className="flex justify-center gap-4">
                        <Button variant="outline" className="w-1/6 text-[#322A24] hover:bg-[#322A2408] p-6 min-w-fit" onClick={() => setOpen(false)}>{t('cancel')}</Button>
                        <Button className="w-1/6 bg-[#322A24] text-white hover:bg-[#322A2408] p-6 min-w-fit" onClick={() => setOpen(false)}>{t('store:upload')}</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}