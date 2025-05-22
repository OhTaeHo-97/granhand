import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ExchangePickupModalContents({ t }: { t: (key: string) => string }) {
    return (
        // <div className="mb-6 text-[#111111] whitespace-pre-line">
        //     {`선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다.\n1건에 대해 처리하시겠습니까?`}
            <div className="text-[#6f6963] text-sm w-full min-w-120 mt-6">
                <table className="w-full text-left border-collapse min-w-6xl border">
                    <thead className="bg-[#322A2408] border-t h-20">
                        <tr className="border-b text-[#6F6963]">
                            <th className="p-2"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
                            <th className="p-2 text-center border">{t('order:order_number')}</th>
                            <th className="p-2 text-center border">{t('order:ordered_items')}</th>
                            <th className="p-2 text-center border">{t('order:track_info')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                            <>
                                <tr key={i} className="border-b h-14 text-[#1A1A1A]">
                                    <td className="p-2"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                                    <td className="p-2 text-center border">2024021012345678</td>
                                    <td className="p-2">
                                        <div className="space-y-1 text-sm">
                                            <div className="flex items-center gap-1 text-gray-400 text-xs">
                                                <span>24021099987651</span>
                                            </div>
                                            <div className="flex items-center gap-1 font-semibold text-black">Roland Multi Perfume 100ml</div>
                                            <div className="flex items-center gap-1 text-gray-400 text-xs">
                                                <span>각인 여부 : Y</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-gray-400 text-xs">
                                                <span>문구: GRANHAND</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-2 text-center border">
                                        <Select>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder={t('order:select_courier')} />
                                            </SelectTrigger>
                                            <SelectContent className="bg-white">
                                                <SelectItem value="대한">CJ 대한통운</SelectItem>
                                                <SelectItem value="한진">한진택배</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Input placeholder={t('order:track_number')} />
                                    </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        // </div>
    )
}