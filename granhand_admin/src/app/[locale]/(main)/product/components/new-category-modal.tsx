import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NewCategoryModal({
    open,
    value,
    onClose,
    onChange,
    onEnter,
    onSubmit,
    inputRef
}: {
    open: boolean,
    value: string,
    onClose: () => void,
    onChange: (val: string) => void,
    onEnter: () => void,
    onSubmit: () => void,
    inputRef: React.RefObject<HTMLInputElement | null>
}) {
    return (
        <Dialog open={open} onOpenChange={onClose} >
            <DialogContent className="bg-white max-w-130 min-h-80 w-full overflow-auto mx-auto min-w-4xl">
            <DialogHeader>
                <DialogTitle className="p-5"><span className="font-bold text-2xl text-[#111111]">카테고리 추가</span></DialogTitle>
            </DialogHeader>
            <div className="text-[#111111]">
                <div className="items-center gap-4 p-5">
                    <div className="space-y-4 text-sm">
                        <Input
                            ref={inputRef}
                            value={value}
                            onChange={(e) => onChange(e.target.value)}
                            onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
                                onEnter()
                            }
                            }}
                            placeholder="새 카테고리 이름"
                            className="flex-grow"
                            autoFocus
                        />
                        {/* <h2 className="text-base text-[#6F6963]">재고 변경 대상</h2> */}
                        {/* <div className="flex items-center justify-between">
                            <Select defaultValue="item1">
                                <SelectTrigger className="w-full h-15 p-6">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="item1">Marine Orchid Multi Perfume - 100ml</SelectItem>
                                </SelectContent>
                            </Select>
                        </div> */}
                    </div>

                    {/* <div className="space-y-4 text-sm mt-10">
                        <h2 className="text-base text-[#6F6963]">재고 변경</h2>
                        <div className="flex items-center justify-between gap-4 border p-6">
                            <Select value={stockCategory} onValueChange={setStockCategory}>
                                <SelectTrigger className="w-30">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="manually">직접 입력</SelectItem>
                                    <SelectItem value="infinite">무제한</SelectItem>
                                </SelectContent>
                            </Select>
                            <Input type="number" placeholder="숫자만 입력" className="w-full" disabled={stockCategory !== 'manually'} />
                        </div>
                    </div> */}
                </div>
            </div>
            <DialogFooter className="!flex !items-center !justify-center">
                <Button variant="outline" className="text-[#322A24] w-1/6" onClick={onClose}>취소</Button>
                <Button className="bg-[#322A24] text-white rounded px-6 py-1 flex items-center gap-1 w-1/6" onClick={onSubmit}>저장</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>


        // <Dialog>

        //     <Input
        //         ref={inputRef}
        //         value={value}
        //         onChange={(e) => onChange(e.target.value)}
        //         onKeyDown={(e) => {
        //         if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
        //             onEnter()
        //         }
        //         }}
        //         placeholder="새 카테고리 이름"
        //         className="flex-grow"
        //         autoFocus
        //     />
        // </Dialog>
    )
}