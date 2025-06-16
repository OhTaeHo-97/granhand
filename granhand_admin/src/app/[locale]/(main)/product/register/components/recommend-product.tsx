'use client'

// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { GripVertical } from "lucide-react";
// import { useState } from "react";
// import RecommendProductModal from "./modal/recommend-product-modal";
import RecommendProductTable from "./recommend-product-table";

interface RecommendProductProps {
    data: {
        useRecommend: string,
        products: RecommendProductInfo[]
    },
    onChange: (
        field: keyof RecommendProductProps['data'],
        value: Exclude<RecommendProductProps['data'][keyof RecommendProductProps['data']], undefined>
    ) => void
    // onChange: (field: string, value: any) => void
}

type RecommendProductInfo = {
    id: number
    name: string
    price: number
    category: string
    status: string
    registerType: string
}

export default function RecommendProduct({ data, onChange, t }: RecommendProductProps & { t: (key: string) => string }) {
    const setProducts: React.Dispatch<React.SetStateAction<RecommendProductInfo[]>> = (value) => {
        if (typeof value === 'function') {
            onChange('products', value(data.products));
        } else {
            onChange('products', value);
        }
    }

    return (
        <section className="mb-8">
            <h2 className="font-bold text-xl text-[#5E5955]">{t('product:recommend_product')}</h2>
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178 divide-y divide-gray-200">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:enable_recommend')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <RadioGroup defaultValue={data.useRecommend} onValueChange={(value) => onChange('useRecommend', value)} className="flex gap-6">
                            <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="Y" /> {t('product:enabled')}
                            </Label>
                            <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="N" /> {t('product:disabled')}
                            </Label>
                        </RadioGroup>
                    </div>
                </div>
                {data.useRecommend === 'Y' && (
                    <RecommendProductTable options={data.products} setOptions={setProducts} t={t} />
                    // <div className="p-10">
                    //     <div className="flex gap-4 mb-4">
                    //         <Button variant="outline" className="p-1" onClick={() => setOpenRecommendAdd((prev) => !prev)}>상품 추가</Button>
                    //         <Button variant="outline" className="p-1">선택 상품 삭제</Button>
                    //     </div>
                    //     <table className="w-full text-center min-w-8xl overflow-auto">
                    //         <thead className="bg-[#322A2408] border-t border-b h-15">
                    //             <tr className="border-b text-[#6F6963]">
                    //                 <th className="p-2 flex items-center justify-center h-15"><GripVertical className="!w-4 !h-4" /></th>
                    //                 <th className="p-2 items-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
                    //                 <th className="p-2 text-center">상품명</th>
                    //                 <th className="p-2 text-center">판매가</th>
                    //                 <th className="p-2 text-center">분류</th>
                    //                 <th className="p-2 text-center">상태</th>
                    //                 <th className="p-2 text-center">등록 방식</th>
                    //             </tr>
                    //         </thead>
                    //         <tbody>
                    //             {Array.from({ length: 3 }).map((_, i) => (
                    //             <tr key={i} className="h-14 text-[#1A1A1A] hover:bg-[#322A2408]">
                    //                 <td className="p-2 h-14 flex justify-center items-center"><GripVertical className="!w-4 !h-4" /></td>
                    //                 <td className="p-2 items-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white" onClick={(e) => e.stopPropagation()}/></td>
                    //                 <td className="p-2 text-center">Multi Perfume & Sachet Set</td>
                    //                 <td className="p-2 text-center">53,000</td>
                    //                 <td className="p-2 text-center">멀티퍼퓸 외 2</td>
                    //                 <td className="p-2 text-center">판매중</td>
                    //                 <td className="p-2 flex justify-center items-center">
                    //                     <Select defaultValue="newest">
                    //                         <SelectTrigger className="w-fit">
                    //                             <SelectValue />
                    //                         </SelectTrigger>
                    //                         <SelectContent className="bg-white">
                    //                             <SelectItem value="newest_first">상호 등록</SelectItem>
                    //                             <SelectItem value="by_category">일방 등록</SelectItem>
                    //                         </SelectContent>
                    //                     </Select>
                    //                 </td>
                    //             </tr>
                    //             ))}
                    //         </tbody>
                    //     </table>
                    // </div>
                )}
            </div>
            {/* <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7 min-w-178">

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                        <Label className="font-semibold">추천상품 사용</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <RadioGroup defaultValue="now" className="flex gap-6">
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="all" /> 사용함
                            </Label>
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="pc" /> 사용 안 함
                            </Label>
                        </RadioGroup>
                    </div>
                </div>
            </div> */}
            {/* <RecommendProductModal open={openRecommendAdd} setOpen={setOpenRecommendAdd} /> */}
        </section>
    )
}