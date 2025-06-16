import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function StockUpdateModal({ open, setOpen, t }: { open: boolean, setOpen: (value: boolean) => void, t: (key: string) => string }) {
    const [stockCategory, setStockCategory] = useState('manually')

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="bg-white max-w-130 min-h-80 w-full overflow-auto mx-auto min-w-4xl">
            <DialogHeader>
                <DialogTitle className="p-5"><span className="font-bold text-2xl text-[#111111]">{t('product:update_stock')}</span></DialogTitle>
            </DialogHeader>
            <div className="text-[#111111]">
                <div className="items-center gap-4 p-5">
                    <div className="space-y-4 text-sm">
                        <h2 className="text-base text-[#6F6963]">{t('product:stock_target')}</h2>
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
                        <h2 className="text-base text-[#6F6963]">{t('product:update_stock')}</h2>
                        {/* 옵션명 입력 */}
                        <div className="flex items-center justify-between gap-4 border p-6">
                            <Select value={stockCategory} onValueChange={setStockCategory}>
                                <SelectTrigger className="w-30">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="manually">{t('product:enter_manually')}</SelectItem>
                                    <SelectItem value="infinite">{t('product:unlimited')}</SelectItem>
                                </SelectContent>
                            </Select>
                            <Input type="number" placeholder={t('product:number_only')} className="w-full" disabled={stockCategory !== 'manually'} />
                        </div>
                    </div>
                </div>
            </div>
            <DialogFooter className="!flex !items-center !justify-center">
                <Button variant="outline" className="text-[#322A24] w-1/6" onClick={() => setOpen(false)}>{t('cancel')}</Button>
                <Button className="bg-[#322A24] text-white rounded px-6 py-1 flex items-center gap-1 w-1/6" onClick={() => setOpen(false)}>{t('save')}</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}