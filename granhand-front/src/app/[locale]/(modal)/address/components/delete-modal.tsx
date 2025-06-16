import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function AddressDeleteModal({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-[#FDFBF5] p-0 overflow-hidden max-w-sm w-[310px] h-[130px]">
            <div className="space-y-0 text-[#322A24]">
                    <div className="font-bold text-center py-6 px-4 border-b border-[#00000014]">
                        이 주소를 삭제할까요?
                    </div>

                    <div className="flex w-full text-center text-[#6F6963]">
                        <Button
                            onClick={() => setOpen(false)}
                            className="flex-1 py-4 px-4 h-auto font-normal bg-transparent rounded-none border-r border-[#00000014] cursor-pointer"
                        >
                            아니요
                        </Button>
                        {/* 삭제 버튼 */}
                        <Button
                            onClick={() => setOpen(false)}
                            className="flex-1 py-4 px-4 h-auto font-normal bg-transparent rounded-none cursor-pointer"
                        >
                            삭제
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}