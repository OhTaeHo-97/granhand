'use client'

import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales"
import { useState } from "react"
import { useTranslation } from "../../../../../../utils/localization/client"
import { Button } from "@/components/ui/button"
import CreateJournalHeader from "../register/components/header"
import JournalContents from "../register/components/journal-contents"

export default function JournalInfo({ category }: { category: string }) {
    const [type, setType] = useState('immediate')
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [hour, setHour] = useState(new Date().getHours())
    const [minute, setMinute] = useState(new Date().getMinutes())
    const [language, setLanguage] = useState('korean')
    const [selected, setSelected] = useState<string[]>([])

    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'journal'])

    const journalContents = {
        titleKo: '19 February 2024: ‘GRANHAND’ Brand Book Published',
        titleEn: '19 February 2024: ‘GRANHAND’ Brand Book Published',
        images: [
            'ㅁㄴㅇㅁㄴㅇ.jpg'
        ],
        tags: [
            'Team', 'News'
        ]
    }

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
                    <h1 className="text-2xl font-bold">{t('journal:journal_manage')}</h1>
                </div>
                <div className="space-x-2">
                    <Button className="bg-white text-black border w-25">
                        {t('journal:cancel')}
                    </Button>
                    <Button className="bg-[#322A24] text-white w-25" onClick={handleRegister}>
                        {t('journal:publish')}
                    </Button>
                </div>
            </div>

            <div className="mt-7 p-12">
                {category === 'edit' && (
                    <>
                        <h2 className="font-bold text-xl text-[#5E5955] mb-10">게시물 수정</h2>
                        <CreateJournalHeader selected={selected} setSelected={setSelected} t={t} journalInfo={journalContents} />
                    </>
                )}
                {category === 'register' && (
                    <CreateJournalHeader selected={selected} setSelected={setSelected} t={t} />
                )}
                <JournalContents type={type} language={language} date={date} hour={hour} minute={minute} setType={setType} setLanguage={setLanguage} setDate={setDate} setHour={setHour} setMinute={setMinute} t={t} />
            </div>
        </main>
    )
}