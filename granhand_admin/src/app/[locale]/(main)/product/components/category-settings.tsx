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
import { ProductCategoryNode, useProductCategoryStore } from "@/lib/product/product-state"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function findNodeAndParent(
    nodes: ProductCategoryNode[],
    id: string,
    parent: ProductCategoryNode | null = null
): { node: ProductCategoryNode | null; parent: ProductCategoryNode | null } {
    for (const node of nodes) {
        if (node.id === id) return { node, parent }
        if (node.children) {
            const res = findNodeAndParent(node.children, id, node)
            if (res.node) return res
        }
    }
    return { node: null, parent: null }
}

// SortableItem: 한 노드(상위/하위 모두)
function SortableItem({
    node,
    depth, // depth는 더 이상 시각적인 들여쓰기에 사용되지 않음
    activeId,
    setActiveId,
    t
}: {
    node: ProductCategoryNode
    depth: number // 인자로 받지만 사용하지 않음
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
                transform: CSS.Transform.toString(transform), // CSS 유틸리티 확인
                transition,
                opacity: isDragging ? 0.5 : 1,
                background: activeId === node.id ? "#f3f3f3" : undefined,
                // 레벨에 따른 들여쓰기는 여기에서 관리하지 않음
            }}
            className="flex items-center py-1"
            onMouseDown={() => setActiveId(node.id)}
        >
            {/* 아이콘 컨테이너와 레벨 점 제거 */}
            {/* flex-shrink-0 추가 */}
            <span {...listeners} {...attributes} className="cursor-grab mr-2 flex-shrink-0">
                <GripVertical className="w-4 h-4 text-gray-400" />
            </span>
            <span className="font-semibold text-[#5E5955] flex-grow text-left" style={{ marginLeft: depth * 20 }}>{t(node.title)}</span> {/* flex-grow와 text-left 추가 */}
        </div>
    )
}

function moveWithinSiblings(
    nodes: ProductCategoryNode[],
    parentId: string | null,
    activeId: string,
    overId: string
): ProductCategoryNode[] {
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

// 트리 전체 렌더링
function RenderTree({
    nodes,
    depth = 0,
    activeId,
    setActiveId,
    t
}: {
    nodes: ProductCategoryNode[]
    depth?: number
    activeId: string | null
    setActiveId: (id: string | null) => void
    t: (key: string) => string
}) {
    // RenderTree 자체에는 border를 추가하지 않음. 최상위 호출하는 곳에서 border 추가.
    return (
        <SortableContext items={nodes.map((n) => n.id)} strategy={verticalListSortingStrategy}>
            {nodes.map((node) => (
                // <div key={node.id} style={{ marginLeft: depth * 20 }}> {/* 레벨에 따른 들여쓰기는 여기서 적용 */}
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
    const { categories, setCategories } = useProductCategoryStore()
    const [tree, setTree] = useState<ProductCategoryNode[]>(categories)
    const [activeId, setActiveId] = useState<string | null>(null)
    const activeParentId = useRef<string | null>(null)

    const sensors = useSensors(useSensor(PointerSensor))

    useEffect(() => {
        setTree(categories)
    }, [categories, open])

    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        }
        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [open, setOpen])

    useEffect(() => {
        if (open) {
            // 모달이 열리면 body 스크롤 비활성화
            document.body.style.overflow = 'hidden';
        } else {
            // 모달이 닫히면 body 스크롤 활성화
            document.body.style.overflow = '';
        }

        // 컴포넌트 언마운트 시 또는 open 상태 변경 전에 스타일 초기화
        return () => {
            document.body.style.overflow = '';
        }
    }, [open])

    if (!open) return null

    // 드래그 시작 시 부모 기억
    function handleDragStart(event: DragStartEvent) {
        const { active } = event
        const { parent } = findNodeAndParent(tree, active.id as string)
        let parentId: string | null = null;
        const findParentRecursive = (nodes: ProductCategoryNode[], targetId: string, currentParentId: string | null) => {
            for (const n of nodes) {
                if (n.id === targetId) {
                    parentId = currentParentId;
                    return;
                }
                if (n.children) {
                    findParentRecursive(n.children, targetId, n.id);
                    if (parentId !== null) return;
                }
            }
        };
        findParentRecursive(tree, active.id as string, null);
        activeParentId.current = parentId;
    }

    // 드래그 종료 시 동일 부모일 때만 이동
    function handleDragEnd(event: DragEndEvent) {const { active, over } = event
        setActiveId(null)
        if (!over || active.id === over.id) return

        // Find the parent of the over node
        let overParentId: string | null = null;
        const findParentRecursive = (nodes: ProductCategoryNode[], targetId: string, currentParentId: string | null) => {
            for (const n of nodes) {
                if (n.id === targetId) {
                    overParentId = currentParentId;
                    return;
                }
                if (n.children) {
                    findParentRecursive(n.children, targetId, n.id);
                    if (overParentId !== null) return;
                }
            }
        };
        findParentRecursive(tree, over.id as string, null);

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
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto">
            <div className="fixed inset-0 bg-black/60" onClick={() => setOpen(false)} aria-hidden />
            <div className="relative bg-[#FDFBF5] w-full h-full max-w-6xl mx-auto my-0 rounded-none shadow-lg z-50 flex flex-col">
                {/* ... existing close button ... */}
                <Button
                    onClick={() => setOpen(false)}
                    className="absolute right-8 top-6 z-50 rounded-sm opacity-70 hover:opacity-100 p-0 m-0"
                >
                <X className="!h-6 !w-6" />
                <span className="sr-only">Close</span>
                </Button>
                <div className="flex flex-row w-full h-full">
                    {/* 왼쪽: 트리 드래그&드롭 */}
                    <div className="w-80 p-8 overflow-y-auto">
                        <h1 className="text-2xl font-bold text-[#5E5955] mb-6">카테고리 설정</h1>
                        <div className="flex gap-4 mb-10">
                            <Button variant="outline" className="bg-white !w-fit !h-fit">카테고리 추가</Button>
                            <Button variant="outline" className="bg-white !w-fit !h-fit">삭제</Button>
                        </div>
                        {/* 최상위 RenderTree를 감싸는 div에 border 추가 */}
                        <div className="border border-gray-200 rounded-lg p-4">
                            <DndContext
                                sensors={sensors}
                                collisionDetection={closestCenter}
                                onDragStart={handleDragStart}
                                onDragEnd={handleDragEnd}
                            >
                                {/* RenderTree 호출 시 border는 적용하지 않음 */}
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
                    </div>
                    {/* 오른쪽: 상세 폼 ... */}
                    <div className="flex-1 p-12 mt-12">
                        <h2 className="font-bold text-xl text-[#5E5955] mb-6">카테고리 상세</h2>
                        {/* ... existing detail form ... */}
                        <div className="border border-gray-200 text-[#6f6963] text-sm w-full min-w-120">
                            <div className="grid grid-cols-[150px_1fr] border-b">
                                <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                                    카테고리명
                                </div>
                                <div className="grid divide-y divide-gray-200">
                                    <div className="p-5">
                                        <Input placeholder="카테고리명" />
                                    </div>
                                    <div className="p-5">
                                        <Input placeholder="Category Name" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                                    <Label className="font-semibold">쇼핑몰 표시 설정</Label>
                                </div>
                                <div className="flex items-center gap-4 p-5">
                                    <Label className="flex items-center gap-2">
                                        <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/>
                                        <span className="text-[#111111]">PC(Web)</span>
                                    </Label>
                                    <Label className="flex items-center gap-2">
                                        <Checkbox id="select" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/>
                                        <span className="text-[#111111]">APP</span>
                                    </Label>
                                </div>
                            </div>
                            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                                    <Label className="font-semibold">노출 설정</Label>
                                </div>
                                <div className="flex items-center gap-4 p-5 text-[#231815B2]">
                                    <RadioGroup defaultValue="exposure" className="flex gap-6">
                                        <Label className="flex items-center gap-2 min-w-20">
                                        <RadioGroupItem value="exposure" /> {t('store:visible')}
                                        </Label>
                                        <Label className="flex items-center gap-2 min-w-20">
                                        <RadioGroupItem value="hidden" /> {t('store:hidden')}
                                        </Label>
                                    </RadioGroup>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-4 mt-8">
                            <Button className="px-8 py-2 border rounded w-1/6" onClick={() => setOpen(false)}>취소</Button>
                            <Button className="px-8 py-2 rounded bg-[#322A24] text-white w-1/6" onClick={handleSave}>저장</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
