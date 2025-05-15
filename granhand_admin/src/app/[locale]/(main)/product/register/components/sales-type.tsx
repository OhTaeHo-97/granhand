import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function SalesType({ t }: { t: (key: string) => string }) {
    return (
        <section>
            <h2 className="font-bold text-xl text-[#5E5955]">{t('product:sales_type')}</h2>
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:display_type')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <RadioGroup defaultValue="now" className="flex gap-6">
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="all" /> {t('product:all')}
                            </Label>
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="pc" /> PC(Web)
                            </Label>
                            <Label className="flex items-center gap-2 min-w-20">
                            <RadioGroupItem value="app" /> {t('product:app_exclusive')}
                            </Label>
                        </RadioGroup>
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:category')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Select defaultValue="select">
                            <SelectTrigger className="">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="select">분류 선택</SelectItem>
                                <SelectItem value="이메일">이메일</SelectItem>
                                <SelectItem value="전화번호">전화번호</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:sales_period')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <RadioGroup defaultValue="now" className="flex gap-6">
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="none" /> {t('product:not_applied')}
                            </Label>
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="apply" /> {t('product:applied')}
                            </Label>
                        </RadioGroup>
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr_150px_1fr] border-b border-gray-200 h-full">
                    {/* 첫 번째 행 */}
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 border-b text-[#6F6963]">
                        <Label className="font-semibold">{t('product:external_exposure')}</Label>
                    </div>
                    <div className="flex gap-2 items-center p-5 h-full">
                        <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">{t('product:naver_shopping')}</Label>
                        <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">{t('product:kakao_shopping')}</Label>
                    </div>
                    <div className="border-r border-gray-200 flex items-center justify-center p-5 border-l bg-[#322A2408] h-full border-b text-[#6F6963]">
                        <Label className="font-semibold">{t('product:external_product_name')}</Label>
                    </div>
                    <div className="flex items-center p-2">
                    <Input
                        type="text"
                        placeholder={t('product:external_product_name_placeholder')}
                        className="border rounded px-2 py-1 flex-1 min-w-[200px] h-8"
                    />
                    </div>
                </div>
            </div>
        </section>
    )
}