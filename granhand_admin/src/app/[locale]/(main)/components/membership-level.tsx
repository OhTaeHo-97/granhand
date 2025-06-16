'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../utils/localization/client";

export default function MembershipLevelSelect({ disabled, level, setLevel }: { disabled: boolean, level: string, setLevel: React.Dispatch<React.SetStateAction<string>> }) {
    const locale = useLocaleAsLocaleTypes()
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
        <Select value={level} onValueChange={setLevel} disabled={disabled}>
            <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-40 h-8">
            <SelectValue placeholder={t('member:all_membership')} />
            </SelectTrigger>
            <SelectContent className="bg-white border rounded shadow-md">
                {levels.map(({ label, value }) => (
                    <SelectItem key={value} value={value} className="px-3 py-2 cursor-pointer">{label}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}