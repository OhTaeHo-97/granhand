'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RefreshCw, Search } from "lucide-react";
import { useState } from "react"
import Pagination from "@/components/pagination";
import { Checkbox } from "@/components/ui/checkbox";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import PeriodElement from "../../components/period";
import ScheduleSendModal from "./schedule-send-modal";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

export default function PushListPage() {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'push'])
    const currentLocale = useCurrentLocale()
    const [quickRange, setQuickRange] = useState('')
    const [startDate, setStartDate] = useState<Date | undefined>(new Date())
    const [endDate, setEndDate] = useState<Date | undefined>(new Date())
    const [message, setMessage] = useState('')
    const [openScheduleSend, setOpenScheduleSend] = useState(false)

    const handleCancelRepeated = () => {
        const confirmed = window.confirm('반복 예약을 취소하시겠습니까?')

        if(confirmed) {
            console.log('반복 예약 취소')
        } else {
            console.log('반복 예약 취소 취소')
        }
    }

    const handleClickInitiate = () => {
        setQuickRange('')
        setStartDate(new Date())
        setEndDate(new Date())
        setMessage('')
    }

    const handleClickSearch = () => {
        const pathname=`${currentLocale}/push`
        const startDateStr = startDate ? format(startDate, 'yyyy-MM-dd') : ''
        const endDateStr = endDate ? format(endDate, 'yyyy-MM-dd') : ''
        const queryParams = {
            startDate: startDateStr,
            endDate: endDateStr,
            message: message,
            tab: 'history'
        }

        const params = new URLSearchParams(queryParams)
        const queryString = params.toString()

        router.push(`${pathname}?${queryString}`)
    }

    return (
        <>
            {/* 발송 타입 */}
            <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7 mt-10">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('push:period')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <PeriodElement startDate={startDate} endDate={endDate} quickRange={quickRange} setStartDate={setStartDate} setEndDate={setEndDate} setQuickRange={setQuickRange} t={t} />
                    </div>
                </div>

                {/* 두 번째 행 */}
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('push:message_content')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Input type="text" defaultValue={message} onChange={(e) => setMessage(e.target.value)} placeholder={t('search')} />
                    </div>
                </div>
            </div>
            <div className="flex mx-auto justify-center items-center w-full gap-10 mb-10">
                <Button className="bg-white text-[#322A24] border w-32" onClick={handleClickInitiate}>
                    <RefreshCw />
                    {t('reset')}
                </Button>
                <Button className="bg-[#322A24] text-white w-32" onClick={handleClickSearch}>
                    <Search />
                    {t('search')}
                </Button>
            </div>

            <div className="mb-3">
                <Button className="border h-9">{t('push:delete_record')}</Button>
            </div>
            <div className="overflow-auto rounded bg-white">
            <table className="w-full text-left border-collapse min-w-6xl">
            <thead className="bg-[#322A2408] border-t">
                <tr className="border-b text-[#6F6963]">
                <th className="p-2 items-center"></th>
                <th className="p-2 text-center">{t('push:send_date')}</th>
                <th className="p-2 text-center">{t('push:status')}</th>
                <th className="p-2 text-center">{t('push:title')}</th>
                <th className="p-2 text-center">{t('push:content')}</th>
                <th className="p-2 text-center">{t('push:recipients_count')}</th>
                <th className="p-2 text-center">{t('push:delivery_status')}</th>
                <th className="p-2 text-center">{t('push:schedule_status')}</th>
                <th className="p-2 text-center">{t('push:manage')}</th>
                </tr>
            </thead>
            <tbody>
                {Array.from({ length: 12 }).map((_, i) => (
                <tr key={i} className="border-b h-14 text-[#111111]">
                    <td className="p-2 items-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                    <td className="p-2 text-center">2023.12.24 10:00</td>
                    <td className="p-2 text-center">반복 예약</td>
                    <td className="p-2 text-center">재입고 알림</td>
                    <td className="p-2 text-center">Roland Multi Perfume / 100ml (가) 입고되었어요.</td>
                    <td className="p-2 text-center">739</td>
                    <td className="p-2 text-center">발송 완료</td>
                    <td className="p-2 text-center">일반 푸시</td>
                    <td className="p-2 flex gap-1 flex-wrap items-center justify-center text-[#5E5955]">
                        <Button className="border rounded px-2" onClick={() => setOpenScheduleSend((prev) => !prev)}>{t('push:edit_schedule')}</Button>
                        <Button className="border rounded px-2" onClick={handleCancelRepeated}>{t('push:cancel_repeat')}</Button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
            </div>
            <Pagination totalPages={15} />
            <ScheduleSendModal open={openScheduleSend} setOpen={setOpenScheduleSend} />
        </>
    )
}