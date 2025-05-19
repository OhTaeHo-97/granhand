'use client'

import { Button } from "@/components/ui/button";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useState } from "react";
import { useTranslation } from "../../../../../../utils/localization/client";
import CreateWallpaperHeader from "./components/header";
import WallpaperContents from "./components/wallpaper-contents";

export default function RegisterWallpaperPage() {
    const [type, setType] = useState<'immediate' | 'scheduled'>('immediate')
    const [language, setLanguage] = useState<'korean' | 'english'>('korean')
    const [date, setDate] = useState(new Date())
    const [hour, setHour] = useState(new Date().getHours())
    const [minute, setMinute] = useState(new Date().getMinutes())

    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'wallpaper'])

    const handleRegister = () => {
        const confirmed = window.confirm('작성한 글을 게시하겠습니까?')
        
        if(confirmed) {
            console.log('게시')
        } else {
            console.log('게시 취소')
        }
    }

    return (
        <main className="flex-1 border">
            <div className="flex justify-between p-12">
                <div className="text-[#5E5955] text-sm space-y-4">
                    <h1 className="text-2xl font-bold">{t('wallpaper:wallpaper_manage')}</h1>
                </div>
                <div className="space-x-2">
                    <Button className="bg-white text-black border w-25">
                        {t('wallpaper:cancel')}
                    </Button>
                    <Button className="bg-[#322A24] text-white w-25" onClick={handleRegister}>
                        {t('wallpaper:publish')}
                    </Button>
                </div>
            </div>
            <div className="mt-7 p-12">
                <CreateWallpaperHeader t={t} />
                <WallpaperContents type={type} language={language} date={date} hour={hour} minute={minute} setType={setType} setLanguage={setLanguage} setDate={setDate} setHour={setHour} setMinute={setMinute} t={t} />
            </div>
        </main>
        )
}