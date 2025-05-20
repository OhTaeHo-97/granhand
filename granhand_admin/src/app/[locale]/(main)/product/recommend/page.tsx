import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { GripVertical } from "lucide-react";
import Image from "next/image";

export default function RecommendManagePage() {
    return (
        <div className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <div className="flex justify-between items-center shadow-sm p-6 w-full">
                    <div className="text-black text-sm">
                        <h1 className="text-2xl font-bold text-[#5E5955]">추천 순서 관리</h1>
                    </div>
                    <div className="space-x-2">
                        <Button variant="outline" className="text-[#5E5955]">취소</Button>
                        <Button variant="outline" className="bg-[#322A24] text-white">저장</Button>
                    </div>
                </div>
                <div className="shadow-sm p-6">
                    <div>
                        <div className="mb-4 text-[#5E5955] font-bold text-base">
                            목록 (총 <span className="text-[#4C89E4]">303</span> 개)
                        </div>
                        <table className="w-full text-left border-collapse min-w-6xl">
                            <thead className="bg-[#322A2408] border-t h-20">
                                <tr className="border-b text-[#6F6963]">
                                    <th className="p-2 items-center"><GripVertical className="w-4 h-4" /></th>
                                    <th className="p-2 items-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
                                    <th className="p-2 text-center">No</th>
                                    <th className="p-2 text-center">상품 코드</th>
                                    <th className="p-2 text-center">카테고리</th>
                                    <th className="p-2 text-center">상품명</th>
                                    <th className="p-2 text-center">판매가</th>
                                    <th className="p-2 text-center">상태</th>
                                    <th className="p-2 text-center">재고</th>
                                    <th className="p-2 text-center">등록일</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <tr key={i} className="h-14 text-[#1A1A1A]">
                                        <td className="p-2 items-center"><GripVertical className="w-4 h-4" /></td>
                                        <td className="p-2 items-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                                        <td className="p-2 text-center">303</td>
                                        <td className="p-2 text-center">0000000303</td>
                                        <td className="p-2 text-center">{"그랑핸드 > 퍼퓸 > 멀티퍼퓸"}</td>
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
                                        <td className="p-2 text-center">판매중</td>
                                        <td className="p-2 text-center">2,345</td>
                                        <td className="p-2 text-center">2023-11-23</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}