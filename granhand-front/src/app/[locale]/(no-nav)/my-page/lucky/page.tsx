'use client'

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../../utils/localization/client";
import BasicModal from "@/app/[locale]/components/modal";

export default function LuckyDrawPage() {
    const [open, setOpen] = useState(false)
    // const [attendance, setAttendance] = useState(false)
    // const [todayDraw, setTodayDraw] = useState(false)
    const [attendance] = useState(false)
    const [todayDraw] = useState(false)
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'my_page')

    const message = () => {
        if(!attendance) return t('need_attendance')
        else if(todayDraw) return t('already_draw')
        return t('draw_cmpl')
    }

    return (
        <main className="w-[739px] mx-auto ml-10 min-h-screen flex flex-col items-center pt-24 pb-12">
            {/* Centered text */}
            <div className="flex-2/4 flex items-center justify-center">
                <h1 className="text-lg font-bold text-[#322A24] text-center">
                    {t('today_luck')}
                </h1>
            </div>

            {/* Bottom fixed button */}
            <div className="flex-2/4 flex w-full px-4 max-w-dvh">
                <Button className="bg-[#322A24] text-white text-sm text-center w-full h-[46px] py-3 font-bold disabled::bg-[#DBD7D0]" onClick={() => setOpen((prev) => !prev)}>
                    {t('lucky')}
                </Button>
            </div>
            <BasicModal open={open} setOpen={setOpen} contents={message()} btnText="confirm" locale={locale} />
            {/* <LuckyModal open={open} setOpen={setOpen} /> */}
        </main>
    )
}