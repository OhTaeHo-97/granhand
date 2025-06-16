import { Input } from "@/components/ui/input";
import { useState } from "react";
import ImageList, { ImageItem } from "./image-list";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BasicInfoProps {
    data: {
        language: string,
        koName: string,
        enName: string,
        koMemo: string,
        enMemo: string,
        images: ImageItem[],
        imageOrders: number[]
    }
    // onChange: (field: keyof BasicInfoProps['data'], value: string | ImageItem[] | number[]) => void
    onChange: (
        field: keyof BasicInfoProps['data'],
        value: BasicInfoProps['data'][keyof BasicInfoProps['data']]
    ) => void
}

export default function BasicInfo({ data, onChange, t }: BasicInfoProps & {t: (key: string) => string }) {
    // const [images, setImages] = useState<ImageItem[]>([])
    const [editingImageId, setEditingImageId] = useState<string | null>(null)

    const setImages: React.Dispatch<React.SetStateAction<ImageItem[]>> = (value) => {
        if (typeof value === 'function') {
            onChange('images', value(data.images));
        } else {
            onChange('images', value);
        }
    }

    const setImageOrders: React.Dispatch<React.SetStateAction<number[]>> = (value) => {
        if (typeof value === 'function') {
            onChange('imageOrders', value(data.imageOrders));
        } else {
            onChange('imageOrders', value);
        }
    }

    return (
        <section className="mb-8">
            <h2 className="font-bold text-xl text-[#5E5955]">{t('product:basic_info')}</h2>
            
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178 divide-y divide-gray-200">
                <div className="grid grid-cols-[150px_1fr]">
                    <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                        {t('language')}
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Select value={data.language} onValueChange={(value) => onChange('language', value)}>
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
                {/* 상품명 */}
                <div className="grid grid-cols-[150px_1fr]">
                    <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                        {t('product:product_name')}
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Input type="text" placeholder={t('product:product_name')} value={data.koName} onChange={(e) => onChange('koName', e.target.value)} />
                    </div>
                </div>
                {/* <div className="grid grid-cols-[150px_1fr]">
                    <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                        {t('product:product_name')}
                    </div>
                    <div className="grid divide-y divide-gray-200">
                        <div className="p-4">
                            <Input type="text" placeholder="상품명" value={data.koName} onChange={(e) => onChange('koName', e.target.value)} />
                        </div>
                        <div className="p-4">
                            <Input type="text" placeholder="Product name" value={data.enName} onChange={(e) => onChange('enName', e.target.value)} />
                        </div>
                    </div>
                </div> */}

                {/* 상품 요약 설명 */}
                <div className="grid grid-cols-[150px_1fr]">
                    <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                        {t('product:short_description')}
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Input type="text" placeholder={t('product:short_description')} value={data.koMemo} onChange={(e) => onChange('koMemo', e.target.value)} />
                    </div>
                </div>
                {/* <div className="grid grid-cols-[150px_1fr]">
                    <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                        {t('product:short_description')}
                    </div>
                    <div className="grid divide-y divide-gray-200">
                        <div className="p-4">
                            <Input type="text" placeholder="상품 요약 설명" value={data.koMemo} onChange={(e) => onChange('koMemo', e.target.value)} />
                        </div>
                        <div className="p-4">
                            <Input type="text" placeholder="Product summary" value={data.enMemo} onChange={(e) => onChange('enMemo', e.target.value)} />
                        </div>
                    </div>
                </div> */}

                {/* 썸네일 등록 */}
                <div className="grid grid-cols-[150px_1fr]">
                    <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                        {t('product:update_thumbnail')}
                    </div>
                    <div className="p-4 h-full">
                        <div className="flex gap-4 flex-wrap">
                            <ImageList images={data.images} editingImageId={editingImageId} imageOrders={data.imageOrders} setImages={setImages} setEditingImageId={setEditingImageId} setImageOrders={setImageOrders} t={t} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}