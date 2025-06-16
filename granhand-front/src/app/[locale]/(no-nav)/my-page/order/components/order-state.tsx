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
                <span className="text-sm font-bold text-[#322A24]">{t('my_page:all')}</span>
                <span className="text-[#6F6963] text-[10px] font-bold">{t('my_page:past_year')}</span>
            </div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button className="text-xs text-[#C0BCB6] font-bold">{t('my_page:set_period')}</Button>
                </PopoverTrigger>
                <PopoverContent side="bottom" align="center" className="!w-[390px] !h-[336px] rounded border bg-[#FDFBF5] p-4 shadow-md">
                    <div className="w-[342px]">
                        <div className="flex justify-between">
                            <div className="font-bold mb-2 mt-6 text-[#6F6963]">{t('my_page:set_period')}</div>
                            {/* 닫는 버튼 (자동으로 Popover 닫힘) */}
                            <PopoverClose asChild>
                                <X className="text-[#5E5955] mt-4" size={24} />
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
                                        "h-[34px] w-[72px] border !border-[#DBD7D0] rounded py-6 px-3 text-center cursor-pointer flex justify-center items-center text-[#322A24]",
                                        // normalMethod === value
                                        //     ? "!border-[#FDFBF5]"
                                        //     : ""
                                    )}
                                >
                                    <RadioGroupItem value={value} className="hidden" />
                                    {label}
                                </Label>
                            ))}
                        </RadioGroup>

                        <div className="flex justify-around gap-2 items-center mt-5 mb-10">
                            <Input type="text" placeholder="2022.10.18" className="!border-[#C0BCB6] w-[155px] h-[46px]">
                            </Input>
                            <span>~</span>
                            <Input type="text" placeholder="2023.10.18" className="!border-[#C0BCB6] w-[155px] h-[46px]"></Input>
                        </div>

                        <div className="flex justify-center">
                            <Button className="w-[342px] h-[46px] bg-[#322A24] text-white rounded-none font-bold">{t('order:search')}</Button>
                        </div>
                    </div>

                    <PopoverArrow className="fill-white" />
                </PopoverContent>
            </Popover>
            </div>

            <div className="w-full h-[88px] mt-4 grid grid-cols-5 text-center border rounded-lg px-[2%] py-5 text-sm font-medium text-[#6F6963] min-w-[580px]">
            <div>
                <div className="text-[#322A24] font-bold">1</div>
                <div className="mt-3 text-xs font-medium">
                    <span>{t('my_page:payment')}</span>
                </div>
            </div>
            <div>
                <div className="text-[#E9E6E0] font-bold">0</div>
                <div className="mt-3 text-xs font-medium">
                    <span>{t('my_page:prepare_ship')}</span>
                </div>
            </div>
            <div>
                <div className="text-[#E9E6E0] font-bold">0</div>
                <div className="mt-3 text-xs font-medium">
                    <span>{t('my_page:shipping')}</span>
                </div>
            </div>
            <div>
                <div className="text-[#322A24] ont-bold">1</div>
                <div className="mt-3 text-xs font-medium">
                    <span>{t('my_page:delivered')}</span>
                </div>
            </div>
            <div>
                <div className="text-[#322A24] font-bold">17</div>
                <div className="mt-3 text-xs font-medium">
                    <span>{t('my_page:confirm_purchase')}</span>
                </div>
            </div>
            </div>
        </section>
    )
}