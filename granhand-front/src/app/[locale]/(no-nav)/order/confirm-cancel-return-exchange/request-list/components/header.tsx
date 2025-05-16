'use client'

import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslation } from "../../../../../../../../utils/localization/client";

export default function RequestListHeader({ category, curIndex, showProcess }: { category: string, curIndex?: number, showProcess: boolean }) {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['order', 'my_page'])
    // const currentLocale = useCurrentLocale()
    
    const cancelMenu = [
        t('order:cancel_process1'),
        t('order:cancel_process2'),
        t('order:cancel_process3')
    ]

    const exchangeMenu = [
        t('order:exchange_process1'),
        t('order:exchange_process2'),
        t('order:exchange_process3')
    ]

    const menuMap = {
        cancel: cancelMenu,
        exchangeRefund: exchangeMenu,
        confirm: null
    } as const

    const curMenu = menuMap[category as keyof typeof menuMap] ?? null

    return (
        <div className="flex justify-between">
            <div className="flex items-center mb-8">
                <ChevronLeft className="text-base text-gray-500 mr-3" onClick={() => router.back()} />
                <h2 className="text-2xl font-semibold">
                    {category === 'confirm' && t('my_page:confirm_purchase')}
                    {category === 'cancel' && t('my_page:order_cancel')}
                    {(category === 'exchangeRefund' || category === 'exchange' || category === 'refund') && t('my_page:exchange_return')}
                </h2>
            </div>
            {
                curMenu && showProcess && (
                    <div className="text-xs text-gray-400">
                        {curMenu.map((menu, index) => (
                            <span key={index} className={`${index === curIndex && 'text-[#5f5b56] text-semibold'}`}>
                                {menu} { index !== cancelMenu.length - 1 ? " > " : "" }
                            </span>
                        ))}
                    </div>
                )
            }
        </div>
    )
}