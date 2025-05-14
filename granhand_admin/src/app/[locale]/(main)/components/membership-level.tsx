'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../utils/localization/client";

export default function MembershipLevelSelect() {
    const locale = getLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'member'])

    const levels = [
        { label: t('member:all_membership'), value: 'all_membership' },
        { label: 'VIP', value: 'vip' },
        { label: 'Gold', value: 'gold' },
        { label: 'Silver', value: 'silver' },
        { label: 'Bronze', value: 'bronze' },
        { label: 'Basic', value: 'basic' }
    ]

    return (
        <Select defaultValue="all_membership">
            <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-40 h-8">
            <SelectValue placeholder={t('member:all_membership')} />
            </SelectTrigger>
            <SelectContent className="bg-white border rounded shadow-md">
                {levels.map(({ label, value }) => (
                    <SelectItem value={value} className="px-3 py-2 cursor-pointer">{label}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}