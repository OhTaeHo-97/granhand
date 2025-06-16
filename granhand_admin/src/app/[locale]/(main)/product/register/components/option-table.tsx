import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GripVertical } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from 'react';

import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent
} from '@dnd-kit/core';
import {
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
    useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { arrayMove } from '@dnd-kit/sortable';
import { OptionType } from "./product-info";

export const createOptionHandlers = <T extends OptionType>(
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
                    ? { ...option, price: Number(numericValue) } // Number로 변환
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
                    ? { ...option, quantity: numericValue } // string으로 유지
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
});

interface OptionTableProps<T extends OptionType> {
    title: string;
    sections: { id: number; title: string; options: T[] }[];
    setSections: React.Dispatch<React.SetStateAction<{ id: number; title: string; options: T[] }[]>>;
    t: (key: string) => string;
}

// 각 옵션 행을 드래그 가능하게 만들기 위한 Sortable 컴포넌트
interface SortableOptionRowProps<T extends OptionType> {
    option: T;
    sectionId: number;
    t: (key: string) => string;
    handleOptionValueChange: (sectionId: number, optionId: number, value: string) => void;
    handlePriceChange: (sectionId: number, optionId: number, value: string) => void;
    handleInventoryIdChange: (sectionId: number, optionId: number, value: string) => void;
    handleQuantityChange: (sectionId: number, optionId: number, value: string) => void;
    handleStatusChange: (sectionId: number, optionId: number, value: string) => void;
    handleDeleteOption: (sectionId: number, optionId: number) => void;
}

function SortableOptionRow<T extends OptionType>({
    option,
    sectionId,
    t,
    handleOptionValueChange,
    handlePriceChange,
    handleInventoryIdChange,
    handleQuantityChange,
    handleStatusChange,
    handleDeleteOption
}: SortableOptionRowProps<T>) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: option.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <tr ref={setNodeRef} style={style} className="h-16 text-[#1A1A1A]">
            <td className="p-2 h-16 flex items-center justify-center">
                <GripVertical
                    className="!w-4 !h-4 cursor-grab"
                    {...attributes}
                    {...listeners}
                />
            </td>
            <td className="p-2 text-center">
                <Input
                    defaultValue={option.optionValue}
                    className="w-full h-10"
                    onChange={(e) => handleOptionValueChange(sectionId, option.id, e.target.value)}
                />
            </td>
            <td className="p-2 text-center">
                <Input
                    defaultValue={option.price.toLocaleString()}
                    className="w-full h-10"
                    onChange={(e) => handlePriceChange(sectionId, option.id, e.target.value)}
                />
            </td>
            <td className="p-2 text-center">
                <Input
                    defaultValue={option.inventoryId}
                    className="w-full h-10"
                    onChange={(e) => handleInventoryIdChange(sectionId, option.id, e.target.value)}
                />
            </td>
            <td className="p-2 text-center">
                <Input
                    defaultValue={option.quantity}
                    className="w-full h-10"
                    onChange={(e) => handleQuantityChange(sectionId, option.id, e.target.value)}
                />
            </td>
            <td className="p-2 text-center">
                <Select defaultValue={option.status} onValueChange={(value) => handleStatusChange(sectionId, option.id, value)}>
                    <SelectTrigger className="w-fit">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectItem value="on_sale">{t('product:on_sale')}</SelectItem>
                        <SelectItem value="temporary_out_of_stock">{t('product:temporary_out_of_stock')}</SelectItem>
                        <SelectItem value="stop_sale">{t('product:unavailable')}</SelectItem>
                    </SelectContent>
                </Select>
            </td>
            <td className="p-2 text-center">
                <Button variant="outline" className="!px-1 !py-1 text-sm text-[#5E5955]" onClick={() => handleDeleteOption(sectionId, option.id)}>{t('product:delete')}</Button>
            </td>
        </tr>
    );
}

export default function OptionTable<T extends OptionType>({
    title,
    sections,
    setSections,
    t
}: OptionTableProps<T>) {
    const {
        handleTitleChange,
        handleOptionValueChange,
        handlePriceChange,
        handleInventoryIdChange,
        handleQuantityChange,
        handleStatusChange,
        handleDeleteOption
    } = createOptionHandlers(setSections);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
            setSections((prevSections) => {
                const newSections = prevSections.map((section) => {
                    const sectionToUpdate = prevSections.find(s => s.options.some(o => o.id === active.id));

                    if (sectionToUpdate && sectionToUpdate.id === section.id) {
                        const oldIndex = section.options.findIndex(option => option.id === active.id);
                        const newIndex = section.options.findIndex(option => option.id === over?.id);

                        if (oldIndex !== -1 && newIndex !== -1) {
                            return {
                                ...section,
                                options: arrayMove(section.options, oldIndex, newIndex),
                            };
                        }
                    }
                    return section;
                });
                return newSections;
            });
        }
    };

    const handleAddSection = () => {
        const newSection = {
            id: sections.length > 0 ? Math.max(...sections.map(s => s.id)) + 1 : 1,
            title: '',
            options: []
        };
        setSections([...sections, newSection]);
    };

    const handleAddBtnOption = (sectionId: number) => {
        setSections((prev) => prev.map((section => section.id === sectionId
            ? {
                ...section,
                options: [
                    ...section.options,
                    {
                        id: section.options.length > 0 ? Math.max(...section.options.map(o => o.id)) + 1 : 1,
                        optionValue: '',
                        price: 0,
                        inventoryId: '',
                        quantity: '',
                        status: 'on_sale'
                    } as T
                ]
            }
            : section
        )));
    };

    return (
        <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
            <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                <Label className="font-semibold">{title}</Label>
            </div>
            <div className="flex items-center gap-4 p-5 w-full">
                <div className="space-y-4 text-sm">
                    <Button variant="outline" className="h-fit p-1 text-sm text-[#5E5955]" onClick={handleAddSection}>{t('product:add_option')}</Button>

                    {sections.map((section) => (
                        <div key={section.id} className="space-y-4">
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
                            <DndContext
                                sensors={sensors}
                                collisionDetection={closestCenter}
                                onDragEnd={handleDragEnd}
                            >
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
                                    <SortableContext
                                        items={section.options.map(option => option.id)}
                                        strategy={verticalListSortingStrategy}
                                    >
                                        <tbody>
                                            {section.options.map((option) => (
                                                <SortableOptionRow
                                                    key={option.id}
                                                    option={option}
                                                    sectionId={section.id}
                                                    t={t}
                                                    handleOptionValueChange={handleOptionValueChange}
                                                    handlePriceChange={handlePriceChange}
                                                    handleInventoryIdChange={handleInventoryIdChange}
                                                    handleQuantityChange={handleQuantityChange}
                                                    handleStatusChange={handleStatusChange}
                                                    handleDeleteOption={handleDeleteOption}
                                                />
                                            ))}
                                        </tbody>
                                    </SortableContext>
                                </table>
                            </DndContext>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}