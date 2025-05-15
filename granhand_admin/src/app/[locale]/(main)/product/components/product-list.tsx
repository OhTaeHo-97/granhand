import Pagination from "@/components/pagination";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";

export default function ProductList({ t }: { t: (key: string) => string }) {
    return (
        <div className="p-6 shadow-sm">
            {/* ------------------- 상품 목록 테이블 ------------------- */}
            <div>
                <div className="mb-4 justify-between flex items-center">
                    <div className="text-[#5E5955] font-bold text-base">
                        {t('list')} ({t('total')} <span className="text-blue-500">303</span> {t('items')})
                    </div>
                    <div className="flex gap-2">
                        <Select defaultValue="newest">
                            <SelectTrigger className="w-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="newest_first">{t('newest_first')}</SelectItem>
                                <SelectItem value="by_category">{t('by_category')}</SelectItem>
                                <SelectItem value="by_recommendation">{t('by_recommendation')}</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select defaultValue="50">
                            <SelectTrigger className="w-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="50">50</SelectItem>
                                <SelectItem value="100">100</SelectItem>
                                <SelectItem value="500">500</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button className="border ">엑셀 다운로드</Button>
                    </div>
                </div>
                <table className="w-full text-left border-collapse min-w-6xl">
                    <thead className="bg-[#322A2408] border-t h-20">
                        <tr className="border-b text-[#6F6963]">
                            <th className="p-2 items-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
                            <th className="p-2 text-center">No</th>
                            <th className="p-2 text-center">{t('product_code')}</th>
                            <th className="p-2 text-center">{t('category')}</th>
                            <th className="p-2 text-center">{t('product_name')}</th>
                            <th className="p-2 text-center">{t('price')}</th>
                            <th className="p-2 text-center">{t('status')}</th>
                            <th className="p-2 text-center">{t('stock')}</th>
                            <th className="p-2 text-center">{t('registration_date')}</th>
                            <th className="p-2 text-center">{t('manage')}</th>
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
                                <Button className="border rounded px-2">{t('view')}</Button>
                                <Button className="border rounded px-2">{t('edit_options')}</Button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ------------------- 하단 버튼 ------------------- */}
            <div className="flex gap-2 mt-4">
                <Button variant="outline">{t('duplicate')}</Button>
                <Button variant="outline">{t('delete')}</Button>
                <Select defaultValue="default">
                    <SelectTrigger className="w-fit">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectItem value="default">{t('change_status')}</SelectItem>
                        <SelectItem value="이메일">이메일</SelectItem>
                        <SelectItem value="전화번호">전화번호</SelectItem>
                    </SelectContent>
                </Select>
                <Button variant="outline">{t('change_category')}</Button>
                <Button variant="outline">{t('change_price')}</Button>
                <Button variant="outline">{t('edit_sale_period')}</Button>
                <Button variant="outline">{t('update_stock')}</Button>
            </div>

            {/* ------------------- 페이지네이션 ------------------- */}
            <Pagination totalPages={10} />
        </div>
    )
}