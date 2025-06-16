'use client'

import PointModal from "@/app/[locale]/(no-nav)/payment/components/modal/point-modal"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function PointListHeader({
    tabs,
    selectedState,
    onClickState,
    t
}: {
    tabs: Array<string>,
    selectedState: string,
    onClickState: (state: string) => void,
    t: (key: string) => string
}) {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <div className="text-sm font-bold flex items-center gap-2 text-[#322A24]">
                {t('point:point_history')}
                <div className="w-[16px] h-[16px] flex items-center justify-center rounded-full border border-gray-300 text-gray-400 text-[8px]" onClick={() => setOpen((prev) => !prev)}>?</div>
            </div>

            {/* 탭 */}
            <div className="flex gap-4 text-sm text-gray-400 items-center">
            {tabs.map((tab, index) => (
                <Button
                    key={tab}
                    onClick={() => onClickState(tab)}
                    className={`text-sm py-1 font-bold ${index !== 0 && 'px-2'}
                    ${
                        selectedState === tab
                            ? 'text-[#322A24] semibold'
                            : 'text-[#C0BCB6]'
                    } hover:text-black transition-colors min-w-[5%] p-0`}
                >
                {t(`point:${tab}`)}
                </Button>
            ))}
            <PointModal open={open} setOpen={setOpen} t={t} />
            </div>
        </div>
    )
}