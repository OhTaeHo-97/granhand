import { Label } from "@/components/ui/label";
import { OptionType } from "./option-settings";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GripVertical } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const createOptionHandlers = <T extends OptionType>(
    setSections: React.Dispatch<React.SetStateAction<{ id: number; title: string; options: T[] }[]>>
    // setOptions: React.Dispatch<React.SetStateAction<T[]>>
) => ({
    handleTitleChange: (sectionId: number, value: string) => {
        setSections((prev) => prev.map((section) => section.id === sectionId
            ? { ...section, title: value }
            : section))
    },

    handleOptionValueChange: (sectionId: number, optionId: number, value: string) => {
        setSections((prev) => prev.map((section) => section.id === sectionId
            ? {
                ...section,
                options: section.options.map((option) => option.id === optionId
                    ? { ...option, optionValue: value }
                    : option
                )
            }
            : section))
    },

    handlePriceChange: (sectionId: number, optionId: number, value: string) => {
        const numericValue = value.replace(/[^0-9]/g, '')
        setSections((prev) => prev.map((section) => section.id === sectionId
            ? {
                ...section,
                options: section.options.map((option) => option.id === optionId
                    ? { ...option, price: Number(numericValue) }
                    : option
                )
            }
            : section))
    },

    handleInventoryIdChange: (sectionId: number, optionId: number, value: string) => {
        setSections((prev) => prev.map((section) => section.id === sectionId
            ? {
                ...section,
                options: section.options.map((option) => option.id === optionId
                    ? { ...option, inventoryId: value }
                    : option)
            }
            : section))
    },

    handleQuantityChange: (sectionId: number, optionId: number, value: string) => {
        const numericValue = value.replace(/[^0-9]/g, '')
        setSections((prev) => prev.map((section) => section.id === sectionId
            ? {
                ...section,
                options: section.options.map((option) => option.id === optionId
                    ? { ...option, quantity: numericValue }
                    : option)
            }
            : section))
    },

    handleStatusChange: (sectionId: number, optionId: number, value: string) => {
        setSections((prev) => prev.map((section) => section.id === sectionId
            ? {
                ...section,
                options: section.options.map((option) => option.id === optionId
                    ? { ...option, status: value }
                    : option)
            }
            : section))
    },

    handleDeleteOption: (sectionId: number, optionId: number) => {
        setSections((prev) => prev.map((section) => section.id === sectionId
            ? {
                ...section,
                options: section.options.filter((option) => option.id !== optionId)
            }
            : section))
    }
})

export default function OptionTable<T extends OptionType>({
    title,
    sections,
    setSections,
    t
}: {
    title: string,
    sections: { id: number; title: string; options: T[] }[],
    setSections: React.Dispatch<React.SetStateAction<{ id: number; title: string; options: T[] }[]>>,
    t: (key: string) => string
}) {
    const {
        handleTitleChange,
        handleOptionValueChange,
        handlePriceChange,
        handleInventoryIdChange,
        handleQuantityChange,
        handleStatusChange,
        handleDeleteOption
    } = createOptionHandlers(setSections)

    const handleAddSection = () => {
        const newSection = {
            id: sections.length + 1,
            title: '',
            options: []
        }
        setSections([...sections, newSection])
    }

    const handleAddBtnOption = (sectionId: number) => {
        setSections((prev) => prev.map((section => section.id === sectionId
            ? {
                ...section,
                options: [
                    ...section.options,
                    {
                        id: section.options.length + 1,
                        optionValue: '',
                        price: 0,
                        inventoryId: '',
                        quantity: 0,
                        status: 'on_sale'
                    } as T
                ]
            }
            : section
        )))
    }
    
    return (
        <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
            <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                <Label className="font-semibold">{title}</Label>
            </div>
            <div className="flex items-center gap-4 p-5 w-full">
                <div className="space-y-4 text-sm">
                    <Button variant="outline" className="h-fit p-1 text-sm text-[#5E5955]" onClick={handleAddSection}>옵션 추가</Button>

                    {sections.map((section) => (
                        <div key={section.id} className="space-y-4">
                            {/* 옵션명 입력 */}
                            <div className="flex border p-2 px-8 items-center justify-between w-full">
                                <div className="flex gap-2 items-center justify-start">
                                    <Label className="w-20 text-[#6F6963]">{t('product:option_name')}</Label>
                                    <Input
                                        defaultValue={t('product:volume')}
                                        className="w-64"
                                        onChange={(e) => handleTitleChange(section.id, e.target.value)}
                                    />
                                </div>
                                <Button variant="outline" onClick={() => handleAddBtnOption(section.id)}>{t('product:add_input')}</Button>
                            </div>
                            <table className="w-full text-center min-w-8xl overflow-auto">
                                <thead className="bg-[#322A2408] border-t h-14">
                                    <tr className="border-b text-[#6F6963]">
                                        <th className="p-2 h-14 flex items-center justify-center"><GripVertical className="!w-4 h-4!" /></th>
                                        <th className="p-2 items-center">{t('product:option_value')}</th>
                                        <th className="p-2 text-center">{t('product:option_price')}</th>
                                        <th className="p-2 text-center">{t('product:inventory_id')}</th>
                                        <th className="p-2 text-center">{t('product:quantity')}</th>
                                        <th className="p-2 text-center">{t('product:status')}</th>
                                        <th className="p-2 text-center">{t('product:delete')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {section.options.map((option) => (
                                        <tr key={option.id} className="h-16 text-[#1A1A1A]">
                                            <td className="p-2 h-16 flex items-center justify-center"><GripVertical className="!w-4 !h-4" /></td>
                                            <td className="p-2 text-center">
                                                <Input
                                                    defaultValue={option.optionValue}
                                                    className="w-full h-10"
                                                    onChange={(e) => handleOptionValueChange(section.id, option.id, e.target.value)}
                                                />
                                            </td>
                                            <td className="p-2 text-center">
                                                <Input
                                                    defaultValue={option.price.toLocaleString()}
                                                    className="w-full h-10"
                                                    onChange={(e) => handlePriceChange(section.id, option.id, e.target.value)}
                                                />
                                            </td>
                                            <td className="p-2 text-center">
                                                <Input
                                                    defaultValue={option.inventoryId}
                                                    className="w-full h-10"
                                                    onChange={(e) => handleInventoryIdChange(section.id, option.id, e.target.value)}
                                                />
                                            </td>
                                            <td className="p-2 text-center">
                                                <Input
                                                    defaultValue={option.quantity}
                                                    className="w-full h-10"
                                                    onChange={(e) => handleQuantityChange(section.id, option.id, e.target.value)}
                                                />
                                            </td>
                                            <td className="p-2 text-center">
                                                <Select defaultValue={option.status} onValueChange={(value) => handleStatusChange(section.id, option.id, value)}>
                                                    <SelectTrigger className="w-fit">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-white">
                                                        <SelectItem value="on_sale">판매중</SelectItem>
                                                        <SelectItem value="temporary_out_of_stock">일시품절</SelectItem>
                                                        <SelectItem value="stop_sale">판매중지</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </td>
                                            <td className="p-2 text-center">
                                                <Button variant="outline" className="!px-1 !py-1 text-sm text-[#5E5955]" onClick={() => handleDeleteOption(section.id, option.id)}>{t('product:delete')}</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}