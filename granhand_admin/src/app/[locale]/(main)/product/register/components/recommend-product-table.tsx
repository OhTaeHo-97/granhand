import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GripVertical } from "lucide-react";
import { useState } from "react";
import RecommendProductModal from "./modal/recommend-product-modal";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { RecommendProductInfo } from "./product-info";

export const createOptionHandlers = <T extends RecommendProductInfo>(
    setOptions: React.Dispatch<React.SetStateAction<T[]>>
) => ({
    handleRegisterTypeChange: (optionId: number, value: string) => {
        setOptions((prev) => prev.map((option) => option.id === optionId
            ? { ...option, registerType: value }
            : option))
    }
})

interface SortableTableRowProps<T extends RecommendProductInfo> {
    option: T
    selectedProducts: number[]
    handleCheckboxChange: (productId: number, checked: boolean) => void
    handleRegisterTypeChange: (optionId: number, value: string) => void
    // t: (key: string) => string
}

function SortableTableRow<T extends RecommendProductInfo>({ option, selectedProducts, handleCheckboxChange, handleRegisterTypeChange, t }: SortableTableRowProps<T> & { t: (key: string) => string }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: option.id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    return (
        <tr ref={setNodeRef} style={style} className="h-14 text-[#1A1A1A] hover:bg-[#322A2408]">
            <td className="p-2 h-14 flex justify-center items-center" {...attributes} {...listeners}>
                <GripVertical className="!w-4 !h-4 cursor-grab" />
            </td>
            <td className="p-2 items-center">
                <Checkbox
                    id={`checkbox-${option.id}`}
                    className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                    checked={selectedProducts.includes(option.id)}
                    onCheckedChange={(checked) => handleCheckboxChange(option.id, checked === true)}
                    onClick={(e) => e.stopPropagation()}
                />
            </td>
            <td className="p-2 text-center">{option.name}</td>
            <td className="p-2 text-center">{option.price.toLocaleString()}</td>
            <td className="p-2 text-center">{option.category}</td>
            <td className="p-2 text-center">{option.status}</td>
            <td className="p-2 flex justify-center items-center">
                <Select defaultValue={option.registerType} onValueChange={(value) => handleRegisterTypeChange(option.id, value)}>
                    <SelectTrigger className="w-fit">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectItem value="newest_first">{t('product:mutual_registration')}</SelectItem>
                        <SelectItem value="by_category">{t('product:one_way_registration')}</SelectItem>
                    </SelectContent>
                </Select>
            </td>
        </tr>
    )
}

export default function RecommendProductTable<T extends RecommendProductInfo>({ options, setOptions, t }: { options: T[], setOptions: React.Dispatch<React.SetStateAction<T[]>>, t: (key: string) => string }) {
    const [openRecommendAdd, setOpenRecommendAdd] = useState(false)
    const [selectedProducts, setSelectedProducts] = useState<number[]>([])
    const { handleRegisterTypeChange } = createOptionHandlers(setOptions)

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    )

    const handleDragEnd = (event: any) => {
        const { active, over } = event

        if(active.id !== over.id) {
            setOptions((options) => {
                const oldIndex = options.findIndex((option) => option.id === active.id)
                const newIndex = options.findIndex((option) => option.id === over.id)
                return arrayMove(options, oldIndex, newIndex)
            })
        }
    }

    const handleCheckboxChange = (productId: number, checked: boolean) => {
        setSelectedProducts((prev) => {
            if(checked) {
                return [...new Set([...prev, productId])]
            } else {
                return prev.filter((id) => id !== productId)
            }
        })
    }

    const handleProductSelect = (checked: boolean) => {
        setOptions((prev) => {
            if(checked) {
                const newProducts: RecommendProductInfo[] = selectedProducts.map((_, idx) => ({
                    id: options.length + idx,
                    name: '',
                    price: 0,
                    category: '',
                    status: 'on_sale',
                    registerType: 'normal'
                }))
                return [...prev, ...newProducts as T[]]
            } else {
                return prev.filter(option => !selectedProducts.includes(option.id))
            }
        })
    }

    return (
        <div className="p-10">
            <div className="flex gap-4 mb-4">
                <Button variant="outline" className="p-1" onClick={() => setOpenRecommendAdd((prev) => !prev)}>{t('product:add_product')}</Button>
                <Button variant="outline" className="p-1" onClick={() => handleProductSelect(false)}>{t('product:delete_product')}</Button>
            </div>
            <table className="w-full text-center min-w-8xl overflow-auto">
                <thead className="bg-[#322A2408] border-t border-b h-15">
                    <tr className="border-b text-[#6F6963]">
                        <th className="p-2 flex items-center justify-center h-15"><GripVertical className="!w-4 !h-4" /></th>
                        <th className="p-2 items-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
                        <th className="p-2 text-center">{t('product:product_name')}</th>
                        <th className="p-2 text-center">{t('product:price')}</th>
                        <th className="p-2 text-center">{t('product:category2')}</th>
                        <th className="p-2 text-center">{t('product:status')}</th>
                        <th className="p-2 text-center">{t('product:registration_method')}</th>
                    </tr>
                </thead>
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext
                        items={options.map((option) => option.id)}
                        strategy={verticalListSortingStrategy}
                    >
                        <tbody>
                            {options.map((option) => (
                                <SortableTableRow
                                    key={option.id}
                                    option={option}
                                    selectedProducts={selectedProducts}
                                    handleCheckboxChange={handleCheckboxChange}
                                    handleRegisterTypeChange={handleRegisterTypeChange}
                                    t={t}
                                />
                            ))}
                        </tbody>
                    </SortableContext>
                </DndContext>
                {/* <tbody>
                    {options.map((option) => (
                        <tr key={option.id} className="h-14 text-[#1A1A1A] hover:bg-[#322A2408]">
                            <td className="p-2 h-14 flex justify-center items-center"><GripVertical className="!w-4 !h-4" /></td>
                            <td className="p-2 items-center">
                                <Checkbox
                                    id="select-all"
                                    className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                                    checked={selectedProducts.includes(option.id)}
                                    onCheckedChange={(checked) => handleCheckboxChange(option.id, checked === true)}
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </td>
                            <td className="p-2 text-center">{option.name}</td>
                            <td className="p-2 text-center">{option.price.toLocaleString()}</td>
                            <td className="p-2 text-center">{option.category}</td>
                            <td className="p-2 text-center">{option.status}</td>
                            <td className="p-2 flex justify-center items-center">
                                <Select defaultValue={option.registerType} onValueChange={(value) => handleRegisterTypeChange(option.id, value)}>
                                    <SelectTrigger className="w-fit">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="newest_first">상호 등록</SelectItem>
                                        <SelectItem value="by_category">일방 등록</SelectItem>
                                    </SelectContent>
                                </Select>
                            </td>
                        </tr>
                    ))} */}

                    {/* {Array.from({ length: 3 }).map((_, i) => (
                    <tr key={i} className="h-14 text-[#1A1A1A] hover:bg-[#322A2408]">
                        <td className="p-2 h-14 flex justify-center items-center"><GripVertical className="!w-4 !h-4" /></td>
                        <td className="p-2 items-center">
                            <Checkbox
                                id="select-all"
                                className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                                checked={selectedProducts.includes(options.id)}
                                onCheckedChange={(checked) => handleProductSelect(options.id, checked)}
                                onClick={(e) => e.stopPropagation()}
                            />
                        </td>
                        <td className="p-2 text-center">Multi Perfume & Sachet Set</td>
                        <td className="p-2 text-center">53,000</td>
                        <td className="p-2 text-center">멀티퍼퓸 외 2</td>
                        <td className="p-2 text-center">판매중</td>
                        <td className="p-2 flex justify-center items-center">
                            <Select defaultValue="newest">
                                <SelectTrigger className="w-fit">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="newest_first">상호 등록</SelectItem>
                                    <SelectItem value="by_category">일방 등록</SelectItem>
                                </SelectContent>
                            </Select>
                        </td>
                    </tr>
                    ))} */}
                {/* </tbody> */}
            </table>
            <RecommendProductModal open={openRecommendAdd} setOpen={setOpenRecommendAdd} />
        </div>
    )
}