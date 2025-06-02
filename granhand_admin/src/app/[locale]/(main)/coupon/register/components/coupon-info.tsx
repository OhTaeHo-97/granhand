import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CouponInfoType } from "../page";

export default function CouponInfo({ couponInfo, setCouponInfo, t }: { couponInfo: CouponInfoType, setCouponInfo: React.Dispatch<React.SetStateAction<CouponInfoType>>, t: (key: string) => string }) {
    const handleCouponInfoChange = (key: string, value: string) => {
        setCouponInfo({
            ...couponInfo,
            [key]: key === 'amount' ? Number(value) : value
        })
    }

    return (
        <section className="text-[#5E5955]">
            <h2 className="font-bold text-xl text-[#5E5955]">{t('coupon:coupon_info')}</h2>

            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('coupon:coupon_name')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5 w-full">
                        <Input placeholder={t('coupon:enter_name')} value={couponInfo.couponName} onChange={(e) => handleCouponInfoChange('couponName', e.target.value)} className="w-[1/2]" />
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('coupon:applicable_brand')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5 w-full">
                        <RadioGroup value={couponInfo.brand} onValueChange={(value: string) => handleCouponInfoChange('brand', value)} className="flex gap-6">
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
                        <RadioGroup defaultValue={couponInfo.applyBrand} onValueChange={(value: string) => handleCouponInfoChange('applyBrand', value)} className="flex gap-6">
                            <Label className="flex items-center gap-2">
                            <RadioGroupItem value="offline_only" /> {t('coupon:offline_only')}
                            </Label>
                            <Label className="flex items-center gap-2">
                            <RadioGroupItem value="online_only" /> {t('coupon:online_only')}
                            </Label>
                            <Label className="flex items-center gap-2">
                            <RadioGroupItem value="app_only" /> {t('coupon:app_only')}
                            </Label>
                        </RadioGroup>
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('coupon:coupon_code')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5 w-full">
                        <Select value={couponInfo.codeCategory} onValueChange={(value: string) => handleCouponInfoChange('codeCategory', value)}>
                            <SelectTrigger className="w-60">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="single">{t('coupon:single_coupon')}</SelectItem>
                                <SelectItem value="multiple">{t('coupon:multiple_coupon')}</SelectItem>
                            </SelectContent>
                        </Select>
                        <Input value={couponInfo.couponCode} onChange={(e) => handleCouponInfoChange('couponCode', e.target.value)} placeholder={t('coupon:enter_coupon_code')} />
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('coupon:coupon_quantity')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5 w-full">
                        <Input type="number" value={couponInfo.amount} onChange={(e) => handleCouponInfoChange('amount', e.target.value)} placeholder="수량 입력" className="w-22" /> {t('coupon:issue_some_coupon')}
                    </div>
                </div>
            </div>
        </section>
    )
}