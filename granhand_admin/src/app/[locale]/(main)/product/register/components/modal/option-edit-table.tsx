import { useState } from "react";
import { OptionEditType } from "./option-edit-modal";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GripVertical } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const createOptionEditHandlers = <T extends OptionEditType>(
    setSections: React.Dispatch<React.SetStateAction<{ id: number; title: string; options: T[] }[]>>
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

    handleQuantityOptionChange: (sectionId: number, optionId: number, value: string) => {
        setSections((prev) => prev.map((section) => section.id === sectionId
            ? {
                ...section,
                options: section.options.map((option) => option.id === optionId
                    ? { ...option, quantityOption: value }
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

export default function OptionEditTable<T extends OptionEditType>({
    sections,
    setSections,
    t
}: {
    sections: { id: number; title: string; options: T[] }[],
    setSections: React.Dispatch<React.SetStateAction<{ id: number; title: string; options: T[] }[]>>,
    t: (key: string) => string
}) {
    console.log(sections.length)
    const {
        handleTitleChange,
        handleOptionValueChange,
        handlePriceChange,
        handleInventoryIdChange,
        handleQuantityOptionChange,
        handleQuantityChange,
        handleStatusChange,
        handleDeleteOption
    } = createOptionEditHandlers(setSections)

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
                        quantityOption: 'manually',
                        quantity: 0,
                        status: 'on_sale'
                    } as T
                ]
            }
            : section
        )))
    }

    return (
        <div className="space-y-4 text-sm">
            {sections.map((section) => (
                <div key={section.id} className="space-y-4">
                    {/* 옵션명 입력 */}
                    <div className="flex items-center justify-between gap-2 border p-6">
                        <div className="flex items-center gap-4">
                            <Label className="w-20 text-[#6F6963]">옵션명</Label>
                            <Input defaultValue={section.title} className="w-64" onChange={(e) => handleTitleChange(section.id, e.target.value)} />
                        </div>
                        <Button variant="outline" onClick={() => handleAddBtnOption(section.id)}>입력 필드 추가</Button>
                    </div>

                    <table className="w-full text-left border-collapse min-w-6xl">
                        <thead className="bg-[#322A2408] border-t h-20">
                            <tr className="border-b text-[#6F6963]">
                                <th className="p-2 items-center"><GripVertical className="w-4 h-4" /></th>
                                <th className="p-2 text-center">옵션값</th>
                                <th className="p-2 text-center">옵션 가격</th>
                                <th className="p-2 text-center">재고 번호</th>
                                <th className="p-2 text-center">수량</th>
                                <th className="p-2 text-center">상태</th>
                                <th className="p-2 text-center">삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            {section.options.map((option) => (
                                <tr key={option.id} className="border-b h-14 text-[#1A1A1A]">
                                    <td className="p-2 items-center"><GripVertical className="w-4 h-4" /></td>
                                    <td className="p-2 items-center"><Input type="text" defaultValue={option.optionValue} className="w-full" onChange={(e) => handleOptionValueChange(section.id, option.id, e.target.value)} /></td>
                                    <td className="p-2 items-center"><Input type="number" defaultValue={option.price} className="w-full" onChange={(e) => handlePriceChange(section.id, option.id, e.target.value)} /></td>
                                    <td className="p-2 items-center"><Input type="text" defaultValue={option.inventoryId} className="w-full" onChange={(e) => handleInventoryIdChange(section.id, option.id, e.target.value)} /></td>
                                    <td className="p-2 text-center min-w-30">
                                        <div className="flex items-start gap-3">
                                            <Select defaultValue={option.quantityOption} onValueChange={(value) => handleQuantityOptionChange(section.id, option.id, value)}>
                                                <SelectTrigger className="w-fit min-w-30">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent className="bg-white">
                                                    <SelectItem value="manually">직접 입력</SelectItem>
                                                    <SelectItem value="infinite">무제한</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <Input type="number" defaultValue={option.quantity} className="w-full" onChange={(e) => handleQuantityChange(section.id, option.id, e.target.value)} />
                                        </div>
                                    </td>
                                    <td className="p-2 items-center">
                                        <Select defaultValue={option.status} onValueChange={(value) => handleStatusChange(section.id, option.id, value)}>
                                            <SelectTrigger className="w-fit">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent className="bg-white">
                                                <SelectItem value="on_sale">판매중</SelectItem>
                                                <SelectItem value="out_of_stock">품절</SelectItem>
                                                <SelectItem value="hidden">숨김</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </td>
                                    <td className="p-2 flex gap-1 flex-wrap items-center justify-center"><Button variant="outline" onClick={() => handleDeleteOption(section.id, option.id)}>삭제</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    )
}