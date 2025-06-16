'use client'

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Trans } from "react-i18next";
import { useTranslation } from "../../../../../../../../utils/localization/client";

const products = [
    {
        id: 1,
        name: 'GRANHAND. 후드 집 업(그레이)',
        price: '53,000 KRW',
        image: '/hoodie.png', // 예시 이미지 경로
    },
    {
        id: 2,
        name: 'Soie Signature Perfume',
        price: '110,000 KRW',
        image: '/perfume.png',
    },
    {
        id: 3,
        name: 'Trio Gift Set',
        price: '68,000 KRW',
        image: '/trio.png',
    },
    {
        id: 4,
        name: '스트로베리 홀 케이크 예약안내',
        price: '65,000 KRW',
        image: '/cake.png',
    },
    {
        id: 5,
        name: 'Multi Perfume & Sachet Set',
        price: '53,000 KRW',
        image: '/multi.png',
    },
    {
        id: 6,
        name: 'Hand Cream & Sachet Set',
        price: '43,000 KRW',
        image: '/handcream.png',
    },
]

// export default function SelectProductModal({ title, open, notes, setOpen, confirmFn }: { title: string, open: boolean, notes: string[], setOpen: React.Dispatch<React.SetStateAction<boolean>>, confirmFn?: () => Promise<void> }) {
export default function SelectProductModal({ title, open, notes, setOpen }: { title: string, open: boolean, notes: string[], setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'coupon'])
    const [search, setSearch] = useState('')
    const [selected, setSelected] = useState<number[]>([])

    const filteredProducts = products.filter(
        (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.id.toString().includes(search)
    )

    const toggleSelect = (id: number) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
        )
    }
    
    const handleClickConfirm = () => {
        // confirmFn()
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-3xl bg-white min-w-150 min-h-80 overflow-auto">
                <DialogHeader>
                    <DialogTitle className="font-bold text-2xl text-[#111111]">{t(`coupon:${title}`)}</DialogTitle>
                </DialogHeader>

                <div className="mb-6 text-center text-[#111111]">
                    <div className="px-6 py-4">
                        <div className="mb-4 text-sm bg-[#322A2408] rounded px-4 py-4 text-[#6F6963] w-full text-left border-l-4 !border-l-[#2854F3] space-y-1">
                            {notes.map((note, idx) => (
                                <div key={idx}>
                                    <Trans
                                        i18nKey={`coupon:${note}`}
                                        components={{
                                            bold: <strong className="font-bold" />
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="relative w-full mb-4">
                            <Input
                                type="text"
                                placeholder={t('coupon:search_placeholder')}
                                className="w-full px-3 py-2 border-0 border-b-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-black"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <Search size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                        <div className="max-h-80 overflow-y-auto">
                        {filteredProducts.map((product) => (
                            <Label key={product.id} className="flex items-center gap-3 py-3 border-b last:border-b-0 cursor-pointer">
                                <Checkbox
                                    id={product.id.toString()}
                                    checked={selected.includes(product.id)}
                                    onCheckedChange={() => toggleSelect(product.id)}
                                    className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                                />
                                <div className="w-14 h-14 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={400}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="text-left space-y-1.5">
                                    <div className="font-medium">{product.name}</div>
                                    <div className="text-xs text-gray-500">{product.price}</div>
                                </div>
                            </Label>
                        ))}
                        {filteredProducts.length === 0 && (
                            <div className="text-center text-gray-400 py-8">{t('no_search_result')}</div>
                        )}
                        </div>
                    </div>
                    <DialogFooter className="flex justify-end gap-2 border-t px-6 py-4 rounded-b-xl">
                        <Button variant="outline" className="!px-4 !py-2 bg-white text-[#322A24]" onClick={() => setOpen(false)}>
                            {t('cancel')}
                        </Button>
                        <Button
                            className="px-4 py-2 rounded bg-[#322A24] text-white font-semibold"
                            onClick={handleClickConfirm}
                        >
                            {t('coupon:add_selected_products')}
                        </Button>
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    )
}