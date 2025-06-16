'use client'

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function DeliveryRequest({ t }: { t: (key: string) => string }) {
    const [selectedValue, setSelectedValue] = useState('')

    return (
        <section className="space-y-2 mb-10">
            <h2 className="text-sm font-bold text-[#322A24]">{t('payment:instruction')}</h2>
            <Select value={selectedValue} onValueChange={(value) => setSelectedValue(value)}>
                <SelectTrigger className="w-full h-[46px] border border-[#C0BCB6] rounded px-[18px] py-[12px] text-sm data-[placeholder]:text-[#C0BCB6]">
                    <SelectValue placeholder={t('payment:no_instruction')} />
                </SelectTrigger>
                <SelectContent className="bg-[#FDFBF5]">
                    <SelectItem value="none" className="text-sm hover:bg-[#322A2408]">{t('payment:no_instruction')}</SelectItem>
                    <SelectItem value="door" className="text-sm hover:bg-[#322A2408]">{t('payment:leave_door')}</SelectItem>
                    <SelectItem value="office" className="text-sm hover:bg-[#322A2408]">{t('payment:leave_office')}</SelectItem>
                    <SelectItem value="ab_call" className="text-sm hover:bg-[#322A2408]">{t('payment:call')}</SelectItem>
                    <SelectItem value="box" className="text-sm hover:bg-[#322A2408]">{t('payment:parcel_box')}</SelectItem>
                    <SelectItem value="be_call" className="text-sm hover:bg-[#322A2408]">{t('payment:before_delivery')}</SelectItem>
                    <SelectItem value="manual" className="text-sm hover:bg-[#322A2408]">{t('payment:manually')}</SelectItem>
                </SelectContent>
            </Select>
            {
                selectedValue === 'manual' && (
                    <Input type="text" placeholder={t('payment:manually_placeholder')} className="text-sm h-[46px] placeholder:text-[#C0BCB6]" />
                )
            }
        </section>
    )
}