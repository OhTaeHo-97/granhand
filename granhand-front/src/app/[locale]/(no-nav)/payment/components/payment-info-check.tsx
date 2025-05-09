'use client'

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import PaymentInfo from "../../order/[id]/components/payment-info";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentInfoCheck({ t, currentLocale }: { t: (key: string) => string, currentLocale: string }) {
    const router = useRouter()

    const [allAgree, setAllAgree] = useState(false)
    const [agree1, setAgree1] = useState(false)
    const [agree2, setAgree2] = useState(false)
    const [agree3, setAgree3] = useState(false)

    const isAllChecked = agree1 && agree2 && agree3

    const handleChange = (setter: (val: boolean) => void) => (checked: boolean | "indeterminate") => {
        if (typeof checked === "boolean") setter(checked)
    }

    return (
        // Right: 결제 요약
        <aside className="space-y-6">
            <PaymentInfo t={t} />
            <div className="flex justify-between text-sm font-semibold">
                <span>{t('payment:earned_points')}</span>
                <span className="font-bold">+700</span>
            </div>
            <div className="bg-gray-100 p-3 text-xs text-gray-600 h-20 rounded flex items-center">
                <div className="flex items-center gap-5">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 text-xs">!</div>
                    {t('payment:points_info')}
                </div>
            </div>
            <div className="flex justify-end font-semibold text-black items-center">
                <span className="text-sm mr-3">{t('payment:total')}</span><span className="text-bold text-xl">25,500원</span>
            </div>
            <div className="space-y-4 text-sm border-t pt-4 mb-20">
                <Label className="flex items-center gap-4">
                    <Checkbox
                        // className="accent-black w-4 h-4"
                        className="w-4 h-4 data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                        checked={allAgree && isAllChecked}
                        onCheckedChange={(checked) => {
                            if(typeof checked === 'boolean') {
                                setAllAgree(checked)
                                if(checked) {
                                    setAgree1(true)
                                    setAgree2(true)
                                    setAgree3(true)
                                } else {
                                    setAgree1(false)
                                    setAgree2(false)
                                    setAgree3(false)
                                }
                            }
                        }}
                    />
                    <span className="font-bold text-gray-700">{t('payment:all_agree')}</span>
                </Label>
                <hr className="border-dashed" />
                <Label className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                        <Checkbox
                            // className="accent-black w-4 h-4"
                            className="w-4 h-4 data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                            checked={agree1}
                            onCheckedChange={handleChange(setAgree1)}
                        />
                        <span className="text-gray-700">{t('required')} <strong>{t('payment:collection')}</strong></span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                </Label>
                <Label className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                        <Checkbox
                            // className="accent-black w-4 h-4"
                            className="w-4 h-4 data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                            checked={agree2}
                            onCheckedChange={handleChange(setAgree2)}
                        />
                        <span className="text-gray-700">{t('required')} <strong>{t('payment:provision')}</strong></span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                </Label>

                <Label className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                        <Checkbox
                            // className="accent-black w-4 h-4"
                            className="w-4 h-4 data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                            checked={agree3}
                            onCheckedChange={handleChange(setAgree3)}
                        />
                        <span className="text-gray-700">{t('required')} <strong>{t('payment:terms')}</strong></span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                </Label>
            </div>
            <Button className="w-full bg-black text-white py-3 rounded-none" disabled={!isAllChecked} onClick={() => router.push(`${currentLocale}/payment/result`)}>{t('payment:checkout')}</Button>
        </aside>
    )
}