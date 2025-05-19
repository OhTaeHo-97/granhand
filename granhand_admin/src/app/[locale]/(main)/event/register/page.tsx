'use client'

import { Button } from "@/components/ui/button";
import { useState } from "react";
import CreateEventHeader from "./components/header";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import EventContents from "./components/event-contents";

export default function RegisterEvenPage() {
    const [type, setType] = useState<'immediate' | 'scheduled'>('immediate')
    const [language, setLanguage] = useState<'korean' | 'english'>('korean')
    const [date, setDate] = useState(new Date())
    const [hour, setHour] = useState(new Date().getHours())
    const [minute, setMinute] = useState(new Date().getMinutes())

    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'event'])

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
                    <h1 className="text-2xl font-bold">{t('event:event_manage')}</h1>
                </div>
                <div className="space-x-2">
                    <Button className="bg-white text-black border w-25">
                        {t('event:cancel')}
                    </Button>
                    <Button className="bg-[#322A24] text-white w-25" onClick={handleRegister}>
                        {t('event:publish')}
                    </Button>
                </div>
            </div>
            <div className="mt-7 p-12">
                <CreateEventHeader t={t} />
                <EventContents type={type} language={language} date={date} hour={hour} minute={minute} setType={setType} setLanguage={setLanguage} setDate={setDate} setHour={setHour} setMinute={setMinute} t={t} />
            </div>
        </main>
    )
}