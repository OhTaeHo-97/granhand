'use client'

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CategorySelect, { SelectedCategory } from "../../components/category-select";
// import { useState } from "react";
import PeriodElement from "../../../components/period";
// import { ProductCategoryNode } from "@/lib/product/product-state";
// import { AlignVerticalJustifyEnd } from "lucide-react";

interface SalesTypeProps {
    data: {
        displayType: string,
        selectedCategories: SelectedCategory[],
        applySalePeriod: string,
        startDate: Date | undefined,
        endDate: Date | undefined,
        quickRange: string,
        showNaver: string,
        showKakao: string,
        exposureName: string
    }
    onChange: (
        field: keyof SalesTypeProps['data'],
        value: SalesTypeProps['data'][keyof SalesTypeProps['data']]
    ) => void
    // onChange: (field: string, value: any) => void
}

export default function SalesType({
    data,
    onChange,
    t
}: SalesTypeProps & { t: (key: string) => string }) {
    const quickRanges = [
        { label: '3일', value: 'last_3_days' },
        { label: '5일', value: 'last_5_days' },
        { label: '7일', value: 'last_7_days' },
        { label: '15일', value: 'last_15_days' },
        { label: '30일', value: 'last_30_days' },
    ]

    const setSelectedCategories: React.Dispatch<React.SetStateAction<SelectedCategory[]>> = (value) => {
        if (typeof value === 'function') {
            onChange('selectedCategories', value(data.selectedCategories));
        } else {
            onChange('selectedCategories', value);
        }
    }
    
    const setStartDate: React.Dispatch<React.SetStateAction<Date | undefined>> = (value) => {
        if (typeof value === 'function') {
            onChange('startDate', value(data.startDate));
        } else {
            onChange('startDate', value);
        }
    }

    const setEndDate: React.Dispatch<React.SetStateAction<Date | undefined>> = (value) => {
        if (typeof value === 'function') {
            onChange('endDate', value(data.endDate));
        } else {
            onChange('endDate', value);
        }
    }

    const setQuickRange: React.Dispatch<React.SetStateAction<string>> = (value) => {
        if (typeof value === 'function') {
            onChange('quickRange', value(data.quickRange));
        } else {
            onChange('quickRange', value);
        }
    }

    return (
        <section>
            <h2 className="font-bold text-xl text-[#5E5955]">{t('product:sales_type')}</h2>
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:display_type')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <RadioGroup defaultValue={data.displayType} className="flex gap-6" onValueChange={(value) => onChange('displayType', value)}>
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="all" /> {t('product:all')}
                            </Label>
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="pc" /> PC(Web)
                            </Label>
                            <Label className="flex items-center gap-2 min-w-20">
                            <RadioGroupItem value="app" /> {t('product:app_exclusive')}
                            </Label>
                        </RadioGroup>
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:category')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <CategorySelect selectedCategories={data.selectedCategories} setSelectedCategories={setSelectedCategories} />
                    </div>
                </div>
                
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:sales_period')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <RadioGroup value={data.applySalePeriod} onValueChange={(value) => onChange('applySalePeriod', value)} className="flex gap-6">
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="none" /> {t('product:not_applied')}
                            </Label>
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="apply" /> {t('product:applied')}
                            </Label>
                        </RadioGroup>
                        {data.applySalePeriod === 'apply' && (
                            <PeriodElement needTime={false} startDate={data.startDate} endDate={data.endDate} quickRange={data.quickRange} setStartDate={setStartDate} setEndDate={setEndDate} setQuickRange={setQuickRange} quickRanges={quickRanges} t={t}  />
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr_150px_1fr] border-b border-gray-200 h-full">
                    {/* 첫 번째 행 */}
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 border-b text-[#6F6963]">
                        <Label className="font-semibold">{t('product:external_exposure')}</Label>
                    </div>
                    <div className="flex gap-2 items-center p-5 h-full">
                        <Label className="text-sm font-medium">
                            <Checkbox
                                id="show-naver"
                                checked={data.showNaver === 'Y'}
                                onCheckedChange={(checked) => onChange('showNaver', checked ? 'Y' : 'N')}
                                className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                            /> {t('product:naver_shopping')}
                        </Label>
                        <Label className="text-sm font-medium">
                            <Checkbox
                                id="show-kakao"
                                checked={data.showKakao === 'Y'}
                                onCheckedChange={(checked) => onChange('showKakao', checked ? 'Y' : 'N')}
                                className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                            /> {t('product:kakao_shopping')}
                        </Label>
                    </div>
                    <div className="border-r border-gray-200 flex items-center justify-center p-5 border-l bg-[#322A2408] h-full border-b text-[#6F6963]">
                        <Label className="font-semibold">{t('product:external_product_name')}</Label>
                    </div>
                    <div className="flex items-center p-2">
                        <Input
                            type="text"
                            value={data.exposureName}
                            onChange={(e) => onChange('exposureName', e.target.value)}
                            placeholder={t('product:external_product_name_placeholder')}
                            className="border rounded px-2 py-1 flex-1 min-w-[200px] h-8"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}