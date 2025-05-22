import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageIcon, Plus } from "lucide-react";
import Image from "next/image";

export default function BasicInfo({ t }: { t: (key: string) => string }) {
    return (
        <section className="mb-8">
            <h2 className="font-bold text-xl text-[#5E5955]">{t('product:basic_info')}</h2>
            
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178 divide-y divide-gray-200">
                {/* 상품명 */}
                <div className="grid grid-cols-[150px_1fr]">
                    <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                        {t('product:product_name')}
                    </div>
                    <div className="grid divide-y divide-gray-200">
                        <div className="p-4">
                            <Input placeholder="상품명" />
                        </div>
                        <div className="p-4">
                            <Input placeholder="Product name" />
                        </div>
                    </div>
                </div>

                {/* 상품 요약 설명 */}
                <div className="grid grid-cols-[150px_1fr]">
                    <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                        {t('product:short_description')}
                    </div>
                    <div className="grid divide-y divide-gray-200">
                        <div className="p-4">
                            <Input placeholder="상품 요약 설명" />
                        </div>
                        <div className="p-4">
                            <Input placeholder="Product summary" />
                        </div>
                    </div>
                </div>

                {/* 썸네일 등록 */}
                <div className="grid grid-cols-[150px_1fr]">
                    <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                        {t('product:update_thumbnail')}
                    </div>
                    <div className="p-4 h-full">
                        <div className="flex gap-4 flex-wrap">
                            {[1, 2].map((i) => (
                                <div key={i} className="flex flex-col items-center gap-2">
                                    <div className="w-40 h-40 relative border">
                                        <Image
                                            src={`/sample${i}.jpg`}  // public/sample1.jpg, sample2.jpg 준비 필요
                                            alt="썸네일"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex gap-2">
                                        <Button variant="outline" className="h-8 px-4">{t('edit')}</Button>
                                        <Button variant="outline" className="h-8 px-4">{t('delete')}</Button>
                                    </div>
                                </div>
                            ))}
                            <div key={'new'} className="flex flex-col items-center gap-2">
                                <div className="w-40 h-40 border-2 border-dashed flex items-center justify-center">
                                    <Plus className="w-6 h-6" />
                                    {/* <Image
                                        src={`/sample${i}.jpg`}  // public/sample1.jpg, sample2.jpg 준비 필요
                                        alt="썸네일"
                                        fill
                                        className="object-cover"
                                    /> */}
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" className="h-8 px-4">{t('product:register')}</Button>
                                </div>
                            </div>
                            {/* {[1, 2, 3].map((idx) => (
                                <div key={idx} className="w-24 h-24 border bg-gray-50 flex flex-col items-center justify-between gap-1 p-2">
                                    <ImageIcon className="w-8 h-8" />
                                    <Button variant="outline" size="sm" className="w-20">{t('product:register')}</Button>
                                </div>
                            ))}
                            <div className="w-24 h-24 border-2 border-dashed flex items-center justify-center">
                                <Plus className="w-6 h-6" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}