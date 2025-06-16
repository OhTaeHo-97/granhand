import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { GripVertical } from "lucide-react"
import { ProductCategoryNode } from "@/lib/product/product-state"

interface SortableCategoryItemProps {
    node: ProductCategoryNode
    depth: number
    activeId: number | null
    setActiveId: React.Dispatch<React.SetStateAction<number | null>>
    setActiveCategory: React.Dispatch<React.SetStateAction<string | null>>
    setSelectedCategory: React.Dispatch<React.SetStateAction<ProductCategoryNode | null>>
    t: (key: string) => string
}

// SortableItem: 한 노드(상위/하위 모두)
export default function SortableCategoryItem({
    node,
    depth,
    activeId,
    setActiveId,
    setActiveCategory,
    setSelectedCategory,
    t,
}: SortableCategoryItemProps) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: node.idx,
    })

    return (
        <div
            ref={setNodeRef}
            style={{
                transform: CSS.Transform.toString(transform),
                transition,
                opacity: isDragging ? 0.5 : 1,
                background: activeId === node.idx ? "#f3f3f3" : undefined,
            }}
            className="flex items-center py-1"
            onMouseDown={() => {
                setActiveId(node.idx)
                setActiveCategory(node.catename)
                setSelectedCategory(node)
            }}
        >
            <span {...listeners} {...attributes} className="cursor-grab mr-2 flex-shrink-0">
                <GripVertical className="w-4 h-4 text-gray-400" />
            </span>
            <span className="font-semibold text-[#5E5955] flex-grow text-left" style={{ marginLeft: depth * 20 }}>
                {t(node.catename)}
            </span>
        </div>
    )
} 