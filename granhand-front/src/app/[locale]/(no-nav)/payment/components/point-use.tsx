'use client'

import { useState } from "react"
import PointModal from "./modal/point-modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function PointUse({ t }: { t: (key: string) => string }) {
    const [open, setOpen] = useState(false)
    
    return (
        <section className="space-y-2 mb-10">
            <div className="text-sm font-bold flex items-center gap-2 text-[#322A24]">
                {t('payment:points')}
                <div className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 text-xs" onClick={() => setOpen((prev) => !prev)}>?</div>
            </div>
            <div className="flex gap-2">
                <Input
                type="text"
                placeholder={t('payment:points_placeholder')}
                className="flex-1 border rounded px-3 py-2 text-sm h-[46px] !border-[#C0BCB6] placeholder:text-[#C0BCB6]"
                />
                <Button className="border px-4 py-2 text-sm font-bold rounded text-white bg-[#322A24] w-[88px] h-[46px]">{t('payment:use_all')}</Button>
            </div>
            <div className="bg-[#FDFBF5] shadow-sm border rounded px-4 py-3 text-xs flex justify-between font-bold items-center text-[#6F6963] h-[52px]">
                <span>{t('payment:available_point')}</span>
                <span>13,900</span>
            </div>
            <PointModal open={open} setOpen={setOpen} t={t} />
        </section>
    )
}