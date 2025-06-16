import Pagination from "@/components/pagination";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

export default function MemberDetailEachListModal({ open, setOpen, title, contents }: { open: boolean, setOpen: (value: boolean) => void, title: string, contents: React.ReactNode }) {
    const [currentPage, setCurrentPage] = useState(1)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-[90vw] max-h-[90vh] w-full h-full bg-white">

                <div className="w-full h-full overflow-y-auto p-8">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-[#111111]">{title}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-8 mb-6 text-center text-[#111111] overflow-auto">
                        {contents}

                        <Pagination totalPages={15} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}