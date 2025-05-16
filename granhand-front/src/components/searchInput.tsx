'use client'

import { Search } from "lucide-react"
import { useState } from "react"
import { Input } from "./ui/input"
// import { LocaleTypes } from "../../utils/localization/settings"
import { useTranslation } from "../../utils/localization/client"
// import { useParams } from "next/navigation"
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale"
import { Button } from "./ui/button"

export default function SearchInput() {
    const [value, setValue] = useState('')
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'common')

    return (
        <div className="w-full max-w-2/3 mx-auto px-4">
            <div className="relative">
                <Input
                    type="text"
                    placeholder={t('search')}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full border-0 border-b border-gray-400 focus:outline-none focus:border-black placeholder-gray-400 text-sm py-2 pr-10"
                />
                <Button className="absolute right-2 top-1/2 -translate-y-1/2">
                    <Search className="w-4 h-4 text-gray-500" />
                </Button>
            </div>
        </div>
    )
}