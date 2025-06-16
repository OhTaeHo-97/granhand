import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ImageIcon } from "lucide-react";
import Link from "next/link";

export default function ReturnReasonModal({ open, setOpen, t }: { open: boolean, setOpen: (value: boolean) => void, t: (key: string) => string }) {
    const imageUrls = [
        { name: "img10392493", url: "/placeholder/img10392493.jpg" },
        { name: "img104384843", url: "/placeholder/img104384843.jpg" },
    ]

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="max-w-300 bg-white min-w-150 max-h-150 min-h-80 overflow-auto">
            <DialogHeader>
                <DialogTitle className="font-bold text-2xl text-[#111111]">{t('order:return_reason_details')}</DialogTitle>
            </DialogHeader>
            <div className="mb-6 text-[#111111] whitespace-pre-line">
                <div className="rounded-md p-6 space-y-3">
                    <div className="grid grid-cols-[100px_1fr] h-full m-0">
                        <div className="flex items-center justify-start p-2">
                            <Label>{t('order:return_reason')}</Label>
                        </div>
                        <div className="px-5 py-2 w-full">
                            <div className="flex items-center gap-2">
                                <Input defaultValue="상품에 이상이 있거나 파손되었어요." className="h-10" readOnly />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-[100px_1fr] h-full m-0">
                        <div className="flex justify-start p-2">
                            <Label>{t('order:detail_description')}</Label>
                        </div>
                        <div className="px-5 py-2 w-full">
                            <div className="flex items-center gap-2">
                                <Textarea defaultValue="제품 뚜껑이 깨져서 왔습니다. 확인하고 빨리 처리해주세요~~~" className="h-40 resize-none" readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] h-full m-0">
                        <div className="flex items-center justify-start p-2"></div>
                        <div className="px-5 py-2 w-full">
                            <div className="flex items-center gap-2">
                                <div className="flex space-x-4">
                                    {imageUrls.map((image, index) => (
                                        <Link key={index} href={image.url} target="_blank" className="flex gap-2 items-center text-[#111111] underline hover:cursor-pointer">
                                            <ImageIcon className="w-4 h-4" />
                                            {image.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DialogFooter className="!flex !items-center">
                <Button className="w-1/6 bg-transparent text-[#C0BCB6] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>{t('cancel')}</Button>
                <Button className="w-1/6 text-[#2854f3] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>{t('confirm')}</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}