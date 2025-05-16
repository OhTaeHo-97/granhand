import Pagination from "@/components/pagination";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pencil } from "lucide-react";

export default function EventPage() {
    return (
        <main className="flex-1 border p-12">
            <div className="flex justify-between items-center mb-15">
                <div className="text-black text-sm space-y-4">
                    <h1 className="text-2xl font-bold">이벤트 관리</h1>
                </div>
                <div className="space-x-2">
                    <Button variant="outline" className="text-white bg-black"><Pencil className="w-4 h-4" />글 작성</Button>
                </div>
            </div>
            
            <div className="text-black text-sm space-y-4">
            <div>
                <div className="mb-4 justify-between flex items-center">
                    <div className="text-sm font-bold">
                        전체 이벤트 게시글 <span className="text-red-500 font-bold">20</span>
                    </div>
                    <div className="flex gap-2">
                        <Select defaultValue="최신 작성순">
                            <SelectTrigger className="w-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="최신 작성순">최신 작성순</SelectItem>
                                <SelectItem value="이메일">이메일</SelectItem>
                                <SelectItem value="전화번호">전화번호</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select defaultValue="50">
                            <SelectTrigger className="w-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="50">50</SelectItem>
                                <SelectItem value="이메일">이메일</SelectItem>
                                <SelectItem value="전화번호">전화번호</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <table className="w-full text-left border-collapse min-w-6xl border-t border-b">
                    <thead className="bg-[#f8f4f0] border-t h-12">
                        <tr className="border-b text-gray-400">
                            <th className="p-2 text-center">No.</th>
                            <th className="p-2 text-center">제목</th>
                            <th className="p-2 text-center">작성일</th>
                            <th className="p-2 text-center">조회수</th>
                            <th className="p-2 text-center">수정/삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                        <tr key={i} className="h-14">
                            <td className="p-2 text-center">20</td>
                            <td className="p-2 text-center">그랑핸드 온라인몰 가입 혜택 안내</td>
                            <td className="p-2 text-center">2024-02-23</td>
                            <td className="p-2 text-center">584</td>
                            <td className="p-2 items-center">
                                <div className="flex gap-3 justify-center">
                                    <Button className="bg-white border">수정</Button>
                                    <Button className="bg-white border">삭제</Button>
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <Pagination totalPages={20} />
            </div>
        </main>
    )
}