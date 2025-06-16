import { ProductCategoryNode } from "@/lib/product/product-state"
import { Dispatch, SetStateAction } from "react"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import SortableCategoryItem from "./sortable-category-item"

interface RenderCategoryTreeProps {
    nodes: ProductCategoryNode[]
    depth?: number
    activeId: number | null
    setActiveId: Dispatch<SetStateAction<number | null>>
    setActiveCategory: Dispatch<SetStateAction<string | null>>
    setSelectedCategory: Dispatch<SetStateAction<ProductCategoryNode | null>>
    t: (key: string) => string
}

// 트리 전체 렌더링
export default function RenderCategoryTree({
    nodes,
    depth = 0,
    activeId,
    setActiveId,
    setActiveCategory,
    setSelectedCategory,
    t,
}: RenderCategoryTreeProps) {
    // RenderTree 자체에는 border를 추가하지 않음. 최상위 호출하는 곳에서 border 추가.
    return (
        <SortableContext items={nodes.map((n) => n.idx)} strategy={verticalListSortingStrategy}>
            {nodes.map((node) => (
                <div key={node.idx}>
                    <SortableCategoryItem
                        node={node}
                        depth={depth}
                        activeId={activeId}
                        setActiveId={setActiveId}
                        setActiveCategory={setActiveCategory}
                        setSelectedCategory={setSelectedCategory}
                        t={t}
                    />
                    {node.children && node.children.length > 0 && (
                        <RenderCategoryTree
                            nodes={node.children}
                            depth={depth + 1}
                            activeId={activeId}
                            setActiveId={setActiveId}
                            setActiveCategory={setActiveCategory}
                            setSelectedCategory={setSelectedCategory}
                            t={t}
                        />
                    )}
                </div>
            ))}
        </SortableContext>
    )
} 