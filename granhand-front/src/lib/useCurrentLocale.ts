'use client'

import { useParams, usePathname } from "next/navigation"
import { LocaleTypes } from "../../utils/localization/settings"

export function useLocaleAsLocaleTypes() {
    return useParams()?.locale as LocaleTypes
}

export function useCurrentLocale() {
    const pathname = usePathname()
    const locale = pathname.split('/')[1]
    return locale === 'en' ? '/en' : ''
}