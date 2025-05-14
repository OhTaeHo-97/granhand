import Pagination from "@/components/pagination";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";

export default function ProductList() {
    return (
        <div className="p-6 shadow-sm">
            {/* ------------------- 상품 목록 테이블 ------------------- */}
            <div>
                <div className="mb-4 justify-between flex items-center">
                    <div className="text-[#5E5955] font-bold text-base">
                        목록 (총 <span className="text-blue-500">303</span> 개)
                    </div>
                    <div className="flex gap-2">
                        <Select defaultValue="newest">
                            <SelectTrigger className="w-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="newest">등록순</SelectItem>
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
                        <Button className="border ">엑셀 다운로드</Button>
                    </div>
                </div>
                <table className="w-full text-left border-collapse min-w-6xl">
                    <thead className="bg-[#322A2408] border-t h-20">
                        <tr className="border-b text-[#6F6963]">
                            <th className="p-2 items-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
                            <th className="p-2 items-center">No</th>
                            <th className="p-2 text-center">상품 코드</th>
                            <th className="p-2 text-center">카테고리</th>
                            <th className="p-2 text-center">상품명</th>
                            <th className="p-2 text-center">판매가</th>
                            <th className="p-2 text-center">상태</th>
                            <th className="p-2 text-center">재고</th>
                            <th className="p-2 text-center">등록일</th>
                            <th className="p-2 text-center">관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                        <tr key={i} className="border-b h-14 text-[#1A1A1A]">
                            <td className="p-2 items-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                            <td className="p-2 text-center">303</td>
                            <td className="p-2 text-center">000000003</td>
                            <td className="p-2 text-center">그랑핸드 {">"} 퍼퓸 {">"} 멀티퍼퓸</td>
                            <td className="p-2 text-center">
                                <div className="flex items-start gap-3">
                                    {/* 이미지 영역 */}
                                    <Image src="/placeholder.png" alt="하이" width={48} height={48} className="w-12 h-12 bg-gray-100 border border-gray-300 flex items-center justify-center text-xs"/>

                                    {/* 텍스트 영역 */}
                                    <div>
                                        <div className="font-semibold">Roland Multi Perfume</div>
                                        <div className="flex items-center gap-1 text-[#C0BCB6] text-xs mt-1">
                                            <span className="text-lg leading-none">•</span>
                                            <span>쇼핑백</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="p-2 text-center">35,000</td>
                            <td className="p-2 flex gap-1 flex-wrap items-center justify-center">판매 증</td>
                            <td className="p-2 text-center">2,345</td>
                            <td className="p-2 text-center">2023-11-23</td>
                            <td className="p-2 flex gap-1 flex-wrap items-center justify-center text-[#5E5955]">
                                <Button className="border rounded px-2">조회</Button>
                                <Button className="border rounded px-2">옵션 수정</Button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ------------------- 하단 버튼 ------------------- */}
            <div className="flex gap-2 mt-4">
                <Button variant="outline">복제</Button>
                <Button variant="outline">삭제</Button>
                <Select defaultValue="default">
                    <SelectTrigger className="w-fit">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectItem value="default">상태 변경</SelectItem>
                        <SelectItem value="이메일">이메일</SelectItem>
                        <SelectItem value="전화번호">전화번호</SelectItem>
                    </SelectContent>
                </Select>
                <Button variant="outline">카테고리 변경</Button>
                <Button variant="outline">판매가 변경</Button>
                <Button variant="outline">판매기간 변경</Button>
                <Button variant="outline">재고 변경</Button>
            </div>

            {/* ------------------- 페이지네이션 ------------------- */}
            <Pagination totalPages={10} />
        </div>
    )
}