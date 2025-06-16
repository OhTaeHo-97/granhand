'use client'

import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales"
import { useTranslation } from "../../../../../../utils/localization/client"
// import { buildCategoryTree, ProductCategoryNode, useProductCategoryStore } from "@/lib/product/product-state";
import { ProductCategoryNode, useProductCategoryStore } from "@/lib/product/product-state";
import { useCategory } from "@/hooks/use-category";
import { useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react"; // Explicitly import React
import { closestCenter, DndContext, DragEndEvent, DragOverlay, DragStartEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import api from "@/utils/api";
import { Button } from "@/components/ui/button";
// Import the new components
import { GripVertical } from "lucide-react";
import CategoryDetailForm from "./components/category-detail-form";
import RenderCategoryTree from "./components/render-category-tree";


function findNodeAndParent(
    nodes: ProductCategoryNode[],
    id: number,
    parent: ProductCategoryNode | null = null
): { node: ProductCategoryNode | null; parent: ProductCategoryNode | null } {
    for (const node of nodes) {
        if (node.idx === id) return { node, parent };
        if (node.children) {
            const res = findNodeAndParent(node.children, id, node);
            if (res.node) return res;
        }
    }
    return { node: null, parent: null };
}

function moveWithinSiblings(
    nodes: ProductCategoryNode[],
    parentId: number | null,
    activeId: number,
    overId: number
): ProductCategoryNode[] {
    if (parentId === null) {
        // 최상위
        const idxA = nodes.findIndex((n) => n.idx === activeId);
        const idxB = nodes.findIndex((n) => n.idx === overId);
        if (idxA === -1 || idxB === -1) return nodes;

        const arr = [...nodes];
        const [removed] = arr.splice(idxA, 1);
        arr.splice(idxB, 0, removed);
        return arr;
    }
    // 하위
    return nodes.map((n) => {
        if (n.idx === parentId && n.children) {
            const idxA = n.children.findIndex((c) => c.idx === activeId);
            const idxB = n.children.findIndex((c) => c.idx === overId);
            if (idxA === -1 || idxB === -1) return n;

            const arr = [...n.children];
            const [removed] = arr.splice(idxA, 1);
            arr.splice(idxB, 0, removed);
            return { ...n, children: arr };
        }
        if (n.children) {
            return { ...n, children: moveWithinSiblings(n.children, parentId, activeId, overId) };
        }
        return n;
    });
}

export default function CategoryManagePage() {
    const locale = useLocaleAsLocaleTypes();
    const { t } = useTranslation(locale, ['common', 'product', 'order', 'push']);

    const { addCategory, getCategories } = useCategory();
    const { data: session, status } = useSession();
    const { categories, setCategories } = useProductCategoryStore();

    const [language, setLanguage] = useState<'ko' | 'en'>('ko')
    const [tree, setTree] = useState<ProductCategoryNode[]>([]);
    const [activeId, setActiveId] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<ProductCategoryNode | null>(null);
    const [isAddingMode, setIsAddingMode] = useState(false);
    const [form, setForm] = useState<Omit<ProductCategoryNode, "idx" | "children">>({
        catename: "",
        catecode: "",
        upcate: "",
        isshow: "Y",
        orders: 1,
    });

    const activeParentId = useRef<number | null>(null);
    // const [isAddingCategory, setIsAddingCategory] = useState(false)
    // const [newCategoryParentId, setNewCategoryParentId] = useState<number | null>(null)
    // const inputRef = useRef<HTMLInputElement>(null)
    // const [newCategoryOpen, setNewCategoryOpen] = useState(false)
    // const [newCategoryName, setNewCategoryName] = useState('');

    const sensors = useSensors(useSensor(PointerSensor));

    const fetchCategoriesRecursively = async (upcate: string = ''): Promise<ProductCategoryNode[]> => {
        if (status !== 'authenticated' || !session?.token) {
            console.log('Cannot fetch categories - no valid session');
            return [];
        }

        try {
            const { data, error } = await getCategories({ upcate });

            if (error) {
                console.error(`Failed to fetch categories for upcate: ${upcate}`, error);
                return [];
            }

            if (data && data.length > 0) {
                const categoriesWithChildren: ProductCategoryNode[] = [];
                for (const category of data) {
                    const children = await fetchCategoriesRecursively(category.catename);
                    categoriesWithChildren.push({
                        ...category,
                        children: children.length > 0 ? children : undefined,
                    });
                }
                return categoriesWithChildren;
            } else {
                return [];
            }

        } catch (error) {
            console.error(`Failed to fetch categories recursively for upcate: ${upcate}`, error);
            return [];
        }
    }

    useEffect(() => {
        if(status === 'authenticated') {
            const loadCategories = async () => {
                const allCategories = await fetchCategoriesRecursively();
                setCategories(allCategories);
            }
            loadCategories();
        }
    }, [status, session?.token]);

    useEffect(() => {
        if (selectedCategory) {
            setForm({
                catename: selectedCategory.catename,
                catecode: selectedCategory.catecode,
                upcate: selectedCategory.upcate,
                isshow: selectedCategory.isshow,
                orders: selectedCategory.orders,
            });
            setIsAddingMode(false);
        } else {
            setForm({
                catename: "",
                catecode: "",
                upcate: "",
                isshow: "Y",
                orders: 1,
            });
        }
    }, [selectedCategory]);

    useEffect(() => {
        setTree(categories);
    }, [categories]);

    const handleAddCategory = () => {
        setForm({
            catename: '',
            catecode: '',
            upcate: '',
            isshow: 'Y',
            orders: 1,
        });
        // setSelectedCategory(null)
        setIsAddingMode(true)
    };

    const handleSave = async () => {
        if (status !== "authenticated" || !session?.token) return;

        try {
            const categoriesToUpdate: { idx: number; orders: number }[] = [];
            const collectOrders = (nodes: ProductCategoryNode[]) => {
                nodes.forEach((node, index) => {
                    categoriesToUpdate.push({
                        idx: node.idx,
                        orders: index + 1,
                    });
                    if(node.children) {
                        collectOrders(node.children);
                    }
                });
            };

            collectOrders(tree);

            if (isAddingMode) {
                // POST (생성)
                const category = {
                    catename: form.catename,
                    upcate: selectedCategory?.catename ? selectedCategory.catename : '',
                    isshow: form.isshow,
                    catecode: form.catecode,
                };

                const { error } = await addCategory(category);

                if(error) {
                    alert('카테고리 추가 실패');
                    console.error('Add category failed:', error);
                } else {
                    alert('카테고리 추가 성공');
                    const updatedTree = await fetchCategoriesRecursively();
                    setCategories(updatedTree);
                }
            } else if (selectedCategory) {
                // PUT (수정)
                await api.put(`/product/cate/${selectedCategory.idx}`,
                    form, {
                        token: session.token
                    }
                );

                alert('카테고리 수정 성공');
                const updatedTree = await fetchCategoriesRecursively();
                setCategories(updatedTree);
            }

            setSelectedCategory(null);
            setIsAddingMode(false);
        } catch (error) {
            console.error('Failed to save category:', error);
            alert('저장 중 오류 발생');
        }
    };

    const handleDeleteCategory = async () => {
        if (!selectedCategory || status !== 'authenticated' || !session?.token) {
            console.log('Cannot delete category - no valid session or category not selected');
            return;
        }

        try {
            await api.delete(`/product/cate/${selectedCategory.idx}`, {}, {
                token: session.token,
            });

            // 카테고리 목록 새로고침
            alert('카테고리 삭제 성공');
            const updatedTree = await fetchCategoriesRecursively();
            setCategories(updatedTree);
            setSelectedCategory(null);
            setActiveId(null);
            setActiveCategory(null);
        } catch (error) {
            console.error('Failed to delete category:', error);
            alert('카테고리 삭제 실패');
        }
    };

    // 드래그 시작 시 부모 기억
    function handleDragStart(event: DragStartEvent) {
        const { active } = event;
        let parentId: number | null = null;
        const findParentRecursive = (nodes: ProductCategoryNode[], targetId: number, currentParentId: number | null) => {
            for (const n of nodes) {
                if (n.idx === targetId) {
                    parentId = currentParentId;
                    return;
                }
                if (n.children) {
                    findParentRecursive(n.children, targetId, n.idx);
                    if (parentId !== null) return;
                }
            }
        };
        findParentRecursive(tree, active.id as number, null);
        activeParentId.current = parentId;
        setActiveId(active.id as number);
        const activeNode = findNodeAndParent(tree, active.id as number).node;
        setActiveCategory(activeNode?.catename || null);
    }

    // 드래그 종료 시 동일 부모일 때만 이동
    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        setActiveId(null);
        setActiveCategory(null);
        if (!over || active.id === over.id) return;

        let overParentId: number | null = null;
        const findParentRecursive = (nodes: ProductCategoryNode[], targetId: number, currentParentId: number | null) => {
            for (const n of nodes) {
                if (n.idx === targetId) {
                    overParentId = currentParentId;
                    return;
                }
                if (n.children) {
                    findParentRecursive(n.children, targetId, n.idx);
                    if (overParentId !== null) return;
                }
            }
        };
        findParentRecursive(tree, over.id as number, null);

        if (activeParentId.current !== overParentId) {
            console.log("Cannot move category to a different parent level.");
            return;
        }

        const newTree = moveWithinSiblings(tree, overParentId, active.id as number, over.id as number);
        setTree(newTree);
    }

    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('product:category_manage')}</h1>
                <div className="relative w-full h-full mx-auto my-0 rounded-none shadow-lg z-50 flex flex-col">
                    <div className="flex flex-row w-full h-full">
                        {/* 왼쪽: 트리 드래그&드롭 */}
                        <div className="w-110 p-8 overflow-y-auto">
                            <div className="flex gap-4 mb-10">
                                <Button variant="outline" className="bg-white !w-fit !h-fit" onClick={handleAddCategory}>{t('product:add_category')}</Button>
                                <Button variant="outline" className="bg-white !w-fit !h-fit" onClick={handleDeleteCategory} disabled={!selectedCategory || isAddingMode}>{t('delete')}</Button>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-4">
                                <DndContext
                                    sensors={sensors}
                                    collisionDetection={closestCenter}
                                    onDragStart={handleDragStart}
                                    onDragEnd={handleDragEnd}
                                >
                                    <RenderCategoryTree
                                        nodes={tree}
                                        activeId={activeId}
                                        setActiveId={setActiveId}
                                        setActiveCategory={setActiveCategory}
                                        setSelectedCategory={setSelectedCategory}
                                        t={t}
                                    />
                                    <DragOverlay>
                                        {activeId && (
                                            <div className="flex items-center py-1 bg-white border rounded shadow px-2">
                                                <GripVertical className="w-4 h-4 text-gray-400 mr-2" />
                                                <span className="font-semibold text-[#5E5955]">
                                                {activeCategory}
                                                </span>
                                            </div>
                                        )}
                                    </DragOverlay>
                                </DndContext>
                            </div>
                        </div>
                        {/* 오른쪽: 상세 폼 */}
                        <CategoryDetailForm
                            language={language}
                            setLanguage={setLanguage}
                            form={form}
                            setForm={setForm}
                            // selectedCategory={selectedCategory}
                            // isAddingMode={isAddingMode}
                            handleSave={handleSave}
                            setSelectedCategory={setSelectedCategory}
                            setIsAddingMode={setIsAddingMode}
                            t={t}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}