import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function CancelOrderModalContents({ t }: { t: (key: string) => string }) {
    const [selectedIds, setSelectedIds] = useState<number[]>([])

    const handleSelectAll = (checked: boolean) => {
        if(checked) {
            const allIds = [...Array.from({ length: 12 })].map((_, i) => i + 1)
            setSelectedIds(allIds)
        } else {
            setSelectedIds([])
        }
    }
    
    const handleCheckboxChange = (id: number) => {
        setSelectedIds((prev) => {
            if(prev.includes(id)) {
                return prev.filter((itemId) => itemId !== id)
            } else {
                return [...prev, id]
            }
        })
    }

    const isSelectedId = (id: number) => selectedIds.includes(id)

    return (
        <div className="text-[#6f6963] text-sm w-full min-w-120 overflow-y-auto max-h-96 mt-6">
            <table className="w-full text-left border-collapse min-w-6xl border overflow-y-auto">
                <thead className="bg-[#322A2408] border-t h-10">
                    <tr className="border-b text-[#6F6963]">
                        <th className="p-2 flex justify-center items-center h-full">
                            <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white" onCheckedChange={handleSelectAll} />
                        </th>
                        <th className="p-2 text-center border">{t('order:order_number')}</th>
                        <th className="p-2 text-center border">{t('order:ordered_items')}</th>
                        <th className="p-2 text-center border">{t('order:order_cancel_reason')}</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 12 }).map((_, i) => (
                    <tr key={i} className="border-b h-20 text-[#1A1A1A]">
                        <td className="p-2 flex justify-center items-center h-20">
                            <Checkbox id={`order-${i}`} className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white" checked={isSelectedId(i + 1)} onCheckedChange={() => handleCheckboxChange(i + 1)} />
                        </td>
                        <td className="p-2 text-center border">2024021012345678</td>
                        <td className="p-2 border">
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
                                    <SelectValue placeholder={t('order:select_cancel_reason')} />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="none">{t('order:select_cancel_reason')}</SelectItem>
                                    <SelectItem value="change_mind">{t('order:changed_mind')}</SelectItem>
                                    <SelectItem value="change_option">{t('order:option_change')}</SelectItem>
                                    <SelectItem value="broke">{t('order:product_damage')}</SelectItem>
                                    <SelectItem value="missing">{t('order:product_missing')}</SelectItem>
                                    <SelectItem value="misdelivery">{t('order:wrong_delivery')}</SelectItem>
                                </SelectContent>
                            </Select>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}