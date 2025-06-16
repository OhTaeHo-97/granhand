'use client'

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SearchIcon, X } from "lucide-react";
import { useEffect, useState, useMemo } from "react"; // useMemo 임포트
import { cn } from "@/lib/utils"; // cn 유틸리티 임포트

// 회원 데이터 인터페이스 정의 (기존 유지)
interface Member {
    id: number;
    name: string;
    email: string;
    phone: string;
    grade: string;
    joinDate: string;
    purchaseAmount: string;
}

// 더미 데이터 생성 (기존 유지)
const allMembers: Member[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `홍길동${i + 1}`,
    email: `gidklsaj${i + 1}@gmail.com`,
    phone: `010-1234-56${(i + 1).toString().padStart(2, '0')}`,
    grade: i % 2 === 0 ? "Gold" : "Silver",
    joinDate: `2023-11-${(i + 1).toString().padStart(2, '0')}`,
    purchaseAmount: `${i * 10 + 5}회 ${((i * 10 + 5) * 100000).toLocaleString()}원`,
}));

export default function TargetModal({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchCategory, setSearchCategory] = useState<"name" | "email" | "phone">("name")
    const [selectedTopTableMembers, setSelectedTopTableMembers] = useState<number[]>([])
    const [addedMembers, setAddedMembers] = useState<Member[]>([])
    const [selectedMembers, setSelectedMembers] = useState<number[]>([])

    const filteredSearchMembers = useMemo(() => {
        if (!searchTerm) {
            return allMembers;
        }
        const lowerSearchTerm = searchTerm.toLowerCase();
        return allMembers.filter(member => {
            if (searchCategory === "name") {
                return member.name.toLowerCase().includes(lowerSearchTerm)
            } else if (searchCategory === "email") {
                return member.email.toLowerCase().includes(lowerSearchTerm)
            } else if (searchCategory === "phone") {
                return member.phone.includes(lowerSearchTerm)
            }
            return false
        })
    }, [searchTerm, searchCategory])

    // ESC로 모달 닫기
    useEffect(() => {
        if (!open) return
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false)
        }
        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [open, setOpen])

    if (!open) return null

    const handleTopTableRowClick = (memberId: number) => {
        setSelectedTopTableMembers((prev) => {
            if(prev.includes(memberId)) {
                return prev.filter((id) => id !== memberId)
            } else {
                return [...prev, memberId]
            }
        })
    }

    const handleAddSelectedMembers = () => {
        const membersToAdd = filteredSearchMembers.filter((member) => 
            selectedTopTableMembers.includes(member.id) &&
            !addedMembers.some((addedMember) => addedMember.id === member.id)
        )
        setAddedMembers((prev) => [...prev, ...membersToAdd])
        setSelectedTopTableMembers([])
    }

    const isAllSelectedBottomTable = addedMembers.length > 0 && selectedMembers.length === addedMembers.length;
    const handleSelectAllBottomTable = (checked: boolean) => {
        if (checked) {
            setSelectedMembers(addedMembers.map(member => member.id))
        } else {
            setSelectedMembers([])
        }
    };

    const handleCheckboxChangeBottomTable = (id: number) => {
        setSelectedMembers((prev) => {
            if (prev.includes(id)) {
                return prev.filter((itemId) => itemId !== id)
            } else {
                return [...prev, id]
            }
        });
    };

    const handleRemoveMember = (memberId: number) => {
        setAddedMembers(prev => prev.filter(member => member.id !== memberId))
        setSelectedMembers(prev => prev.filter(id => id !== memberId))
    };

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
                </button>
                <div className="flex-1 overflow-y-auto p-8 flex flex-col">
                    {/* 헤더 */}
                    <div className="mb-6 flex-shrink-0">
                        <h1 className="text-2xl font-bold text-[#111111]">발송 대상 선택</h1>
                    </div>

                    {/* 메인 콘텐츠 영역 */}
                    <div className="flex-1 overflow-y-auto overflow-x-auto p-8 space-y-6 text-sm text-[#6f6963]">
                        {/* 제목 */}
                        {/* <h1 className="font-bold text-lg">발송 대상 선택</h1> */}
                        <div className="grid grid-cols-[110px_1fr] gap-4 w-full">
                            {/* <div className="gap-2 items-center h-30 flex flex-col justify-start"> */}
                            <div className="gap-2 flex flex-col justify-start">
                                <div className="mb-2 text-[#C0BCB6] text-left w-full">개인 정보</div>
                                {/* <div className="mb-2 text-[#C0BCB6]">개인 정보</div> */}
                                <Select defaultValue="name" onValueChange={(value: "name" | "email" | "phone") => setSearchCategory(value)}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="name">고객명</SelectItem>
                                        <SelectItem value="email">이메일</SelectItem>
                                        <SelectItem value="phone">전화번호</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="w-full flex flex-col gap-4 h-full">
                                <div className="w-full flex gap-2 relative flex-shrink-0">
                                    <Input
                                        type="text"
                                        placeholder="검색어 입력"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="border rounded w-full px-4 pr-10 py-2 text-sm text-[#6f6963] h-17 focus:outline-none"
                                    />
                                    <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6f6963]" />
                                </div>
                                {/* 검색 결과 테이블 (스크롤 가능) */}
                                <div className="flex-1 overflow-y-auto border rounded">
                                    <table className="w-full border-collapse text-left text-sm text-[#1A1A1A]">
                                        <tbody>
                                            {filteredSearchMembers.length === 0 ? (
                                                <tr>
                                                    <td colSpan={6} className="text-center py-8 text-gray-500">검색 결과가 없습니다.</td>
                                                </tr>
                                            ) : (
                                                filteredSearchMembers.map((member) => (
                                                    <tr
                                                        key={member.id}
                                                        onClick={() => handleTopTableRowClick(member.id)}
                                                        className={cn(
                                                            "border-b border-gray-200 cursor-pointer",
                                                            selectedTopTableMembers.includes(member.id) ? "bg-[#322A240F]" : "hover:bg-[#322A240F]"
                                                        )}
                                                    >
                                                        <td className="px-8 py-4">{member.name}</td>
                                                        <td className="px-8 py-4 underline cursor-pointer">{member.email}</td>
                                                        <td className="px-8 py-4">{member.phone}</td>
                                                        <td className="px-8 py-4">{member.grade}</td>
                                                        <td className="px-8 py-4">{member.joinDate}</td>
                                                        <td className="px-8 py-4">{member.purchaseAmount}</td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button variant="outline" onClick={handleAddSelectedMembers} className="text-[#5E5955]">추가</Button>
                        </div>

                        {/* 추가된 회원 테이블 */}
                        <div className="mt-8">
                            <h2 className="font-semibold mb-2">추가된 회원</h2>
                            <table className="w-full border-collapse text-left text-sm">
                                <thead className="border-y border-[#DBD7D0] bg-[#322A2408] text-[#6F6963]">
                                    <tr>
                                        <th className="p-2">
                                            <Checkbox
                                                id="all-selected"
                                                className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                                                checked={isAllSelectedBottomTable}
                                                onCheckedChange={(checked) => handleSelectAllBottomTable(!!checked)}
                                            />
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
                                <tbody className="text-[#1A1A1A]">
                                    {addedMembers.length === 0 ? (
                                        <tr>
                                            <td colSpan={8} className="text-center py-8 text-gray-500">추가된 회원이 없습니다.</td>
                                        </tr>
                                    ) : (
                                        addedMembers.map((member) => (
                                            <tr key={member.id} className="h-10">
                                                <td className="p-2">
                                                    <Checkbox
                                                        id={`added-member-${member.id}`}
                                                        className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                                                        checked={selectedMembers.includes(member.id)}
                                                        onCheckedChange={() => handleCheckboxChangeBottomTable(member.id)}
                                                    />
                                                </td>
                                                <td className="p-2 text-center">{member.name}</td>
                                                <td className="p-2 underline cursor-pointer text-center">{member.email}</td>
                                                <td className="p-2 text-center">{member.phone}</td>
                                                <td className="p-2 text-center">{member.grade}</td>
                                                <td className="p-2 text-center">{member.joinDate}</td>
                                                <td className="p-2 text-center">{member.purchaseAmount}</td>
                                                <td className="p-2 flex items-center justify-center">
                                                    <Button variant="outline" size="sm" onClick={() => handleRemoveMember(member.id)} className="text-[#5E5955]">제외</Button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                        {/* 하단 버튼 */}
                        <div className="flex justify-center gap-4 mt-8 flex-shrink-0">
                            <Button variant="outline" onClick={() => setOpen(false)} className="text-[#322A24] w-1/12">취소</Button>
                            <Button className="bg-[#322A24] text-white w-1/12" onClick={() => setOpen(false)}>저장</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}