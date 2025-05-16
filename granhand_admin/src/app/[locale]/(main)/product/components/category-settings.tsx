import { useEffect, useState, useRef } from "react"
import { X, GripVertical } from "lucide-react"
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
} from "@dnd-kit/core"
import {
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { useCategoryStore, CategoryNode } from "../state/category-store"

// 트리 유틸
function findNodeAndParent(
    nodes: CategoryNode[],
    id: string,
    parent: CategoryNode | null = null
): { node: CategoryNode | null; parent: CategoryNode | null } {
    for (const node of nodes) {
        if (node.id === id) return { node, parent }
        if (node.children) {
            const res = findNodeAndParent(node.children, id, node)
            if (res.node) return res
        }
    }
    return { node: null, parent: null }
}

function moveWithinSiblings(
    nodes: CategoryNode[],
    parentId: string | null,
    activeId: string,
    overId: string
): CategoryNode[] {
    if (parentId === null) {
        // 최상위
        const idxA = nodes.findIndex((n) => n.id === activeId)
        const idxB = nodes.findIndex((n) => n.id === overId)
        if (idxA === -1 || idxB === -1) return nodes

        const arr = [...nodes]
        const [removed] = arr.splice(idxA, 1)
        arr.splice(idxB, 0, removed)
        return arr
    }
    // 하위
    return nodes.map((n) => {
        if (n.id === parentId && n.children) {
            const idxA = n.children.findIndex((c) => c.id === activeId)
            const idxB = n.children.findIndex((c) => c.id === overId)
            if (idxA === -1 || idxB === -1) return n
            
            const arr = [...n.children]
            const [removed] = arr.splice(idxA, 1)
            arr.splice(idxB, 0, removed)
            return { ...n, children: arr }
        }
        if (n.children) {
            return { ...n, children: moveWithinSiblings(n.children, parentId, activeId, overId) }
        }
        return n
    })
}

// SortableItem: 한 노드(상위/하위 모두)
function SortableItem({
    node,
    depth,
    activeId,
    setActiveId,
    t
}: {
    node: CategoryNode
    depth: number
    activeId: string | null
    setActiveId: (id: string | null) => void
    t: (key: string) => string
}) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: node.id,
    })

    return (
        <div
            ref={setNodeRef}
            style={{
                transform: CSS.Transform.toString(transform),
                transition,
                marginLeft: depth * 20,
                opacity: isDragging ? 0.5 : 1,
                background: activeId === node.id ? "#f3f3f3" : undefined,
            }}
            className="flex items-center py-1"
            onMouseDown={() => setActiveId(node.id)}
        >
            <span {...listeners} {...attributes} className="cursor-grab mr-2">
                <GripVertical className="w-4 h-4 text-gray-400" />
            </span>
            <span className="font-semibold text-[#5E5955]">{t(node.title)}</span>
        </div>
    )
}

// 트리 전체 렌더링
function RenderTree({
    nodes,
    depth = 0,
    activeId,
    setActiveId,
    t
}: {
    nodes: CategoryNode[]
    depth?: number
    activeId: string | null
    setActiveId: (id: string | null) => void
    t: (key: string) => string
}) {
    return (
        <SortableContext items={nodes.map((n) => n.id)} strategy={verticalListSortingStrategy}>
            {nodes.map((node) => (
                <div key={node.id}>
                    <SortableItem node={node} depth={depth} activeId={activeId} setActiveId={setActiveId} t={t} />
                    {node.children && (
                        <RenderTree nodes={node.children} depth={depth + 1} activeId={activeId} setActiveId={setActiveId} t={t} />
                    )}
                </div>
            ))}
        </SortableContext>
    )
}

export default function CategorySettingModal({ open, setOpen, t }: { open: boolean, setOpen: (v: boolean) => void, t: (key: string) => string }) {
    const { categories, setCategories } = useCategoryStore()
    const [tree, setTree] = useState<CategoryNode[]>(categories)
    const [activeId, setActiveId] = useState<string | null>(null)
    const activeParentId = useRef<string | null>(null)

    const sensors = useSensors(useSensor(PointerSensor))

    useEffect(() => {
        setTree(categories);
    }, [categories, open]);

    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        }
        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [open, setOpen]);

    if (!open) return null

    // 드래그 시작 시 부모 기억
    function handleDragStart(event: DragStartEvent) {
        const { active } = event
        const { parent } = findNodeAndParent(tree, active.id as string)
        activeParentId.current = parent ? parent.id : null
    }

    // 드래그 종료 시 동일 부모일 때만 이동
    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event
        setActiveId(null)
        if (!over || active.id === over.id) return

        const { parent: overParent } = findNodeAndParent(tree, over.id as string)
        const overParentId = overParent ? overParent.id : null

        if (activeParentId.current !== overParentId) {
            // 부모가 다르면 이동 불가
            return
        }

        setTree((prev) => moveWithinSiblings(prev, overParentId, active.id as string, over.id as string))
    }

    // 저장 시 Zustand + DB 반영
    async function handleSave() {
        setCategories(tree)
        await fetch("/api/categories", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ categories: tree }),
        })
        setOpen(false)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/60" onClick={() => setOpen(false)} aria-hidden />
            <div className="relative bg-[#fdfaf5] w-full h-full max-w-6xl mx-auto my-0 rounded-none shadow-lg z-50 flex flex-col">
                <button
                onClick={() => setOpen(false)}
                className="absolute right-8 top-8 z-50 rounded-sm opacity-70 hover:opacity-100"
                >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
                </button>
                <div className="flex flex-row w-full h-full">
                {/* 왼쪽: 트리 드래그&드롭 */}
                <div className="w-80 p-8">
                    <h1 className="text-2xl font-bold mb-6">카테고리 설정</h1>
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                    >
                        <RenderTree nodes={tree} activeId={activeId} setActiveId={setActiveId} t={t} />
                        <DragOverlay>
                            {activeId && (
                            <div className="flex items-center py-1 bg-white border rounded shadow px-2">
                                <GripVertical className="w-4 h-4 text-gray-400 mr-2" />
                                <span className="font-semibold text-[#5E5955]">
                                {findNodeAndParent(tree, activeId).node?.title}
                                </span>
                            </div>
                            )}
                        </DragOverlay>
                    </DndContext>
                </div>
                {/* 오른쪽: 상세 폼 ... */}
                <div className="flex-1 p-12">
                    <h2 className="text-xl font-bold mb-6">카테고리 상세</h2>
                    <div className="bg-white border rounded-lg p-8">
                    {/* ...여기에 상세 폼 구현... */}
                    <div className="mb-4">
                        <label className="block font-semibold mb-2">카테고리명</label>
                        <input className="border rounded px-4 py-2 w-full" placeholder="카테고리명" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Category Name</label>
                        <input className="border rounded px-4 py-2 w-full" placeholder="Category Name" />
                    </div>
                    <div className="mb-4 flex items-center gap-4">
                        <label className="font-semibold">쇼핑몰 표시 설정</label>
                        <input type="checkbox" defaultChecked className="mr-1" /> PC(Web)
                        <input type="checkbox" defaultChecked className="ml-4 mr-1" /> APP
                    </div>
                    <div className="mb-4 flex items-center gap-4">
                        <label className="font-semibold">노출 설정</label>
                        <input type="radio" name="visible" defaultChecked className="ml-2 mr-1" /> 노출
                        <input type="radio" name="visible" className="ml-4 mr-1" /> 숨김
                    </div>
                    <div className="flex justify-end gap-4 mt-8">
                        <button className="px-8 py-2 border rounded bg-white" onClick={() => setOpen(false)}>취소</button>
                        <button className="px-8 py-2 rounded bg-[#2d2926] text-white" onClick={handleSave}>저장</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}