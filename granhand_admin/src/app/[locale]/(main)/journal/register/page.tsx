'use client'

import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { cn } from "@/lib/utils";
// // import { RadioGroup } from "@radix-ui/react-radio-group";
// import { Calendar, CalendarIcon, Clock, Globe, X } from "lucide-react";
import { useState } from "react";
import CreateJournalHeader from "./components/header";
import JournalContents from "./components/journal-contents";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";

export default function RegisterJourneyPage() {
    const OPTIONS = ['Team', 'Life', 'Work', 'Travel', 'Food']

    // const [type, setType] = useState<'now' | 'reserve'>('now'
    // const [date, setDate] = useState('2024.01.04')
    // const [hour, setHour] = useState('13')
    // const [minute, setMinute] = useState('00'))
    const [type, setType] = useState('immediate')
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [hour, setHour] = useState(new Date().getHours())
    const [minute, setMinute] = useState(new Date().getMinutes())
    const [language, setLanguage] = useState('korean')
    const [selected, setSelected] = useState<string[]>([])

    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'journal'])

    // const handleSelect = (value: string) => {
    //     if (!selected.includes(value)) {
    //         setSelected([...selected, value])
    //     }
    // }

    // const handleRemove = (value: string) => {
    //     setSelected(selected.filter((v) => v !== value))
    // }

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
                <CreateJournalHeader selected={selected} setSelected={setSelected} t={t} />
                <JournalContents type={type} language={language} date={date} hour={hour} minute={minute} setType={setType} setLanguage={setLanguage} setDate={setDate} setHour={setHour} setMinute={setMinute} t={t} />
            </div>
        </main>
    )
}