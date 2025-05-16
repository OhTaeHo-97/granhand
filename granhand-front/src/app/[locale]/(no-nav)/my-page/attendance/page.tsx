'use client'

import { useState } from "react";
import { subMonths, addMonths, isSameDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, format, addDays } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../../utils/localization/client";
import { Button } from "@/components/ui/button";
import BasicModal from "@/app/[locale]/components/modal";

export default function AttendancePage() {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [checkedDays, setCheckedDays] = useState<Date[]>([]);
    const [today] = useState(new Date());
    const [open, setOpen] = useState(false)
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'my_page')
    const perfectAttendance = false

    const message = () => {
        if(perfectAttendance) return t('perfect_attendance')
        return t('attendance_cmpl')
    }

    const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

    const handleCheck = () => {
        if (!checkedDays.some((d) => isSameDay(d, today))) {
            setCheckedDays([...checkedDays, today]);
            setOpen(true);
            setTimeout(() => setOpen(false), 2000);
        }
    };

    const checkedToday = checkedDays.filter(day => isSameDay(day, today))
    const isCheckedToday = !checkedToday || checkedToday.length === 0 ? false : true

    const renderCalendar = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                const isToday = isSameDay(day, today);
                const isChecked = checkedDays.some((d) => isSameDay(d, day));
                const isCurrentMonth = isSameMonth(day, currentMonth);

                formattedDate = format(day, "d");

                days.push(
                <div
                    key={day.toString()}
                    className={`w-10 h-10 flex items-center justify-center text-sm rounded-full mx-auto relative
                    ${isChecked ? "bg-black text-white" : isCurrentMonth ? "text-black" : "text-gray-300"}`}
                >
                    {isChecked ? "✓" : formattedDate}
                    {isToday && !isChecked && (
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-gray-400 text-2xl">•</div>
                    )}
                </div>
                );
                day = addDays(day, 1);
            }
            rows.push(<div key={day.toString()} className="grid grid-cols-7 gap-x-3">{days}</div>);
            days = [];
        }
        return <div className="space-y-2">{rows}</div>;
    };

    return (
        <main className="w-full mx-auto space-y-6 max-w-4xl min-w-96">
            <section className="rounded-md shadow-sm px-6 pt-6 pb-8 border-t-4 border-black">
                <div className="max-w-1/2 min-w-80 mx-auto items-center justify-between">
                    <div className="flex justify-between items-center mb-12 px-10">
                        <button onClick={handlePrevMonth}><ChevronLeft className="text-gray-400" /></button>
                        <h2 className="text-lg font-bold">{format(currentMonth, "yyyy.MM")}</h2>
                        <button onClick={handleNextMonth}><ChevronRight className="text-gray-400" /></button>
                    </div>

                    <div className="grid grid-cols-7 gap-x-3 text-center text-sm text-gray-900 font-semibold mb-8">
                    {"SMTWTFS".split("").map((d) => (
                        <div key={d}>{d}</div>
                    ))}
                    </div>

                    {renderCalendar()}
                </div>

                <div className="text-right text-sm text-gray-600 flex items-center justify-end mt-4 gap-1">
                    <span className="text-lg">✔</span>
                    {t('check_in_cmpl')}
                </div>
            </section>

            <section className="flex justify-between border rounded-md py-4 text-sm text-center mb-12">
                <div className="w-1/2 flex flex-col items-center justify-center">
                    <p className="text-gray-400 mb-1">{t('total_check_in')}</p>
                    <p className="text-lg font-bold">{checkedDays.length}{t('day')}</p>
                </div>
                <div className="w-px h-10 bg-gray-200 self-center"></div>
                <div className="w-1/2 flex flex-col items-center justify-center">
                    <p className="text-gray-400 mb-1">{t('total_points')}</p>
                    <p className="text-lg font-bold">{checkedDays.length * 100}</p>
                </div>
            </section>

            <div className="relative mb-2">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-[#E34234] text-white text-xs px-3 py-1 rounded shadow-md after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-t-[#E34234] after:border-x-transparent after:border-b-0">
                    {t('check_in_toast')}
                </div>
            </div>
            <Button
                onClick={handleCheck}
                className="bg-black text-white text-center w-full py-3 font-medium text-sm h-12"
                disabled={isCheckedToday}
            >
                {t('check_in')}
            </Button>
            <BasicModal open={open} setOpen={setOpen} btnText="confirm" locale={locale} contents={message()} />
            {/* <InfoModal open={open} setOpen={setOpen} /> */}
        </main>
    );
}