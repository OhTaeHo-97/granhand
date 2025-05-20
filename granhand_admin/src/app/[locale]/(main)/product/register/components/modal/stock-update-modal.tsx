import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function StockUpdateModal({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="bg-white max-w-130 min-h-80 w-full overflow-auto mx-auto min-w-4xl">
            <DialogHeader>
                <DialogTitle className="p-5"><span className="font-bold text-2xl text-[#111111]">재고 변경</span></DialogTitle>
            </DialogHeader>
            <div className="text-[#111111]">
                <div className="items-center gap-4 p-5">
                    <div className="space-y-4 text-sm">
                        <h2 className="text-base text-[#6F6963]">재고 변경 대상</h2>
                        {/* 옵션명 입력 */}
                        <div className="flex items-center justify-between">
                            <Select defaultValue="item1">
                                <SelectTrigger className="w-full h-15 p-6">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="item1">Marine Orchid Multi Perfume - 100ml</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-4 text-sm mt-10">
                        <h2 className="text-base text-[#6F6963]">재고 변경</h2>
                        {/* 옵션명 입력 */}
                        <div className="flex items-center justify-between gap-4 border p-6">
                            <Select defaultValue="manually">
                                <SelectTrigger className="w-30">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="manually">직접 입력</SelectItem>
                                </SelectContent>
                            </Select>
                            <Input placeholder="숫자만 입력" className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
            <DialogFooter className="!flex !items-center !justify-center">
                <Button variant="outline" className="text-[#322A24] w-1/6">취소</Button>
                <Button className="bg-[#322A24] text-white rounded px-6 py-1 flex items-center gap-1 w-1/6">저장</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}