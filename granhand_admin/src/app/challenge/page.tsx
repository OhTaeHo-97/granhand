import Pagination from "@/components/pagination";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ChallengePage() {
    return (
        <main className="flex-1 border p-12">
            <div className="flex justify-between">
                <div className="text-black text-sm space-y-4">
                    <h1 className="text-2xl font-bold">챌린지 관리</h1>
                </div>
                <Button className="bg-black text-white">
                    챌린지 작성
                </Button>
            </div>

            <div className="text-black text-sm space-y-4 mt-13">
            <div>
                <div className="mb-4 justify-between flex items-center">
                    <div className="text-sm font-bold">
                        목록 (총 <span className="text-blue-500 font-bold">30</span>개)
                    </div>
                    <div className="flex gap-2">
                        <Select defaultValue="최신 작성순">
                            <SelectTrigger className="w-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="최신 작성순">50</SelectItem>
                                <SelectItem value="이메일">100</SelectItem>
                                <SelectItem value="전화번호">500</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <table className="w-full text-left border-collapse min-w-6xl border-t border-b">
                    <thead className="bg-[#f8f4f0] border-t h-12">
                        <tr className="border-b text-gray-400">
                            <th className="p-2 text-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
                            <th className="p-2 text-center">챌린지명</th>
                            <th className="p-2 text-center">설명</th>
                            <th className="p-2 text-center">상태</th>
                            <th className="p-2 text-center">관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                        <tr key={i} className="h-14">
                            <td className="p-2 text-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                            <td className="p-2 text-center">마음의 향기</td>
                            <td className="p-2 text-center">다른 사람에게 선물하기</td>
                            <td className="p-2 text-center">활성</td>
                            <td className="p-2 items-center">
                                <div className="flex gap-3 justify-center">
                                    <Button className="bg-white border">수정</Button>
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <div className="flex justify-end">
                    <Select defaultValue="최신 작성순">
                        <SelectTrigger className="w-fit">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            <SelectItem value="상태 ">상태 변경하기</SelectItem>
                            <SelectItem value="이메일">실패</SelectItem>
                            <SelectItem value="전화번호">성공</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Pagination totalPages={20} />
            </div>
        </main>
    )
}