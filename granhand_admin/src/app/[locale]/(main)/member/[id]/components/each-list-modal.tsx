import Pagination from "@/components/pagination";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SearchIcon } from "lucide-react";

export default function MemberDetailEachListModal({ open, setOpen, title, contents }: { open: boolean, setOpen: (value: boolean) => void, title: string, contents: React.ReactNode }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-[90vw] max-h-[90vh] w-full h-full bg-white">

                <div className="w-full h-full overflow-y-auto p-8">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-[#111111]">{title}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-8 mb-6 text-center text-[#111111] overflow-auto">
                        {contents}

                        <Pagination totalPages={15} />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}