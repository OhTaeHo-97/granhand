import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown } from "lucide-react";
import CouponList from "./components/coupon-list";

export default function CouponPage() {
    return (
        <main className="flex-1 ml-10 space-y-12">
        {/* <main className="max-w-5xl mx-auto px-4 py-10"> */}
        <div className="flex justify-end items-center mb-4 text-sm font-medium text-gray-600">
            <Select defaultValue="door">
                <SelectTrigger className="w-fit border-none rounded px-4 py-2 text-sm h-15 bg-transparent">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                    <SelectItem value="door" defaultChecked>최신순</SelectItem>
                    <SelectItem value="call">도착 후 연락주세요</SelectItem>
                    <SelectItem value="none">요청사항 없음</SelectItem>
                </SelectContent>
            </Select>
            {/* <ChevronDown className="w-4 h-4 ml-1" /> */}
        </div>
        <CouponList />
        </main>
    )
}