import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CouponInfo({ t }: { t: (key: string) => string }) {
    return (
        <section className="text-[#5E5955]">
            <h2 className="font-bold text-xl text-[#5E5955]">{t('coupon:coupon_info')}</h2>

            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('coupon:coupon_name')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5 w-full">
                        <Input placeholder={t('coupon:enter_name')} className="w-[1/2]" />
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('coupon:applicable_brand')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5 w-full">
                        <RadioGroup defaultValue="now" className="flex gap-6">
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="granhand" /> {t('granhand')}
                            </Label>
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="comfortable" /> {t('komfortabel')}
                            </Label>
                        </RadioGroup>
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('coupon:applicable_channel')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5 w-full">
                        <RadioGroup defaultValue="now" className="flex gap-6">
                            <Label className="flex items-center gap-2">
                            <RadioGroupItem value="granhand" /> {t('coupon:offline_only')}
                            </Label>
                            <Label className="flex items-center gap-2">
                            <RadioGroupItem value="comfortable" /> {t('coupon:online_only')}
                            </Label>
                            <Label className="flex items-center gap-2">
                            <RadioGroupItem value="comfortable" /> {t('coupon:app_only')}
                            </Label>
                        </RadioGroup>
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('coupon:coupon_code')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5 w-full">
                        <Select defaultValue="single">
                            <SelectTrigger className="w-60">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="single">{t('coupon:single_coupon')}</SelectItem>
                                <SelectItem value="multiple">{t('coupon:multiple_coupon')}</SelectItem>
                            </SelectContent>
                        </Select>
                        <Input placeholder={t('coupon:enter_coupon_code')} />
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('coupon:coupon_quantity')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5 w-full">
                        <Input placeholder="수량 입력" className="w-22" /> {t('coupon:issue_some_coupon')}
                    </div>
                </div>
            </div>
        </section>
    )
}