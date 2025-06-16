import { ChevronLeft, ChevronRight } from "lucide-react";
import "react-day-picker/dist/style.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const TIMES = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"
];

export default function CustomCalendarWithTime({ 
    initialDate,
    initialTime,
    needTime=true,
    onCancel,
    onSave,
}: {
    initialDate?: Date;
    initialTime?: string;
    needTime?: boolean,
    onCancel?: () => void;
    onSave?: (date: Date, time: string) => void;
}) {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState<Date>(
        initialDate ? new Date(initialDate) : new Date(today.getFullYear(), today.getMonth(), 1)
    );
    const [selectedDate, setSelectedDate] = useState<Date>(
        initialDate ? new Date(initialDate) : today
    );
    const [selectedTime, setSelectedTime] = useState<string>(initialTime || "12:00");

    // 이번 달 달력 2차원 배열 생성
    const getCalendarMatrix = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);
        const startDay = firstDayOfMonth.getDay(); // 0: Sunday
        const daysInMonth = lastDayOfMonth.getDate();

        const matrix: (Date | null)[][] = [];
        let week: (Date | null)[] = [];
        let dayCounter = 1;

        // 첫 주
        for (let i = 0; i < 7; i++) {
        if (i < startDay) {
            week.push(null);
        } else {
            week.push(new Date(year, month, dayCounter++));
        }
        }
        matrix.push(week);

        // 나머지 주
        while (dayCounter <= daysInMonth) {
        week = [];
        for (let i = 0; i < 7; i++) {
            if (dayCounter > daysInMonth) {
            week.push(null);
            } else {
            week.push(new Date(year, month, dayCounter++));
            }
        }
        matrix.push(week);
        }
        return matrix;
    };

    const calendar = getCalendarMatrix();

    // 월 이동
    const goToPrevMonth = () => {
        setCurrentMonth(
        (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
        );
    };
    const goToNextMonth = () => {
        setCurrentMonth(
        (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
        );
    };

    // YYYY.MM 포맷
    const getMonthLabel = (date: Date) =>
        `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}`;

    // 날짜 선택 핸들러
    const handleDateClick = (date: Date | null) => {
        if (date) setSelectedDate(date);
    };

    return (
        <div className="p-8 rounded-xl w-[380px] mx-auto text-[#322A24]">
            {/* 상단: 월 이동/월 표시 */}
            <div className="flex items-center justify-between mb-4">
                <Button
                className="h-8 w-8 rounded-full hover:bg-gray-200 flex items-center justify-center text-[#5E5955]"
                onClick={goToPrevMonth}
                >
                <ChevronLeft className="!h-6 !w-6" />
                </Button>
                <span className="text-2xl font-bold text-center tracking-widest">
                {getMonthLabel(currentMonth)}
                </span>
                <Button
                className="h-8 w-8 rounded-full hover:bg-gray-200 flex items-center justify-center text-[#5E5955]"
                onClick={goToNextMonth}
                >
                <ChevronRight className="!h-6 !w-6" />
                </Button>
            </div>

            {/* 요일 */}
            <div className="grid grid-cols-7 text-center text-base font-bold text-gray-700 mb-1">
                {WEEKDAYS.map((d) => (
                <div key={d}>{d}</div>
                ))}
            </div>

            {/* 날짜 */}
            <div className="grid grid-cols-7 text-center">
                {calendar.flat().map((date, idx) => {
                    const isSelected =
                        date &&
                        selectedDate &&
                        date.getFullYear() === selectedDate.getFullYear() &&
                        date.getMonth() === selectedDate.getMonth() &&
                        date.getDate() === selectedDate.getDate();
                    return (
                        <Button
                        key={idx}
                        className={`!h-10 !w-10 rounded-full mx-auto my-1
                            ${isSelected ? "bg-gray-200 text-gray-900 font-bold" : "text-gray-900"}
                            ${date ? "hover:bg-gray-100" : ""}
                            `}
                        onClick={() => handleDateClick(date)}
                        disabled={!date}
                        type="button"
                        >
                        {date ? date.getDate() : ""}
                        </Button>
                    );
                })}
            </div>

            {/* 시간 선택 */}
            {needTime && (
                <div className="mt-8 mb-4">
                    <Label className="block mb-2 text-base font-semibold text-gray-700">시간 선택</Label>
                    <Select defaultValue={initialTime} onValueChange={(value) => setSelectedTime(value)}>
                        <SelectTrigger className="w-full border rounded px-4 py-3 text-base focus:outline-none">
                        <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border rounded shadow-md">
                            {TIMES.map((time) => (
                                <SelectItem key={time} value={time} className="px-3 py-2 /cursor-pointer">{time}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            )}

            {/* 하단 버튼 */}
            <div className="flex gap-4 mt-6">
                <Button
                className="flex-1 py-3 rounded border border-gray-300 text-[#322A24] font-semibold bg-white hover:bg-gray-100"
                onClick={onCancel}
                >
                취소
                </Button>
                <Button
                className="flex-1 py-3 rounded bg-[#322A24] text-white font-semibold hover:bg-black"
                onClick={() => onSave?.(selectedDate, selectedTime)}
                >
                저장
                </Button>
            </div>
        </div>
    );
}