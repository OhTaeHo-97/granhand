'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { cn } from "@/lib/utils";
import { PopoverArrow, PopoverClose } from "@radix-ui/react-popover";
import { X } from "lucide-react";
import { useTranslation } from "../../../../../../../utils/localization/client";

export default function OrderStateCard() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'shop', 'payment', 'order', 'my_page'])
    // const currentLocale = useCurrentLocale()

    return (
        // 요약 상태 바
        <section className="min-w-80">
            <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="space-x-4">
                <span className="text-xl font-semibold text-black">{t('my_page:all')}</span>
                <span>{t('my_page:past_year')}</span>
            </div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button className="text-xs text-gray-400">{t('my_page:set_period')}</Button>
                </PopoverTrigger>
                <PopoverContent side="bottom" align="center" className="rounded border bg-white p-4 shadow-md min-w-md min-h-fit">
                    <div className="flex justify-between">
                        <div className="font-semibold mb-2">{t('my_page:set_period')}</div>
                        {/* 닫는 버튼 (자동으로 Popover 닫힘) */}
                        <PopoverClose asChild>
                            <X />
                        </PopoverClose>
                    </div>

                    <RadioGroup
                        // value={normalMethod}
                        // onValueChange={setNormalMethod}
                        className="grid grid-cols-4 gap-4 text-sm mt-3"
                    >
                        {[
                            { value: "year", label: t('my_page:past_year') },
                            { value: "week", label: t('my_page:past_week') },
                            { value: "month", label: t('my_page:past_month') },
                            { value: "months", label: t('my_page:past_three_month') },
                        ].map(({ value, label }) => (
                            <Label
                                key={value}
                                className={cn(
                                    "border rounded py-6 px-3 text-center cursor-pointer h-3 flex justify-center items-center",
                                    // normalMethod === value
                                    //     ? "!border-black font-bold"
                                    //     : "border-gray-300 font-normal"
                                )}
                            >
                                <RadioGroupItem value={value} className="hidden" />
                                {label}
                            </Label>
                        ))}
                    </RadioGroup>

                    <div className="flex justify-around gap-4 items-center mt-5 mb-10">
                        <Input type="">
                        </Input>
                        <span>~</span>
                        <Input type=""></Input>
                    </div>

                    <Button className="w-full bg-black text-white rounded-none h-12 font-bold">{t('search')}</Button>

                    <PopoverArrow className="fill-white" />
                </PopoverContent>
            </Popover>
            </div>

            <div className="mt-4 grid grid-cols-5 text-center border rounded-lg px-[2%] py-7 text-sm font-medium text-gray-500 min-w-[580px]">
            <div>
                <div className="text-black text-xl font-bold">1</div>
                <div className="mt-3">
                    <span>{t('my_page:payment')}</span>
                </div>
            </div>
            <div>
                <div className="text-[#E9E6E0] text-xl font-bold">0</div>
                <div className="mt-3">
                    <span>{t('my_page:prepare_ship')}</span>
                </div>
            </div>
            <div>
                <div className="text-[#E9E6E0] text-xl font-bold">0</div>
                <div className="mt-3">
                    <span>{t('my_page:shipping')}</span>
                </div>
            </div>
            <div>
                <div className="text-black text-xl font-bold">1</div>
                <div className="mt-3">
                    <span>{t('my_page:delivered')}</span>
                </div>
            </div>
            <div>
                <div className="text-black text-xl font-bold">17</div>
                <div className="mt-3">
                    <span>{t('my_page:confirm_purchase')}</span>
                </div>
            </div>
            </div>
        </section>
    )
}