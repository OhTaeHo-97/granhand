import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { set } from "date-fns";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Product {
    id: number,
    image: string,
    engName: string,
    korName: string,
    isShoppingBag: boolean,
    price: number,
    amount: number,
    delivery: number
}

export default function ProductTable({
    setOpen,
    products,
    selectedIds,
    setSelectedIds,
    onIncreaseAmount,
    t,
    unit
}: {
    setOpen?: (value: boolean) => void,
    products: Product[],
    selectedIds: number[],
    setSelectedIds: React.Dispatch<React.SetStateAction<number[]>>,
    onIncreaseAmount: (id: number, variance: number) => void,
    t: (key: string) => string,
    unit: string }) {
    // const [selectedIds, setSelectedIds] = useState<number[]>([])

    const isAllSelected = selectedIds.length === products.length

    // 개별 체크박스 변경 핸들러
    const handleCheckboxChange = (id: number, checked: boolean) => {
        if(checked) {
            setSelectedIds((prev) => [...prev, id])
        } else {
            setSelectedIds((prev) => prev.filter((item) => item !== id))
        }
    }

    // 전체 선택 / 해제 핸들러
    const handleSelectAllChange = (checked: boolean) => {
        if(checked) {
            setSelectedIds(products.map((p) => p.id))
        } else {
            setSelectedIds([])
        }
    }

    return (
        <div className="border border-gray-200 overflow-x-auto">
            <div className="min-w-[850px]">
            {/* 헤더 */}
            <div className="grid grid-cols-12 items-center px-4 py-3 border-b border-gray-200 text-sm font-medium bg-gray-50">
                <div className="col-span-2 flex items-center gap-2">
                <Checkbox
                    id="select-all"
                    checked={isAllSelected}
                    onCheckedChange={(checked) => handleSelectAllChange(!!checked)}
                    className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                />
                <span className="text-xs text-gray-500">{t('cart:select_all')} ({selectedIds.length}/{products.length})</span>
                </div>
                <div className="col-span-4 text-center">{t('cart:info')}</div>
                <div className="col-span-2 text-center">{t('cart:quantity')}</div>
                <div className="col-span-2 text-center">{t('cart:amount')}</div>
                <div className="col-span-2 text-center">{t('cart:shipping_info')}</div>
            </div>

            {/* 상품 */}
            <div className="grid grid-cols-12 items-center px-4 py-6 border-b border-gray-100">
                {products.map((product) => (
                    <>
                        <div key={product.id} className="col-span-2 flex justify-start h-full items-center">
                        <div className="flex items-center">
                            <Checkbox
                                checked={selectedIds.includes(product.id)}
                                onCheckedChange={(checked) => handleCheckboxChange(product.id, !!checked)}
                                className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                                // defaultChecked
                            />
                        </div>
                        <div className="w-25 h-full ml-2 relative">
                            <Image src={product.image} alt={product.engName} fill className="object-contain" />
                        </div>
                        </div>

                        <div className="col-span-4 flex items-center gap-4 space-y-2">
                        <div className="text-sm space-y-2">
                            <div className="font-bold">{product.engName}</div>
                            <div className="text-gray-400 text-xs">{product.korName}</div>
                            <div className="text-gray-400 text-xs mb-1">
                                {product.isShoppingBag ? t('cart:bag_purchased') : t('cart:bag_not_purchased')}
                            </div>
                            <div className="font-bold">{product.price.toLocaleString()}{unit}</div>
                        </div>
                        </div>

                        <div className="col-span-2 flex flex-col items-center gap-2">
                        <div className="flex items-center gap-4 mb-2">
                            <Button size="icon" variant="outline" className="w-5 h-5" onClick={() => onIncreaseAmount(product.id, -1)}><Minus className="w-1.5 h-1.5" /></Button>
                            <span className="text-sm">{product.amount}</span>
                            <Button size="icon" variant="outline" className="w-5 h-5" onClick={() => onIncreaseAmount(product.id, 1)}><Plus className="w-1.5 h-1.5" /></Button>
                        </div>
                        {setOpen && (
                            <Button variant="outline" className="h-8 text-xs px-4" onClick={() => setOpen(true)}>{t('cart:options')}</Button>
                        )}
                        </div>

                        <div className="col-span-2 text-center text-sm font-bold">{product.price.toLocaleString()}{unit}</div>
                        <div className="col-span-2 text-center text-sm font-bold">{product.delivery === 0 ? `${t('cart:free_shipping')}` : `${product.delivery}${unit}`}</div>
                    </>
                ))}
            </div>
            </div>
        </div>
    )
}