import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function PeriodicStatisticPage() {
    return (
        <main className="flex-1 border p-12">
            <h1 className="text-2xl font-bold">매출</h1>
            <div className="mt-10">
                <div className="flex justify-between">
                    <div className="flex gap-2 w-full">
                        <Select defaultValue="all">
                            <SelectTrigger className="border-none rounded px-2 py-1 gap-1 w-full h-auto flex items-center max-w-52">
                            <SelectValue placeholder="일자별 요약" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border rounded shadow-md">
                                <SelectItem value="all" className="px-3 py-2 /cursor-pointer">일자별 요약</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select defaultValue="all">
                            <SelectTrigger className="border-none rounded px-2 py-1 gap-1 w-full h-auto flex items-center max-w-52">
                            <SelectValue placeholder="일자별 요약" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border rounded shadow-md">
                                <SelectItem value="all" className="px-3 py-2 /cursor-pointer">2024년</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select defaultValue="all">
                            <SelectTrigger className="border-none rounded px-2 py-1 gap-1 w-full h-auto flex items-center max-w-52">
                            <SelectValue placeholder="일자별 요약" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border rounded shadow-md">
                                <SelectItem value="all" className="px-3 py-2 /cursor-pointer">7월</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex gap-2">
                        <Button>새로고침</Button>
                        <Button>엑셀 다운로드</Button>
                    </div>
                </div>
                
                <table className="w-full text-left border-collapse min-w-6xl border-t border-b">
                    <thead className="bg-[#f8f4f0] border-t h-12">
                        <tr className="border-b text-gray-400">
                            <th className="p-2 text-center">일자</th>
                            <th className="p-2 text-center">주문수</th>
                            <th className="p-2 text-center">매출액</th>
                            <th className="p-2 text-center">페이지뷰</th>
                            <th className="p-2 text-center">방문자</th>
                            <th className="p-2 text-center">가입</th>
                            <th className="p-2 text-center">문의</th>
                            <th className="p-2 text-center">적립금 지급</th>
                            <th className="p-2 text-center">적립금 사용</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                        <tr key={i} className="h-14">
                            <td className="p-2 text-center">2024-07-10 (수)</td>
                            <td className="p-2 text-center">390</td>
                            <td className="p-2 text-center">16,073,499원</td>
                            <td className="p-2 text-center">20,400</td>
                            <td className="p-2 text-center">3,547명</td>
                            <td className="p-2 text-center">94명</td>
                            <td className="p-2 text-center">10</td>
                            <td className="p-2 text-center">0원</td>
                            <td className="p-2 text-center">0원</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}