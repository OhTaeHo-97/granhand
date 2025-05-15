import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Monitor, Smartphone } from "lucide-react";

export default function ExchangeList({ t }: { t: (key: string) => string }) {
    return (
        <div className="p-6 shadow-sm">
            <div>
                <div className="mb-4 justify-between flex items-center">
                    <div className="text-[#5E5955] font-bold text-base">
                        {t('order:list')} ({t('product:total')} <span className="text-blue-500 font-bold">303 {t('product:items')}</span>)
                    </div>
                    <div className="flex gap-2">
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
                        <Button className="border">엑셀 다운로드</Button>
                    </div>
                </div>
                <table className="w-full text-left border-collapse min-w-6xl border">
                    <thead className="bg-[#322A2408] border-t h-20">
                        <tr className="border-b text-[#6F6963]">
                            <th className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
                            <th className="p-2 items-center border"></th>
                            <th className="p-2 text-center border">{t('order:order_number')}</th>
                            <th className="p-2 text-center border">{t('order:exchange_procesded_date')}</th>
                            <th className="p-2 text-center border">{t('order:buyer')}</th>
                            <th className="p-2 text-center border">{t('order:ordered_items')}</th>
                            <th className="p-2 text-center border">{t('order:quantity')}</th>
                            <th className="p-2 text-center border">{t('order:order_status')}</th>
                            <th className="p-2 text-center border">{t('order:exchange_reason')}</th>
                            <th className="p-2 text-center border">{t('order:track_info')}</th>
                            <th className="p-2 text-center border">{t('order:exchange_ship_fee')}</th>
                            <th className="p-2 text-center border">{t('order:pickup_address')}</th>
                            <th className="p-2 text-center border">{t('order:re_ship_address')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                            <tr key={i} className="border-b h-14 text-[#1A1A1A]">
                                <td className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                                <td className="p-2 text-center border"><Smartphone /></td>
                                <td className="p-2 text-center border underline">2024021012345678</td>
                                <td className="p-2 border">
                                    <div className="text-gray-400">교환 요청일</div>
                                    <div className="font-semibold text-black">2024-02-10 16:15:35</div>
                                </td>
                                <td className="p-2 border">
                                    <div className="font-semibold text-black">홍길동 / 010-1234-5678</div>
                                    <div className="text-gray-400 text-xs">honghong@gmail.com</div>
                                    <Button className="bg-white border">관리자 메모</Button>
                                </td>
                                <td className="p-2 border">
                                    <div className="space-y-1 text-sm">
                                        <div className="font-semibold text-black">Roland Multi Perfume 100ml</div>
                                        <div>
                                            <div className="text-gray-400 text-xs">
                                                <span>각인 여부 : Y / 문구: GRANHAND</span>
                                            </div>
                                            <div className="text-gray-400 text-xs">
                                                <span>용량: 100ml</span>
                                            </div>
                                            <div className="text-gray-400 text-xs">
                                                <span>쇼핑백: 구매 안함</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 text-center border">1</td>
                                <td className="p-2 text-center border text-[#FF3E24]">교환 요청</td>
                                <td className="p-2 text-center border underline">오배송</td>
                                <td className="p-2 border"></td>
                                <td className="p-2 text-center border">35,000원</td>
                                <td className="p-2 border">
                                    <div className="space-y-1 text-sm">
                                        <div className="font-semibold text-black">홍길동 / 010-1234-5678</div>
                                        <div className="text-gray-400 text-xs">
                                            부산 부산진구 서전로 8<br/>
                                            위워크 7층<br/>
                                            우) 12345
                                        </div>
                                        <div className="text-blue-600 text-xs">
                                            부재 시 문 앞에 놓아주세요.
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 flex flex-col items-center justify-center">
                                <div className="space-y-1 text-sm">
                                        <div className="font-semibold text-black">홍길동 / 010-1234-5678</div>
                                        <div className="text-gray-400 text-xs">
                                            부산 부산진구 서전로 8<br/>
                                            위워크 7층<br/>
                                            우) 12345
                                        </div>
                                        <div className="text-blue-600 text-xs">
                                            부재 시 문 앞에 놓아주세요.
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}