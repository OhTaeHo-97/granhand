'use client'

import { useState } from "react"
import PointModal from "./modal/point-modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function PointUse({ t }: { t: (key: string) => string }) {
    const [open, setOpen] = useState(false)
    
    return (
        <section className="space-y-2 mb-10">
            <div className="text-base font-bold flex items-center gap-2">
                {t('payment:points')}
                <div className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 text-xs" onClick={() => setOpen((prev) => !prev)}>?</div>
            </div>
            <div className="flex gap-2">
                <Input
                type="text"
                placeholder={t('payment:points_placeholder')}
                className="flex-1 border rounded px-3 py-2 text-sm h-15"
                />
                <Button className="border px-4 py-2 text-sm font-semibold rounded text-white bg-black h-15">{t('payment:use_all')}</Button>
            </div>
            <div className="bg-white shadow-sm border rounded px-4 py-3 text-sm flex justify-between items-center">
                <span className="font-bold text-gray-700">{t('payment:available_point')}</span>
                <span className="font-bold text-gray-700">13,900</span>
            </div>
            <PointModal open={open} setOpen={setOpen} t={t} />
        </section>
    )
}