'use client'

import { useState } from "react";
import { subMonths, addMonths, isSameDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, format, addDays } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import InfoModal from "./components/modal";

export default function AttendancePage() {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [checkedDays, setCheckedDays] = useState<Date[]>([]);
    const [today] = useState(new Date());
    const [showToast, setShowToast] = useState(false);
    const [open, setOpen] = useState(false)

    const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

    const handleCheck = () => {
        if (!checkedDays.some((d) => isSameDay(d, today))) {
            setCheckedDays([...checkedDays, today]);
            setOpen(true);
            setTimeout(() => setOpen(false), 2000);
            // setShowToast(true);
            // setTimeout(() => setShowToast(false), 2000);
        }
    };

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
            {/* px-4 py-10 max-w-md */}
            {/* {showToast && (
                <div className="text-center bg-gray-800 text-white text-sm py-1 rounded">1주 달성 시 500 포인트 추가 지급</div>
            )} */}

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

                <div className="text-right text-sm text-gray-400 flex items-center justify-end mt-4 gap-1">
                    <span className="text-lg">✔</span>
                    출석 완료
                </div>
            </section>

            {/* <section className="flex justify-around border rounded-md py-4 text-center text-sm">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-gray-400 mb-1">누적 참여 횟수</p>
                    <p className="text-lg font-bold">{checkedDays.length}일</p>
                </div>
                <div className="border-l border-gray-200"></div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-gray-400 mb-1">누적 획득 포인트</p>
                    <p className="text-lg font-bold">{checkedDays.length * 100}</p>
                </div>
            </section> */}

            <section className="flex justify-between border rounded-md py-4 text-sm text-center mb-12">
                <div className="w-1/2 flex flex-col items-center justify-center">
                    <p className="text-gray-400 mb-1">누적 참여 횟수</p>
                    <p className="text-lg font-bold">{checkedDays.length}일</p>
                </div>
                <div className="w-px h-10 bg-gray-200 self-center"></div>
                <div className="w-1/2 flex flex-col items-center justify-center">
                    <p className="text-gray-400 mb-1">누적 획득 포인트</p>
                    <p className="text-lg font-bold">{checkedDays.length * 100}</p>
                </div>
            </section>

            {/* <section className="grid grid-cols-3 border rounded-md py-4 text-sm text-center">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-gray-400 mb-1">누적 참여 횟수</p>
                    <p className="text-lg font-bold">{checkedDays.length}일</p>
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-px h-10 bg-gray-200"></div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-gray-400 mb-1">누적 획득 포인트</p>
                    <p className="text-lg font-bold">{checkedDays.length * 100}</p>
                </div>
            </section> */}

            <div className="relative mb-2">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-gray-600 text-white text-xs px-3 py-1 rounded shadow-md after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-t-gray-600 after:border-x-transparent after:border-b-0">
                    1주 달성 시 500 포인트 추가 지급
                </div>
            </div>
            <button
                onClick={handleCheck}
                // onClick={() => setOpen((prev) => !prev)}
                className="bg-black text-white text-center w-full py-3 font-medium text-sm"
            >
                출석 체크하기
            </button>
            <InfoModal open={open} setOpen={setOpen} />
        </main>
    );
}