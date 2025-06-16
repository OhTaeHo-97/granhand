import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { GripVertical } from "lucide-react";
import { useState } from "react";
import OptionEditTable from "./option-edit-table";
// import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
// import { useTranslation } from "../../../../../../../../utils/localization/client";

export type OptionEditType = {
    id: number
    optionValue: string
    price: number
    inventoryId: string
    quantityOption: string
    quantity: number
    status: string
}

export default function OptionEditModal({ open, setOpen, t }: { open: boolean, setOpen: (value: boolean) => void, t: (key: string) => string }) {
    // const locale = useLocaleAsLocaleTypes()
    // const { t } = useTranslation(locale, ['common', 'product'])

    const [optionSections, setOptionSections] = useState<{ id:number; title: string; options:OptionEditType[] }[]>([
        { id: 1, title: "용량", options: [{
            id: 1,
            optionValue: '100ml',
            price: 35000,
            inventoryId: 'MP1000_NO',
            quantityOption: 'manually',
            quantity: 85,
            status: 'on_sale'
        },
        {
            id: 2,
            optionValue: '150ml',
            price: 35000,
            inventoryId: 'MP1000_NO',
            quantityOption: 'infinite',
            quantity: 85,
            status: 'on_sale'
        }] },
        { id: 2, title: "향 종류", options: [{
            id: 1,
            optionValue: '마린오키드',
            price: 68000,
            inventoryId: 'S&HC&HW_MO',
            quantityOption: 'manually',
            quantity: 17,
            status: 'on_sale'
        },
        {
            id: 2,
            optionValue: '수지살몬',
            price: 68000,
            inventoryId: 'S&HC&HW_SS',
            quantityOption: 'infinite',
            quantity: 180,
            status: 'on_sale'
        }] }
    ])
    
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="bg-white max-w-130 min-h-80 w-full overflow-auto mx-auto min-w-7xl h-full">
            <DialogHeader>
                <DialogTitle className="p-10"><span className="font-bold text-2xl text-[#111111]">{t('product:edit_options')}</span></DialogTitle>
            </DialogHeader>
            <div className="text-[#111111] py-4">
                <div className="items-center gap-4 p-5">
                    <OptionEditTable sections={optionSections} setSections={setOptionSections} t={t} />
                    {/* <div className="space-y-4 text-sm">
                        <div className="flex items-center justify-between gap-2 border p-6">
                            <div className="flex items-center gap-4">
                                <Label className="w-20 text-[#6F6963]">옵션명</Label>
                                <Input defaultValue="쇼핑백" className="w-64" />
                            </div>
                            <Button variant="outline">입력 필드 추가</Button>
                        </div>

                        <table className="w-full text-left border-collapse min-w-6xl">
                            <thead className="bg-[#322A2408] border-t h-20">
                                <tr className="border-b text-[#6F6963]">
                                    <th className="p-2 items-center"><GripVertical className="w-4 h-4" /></th>
                                    <th className="p-2 text-center">옵션값</th>
                                    <th className="p-2 text-center">옵션 가격</th>
                                    <th className="p-2 text-center">재고 번호</th>
                                    <th className="p-2 text-center">수량</th>
                                    <th className="p-2 text-center">상태</th>
                                    <th className="p-2 text-center">삭제</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: 2 }).map((_, i) => (
                                <tr key={i} className="border-b h-14 text-[#1A1A1A]">
                                    <td className="p-2 items-center"><GripVertical className="w-4 h-4" /></td>
                                    <td className="p-2 items-center"><Input defaultValue="추가 구매 (+500원)" className="w-full" /></td>
                                    <td className="p-2 items-center"><Input defaultValue="500" className="w-full" /></td>
                                    <td className="p-2 items-center"><Input defaultValue="S" className="w-full" /></td>
                                    <td className="p-2 text-center min-w-30">
                                        <div className="flex items-start gap-3">
                                            <Select defaultValue="manually">
                                                <SelectTrigger className="w-fit min-w-30">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent className="bg-white">
                                                    <SelectItem value="manually">직접 입력</SelectItem>
                                                    <SelectItem value="infinite">무제한</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <Input defaultValue="1,234" className="w-full" />
                                        </div>
                                    </td>
                                    <td className="p-2 items-center">
                                        <Select defaultValue="on_sale">
                                            <SelectTrigger className="w-fit">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent className="bg-white">
                                                <SelectItem value="on_sale">판매중</SelectItem>
                                                <SelectItem value="out_of_stock">품절</SelectItem>
                                                <SelectItem value="hidden">숨김</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </td>
                                    <td className="p-2 flex gap-1 flex-wrap items-center justify-center"><Button variant="outline">삭제</Button></td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div> */}

                    {/* <div className="space-y-4 text-sm mt-10">
                        <div className="flex items-center justify-between gap-2 border p-6">
                            <div className="flex items-center gap-4">
                                <Label className="w-20 text-[#6F6963]">옵션명</Label>
                                <Input defaultValue="쇼핑백" className="w-64" />
                            </div>
                            <Button variant="outline">입력 필드 추가</Button>
                        </div>

                        <table className="w-full text-left border-collapse min-w-6xl">
                            <thead className="bg-[#322A2408] border-t h-20">
                                <tr className="border-b text-[#6F6963]">
                                    <th className="p-2 items-center"><GripVertical className="w-4 h-4" /></th>
                                    <th className="p-2 text-center">옵션값</th>
                                    <th className="p-2 text-center">옵션 가격</th>
                                    <th className="p-2 text-center">재고 번호</th>
                                    <th className="p-2 text-center">수량</th>
                                    <th className="p-2 text-center">상태</th>
                                    <th className="p-2 text-center">삭제</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: 2 }).map((_, i) => (
                                <tr key={i} className="border-b h-14 text-[#1A1A1A]">
                                    <td className="p-2 items-center"><GripVertical className="w-4 h-4" /></td>
                                    <td className="p-2 items-center"><Input defaultValue="추가 구매 (+500원)" className="w-full" /></td>
                                    <td className="p-2 items-center"><Input defaultValue="500" className="w-full" /></td>
                                    <td className="p-2 items-center"><Input defaultValue="S" className="w-full" /></td>
                                    <td className="p-2 text-center min-w-30">
                                        <div className="flex items-start gap-3">
                                            <Select defaultValue="newest">
                                                <SelectTrigger className="w-fit min-w-30">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent className="bg-white">
                                                    <SelectItem value="newest_first">직접 입력</SelectItem>
                                                    <SelectItem value="by_category">무제한</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <Input defaultValue="1,234" className="w-full" />
                                        </div>
                                    </td>
                                    <td className="p-2 items-center">
                                        <Select defaultValue="on_sale">
                                            <SelectTrigger className="w-fit">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent className="bg-white">
                                                <SelectItem value="on_sale">판매중</SelectItem>
                                                <SelectItem value="out_of_stock">품절</SelectItem>
                                                <SelectItem value="hidden">숨김</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </td>
                                    <td className="p-2 flex gap-1 flex-wrap items-center justify-center"><Button variant="outline">삭제</Button></td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div> */}
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