'use client'

import { Button } from "@/components/ui/button"
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTranslation } from "../../../../../../utils/localization/client"

export default function MyInfoHeader() {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'common')

    return (
        <div className="flex items-center mb-8">
            <Button className="w-4 h-4" onClick={() => router.back()}>
                <ChevronLeft className="w-4 h-4 text-[#6F6963] mr-3" size={24} />
            </Button>
            <div className="text-sm font-medium items-center text-[#6F6963]">{t('to_prev')}</div>
        </div>
    )
}