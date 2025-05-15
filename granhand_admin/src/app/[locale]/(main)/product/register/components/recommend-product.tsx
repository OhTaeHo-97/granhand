import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RecommendProduct({ t }: { t: (key: string) => string }) {
    return (
        <section className="mb-8">
            <h2 className="font-bold text-xl text-[#5E5955]">{t('product:recommend_product')}</h2>
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178 divide-y divide-gray-200">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:enable_recommend')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <RadioGroup defaultValue="now" className="flex gap-6">
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="all" /> {t('product:enabled')}
                            </Label>
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="pc" /> {t('product:disabled')}
                            </Label>
                        </RadioGroup>
                    </div>
                </div>
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
        </section>
    )
}