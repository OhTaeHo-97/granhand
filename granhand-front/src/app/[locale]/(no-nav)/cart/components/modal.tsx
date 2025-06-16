import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function OptionModal({ open, size, bag, setOpen, setBag, setSize }: { open: boolean, size: string, bag: string, setOpen: (value: boolean) => void, setBag: (value: string) => void, setSize: (value: string) => void
}) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg bg-[#FDFBF5] w-[630px] h-[364px]">
          <DialogHeader>
            <DialogTitle className="text-[#6F6963] font-bold">옵션 변경</DialogTitle>
          </DialogHeader>
          <div className="flex gap-4 my-4 text-[#322A24]">
            <Button className={`w-[72px] h-[34px] border rounded-sm text-xs ${size === '100ml' ? "!border-[#6F6963]" : "!border-[#C0BCB6]"}`} onClick={() => setSize('100ml')}>100ml</Button>
            <Button className={`w-[72px] h-[34px] border rounded-sm text-xs ${size === '200ml' ? "!border-[#6F6963]" : "!border-[#C0BCB6]"}`} onClick={() => setSize('200ml')}>200ml</Button>
          </div>
          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium text-[#322A24]">쇼핑백</label>
            <Select value={bag} onValueChange={setBag}>
              <SelectTrigger className="w-full !border-[#C0BCB6] focus:border-[#6F6963] text-sm text-[#322A24]">
                <SelectValue placeholder="구매 안함" />
              </SelectTrigger>
              <SelectContent className='bg-[#FDFBF5]'>
                <SelectItem value="none" className="hover:bg-[#322A2408]">구매 안함</SelectItem>
                <SelectItem value="include" className="hover:bg-[#322A2408]">구매함</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button className="w-[141px] h-[46px] text-sm font-bold text-[#6F6963]" variant="outline" onClick={() => setOpen(false)}>취소</Button>
            <Button className="w-[141px] h-[46px] bg-[#322A24] text-white text-sm font-bold" onClick={() => setOpen(false)}>완료</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
}