'use client'

import Pagination from "@/components/pagination";
import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pencil } from "lucide-react";
// import { LocaleTypes } from "../../../../../utils/localization/settings";
// import { translation } from "../../../../../utils/localization/locales/server";
// import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";
import ChallengeList from "./components/challenge-list";
import ChallengeModal from "./components/challenge-modal";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../utils/localization/client";
import { useEffect, useState } from "react";

export default function ChallengePage() {
    const [open, setOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [contents, setContents] = useState([])
    const [size, setSize] = useState('50')

    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'challenge'])
    const currentLocale = useCurrentLocale()

    const fetchChallenges = () => {

    }

    // useEffect(() => {
    //     if(status === 'authenticated') {
    //         fetchChallenges()
    //     }
    // }, [status])

    // useEffect(() => {
        
    // }, [currentPage, size])

    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <div className="flex justify-between items-center">
                    <div className="text-black text-sm">
                        <h1 className="text-2xl font-bold text-[#5E5955]">{t('challenge:challenge_manage')}</h1>
                    </div>
                    <div className="space-x-2">
                        <Button className="bg-[#322A24] text-white" onClick={() => setOpen((prev) => !prev)}>
                            <Pencil />{t('challenge:create_challenge')}
                        </Button>
                    </div>
                </div>

                <ChallengeList contents={contents} size={size} t={t} currentLocale={currentLocale} setSize={setSize} />
                {/* <Pagination totalPages={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
                <Pagination totalPages={15} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
            <ChallengeModal open={open} setOpen={setOpen} t={t} />
        </main>
    )
}