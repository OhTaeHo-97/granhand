import Pagination from "@/components/pagination";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pencil } from "lucide-react";

export default function CooperationPage() {
    return (
        <main className="flex-1 border p-12">
            <h1 className="text-2xl font-bold">제휴 문의 관리</h1>
            
            <div className="text-black text-sm space-y-4">
            <div>
                <div className="mb-4 justify-between flex items-center">
                    <div className="text-sm font-bold">
                        전체 제휴문의 <span className="text-red-500 font-bold">10</span>
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
                    </div>
                </div>

                <table className="w-full text-left border-collapse min-w-6xl border-t border-b">
                    <thead className="bg-[#f8f4f0] border-t h-12">
                        <tr className="border-b text-gray-400">
                            <th className="p-2 text-center">No.</th>
                            <th className="p-2 text-center">제목</th>
                            <th className="p-2 text-center">성함</th>
                            <th className="p-2 text-center">휴대폰번호</th>
                            <th className="p-2 text-center">이메일주소</th>
                            <th className="p-2 text-center">날짜</th>
                            <th className="p-2 text-center">최신 여부</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                        <tr key={i} className="h-14">
                            <td className="p-2 text-center">10</td>
                            <td className="p-2 text-center">협업제안</td>
                            <td className="p-2 text-center">홍길동</td>
                            <td className="p-2 text-center">010-1234-5678</td>
                            <td className="p-2 text-center">asdasddasds@gmail.com</td>
                            <td className="p-2 text-center">2024-01-14</td>
                            <td className="p-2 text-center text-red-500">
                                대기중
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