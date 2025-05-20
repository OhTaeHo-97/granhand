'use client'

import { Label } from "@/components/ui/label";
import PeriodElement from "../../components/period";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import CategorySelect from "./category-select";

export default function ProductListHeader() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'product', 'push'])
    const [quickRange, setQuickRange] = useState('')
    const [startDate, setStartDate] = useState<Date | undefined>(new Date())
    const [endDate, setEndDate] = useState<Date | undefined>(new Date())
    const filterOptions = [
        { label: t('product:product_name'), value: 'product_name' },
        { label: t('product:product_code'), value: 'product_code' }
    ]

    return (
        <div className="p-6 shadow-sm space-y-4 mb-12">
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:date_registered')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <PeriodElement startDate={startDate} endDate={endDate} quickRange={quickRange} setStartDate={setStartDate} setEndDate={setEndDate} setQuickRange={setQuickRange} t={t} />
                    </div>
                </div>

                {/* 두 번째 행 */}
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:category')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <CategorySelect />
                    </div>
                </div>
                
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:sale_status')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <RadioGroup defaultValue="now" className="flex gap-6">
                            <Label className="flex items-center gap-2 min-w-20">
                            <RadioGroupItem value="all" /> {t('product:all')}
                            </Label>
                            <Label className="flex items-center gap-2 min-w-20">
                            <RadioGroupItem value="on_sale" /> {t('product:on_sale')}
                            </Label>
                            <Label className="flex items-center gap-2 min-w-20">
                            <RadioGroupItem value="out_of_stock" /> {t('product:out_of_stock')}
                            </Label>
                            <Label className="flex items-center gap-2 min-w-20">
                            <RadioGroupItem value="hidden" /> {t('product:hidden')}
                            </Label>
                        </RadioGroup>
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 border-b text-[#6F6963]">
                        <Label className="font-semibold">{t('product:filters')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                    <Select defaultValue="product_name">
                        <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-24 h-8">
                        <SelectValue placeholder={t('product:product_name')} />
                        </SelectTrigger>
                        <SelectContent className="bg-white border rounded shadow-md">
                            {filterOptions.map(({ label, value }) => (
                                <SelectItem key={value} value={value} className="px-3 py-2 cursor-pointer">{label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Input
                        type="text"
                        placeholder={t('search')}
                        className="border rounded px-2 py-1 flex-1 min-w-[200px] h-8"
                    />
                    </div>
                </div>
            </div>

            <div className="flex mx-auto justify-center items-center w-full gap-10 mt-10 mb-10">
                <Button className="bg-white text-[#322A24] border w-32">
                    <RefreshCw />
                    {t('reset')}
                </Button>
                <Button className="bg-[#322A24] text-white w-32">
                    <Search />
                    {t('search')}
                </Button>
            </div>
        </div>
    )
}