import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function OptionModal({ open, size, bag, setOpen, setBag, setSize }: { open: boolean, size: string, bag: string, setOpen: (value: boolean) => void, setBag: (value: string) => void, setSize: (value: string) => void
 }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg bg-white">
          <DialogHeader>
            <DialogTitle>옵션 변경</DialogTitle>
          </DialogHeader>
          <div className="flex gap-4 my-4">
            <Button variant={size === '100ml' ? 'outline' : 'default'} onClick={() => setSize('100ml')}>100ml</Button>
            <Button variant={size === '200ml' ? 'outline' : 'default'} onClick={() => setSize('200ml')}>200ml</Button>
          </div>
          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium">쇼핑백</label>
            <Select value={bag} onValueChange={setBag}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="구매 안함" />
              </SelectTrigger>
              <SelectContent className=' bg-white'>
                <SelectItem value="none">구매 안함</SelectItem>
                <SelectItem value="include">구매함</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button className="w-1/4" variant="outline" onClick={() => setOpen(false)}>취소</Button>
            <Button className="w-1/4 bg-black text-white" onClick={() => setOpen(false)}>완료</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
}