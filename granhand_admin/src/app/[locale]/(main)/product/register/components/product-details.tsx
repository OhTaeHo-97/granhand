import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";
// import Image from "next/image";
import { useState } from "react";
import ImageList, { ImageItem } from "./image-list";

interface ProductDetailsProps {
    data: {
        details: string,
        images: ImageItem[]
    },
    onChange: (field: string, value: any) => void
}

export default function ProductDetails({ data, onChange, t }: ProductDetailsProps & { t: (key: string) => string }) {
    const [language, setLanguage] = useState('korean')
    // const [images, setImages] = useState<ImageItem[]>([])
    const [editingImageId, setEditingImageId] = useState<string | null>(null)

    const setImages: React.Dispatch<React.SetStateAction<ImageItem[]>> = (value) => {
        if (typeof value === 'function') {
            onChange('images', value(data.images));
        } else {
            onChange('images', value);
        }
    }

    return (
        <section className="mb-8">
            <div className="flex items-end border-b mt-10">
                <div className="flex items-end gap-6 flex-grow">
                    <h2 className="font-bold text-xl text-[#5E5955] mr-6 pb-8">{t('product:product_details')}</h2>
                </div>
                <div className="flex items-center gap-4">
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
                </div>
            </div>
            {/* <h2 className="font-bold text-xl text-[#5E5955]">{t('product:product_details')}</h2> */}

            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178 divide-y divide-gray-200">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:detailed_description')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Textarea className="resize-none" value={data.details} onChange={(e) => onChange('details', e.target.value)} />
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr]">
                    <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                        {t('product:detail_images')}
                    </div>
                    <div className="p-4 h-full">
                        {/* <div className="flex gap-4 flex-wrap">
                        {/* 이미지 + 버튼 1 */}
                        <div className="flex gap-3">
                            <ImageList images={data.images} editingImageId={editingImageId} setImages={setImages} setEditingImageId={setEditingImageId} t={t} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178">
                <Button className="border">{t('product:select_template')}</Button>

                <div>
                    <div className="mt-4 flex gap-2">
                        <Button className="border"><ChevronUp /></Button>
                        <Button className="border"><ChevronDown /></Button>
                        <Button className="border">{t('delete')}</Button>
                    </div>
                    <div className="mt-4 border p-6">
                        <span className="text-gray-400">Information</span>
                    </div>
                </div>

                <div>
                    <div className="mt-4 flex gap-2">
                        <Button className="border"><ChevronUp /></Button>
                        <Button className="border"><ChevronDown /></Button>
                        <Button className="border">{t('delete')}</Button>
                    </div>
                    <div className="mt-4 border p-6">
                        <span className="text-gray-400">상품정보 제공고시</span>
                    </div>
                </div>
            </div>
        </section>
    )
}