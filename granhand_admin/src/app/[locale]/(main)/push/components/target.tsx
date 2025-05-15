import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SearchIcon, X } from "lucide-react";
import { useEffect } from "react";
import SelectDestination from "./select-destination";

export default function TargetModal({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
    // ESC로 닫기
    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open, setOpen]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* 오버레이 */}
            <div
                className="fixed inset-0 bg-black/60"
                onClick={() => setOpen(false)}
                aria-hidden
            />
            {/* 모달 컨텐츠 */}
            <div className="relative bg-white w-full h-full max-w-6xl mx-auto my-0 rounded-none shadow-lg z-50 flex flex-col">
                <button
                    onClick={() => setOpen(false)}
                    className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
                >
                    <X className="h-4 w-4" />
                    {/* <span className="sr-only">Close</span> */}
                </button>
                <div className="flex-1 overflow-y-auto p-8">
                {/* 헤더 */}
                <div className="mb-6">
                    <h1 className="text-xl font-bold">발송 대상 선택</h1>
                </div>
                <div className="p-8 space-y-6 text-sm text-[#6f6963] max-w-6xl mx-auto h-full overflow-y-auto overflow-x-auto">
                    {/* 제목 */}
                    <h1 className="font-bold text-lg">발송 대상 선택</h1>
                    <div className="grid grid-cols-[110px_1fr] gap-4 w-full">
                    <div className="gap-2 items-center h-30">
                        <div className="mb-2 text-gray-500">개인 정보</div>
                        <Select defaultValue="아이디">
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            <SelectItem value="아이디">아이디</SelectItem>
                            <SelectItem value="이메일">이메일</SelectItem>
                            <SelectItem value="전화번호">전화번호</SelectItem>
                        </SelectContent>
                        </Select>
                    </div>
                    <div className="w-full flex flex-col gap-4 h-full">
                        <div className="w-full flex gap-2 relative h-full">
                        <Input
                            type="text"
                            placeholder="검색어 입력"
                            className="border rounded w-full px-4 pr-10 py-2 text-sm text-[#6f6963] h-17 focus:outline-none"
                        />
                        <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6f6963]" />
                        </div>
                        <table className="w-full border-collapse text-left text-sm border">
                        <tbody>
                            {Array.from({ length: 4 }).map((_, i) => (
                            <tr key={i} className="border-b border-gray-200">
                                <td className="px-8 py-4 font-semibold">홍길동</td>
                                <td className="px-8 py-4 underline cursor-pointer font-semibold">gidklsaj@gmail.com</td>
                                <td className="px-8 py-4 font-semibold">010-6545-6546</td>
                                <td className="px-8 py-4 font-semibold">Gold</td>
                                <td className="px-8 py-4 font-semibold">2023-11-23</td>
                                <td className="px-8 py-4 font-semibold">45회 6,340,000원</td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
                    <div className="flex justify-center">
                    <Button variant="outline">추가</Button>
                    </div>
                    {/* 추가된 회원 테이블 */}
                    <div className="mt-8">
                    <h2 className="font-semibold mb-2">추가된 회원</h2>
                    <table className="w-full border-collapse text-left text-sm">
                        <thead className="border-y border-gray-300 bg-gray-50">
                        <tr>
                            <th className="p-2 items-center h-14">
                            <input type="checkbox" />
                            </th>
                            <th className="p-2 text-center">고객명</th>
                            <th className="p-2 text-center">아이디</th>
                            <th className="p-2 text-center">휴대폰 번호</th>
                            <th className="p-2 text-center">회원 등급</th>
                            <th className="p-2 text-center">가입일</th>
                            <th className="p-2 text-center">누적 구매금액</th>
                            <th className="p-2 text-center">제외</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Array.from({ length: 8 }).map((_, i) => (
                            <tr key={i} className="h-10">
                            <td className="p-2 items-center">
                                <input type="checkbox" defaultChecked />
                            </td>
                            <td className="p-2 text-center">홍길동</td>
                            <td className="p-2 underline cursor-pointer text-center">gidklsaj@gmail.com</td>
                            <td className="p-2 text-center">010-6545-6546</td>
                            <td className="p-2 text-center">Gold</td>
                            <td className="p-2 text-center">2023-11-23</td>
                            <td className="p-2 text-center">45회 6,340,000원</td>
                            <td className="p-2 items-center justify-center flex">
                                <Button variant="outline" size="sm">제외</Button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                    {/* 하단 버튼 */}
                    <div className="flex justify-center gap-4 mt-8">
                    <Button variant="outline" onClick={() => setOpen(false)}>취소</Button>
                    <Button className="bg-black text-white" onClick={() => setOpen(false)}>저장</Button>
                    </div>
                    {/* <SelectDestination open={open} setOpen={setOpen} /> */}
                </div>
                </div>
            </div>
        </div>
    );
}