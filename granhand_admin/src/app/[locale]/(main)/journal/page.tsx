import Pagination from "@/components/pagination";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pencil, Pin, RefreshCw, Search } from "lucide-react";

export default function JournalListPage() {
    return (
        <main className="flex-1 border">
            <div className="flex justify-between p-12">
                <div className="text-black text-sm space-y-4">
                    <h1 className="text-2xl font-bold">저널 관리</h1>
                </div>
                <Button className="bg-black text-white">
                    <Pencil />
                    글 작성
                </Button>
            </div>

            <div className="mt-7 border shadow-md p-12">
                <div className="flex justify-between mb-5">
                    <div className="text-black text-sm space-y-4">
                        <h2 className="text-base font-semibold">검색 필터</h2>
                    </div>
                    <Button className="border h-10">
                        태그 관리
                    </Button>
                </div>
                <div className="grid grid-cols-[150px_1fr] border border-gray-200 h-18 min-w-190">
                    <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2 mr-5">
                    태그
                    </div>
                    <div className="flex items-center gap-4 p-2 h-full">
                    <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-base font-medium">전체</Label>
                    <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-base">News</Label>
                    <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-base">Culture</Label>
                    <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-base">Life</Label>
                    <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-base">Team</Label>
                    <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-base">Essay</Label>
                    <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-base">Film</Label>
                    </div>
                </div>
                <div className="flex mx-auto justify-center items-center w-full gap-10 mt-10">
                    <Button className="bg-white text-black border w-32">
                        <RefreshCw />
                        초기화
                    </Button>
                    <Button className="bg-black text-white w-32">
                        <Search />
                        검색
                    </Button>
                </div>
            </div>

            <div className="p-12 shadow-md">
                <div className="flex justify-between mb-6">
                    <div className="text-black text-sm space-y-4">
                        <h2 className="text-base font-semibold">검색 저널 게시글 <span className="text-red-500 ml-2">121</span></h2>
                    </div>
                    <div className="flex gap-4">
                        <Select defaultValue="latest">
                            <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-30 h-8">
                            <SelectValue placeholder="최근 작성순" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border rounded shadow-md">
                                <SelectItem value="latest" className="px-3 py-2 cursor-pointer">최근 작성순</SelectItem>
                                <SelectItem value="main" className="px-3 py-2 cursor-pointer">메인 노출순</SelectItem>
                                <SelectItem value="hot" className="px-3 py-2 cursor-pointer">조회순</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select defaultValue="50">
                            <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-20 h-8">
                            <SelectValue placeholder="50" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border rounded shadow-md">
                                <SelectItem value="50" className="px-3 py-2 cursor-pointer">50</SelectItem>
                                <SelectItem value="100" className="px-3 py-2 cursor-pointer">100</SelectItem>
                                <SelectItem value="500" className="px-3 py-2 cursor-pointer">500</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="overflow-auto rounded bg-white">
                <table className="w-full text-left border-collapse min-w-6xl">
                    <thead className="bg-[#f8f4f0] border-t h-20">
                        <tr className="border-b text-gray-400">
                            <th className="p-2 items-center">No.</th>
                            <th className="p-2 text-center">태그</th>
                            <th className="p-2 text-center">제목</th>
                            <th className="p-2 text-center">작성일</th>
                            <th className="p-2 text-center">조회수</th>
                            <th className="p-2 text-center">수정/삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                        <tr key={i} className="border-b h-14">
                            <td className="p-2 items-center">121</td>
                            <td className="p-2 text-center">News, Life</td>
                            <td className="p-2 text-center"><Pin className="text-red-300" />{"19 Februrary 2024: 'GRANHAND' Brand Book Published"}</td>
                            <td className="p-2 text-center">2024-02-23</td>
                            <td className="p-2 text-center">584</td>
                            <td className="p-2 flex gap-1 flex-wrap items-center justify-center">
                                <Button className="border rounded px-2">수정</Button>
                                <Button className="border rounded px-2">삭제</Button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <Pagination totalPages={9} />
            </div>
        </main>
    )
}