import React, { useState, useEffect } from "react";
import { GripVertical } from "lucide-react";
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
} from "@dnd-kit/core";
import {
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { JournalTagNode, useJournalTagStore } from "@/lib/journal/journal-state";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

function SortableItem({
    node,
    activeId,
    setActiveId,
    onTitleChange,
    isSelected,
    onSelectChange
}: {
    node: JournalTagNode,
    activeId: string | null,
    setActiveId: (id: string | null) => void,
    onTitleChange: (id: string, newTitle: string) => void,
    isSelected: boolean,
    onSelectChange: (id: string, checked: boolean) => void
}) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: node.id,
    });

    return (
        <div
            ref={setNodeRef}
            style={{
                transform: CSS.Transform.toString(transform),
                transition,
                opacity: isDragging ? 0.5 : 1,
                background: activeId === node.id ? "#f3f3f3" : undefined,
            }}
            className="flex items-center py-1 px-2 border-gray-200 cursor-pointer hover:bg-gray-100"
            onMouseDown={() => setActiveId(node.id)}
        >
            <span {...listeners} {...attributes} className="cursor-grab mr-2 flex-shrink-0">
                <GripVertical className="w-4 h-4 text-gray-400" />
            </span>
            <Checkbox
                id={`checkbox-${node.id}`}
                className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white mr-2"
                checked={isSelected}
                onCheckedChange={(checked) => onSelectChange(node.id, checked === true)}
            />
            <Input
                type="text"
                placeholder="태그명 입력"
                value={node.title}
                onChange={(e) => onTitleChange(node.id, e.target.value)}
                className="flex-grow text-[#231815B2] focus:outline-none bg-transparent"
            />
        </div>
    );
}

export default function TagSettingsModal({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) {
    const { tags, setTags } = useJournalTagStore()
    const [items, setItems] = useState<JournalTagNode[]>(tags)
    const [activeId, setActiveId] = useState<string | null>(null)
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        })
    );

    // esc 누르면 나가기
    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false)
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [open, setOpen])

    useEffect(() => {
        if (open) {
            setItems(tags)
            setSelectedIds(new Set())
        }
    }, [open, tags])


    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        }
    }, [open])

    if (!open) return null

    function handleDragStart(event: DragStartEvent) {
        setActiveId(event.active.id as string);
    }

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        setActiveId(null);
        if (!over || active.id === over.id) return;

        setItems((prevItems) => {
            const oldIndex = prevItems.findIndex((item) => item.id === active.id);
            const newIndex = prevItems.findIndex((item) => item.id === over.id);
            if (oldIndex === -1 || newIndex === -1) return prevItems;

            const newItems = [...prevItems];
            const [movedItem] = newItems.splice(oldIndex, 1);
            newItems.splice(newIndex, 0, movedItem);
            return newItems;
        })
    }

    const handleItemTitleChange = (id: string, newTitle: string) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id 
                    ? { ...item, title: newTitle } 
                    : item
            )
        )
    }

    const handleSelectChange = (id: string, checked: boolean) => {
        setSelectedIds(prev => {
            const newSelected = new Set(prev);
            if (checked) {
                newSelected.add(id);
            } else {
                newSelected.delete(id);
            }
            return newSelected;
        })
    }

    const handleDeleteSelected = () => {
        if (selectedIds.size === 0) {
            alert("삭제할 태그를 선택해주세요.");
            return;
        }
        setItems(prevItems => prevItems.filter(item => !selectedIds.has(item.id)));
        setSelectedIds(new Set());
    }

    const handleAddTag = () => {
        const newTag: JournalTagNode = {
            id: `tag-${Date.now()}`, // 고유한 ID 생성
            title: "태그명 입력",
        }
        setItems(prevItems => [...prevItems, newTag])
    }

    const handleSave = () => {
        setTags(items)
        setOpen(false)
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="p-10 bg-white rounded-lg w-[500px] max-h-[80vh] flex flex-col">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-[#5E5955]">태그 관리</h1>
                </div>
                
                <div className="p-6 flex-1 overflow-y-auto">
                    <div className="flex gap-4 mb-6">
                        <Button className="!px-2 !py-1 border rounded hover:bg-gray-50" onClick={handleAddTag}>태그 추가</Button>
                        <Button className="!px-2 !py-1 border rounded hover:bg-gray-50" onClick={handleDeleteSelected}>선택 삭제</Button>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                        <DndContext
                            sensors={sensors}
                            collisionDetection={closestCenter}
                            onDragStart={handleDragStart}
                            onDragEnd={handleDragEnd}
                        >
                            <SortableContext items={items.map((item) => item.id)} strategy={verticalListSortingStrategy}>
                                {items.map((item) => (
                                    <SortableItem
                                        key={item.id}
                                        node={item}
                                        activeId={activeId}
                                        setActiveId={setActiveId}
                                        onTitleChange={handleItemTitleChange}
                                        isSelected={selectedIds.has(item.id)}
                                        onSelectChange={handleSelectChange}
                                    />
                                ))}
                            </SortableContext>
                            <DragOverlay>
                                {activeId ? (
                                    <div className="flex items-center py-1 px-2 bg-white border rounded shadow">
                                        <GripVertical className="w-4 h-4 text-gray-400 mr-2" />
                                        <Input
                                            type="text"
                                            placeholder="태그명 입력"
                                            value={items.find(item => item.id === activeId)?.title || ''}
                                            className="flex-grow border-none focus:outline-none bg-transparent"
                                            disabled
                                        />
                                    </div>
                                ) : null}
                            </DragOverlay>
                        </DndContext>
                    </div>
                </div>

                <div className="p-6 border-t flex justify-end gap-4">
                    <Button 
                        className="px-4 py-2 text-gray-500 hover:bg-gray-50 rounded"
                        onClick={() => setOpen(false)}
                    >
                        취소
                    </Button>
                    <Button 
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={handleSave}
                    >
                        확인
                    </Button>
                </div>
            </div>
        </div>
    );
} 