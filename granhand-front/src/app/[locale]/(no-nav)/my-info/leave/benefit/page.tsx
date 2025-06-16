'use client'

import { Button } from "@/components/ui/button";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { DollarSign, Gift, Heart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslation } from "../../../../../../../utils/localization/client";

export default function LoseBenefitPage() {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    const currentLocale = useCurrentLocale()

    const benefits = [
        {
            icon: <Gift className="text-gray-300" />,
            label: t('auth:available'),
            value: t('auth:coupon'),
            amount: "4",
        },
        {
            icon: <DollarSign className="text-gray-300" />,
            label: t('auth:used_checkout'),
            value: t('auth:point'),
            amount: "2,500",
        },
        {
            icon: <Heart className="text-gray-300" />,
            label: t('auth:save'),
            value: t('auth:wishlist'),
            amount: "5",
            highlighted: true,
        },
        {
            icon: <User className="text-gray-300" />,
            label: t('auth:received_benefit'),
            value: t('auth:tier'),
            amount: "Silver",
        },
    ];
    
    return (
        <div className="max-w-md w-[358px] space-y-6 mx-auto mt-10 min-h-screen">
            <div>
                <h2 className="font-medium text-[#322A24]">{t('auth:leave_benefit_title')}</h2>
            </div>

            {benefits.map((item, index) => (
                <div
                    key={index}
                    className={`w-full h-[66px] flex items-center justify-between p-4 border rounded-md shadow-sm bg-[#FDFBF5] text-xs ${
                        item.highlighted ? "border-blue-500" : "border-transparent"
                    }`}
                >
                    <div className="flex items-center gap-5 text-[#322A24]">
                        {item.icon}
                        <div className="text-[#6F6963] font-medium">
                        <p className="mb-1.5 font-bold">{item.label}</p>
                        <p className="font-bold text-[#322A24]">{item.value}</p>
                        </div>
                    </div>
                    <div className="text-sm font-bold text-[#322A24]">{item.amount}</div>
                </div>
            ))}

            <div className="grid grid-cols-2 gap-4 pt-6">
                <Button variant="outline" className="w-[171px] h-[46px] text-base !border-[#C0BCB6] text-[#322A24] cursor-pointer" onClick={() => router.push(`${currentLocale}/my-info`)}>
                    {t('cancel')}
                </Button>
                <Button className="w-[171px] h-[46px] bg-[#322A24] text-white text-base cursor-pointer" onClick={() => router.push(`${currentLocale}/my-info/leave/notice`)}>
                    {t('auth:withdraw_btn')}
                </Button>
            </div>
            
            {/* <div className="mt-6 pb-6">
                <div className="flex justify-center items-center text-lg font-semibold">
                    <Button className="text-base px-10 py-2 text-white bg-black rounded-none min-w-32 h-11 w-full">탈퇴하기</Button>
                </div>
            </div> */}
        </div>
    )
}