'use client'

import { useEffect, useState, useRef } from "react"
import { ChevronDown, X, ChevronRight } from "lucide-react" // ChevronRight for collapse/expand
import { useProductCategoryStore, ProductCategoryNode } from "@/lib/product/product-state"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

// 선택된 카테고리 정보를 담을 타입 정의
export interface SelectedCategory extends ProductCategoryNode {
    path: string;
}

// 카테고리 아이템 컴포넌트
function CategorySelectItem({
    node,
    depth = 0,
    selectedCategories,
    onCategorySelect,
    isExpanded, // 확장 상태 전달
    onToggleExpand, // 확장/축소 토글 핸들러
}: {
    node: ProductCategoryNode
    depth?: number
    selectedCategories: SelectedCategory[]
    onCategorySelect: (category: ProductCategoryNode, isSelected: boolean) => void
    isExpanded?: boolean // Optional for leaf nodes
    onToggleExpand?: (nodeId: string) => void // Optional for leaf nodes
}) {
    const isSelected = selectedCategories.some(item => item.id === node.id);
    const hasChildren = node.children && node.children.length > 0;

    return (
        // 레벨에 따른 들여쓰기 적용
        <div style={{ marginLeft: depth * 16 }} className="flex items-center py-1"> {/* Adjust indentation */}
            {hasChildren ? (
                // 상위 카테고리 (자식 있음): 점, 확장/축소 아이콘, 라벨
                <div className="flex items-center cursor-pointer" onClick={() => onToggleExpand?.(node.id)}>
                    {/* <div className="w-1 h-1 rounded-full bg-gray-400 mr-2 flex-shrink-0"></div> Grey dot */}
                    {isExpanded ? (
                        <ChevronDown className="w-3 h-3 mr-1 flex-shrink-0" /> // Expanded icon
                    ) : (
                         <ChevronRight className="w-3 h-3 mr-1 flex-shrink-0" /> // Collapsed icon
                    )}
                    <span className="font-semibold text-[#5E5955] flex-grow text-left">{node.title}</span> {/* Category name */}
                </div>
            ) : (
                // 하위 카테고리 (자식 없음): 체크박스, 라벨
                <div className="flex items-center text-[#C0BCB6]">
                    <Checkbox
                        id={`category-${node.id}`}
                        checked={isSelected}
                        onCheckedChange={(checked) => onCategorySelect(node, checked as boolean)}
                        className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white mr-2 flex-shrink-0"
                    />
                    <Label htmlFor={`category-${node.id}`} className="text-[#5E5955] cursor-pointer flex-grow text-left font-normal"> {/* Adjust font weight */}
                        {node.title}
                    </Label>
                </div>
            )}
        </div>
    )
}

// 카테고리 트리 재귀 렌더링 컴포넌트
function RenderCategoryTree({
    nodes,
    depth = 0,
    selectedCategories,
    onCategorySelect,
    expandedNodes, // 확장된 노드 목록
    onToggleExpand, // 확장/축소 토글 핸들러
}: {
    nodes: ProductCategoryNode[]
    depth?: number
    selectedCategories: SelectedCategory[]
    onCategorySelect: (category: ProductCategoryNode, isSelected: boolean) => void
    expandedNodes: Set<string>;
    onToggleExpand: (nodeId: string) => void;
}) {
    return (
        <div className="flex flex-col text-[#5E5955]">
            {nodes.map((node) => {
                const isExpanded = expandedNodes.has(node.id);
                const hasChildren = node.children && node.children.length > 0;

                return (
                    <div key={node.id}>
                        <CategorySelectItem
                            node={node}
                            depth={depth}
                            selectedCategories={selectedCategories}
                            onCategorySelect={onCategorySelect}
                            isExpanded={isExpanded}
                            onToggleExpand={onToggleExpand}
                        />
                        {/* 자식 노드가 있고 확장된 상태일 때만 렌더링 */}
                        {hasChildren && isExpanded && (
                            <RenderCategoryTree
                                nodes={node.children!}
                                depth={depth + 1}
                                selectedCategories={selectedCategories}
                                onCategorySelect={onCategorySelect}
                                expandedNodes={expandedNodes}
                                onToggleExpand={onToggleExpand}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    )
}

// 카테고리 ID로부터 계층 경로 문자열 생성
const getCategoryPath = (nodes: ProductCategoryNode[], targetId: string, currentPath: string[] = []): string => {
    for (const node of nodes) {
        // 여기서도 node.title을 사용합니다. 실제 다국어 적용 시 수정 필요.
        const newPath = [...currentPath, node.title];
        if (node.id === targetId) {
            return newPath.join(' > ');
        }
        if (node.children) {
            const foundPath = getCategoryPath(node.children, targetId, newPath);
            if (foundPath) return foundPath;
        }
    }
    return '';
};


// 메인 카테고리 선택 컴포넌트
export default function CategorySelect({ selectedCategories, setSelectedCategories }: { selectedCategories: SelectedCategory[], setSelectedCategories: React.Dispatch<React.SetStateAction<SelectedCategory[]>> }) {
    const { categories } = useProductCategoryStore()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    // const [selectedCategories, setSelectedCategories] = useState<SelectedCategory[]>([])
    const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set()) // 확장된 노드 ID 목록
    const dropdownRef = useRef<HTMLDivElement>(null);

    // 드롭다운 외부 클릭 시 닫기
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    // 드롭다운 열릴 때 최상위 노드 확장 상태 초기화 또는 필요 시 설정
    useEffect(() => {
        if (isDropdownOpen) {
            // Optional: Expand root nodes when dropdown opens
            // const rootNodeIds = new Set(categories.map(cat => cat.id));
            // setExpandedNodes(rootNodeIds);
        } else {
             // Optional: Collapse all nodes when dropdown closes
             // setExpandedNodes(new Set());
        }
    }, [isDropdownOpen, categories]);


    // 카테고리 선택/해제 핸들러 (하위 레벨만 선택 가능)
    const handleCategorySelect = (category: ProductCategoryNode, isSelected: boolean) => {
        // 자식이 있는 노드는 선택 로직 무시
        if (category.children && category.children.length > 0) {
            return;
        }

        setSelectedCategories(prev => {
            if (isSelected) {
                if (!prev.some(item => item.id === category.id)) {
                    const path = getCategoryPath(categories, category.id);
                    return [...prev, { ...category, path }];
                }
                return prev;
            } else {
                return prev.filter(item => item.id !== category.id);
            }
        });
    };

    // 선택된 카테고리 칩 제거 핸들러
    const handleRemoveCategory = (categoryId: string) => {
        setSelectedCategories(prev => prev.filter(item => item.id !== categoryId));
    };

    // 노드 확장/축소 토글 핸들러
    const handleToggleExpand = (nodeId: string) => {
        setExpandedNodes(prev => {
            const newExpandedNodes = new Set(prev);
            if (newExpandedNodes.has(nodeId)) {
                newExpandedNodes.delete(nodeId);
            } else {
                newExpandedNodes.add(nodeId);
            }
            return newExpandedNodes;
        });
    };


    return (
        <div className="flex items-start gap-2 flex-wrap">
            <div className="relative" ref={dropdownRef}>
                <Button
                    variant="outline"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex justify-between items-center gap-2 px-4 py-2 border rounded min-w-[150px] h-auto"
                >
                    <span>분류 선택</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                </Button>
                {isDropdownOpen && (
                    // 드롭다운 패널 스타일 변경
                    <div className="absolute z-10 mt-1 p-4 pr-10 w-full min-w-50 min-h-100 bg-[#FDFBF5] border border-gray-200 rounded shadow-lg max-h-150 overflow-y-auto"> {/* Background color applied here */}
                         {/* 카테고리 트리 렌더링 */}
                        <RenderCategoryTree
                            nodes={categories}
                            selectedCategories={selectedCategories}
                            onCategorySelect={handleCategorySelect}
                            expandedNodes={expandedNodes} // 확장된 노드 목록 전달
                            onToggleExpand={handleToggleExpand} // 토글 핸들러 전달
                        />
                    </div>
                )}
            </div>
            {/* 선택된 카테고리 칩 목록 */}
            <div className="flex flex-wrap gap-2">
                {selectedCategories && selectedCategories.map(category => (
                    <div key={category.id} className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700">
                        <span>{category.path}</span>
                        <Button
                            type="button"
                            onClick={() => handleRemoveCategory(category.id)}
                            className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none p-0"
                        >
                            <X className="w-3 h-3" />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}