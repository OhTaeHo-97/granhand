'use client'

// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { format } from "date-fns";
// import { ko } from "date-fns/locale";
// import { CalendarIcon } from "lucide-react";
import { useState } from "react";
// import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css"
import CouponInfo from "./components/coupon-info";
// import { LocaleTypes } from "../../../../../../utils/localization/settings";
// import { translation } from "../../../../../../utils/localization/locales/server";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import UsageInfo from "./components/usage-info";
import { Button } from "@/components/ui/button";

export interface CouponInfoType {
    language: 'ko' | 'en'
    couponName: string
    brand: string
    applyBrand: string
    codeCategory: string
    couponCode: string
    amount: number
}

export interface UsageInfoType {
    startDate: Date | undefined
    startHour: number
    startMinute: number
    endDate: Date | undefined
    endHour: number
    endMinute: number
    isNoLimit: string
    discountAmount: number
    hasMinAmount: string
    minAmount: number
    applyProduct: string
    hasUsageLimit: string
    useCount: number
}

export default function RegisterCouponPage() {
    const [couponInfo, setCouponInfo] = useState<CouponInfoType>({
        language: 'ko',
        couponName: '',
        brand: '',
        applyBrand: '',
        codeCategory: 'single',
        couponCode: '',
        amount: 0
    })
    const [usageInfo, setUsageInfo] = useState<UsageInfoType>({
        startDate: new Date(),
        startHour: 9,
        startMinute: 0,
        endDate: new Date(),
        endHour: 9,
        endMinute: 0,
        isNoLimit: 'N',
        discountAmount: 0,
        hasMinAmount: 'infinite',
        minAmount: 0,
        applyProduct: '',
        hasUsageLimit: '',
        useCount: 0
    })

    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'coupon'])
    const currentLocale = useCurrentLocale()

    const handleClickSave = () => {
        // const body = { ...couponInfo, ...usageInfo }
        alert('쿠폰 저장')
    }

    return (
        <div className="flex-1 border">
            <div className="p-12 text-black text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('coupon:issue_coupon')}</h1>
            </div>
            <div className="mx-auto px-6 py-8 space-y-12">
                <div className="shadow-md p-8">
                    <CouponInfo couponInfo={couponInfo} setCouponInfo={setCouponInfo} t={t} />
                    <UsageInfo currentLocale={currentLocale} usageInfo={usageInfo} setUsageInfo={setUsageInfo} t={t} />
                    <div className="flex w-full justify-center gap-4 items-center">
                        <Button variant="outline" className="!px-4 !py-2 bg-white text-[#322A24] w-24">{t('cancel')}</Button>
                        <Button className="px-4 py-2 rounded bg-[#322A24] text-white font-semibold w-24" onClick={handleClickSave}>{t('save')}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}