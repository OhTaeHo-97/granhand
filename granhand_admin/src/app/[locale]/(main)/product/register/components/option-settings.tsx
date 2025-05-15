import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GripVertical } from "lucide-react";

export default function OptionSettings({ t }: { t: (key: string) => string }) {
    return (
        <section className="mb-8">
            <h2 className="font-bold text-xl text-[#5E5955]">{t('product:options_settings')}</h2>
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178 divide-y divide-gray-200">
            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:use_stamping')}</Label>
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

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:use_btn_option')}</Label>
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

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:btn_option')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                    <div className="space-y-4 text-sm">

                        {/* 옵션명 입력 */}
                        <div className="flex items-center gap-2">
                            <Label className="w-20 text-[#6F6963]">{t('product:option_name')}</Label>
                            <Input defaultValue={t('product:volume')} className="w-64" />
                            <Button variant="outline">{t('product:add_input')}</Button>
                        </div>

                        {/* 헤더 */}
                        <div className="grid grid-cols-[30px_1fr_1fr_1fr_1fr_120px] bg-gray-50 border border-gray-200 text-gray-600">
                            <div></div>
                            <div className="p-2 border-l border-gray-200">{t('product:option_value')}</div>
                            <div className="p-2 border-l border-gray-200">{t('product:option_price')}</div>
                            <div className="p-2 border-l border-gray-200">{t('product:inventory_id')}</div>
                            <div className="p-2 border-l border-gray-200">{t('product:quantity')}</div>
                            <div className="p-2 border-l border-gray-200">{t('product:status')}</div>
                        </div>

                        {/* 옵션 행 1 */}
                        <div className="grid grid-cols-[30px_1fr_1fr_1fr_1fr_120px] border border-t-0 border-gray-200 items-center gap-2 p-2">
                            <div className="flex justify-center text-gray-400">
                                <GripVertical className="w-4 h-4" />
                            </div>
                            <Input defaultValue="100ml" />
                            <Input defaultValue="35,000" />
                            <Input defaultValue="MP100_MO" />
                            <Input defaultValue="85" />
                            <Select defaultValue="판매중">
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="판매중">판매중</SelectItem>
                                    <SelectItem value="일시품절">일시품절</SelectItem>
                                    <SelectItem value="판매중지">판매중지</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* 옵션 행 2 */}
                        <div className="grid grid-cols-[30px_1fr_1fr_1fr_1fr_120px] border border-t-0 border-gray-200 items-center gap-2 p-2">
                            <div className="flex justify-center text-gray-400">
                                <GripVertical className="w-4 h-4" />
                            </div>
                            <Input defaultValue="200ml" />
                            <Input defaultValue="45,000" />
                            <Input defaultValue="MP200_MO" />
                            <Input defaultValue="64" />
                            <Select defaultValue="판매중">
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="판매중">판매중</SelectItem>
                                    <SelectItem value="일시품절">일시품절</SelectItem>
                                    <SelectItem value="판매중지">판매중지</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:use_drop_option')}</Label>
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

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:drop_option')}</Label>
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
        </section>
    )
}