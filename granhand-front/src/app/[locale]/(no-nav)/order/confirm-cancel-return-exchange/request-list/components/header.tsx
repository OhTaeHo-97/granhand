'use client'

import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { ChevronLeftIcon } from "lucide-react";
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
            <section className="flex items-center mb-8">
                <div className="flex gap-4 items-center">
                    <ChevronLeftIcon size={24} className="text-[#6F6963]" onClick={() => router.back()} />
                    <h2 className={`text-lg font-medium text-left text-[#6F6963]`}>
                    {category === 'confirm' && t('my_page:confirm_purchase')}
                    {category === 'cancel' && t('my_page:order_cancel')}
                    {(category === 'exchangeRefund' || category === 'exchange' || category === 'refund') && t('my_page:exchange_return')}
                    </h2>
                </div>
            </section>
            {
                curMenu && showProcess && (
                    <div className="text-xs font-medium text-[#C0BCB6]">
                        {curMenu.map((menu, index) => (
                            <span key={index} className={`${index === curIndex && 'text-[#6F6963]'}`}>
                                {menu} { index !== cancelMenu.length - 1 ? " > " : "" }
                            </span>
                        ))}
                    </div>
                )
            }
        </div>
    )
}