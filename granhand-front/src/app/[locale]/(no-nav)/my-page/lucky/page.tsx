'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import LuckyModal from "./components/lucky-modal";
import { getLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../../utils/localization/client";

export default function LuckyDrawPage() {
    const [open, setOpen] = useState(false)
    const locale = getLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'my_page')

    return (
        <main className="w-full mx-auto ml-10 min-h-screen flex flex-col items-center pt-24 pb-12">
            {/* Centered text */}
            <div className="flex-2/4 flex items-center justify-center">
                <h1 className="text-lg font-bold text-gray-900 text-center">
                    {t('today_luck')}
                </h1>
            </div>

            {/* Bottom fixed button */}
            <div className="flex-2/4 flex w-full px-4 max-w-dvh">
                <Button className="bg-black text-white text-center w-full py-3 font-medium text-base" onClick={() => setOpen((prev) => !prev)}>
                    {t('lucky')}
                </Button>
            </div>
            <LuckyModal open={open} setOpen={setOpen} />
        </main>
    )
}