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
// import NewCategoryInput from "./new-category-modal"
// import NewCategoryModal from "./new-category-modal"
import api from "@/utils/api"
import { useSession } from "next-auth/react"
import { useCategory } from "@/hooks/use-category"

function findNodeAndParent(
    nodes: ProductCategoryNode[],
    id: number,
    parent: ProductCategoryNode | null = null
): { node: ProductCategoryNode | null; parent: ProductCategoryNode | null } {
    for (const node of nodes) {
        if (node.idx === id) return { node, parent }
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
    depth, 
    activeId,
    setActiveId,
    setActiveCategory,
    setSelectedCategory,
    t
}: {
    node: ProductCategoryNode
    depth: number // 인자로 받지만 사용하지 않음
    activeId: number | null
    setActiveId: (id: number | null) => void
    setActiveCategory: (title: string | null) => void
    setSelectedCategory: (category: ProductCategoryNode | null) => void
    t: (key: string) => string
}) {
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

function moveWithinSiblings(
    nodes: ProductCategoryNode[],
    parentId: number | null,
    activeId: number,
    overId: number
): ProductCategoryNode[] {
    if (parentId === null) {
        // 최상위
        const idxA = nodes.findIndex((n) => n.idx === activeId)
        const idxB = nodes.findIndex((n) => n.idx === overId)
        if (idxA === -1 || idxB === -1) return nodes

        const arr = [...nodes]
        const [removed] = arr.splice(idxA, 1)
        arr.splice(idxB, 0, removed)
        return arr
    }
    // 하위
    return nodes.map((n) => {
        if (n.idx === parentId && n.children) {
            const idxA = n.children.findIndex((c) => c.idx === activeId)
            const idxB = n.children.findIndex((c) => c.idx === overId)
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

export default function CategorySettingModal({ open, setOpen, t }: { open: boolean, setOpen: (v: boolean) => void, t: (key: string) => string }) {
    const { addCategory, getCategories } = useCategory()
    const { data: session, status } = useSession()
    const { categories, setCategories } = useProductCategoryStore()
    // const [tree, setTree] = useState<ProductCategoryNode[]>(categories)
    const [tree, setTree] = useState<ProductCategoryNode[]>([])
    const [activeId, setActiveId] = useState<number | null>(null)
    // const [activeCategory, setActiveCategory] = useState<string | null>(null)
    const [, setActiveCategory] = useState<string | null>(null)
    const [selectedCategory, setSelectedCategory] = useState<ProductCategoryNode | null>(null)
    const [isAddingMode, setIsAddingMode] = useState(false)
    const [form, setForm] = useState<Omit<ProductCategoryNode, "idx" | "children">>({
        catename: "",
        catecode: "",
        upcate: "",
        isshow: "Y",
        orders: 1,
    })

    const activeParentId = useRef<number | null>(null)
    // const [isAddingCategory, setIsAddingCategory] = useState(false)
    // const [newCategoryParentId, setNewCategoryParentId] = useState<number | null>(null)
    // const inputRef = useRef<HTMLInputElement>(null)
    // const [newCategoryOpen, setNewCategoryOpen] = useState(false)
    // const [newCategoryName, setNewCategoryName] = useState('')

    const sensors = useSensors(useSensor(PointerSensor))

    const fetchCategoriesRecursively = async (upcate: string = ''): Promise<ProductCategoryNode[]> => {
        if (status !== 'authenticated' || !session?.token) {
            console.log('Cannot fetch categories - no valid session')
            return []
        }

        try {
            const { data, error } = await getCategories({ upcate })

            if (error) {
                console.error(`Failed to fetch categories for upcate: ${upcate}`, error)
                return []
            }

            if (data && data.length > 0) {
                const categoriesWithChildren: ProductCategoryNode[] = []
                for (const category of data) {
                    // 자신과 자식 노드를 재귀적으로 가져옴
                    const children = await fetchCategoriesRecursively(category.catename)
                    categoriesWithChildren.push({
                        ...category,
                        children: children.length > 0 ? children : undefined, // 자식이 없으면 children 속성 제거 또는 빈 배열로 설정
                    })
                }
                return categoriesWithChildren
            } else {
                return [] // 해당 upcate에 자식이 없으면 빈 배열 반환
            }

        } catch (error) {
            console.error(`Failed to fetch categories recursively for upcate: ${upcate}`, error)
            return []
        }
    }

    useEffect(() => {
        if(open) {
            const loadCategories = async () => {
                const allCategories = await fetchCategoriesRecursively()
                setCategories(allCategories)
            }
            // fetchCategories()
            loadCategories()
        }
    }, [open, status, session?.token])

    useEffect(() => {
        if (selectedCategory) {
            setForm({
                catename: selectedCategory.catename,
                catecode: selectedCategory.catecode,
                upcate: selectedCategory.upcate,
                isshow: selectedCategory.isshow,
                orders: selectedCategory.orders
            })
            setIsAddingMode(false)
        } else {
            // 카테고리 선택 해제 시 폼 초기화
            setForm({
                catename: "",
                catecode: "",
                upcate: "",
                isshow: "Y",
                orders: 1,
            })
        }
    }, [selectedCategory])

    useEffect(() => {
        setTree(categories)
    }, [categories])

    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false)
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

    const handleAddCategory = () => {
        setForm({
            catename: '',
            catecode: '',
            upcate: '',
            isshow: 'Y',
            orders: 1
        })
        // setSelectedCategory(null)
        setIsAddingMode(true)
        console.log(selectedCategory)
    }

    const handleSave = async () => {
        if (status !== "authenticated" || !session?.token) return

        try {
            const categoriesToUpdate: { idx: number; orders: number }[] = []
            const collectOrders = (nodes: ProductCategoryNode[], parentId: number | null = null) => {
                console.log(parentId)
                nodes.forEach((node, index) => {
                    categoriesToUpdate.push({
                        idx: node.idx,
                        orders: index + 1
                    })
                    if(node.children) {
                        collectOrders(node.children, node.idx)
                    }
                })
            }

            collectOrders(tree)

            // for(const category of categoriesToUpdate) {
            //     await api.put(`/product/cate/${category.idx}`, {
            //         orders: category.orders
            //     }, {
            //         token: session.token
            //     })
            // }
            // await fetchCategories()
            // setOpen(false)

            if (isAddingMode) {
                // POST (생성)
                // const addedForm = {
                //     ...form,
                //     upcate: selectedCategory?.catename ? selectedCategory.catename : ''
                // }
    
                const category = {
                    catename: form.catename,
                    // upcate: form.upcate,
                    upcate: selectedCategory?.catename ? selectedCategory.catename : '',
                    isshow: form.isshow
                }
    
                // console.log('params:', category)
                // console.log('form', form)
    
                const { error } = await addCategory(category)
    
                // console.log('data:', data)
                // console.log('error:', error)
    
                if(error) {
                    alert('카테고리 추가 실패')
                } else {
                    alert('카테고리 추가 성공')
                    const updatedTree = await fetchCategoriesRecursively()
                    setCategories(updatedTree)
                    setOpen(false)
                }
            } else if (selectedCategory) {
                // PUT (수정)
                await api.put(`/product/cate/${selectedCategory.idx}`,
                    form, {
                        token: session.token
                    }
                )
    
                // await fetchCategories()
                const updatedTree = await fetchCategoriesRecursively()
                setCategories(updatedTree)
            }

            setSelectedCategory(null)
            setIsAddingMode(false)
        } catch (error) {
            console.error('Failed to update category orders:', error)
            alert('저장 중 오류 발생')
        }
        // 새로고침 등 후처리 필요시 추가
    }

    // 드래그 시작 시 부모 기억
    function handleDragStart(event: DragStartEvent) {
        const { active } = event
        // const { parent } = findNodeAndParent(tree, active.id as number)
        let parentId: number | null = null;
        const findParentRecursive = (nodes: ProductCategoryNode[], targetId: number, currentParentId: number | null) => {
            for (const n of nodes) {
                if (n.idx === targetId) {
                    parentId = currentParentId
                    return
                }
                if (n.children) {
                    findParentRecursive(n.children, targetId, n.idx)
                    if (parentId !== null) return
                }
            }
        }
        findParentRecursive(tree, active.id as number, null)
        activeParentId.current = parentId
    }

    // 드래그 종료 시 동일 부모일 때만 이동
    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event
        setActiveId(null)
        setActiveCategory(null)
        if (!over || active.id === over.id) return

        // Find the parent of the over node
        let overParentId: number | null = null
        const findParentRecursive = (nodes: ProductCategoryNode[], targetId: number, currentParentId: number | null) => {
            for (const n of nodes) {
                if (n.idx === targetId) {
                    overParentId = currentParentId
                    return
                }
                if (n.children) {
                    findParentRecursive(n.children, targetId, n.idx)
                    if (overParentId !== null) return
                }
            }
        }
        findParentRecursive(tree, over.id as number, null)

        if (activeParentId.current !== overParentId) {
            // 부모가 다르면 이동 불가
            return
        }

        const newTree = moveWithinSiblings(tree, overParentId, active.id as number, over.id as number)
        setTree(newTree)
    }

    // 저장 시 Zustand + DB 반영
    // async function handleSave() {
    //     setCategories(tree)
    //     await fetch("/api/categories", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ categories: tree }),
    //     })
    //     setOpen(false)
    // }

    // const fetchCategories = async (upcate?: string) => {
    //     if (status !== 'authenticated' || !session?.token) {
    //         console.log('Cannot create category - no valid session')
    //         return
    //     }

    //     try {
    //         // const params = new URLSearchParams({
    //         //     upcate: upcate ? upcate : ''
    //         // })

    //         const { data, error } = await getCategories({
    //             upcate: ''
    //         })

    //         if(error) {
    //             alert('카테고리 가져오기 실패')
    //         }
    //         if(data) {
    //             alert('카테고리 가져오기 성공')
    //             console.log(data)
    //             const categories = buildCategoryTree(data)
    //             setCategories(categories)
    //         }

    //         // if(error) {
    //         //     alert('카테고리 가져오기 실패')
    //         // } else {
    //         //     setCategories(data)
    //         // }


    //         // const categories = await getCategories({
    //         //     upcate: ''
    //         // })

    //         // const response = await fetch(`/api/product/category?${params.toString()}`, {
    //         //     // token: session.token
    //         //     method: 'GET',
    //         //     headers: {
    //         //         'Authorization': `${session.token}`
    //         //     }
    //         // })

    //         // if(!response.ok) {
    //         //     const error = await response.json()
    //         //     throw new Error(error.message)
    //         // }

    //         // const data = await response.json()
    //         // console.log('data:', data)
    //         // return data


    //         // if (response.data) {
    //         //     setCategories(response.data)
    //         // }
    //     } catch (error) {
    //         console.error('Failed to create category:', error)
    //     }
    // }

    // const handleUpdateCategory = async () => {
    //     if (!newCategoryName.trim()) return

    //     if (!selectedCategory || status !== 'authenticated' || !session?.token) {
    //         console.log('Cannot create category - no valid session')
    //         return
    //     }

    //     try {
    //         const response = await api.put(`/product/cate/${selectedCategory.idx}`, {
    //             catename: newCategoryName.trim(),
    //             catecode: newCategoryName.trim(),
    //             upcate: selectedCategory?.catename || '',
    //             isshow: 'Y',
    //             orders: 1
    //         }, {
    //             token: session.token
    //         })

    //         // 카테고리 목록 새로고침
    //         await fetchCategories()
            
    //         setNewCategoryName('')
    //         // setNewCategoryParentId(null)
    //         // setNewCategoryOpen(false)
    //     } catch (error) {
    //         console.error('Failed to create category:', error)
    //     }
    // }

    const handleDeleteCategory = async () => {
        if (!activeId) return

        if (!selectedCategory || status !== 'authenticated' || !session?.token) {
            console.log('Cannot delete category - no valid session or category not selected');
            return
        }

        try {
            await api.delete(`/product/cate/${selectedCategory.idx}`, {}, {
                token: session.token
            })

            // 카테고리 목록 새로고침
            alert('카테고리 삭제 성공')
            // await fetchCategories()
            const updatedTree = await fetchCategoriesRecursively()
            setCategories(updatedTree)
            setSelectedCategory(null)
            setActiveId(null)
            setActiveCategory(null)
        } catch (error) {
            console.error('Failed to delete category:', error)
            alert('카테고리 삭제 실패')
        }

        // const deleteNode = (nodes: ProductCategoryNode[], targetId: string): ProductCategoryNode[] => {
        //     return nodes.filter(node => {
        //         if (node.id === targetId) {
        //             return false;
        //         }
        //         if (node.children) {
        //             node.children = deleteNode(node.children, targetId)
        //         }
        //         return true;
        //     })
        // }

        // setTree(prev => deleteNode(prev, activeId))
        // setActiveId(null)
        // setActiveCategory(null)

        // deleteCategory()
    }

    // 트리 전체 렌더링
    function RenderTree({
        nodes,
        depth = 0,
        activeId,
        setActiveId,
        setActiveCategory,
        setSelectedCategory,
        t,
        // isAddingCategory,
        // newCategoryParentId,
        // newCategoryName,
        // setNewCategoryName,
        // onCreateCategory,
        // inputRef
    }: {
        nodes: ProductCategoryNode[]
        depth?: number
        activeId: number | null
        setActiveId: (id: number | null) => void
        setActiveCategory: (name: string | null) => void
        setSelectedCategory: (category: ProductCategoryNode | null) => void
        t: (key: string) => string
        // isAddingCategory: boolean
        // newCategoryParentId: number | null
        // newCategoryName: string
        // setNewCategoryName: (name: string) => void
        // onCreateCategory: () => void
        // inputRef: React.RefObject<HTMLInputElement | null>
    }) {
        nodes.map((node) => console.log(node.idx))
        // RenderTree 자체에는 border를 추가하지 않음. 최상위 호출하는 곳에서 border 추가.
        return (
            <SortableContext items={nodes.map((n) => n.idx)} strategy={verticalListSortingStrategy}>
                {nodes.map((node) => (
                    // <div key={node.id} style={{ marginLeft: depth * 20 }}> {/* 레벨에 따른 들여쓰기는 여기서 적용 */}
                    <div key={node.idx}>
                        <SortableItem node={node} depth={depth} activeId={activeId} setActiveId={setActiveId} setActiveCategory={setActiveCategory} setSelectedCategory={setSelectedCategory} t={t} />
                        {node.children && node.children.length > 0 && (
                            <RenderTree
                                nodes={node.children}
                                depth={depth + 1}
                                activeId={activeId}
                                setActiveId={setActiveId}
                                setActiveCategory={setActiveCategory}
                                setSelectedCategory={setSelectedCategory}
                                t={t}
                                // isAddingCategory={isAddingCategory}
                                // newCategoryParentId={newCategoryParentId}
                                // newCategoryName={newCategoryName}
                                // setNewCategoryName={setNewCategoryName}
                                // onCreateCategory={onCreateCategory}
                                // inputRef={inputRef}
                            />
                        )}

                        {/* {isAddingCategory && node.idx === newCategoryParentId && (
                            <div className="flex items-center py-1 gap-2" style={{ marginLeft: (depth + 1) * 20 }}>
                                <span className="mr-2 flex-shrink-0">
                                    <GripVertical className="w-4 h-4 text-gray-400" />
                                </span>
                            </div>
                        )} */}
                    </div>
                ))}
            </SortableContext>
        )
    }

    // useEffect(() => {
    //     fetchCategories()
    // }, [])

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
                            {/* <Button variant="outline" className="bg-white !w-fit !h-fit" onClick={handleAddCategory}>카테고리 추가</Button> */}
                            {/* <Button variant="outline" className="bg-white !w-fit !h-fit" onClick={() => {
                                handleAddCategory()
                                setNewCategoryOpen(true)
                            }}>카테고리 추가</Button> */}
                            {/* <Button variant="outline" className="bg-white !w-fit !h-fit" onClick={handleSave}>카테고리 추가</Button> */}
                            <Button variant="outline" className="bg-white !w-fit !h-fit" onClick={handleAddCategory}>카테고리 추가</Button>
                            <Button variant="outline" className="bg-white !w-fit !h-fit" onClick={handleDeleteCategory}>삭제</Button>
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
                                {/* <RenderTree nodes={tree} activeId={activeId} setActiveId={setActiveId} t={t} /> */}
                                <RenderTree 
                                    nodes={tree}
                                    activeId={activeId} 
                                    setActiveId={setActiveId}
                                    setActiveCategory={setActiveCategory}
                                    setSelectedCategory={setSelectedCategory}
                                    t={t}
                                    // isAddingCategory={isAddingCategory}
                                    // newCategoryParentId={newCategoryParentId}
                                    // newCategoryName={newCategoryName}
                                    // setNewCategoryName={setNewCategoryName}
                                    // onCreateCategory={handleCreateCategory}
                                    // inputRef={inputRef}
                                />
                                <DragOverlay>
                                    {activeId && (
                                        <div className="flex items-center py-1 bg-white border rounded shadow px-2">
                                            <GripVertical className="w-4 h-4 text-gray-400 mr-2" />
                                            <span className="font-semibold text-[#5E5955]">
                                            {findNodeAndParent(tree, activeId).node?.catename}
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
                                        <Input
                                            placeholder="카테고리명"
                                            value={form.catename}
                                            onChange={(e) => setForm((f) => ({ ...f, catename: e.target.value }))}
                                            // value={selectedCategory?.catename || ''}
                                            // onChange={(e) => setSelectedCategory(prev => prev ? {...prev, catename: e.target.value} : null)}
                                        />
                                    </div>
                                    <div className="p-5">
                                        <Input
                                            placeholder="Category Name"
                                            value={form.catecode}
                                            onChange={(e) => setForm((f) => ({ ...f, catecode: e.target.value }))}
                                            // value={selectedCategory?.catecode || ''}
                                            // onChange={(e) => setSelectedCategory(prev => prev ? {...prev, catecode: e.target.value} : null)}
                                        />
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
                                    {/* <RadioGroup
                                        // defaultValue="exposure"
                                        value={selectedCategory?.isshow === 'Y' ? "exposure" : "hidden"}
                                        onValueChange={(value) => 
                                            setSelectedCategory(prev => prev ? {...prev, isshow: value === "exposure" ? "Y" : "N"} : null)
                                        }
                                        className="flex gap-6"
                                    > */}
                                    <RadioGroup
                                        value={form.isshow === 'Y' ? 'exposure' : 'hidden'}
                                        onValueChange={(value) => 
                                            setForm((f) => ({ ...f, isshow: value === 'exposure' ? 'Y' : 'N' }))
                                        }   
                                        className="flex gap-6"
                                    >
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
                            <Button className="px-8 py-2 border rounded w-1/6" onClick={() => {
                                setSelectedCategory(null)
                                setIsAddingMode(false)
                                // setOpen(false)
                            }}>
                                취소
                            </Button>
                            <Button
                                className="px-8 py-2 rounded bg-[#322A24] text-white w-1/6"
                                onClick={handleSave}
                                disabled={!form.catename || !form.catecode}
                            >
                                저장
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <NewCategoryModal open={newCategoryOpen} value={newCategoryName} inputRef={inputRef} onChange={setNewCategoryName} onClose={() => {
                setIsAddingCategory(false)
                setNewCategoryName('')
                setNewCategoryParentId(null)
                setNewCategoryOpen(false)
            }} onEnter={() => {
                handleCreateCategory()
                setNewCategoryOpen(false)
            }} onSubmit={() => {
                handleCreateCategory()
                setNewCategoryOpen(false)
            }} /> */}
        </div>
    );
}