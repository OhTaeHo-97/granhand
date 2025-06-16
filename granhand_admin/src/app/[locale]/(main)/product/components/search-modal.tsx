import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function SearchModal({ open, setOpen, t }: { open: boolean, setOpen: (value: boolean) => void, t: (key: string) => string }) {
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="bg-white max-w-130 min-h-80 w-full overflow-auto mx-auto min-w-7xl max-h-4xl">
            <DialogHeader>
                <DialogTitle className="p-10"><span className="font-bold text-2xl text-[#111111]">{t('product:add_change')}</span></DialogTitle>
            </DialogHeader>
            <div className="text-[#111111] py-4">
                <div className="items-center gap-4 p-5">
                    <table className="w-full text-left border-collapse min-w-6xl">
                        <thead className="bg-[#322A2408] border-t h-20">
                            <tr className="border-b text-[#6F6963]">
                                <th className="p-2 text-center">No</th>
                                <th className="p-2 text-center">{t('product:modified_date')}</th>
                                <th className="p-2 text-center">IP</th>
                                <th className="p-2 text-center">{t('product:type')}</th>
                                <th className="p-2 text-center">{t('product:classification')}</th>
                                <th className="p-2 text-center">{t('product:status')}</th>
                                <th className="p-2 text-center">{t('product:price')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b h-14 text-[#1A1A1A]">
                                <td className="p-2 text-center"></td>
                                <td className="p-2 text-center"></td>
                                <td className="p-2 text-center"></td>
                                <td className="p-2 text-center"></td>
                                <td className="p-2 text-center"></td>
                                <td className="p-2 text-center"></td>
                                <td className="p-2 text-center"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </DialogContent>
        </Dialog>
    )
}