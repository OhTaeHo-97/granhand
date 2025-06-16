'use client'

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import PaymentInfo from "../../order/[id]/components/payment-info";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
            <div className="flex justify-between text-sm font-bold text-[#111111]">
                <span className="text-[#322A24]">{t('payment:earned_points')}</span>
                <span>+700</span>
            </div>
            <div className="bg-[#322A2408] p-[16px] text-xs text-[#6F6963] h-[56px] rounded flex items-center">
                <div className="flex items-center gap-3">
                    <div className="w-[16px] h-[16px] flex items-center justify-center rounded-full border !border-[#322A241A] text-[#C0BCB6] text-[10px] bg-[#FDFBF5]">!</div>
                    <span className="text-[#6F6963] text-[10px] font-medium">{t('payment:points_info')}</span>
                </div>
            </div>
            <div className="flex justify-end font-bold text-[#322A24] items-center">
                <span className="text-xs mr-3">{t('payment:total')}</span><span className="text-lg">25,500원</span>
            </div>
            <div className="space-y-4 text-xs border-t pt-4 mb-20 text-[#6F6963]">
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
                    <span className="font-bold text-xs">{t('payment:all_agree')}</span>
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
                        <span className="text-xs">{t('required')} <strong className="text-xs">{t('payment:collection')}</strong></span>
                    </div>
                    <Link href={`${currentLocale}/terms`} target="_blank" rel="noopener noreferrer">
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                    </Link>
                </Label>
                <Label className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                        <Checkbox
                            // className="accent-black w-4 h-4"
                            className="w-4 h-4 data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                            checked={agree2}
                            onCheckedChange={handleChange(setAgree2)}
                        />
                        <span className="text-xs">{t('required')} <strong className="text-xs">{t('payment:provision')}</strong></span>
                    </div>
                    <Link href={`${currentLocale}/terms/privacy`} target="_blank" rel="noopener noreferrer">
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                    </Link>
                </Label>

                <Label className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                        <Checkbox
                            // className="accent-black w-4 h-4"
                            className="w-4 h-4 data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                            checked={agree3}
                            onCheckedChange={handleChange(setAgree3)}
                        />
                        <span className="text-xs">{t('required')} <strong className="text-xs">{t('payment:terms')}</strong></span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                </Label>
            </div>
            <Button className="w-full h-[46px] bg-[#322A24] text-white py-3 rounded-none text-sm font-bold" disabled={!isAllChecked} onClick={() => router.push(`${currentLocale}/payment/result`)}>{t('payment:checkout')}</Button>
        </aside>
    )
}