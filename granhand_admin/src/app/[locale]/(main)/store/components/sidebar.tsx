'use client'

import { Settings } from "lucide-react"
// import StoreSidebarElem from "./sidebar-elem"
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales"
import { useTranslation } from "../../../../../../utils/localization/client"
import { useState } from "react"
import SubSidebarElem from "../../components/sub-sidebar/sub-sidebar-elem"

export default function StoreSidebar() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'store', 'product'])
    const currentLocale = useCurrentLocale()
    const [open, setOpen] = useState(false)

    const granhand = [
        { title: '광화문', url: `${currentLocale}/store/granhand/gwanghwa`},
        { title: '도산', url: `${currentLocale}/store/granhand/dosan`},
        { title: '남산', url: `${currentLocale}/store/granhand/namsan`},
        { title: '마포', url: `${currentLocale}/store/granhand/mapo`},
        { title: '서촌', url: `${currentLocale}/store/granhand/seochon`},
        { title: '소격', url: `${currentLocale}/store/granhand/sogyek`},
        { title: '북촌', url: `${currentLocale}/store/granhand/bukchon`},
        { title: '서교', url: `${currentLocale}/store/granhand/seokyo`}
    ]
    const komfortabel = [
        { title: '남산', url: `${currentLocale}/store/komfortabel/namsan` },
        { title: '안국', url: `${currentLocale}/store/komfortabel/anguk` },
        { title: '시청', url: `${currentLocale}/store/komfortabel/sicheong` },
    ]

    return (
        <aside className="w-64 border-r m-3 p-6 space-y-4 min-h-screen shadow-sm">
            {/* 헤더 */}
            <div className="flex justify-between items-center mb-16 font-bold text-[#5E5955] text-base" onClick={() => setOpen((prev) => !prev)}>
                <span>{t('product:all_category')}</span>
                <Settings className="!w-6 !h-6" />
            </div>
            {/* <div className="flex justify-between items-center font-semibold mb-16 ">
                <span className="text-basic">전체 카테고리</span>
                <Settings className="w-6 h-6" />
            </div> */}

            <div>
                <div className="font-bold text-[#5E5955] text-base">STORE</div>
                <SubSidebarElem title="GRANHAND" elements={granhand} />
                <SubSidebarElem title="KOMFORTABEL" elements={komfortabel} />
            </div>
            {/* GRANHAND 그룹 */}
            {/* <div>
                <div className="font-semibold text-[#6f6963] text-base">STORES</div>
                <StoreSidebarElem title="그랑핸드" elements={granhand} />
                <StoreSidebarElem title="콤포타블" elements={komfortabel} />
            </div> */}
        </aside>
    )
}