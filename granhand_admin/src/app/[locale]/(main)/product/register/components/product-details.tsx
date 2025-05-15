import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";
import Image from "next/image";

export default function ProductDetails({ t }: { t: (key: string) => string }) {
    return (
        <section className="mb-8">
            <h2 className="font-bold text-xl text-[#5E5955]">{t('product:product_details')}</h2>
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178 divide-y divide-gray-200">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:detailed_description')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Textarea className="resize-none" />
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

                        {/* 추가 박스 */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-40 h-40 border-2 border-dashed flex items-center justify-center text-gray-400">
                                <Plus className="w-8 h-8" />
                            </div>
                        </div>
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