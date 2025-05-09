'use client'

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function DeliveryRequest({ t }: { t: (key: string) => string }) {
    const [selectedValue, setSelectedValue] = useState('')

    return (
        <section className="space-y-2 mb-10">
            <h2 className="text-base font-bold">{t('payment:instruction')}</h2>
            <Select value={selectedValue} onValueChange={(value) => setSelectedValue(value)}>
                <SelectTrigger className="w-full border rounded px-4 py-2 text-sm h-15 data-[placeholder]:text-gray-400">
                    <SelectValue placeholder={t('payment:no_instruction')} />
                </SelectTrigger>
                <SelectContent className="bg-white">
                    <SelectItem value="none">{t('payment:no_instruction')}</SelectItem>
                    <SelectItem value="door">{t('payment:leave_door')}</SelectItem>
                    <SelectItem value="office">{t('payment:leave_office')}</SelectItem>
                    <SelectItem value="ab_call">{t('payment:call')}</SelectItem>
                    <SelectItem value="box">{t('payment:parcel_box')}</SelectItem>
                    <SelectItem value="be_call">{t('payment:before_delivery')}</SelectItem>
                    <SelectItem value="manual">{t('payment:manually')}</SelectItem>
                </SelectContent>
            </Select>
            {
                selectedValue === 'manual' && (
                    <Input type="text" placeholder={`t('payment:manually_placeholder')`} className="h-14" />
                )
            }
        </section>
    )
}