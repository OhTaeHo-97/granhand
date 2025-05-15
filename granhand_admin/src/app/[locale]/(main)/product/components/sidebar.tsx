'use client'

import { Settings } from "lucide-react";
import ProductSidebarElem from "./sidebar-elem";
import { getLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import CateogrySettingsModal from "./category-settings";
import { useState } from 'react'

export default function ProductSidebar() {
    const locale = getLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'product')
    const [open, setOpen] = useState(false)

    const giftset = [{ title: t('all'), url: '/product/giftset' }]
    const perfume = [
        { title: t('signature'), url: '/product/signiture' },
        { title: t('perfume'), url: '/product/perfume' },
        { title: t('multiperfume'), url: '/product/multiperfume' }
    ]
    const space = [
        { title: t('diffuser'), url: '/product/diffuser' },
        { title: t('candle'), url: '/product/candle' },
        { title: t('sachet'), url: '/product/sashe' }
    ]
    const body = [
        { title: t('handcream'), url: '/product/handcream' },
        { title: t('handwash'), url: '/product/handwash' }
    ]
    const natural = [
        { title: t('natural_spray'), url: '/product/natural' },
        { title: t('tea'), url: '/product/tea' }
    ]
    const tool = [{ title: t('all'), url: '/product/tool' }]
    const komfortabel = [{ title: t('all'), url: '/product/komfortabel' }]

    return (
        <aside className="w-64 border-r m-3 p-6 space-y-4 min-h-screen shadow-sm">
            {/* 헤더 */}
            <div className="flex justify-between items-center mb-16 font-bold text-[#5E5955] text-base" onClick={() => setOpen((prev) => !prev)}>
                <span>{t('all_category')}</span>
                <Settings className="!w-6 !h-6" />
            </div>

            {/* GRANHAND 그룹 */}
            <div>
                <div className="font-bold text-[#5E5955] text-base">{t('granhand')}</div>
                <ProductSidebarElem title={t('giftset')} elements={giftset} />
                <ProductSidebarElem title={t('perfume')} elements={perfume} />
                <ProductSidebarElem title={t('space')} elements={space} />
                <ProductSidebarElem title={t('body')} elements={body} />
                <ProductSidebarElem title={t('natural')} elements={natural} />
                <ProductSidebarElem title={t('tools')} elements={tool} />
            </div>

            <div>
                <div className="font-semibold text-[#6f6963] text-base">{t('komfortabel')}</div>
                <ProductSidebarElem title={t('komfortabel')} elements={komfortabel} />
            </div>
            <CateogrySettingsModal open={open} setOpen={setOpen} t={t} />
        </aside>
    )
}