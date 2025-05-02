'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SearchIcon } from "lucide-react";
import SelectDestination from "../components/select-destination";
import { useState } from "react";

export default function TestPage() {
    const [open, setOpen] = useState(false)
    return (
        <div className="p-8 space-y-6 text-sm text-[#6f6963] max-w-6xl mx-auto">
            {/* 제목 */}
            <h1 className="font-bold text-lg">발송 대상 선택</h1>

            <div className="grid grid-cols-[110px_1fr] gap-4 w-full">
                <div className="gap-2 items-center h-30">
                    <div className="mb-2 text-gray-500">개인 정보</div>
                    <Select defaultValue="아이디">
                        <SelectTrigger className="">
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

                    {/* 테이블 오른쪽 div 안에 넣음 */}
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
                <Button variant="outline">취소</Button>
                <Button className="bg-black text-white" onClick={() => setOpen((prev) => !prev)}>저장</Button>
            </div>
            <SelectDestination open={open} setOpen={setOpen} />
        </div>
    )
}