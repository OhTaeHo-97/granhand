import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

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
        <div className="overflow-x-auto">
            <div className="min-w-[1120px]">
                <table className="w-full text-center min-w-8xl overflow-auto">
                    <thead className="bg-[#322A2408] border-t border-b border-[#E9E6E0] h-[36px]">
                        <tr className="text-[#6F6963] text-xs font-medium">
                            <th className="p-2 w-40 font-medium">
                                <div className="pl-6 flex items-center justify-start gap-3">
                                    <Checkbox
                                        id="select-all"
                                        checked={isAllSelected}
                                        onCheckedChange={(checked) => handleSelectAllChange(!!checked)}
                                        className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                                    />
                                    <span className="text-[#6F6963]">{t('cart:select_all')} ({selectedIds.length}/{products.length})</span>
                                </div>
                            </th>
                            <th className="p-2 text-center font-medium">{t('cart:info')}</th>
                            <th className="p-2 text-center font-medium">{t('cart:quantity')}</th>
                            <th className="p-2 text-center font-medium">{t('cart:amount')}</th>
                            <th className="p-2 text-center font-medium">{t('cart:shipping_info')}</th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#322A2408]">
                        {products.length === 0 ? (
                            <tr className="bg-[#322A2408]">
                                <td colSpan={5} className="h-[136px] text-center text-[#C0BCB6]">장바구니가 비었습니다.</td>
                            </tr>
                        ) : (
                            products.map((product) => (
                                <tr
                                    key={product.id}
                                    className="h-30 text-[#1A1A1A] hover:bg-[#322A2408] relative"
                                >
                                    <td className="flex justify-start p-2 items-center h-30 w-20">
                                        <div className="pl-6">
                                        <Checkbox
                                                id={`${product.id}`}
                                                className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                                                checked={selectedIds.includes(product.id)}
                                                onCheckedChange={(checked) => handleCheckboxChange(product.id, !!checked)}
                                                onClick={(e) => e.stopPropagation()}
                                            />
                                        </div>
                                    </td>
                                    <td className="p-2">
                                        <div className="flex justify-start items-center gap-4">
                                            <Image src={product.image} alt={product.engName} width={100} height={97.5} className="w-[100px] h-[97.5px]" />
                                            <div className="col-span-4 flex items-center gap-4 space-y-2 text-left">
                                                <div className="text-xs space-y-2">
                                                    <div className="font-bold text-[#322A24]">{product.engName}</div>
                                                    <div className="text-[#322A244D]">{product.korName}</div>
                                                    <div className="text-[#322A244D] mb-1">
                                                        {product.isShoppingBag ? t('cart:bag_purchased') : t('cart:bag_not_purchased')}
                                                    </div>
                                                    <div className="font-bold text-[#322A24]">{product.price.toLocaleString()}{unit}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-2 flex flex-col items-center justify-center">
                                        <div className="flex items-center gap-4 mb-2">
                                            <Button size="icon" variant="outline" className="border-[#322A241A] w-[16px] h-[16px] rounded-full text-[#322A24]" onClick={() => onIncreaseAmount(product.id, -1)}><Minus className="!w-[8px] !h-[8px] text-[#5E5955]" /></Button>
                                            <span className="text-sm">{product.amount}</span>
                                            <Button size="icon" variant="outline" className="!border-[#322A241A] w-[16px] h-[16px] text-[#322A24] rounded-full font-semibold" onClick={() => onIncreaseAmount(product.id, 1)}><Plus className="!w-[8px] !h-[8px] text-[#5E5955]" /></Button>
                                        </div>
                                        {setOpen && (
                                            <Button variant="outline" className="h-8 text-[10px] px-4 text-[#6F6963] bg-[#FDFBF5] !border-[#E9E6E0] font-bold" onClick={() => setOpen(true)}>{t('cart:options')}</Button>
                                        )}
                                    </td>
                                    <td className="p-2 text-center text-sm font-bold text-[#322A24]">{product.price.toLocaleString()}{unit}</td>
                                    <td className="p-2 text-center text-sm font-bold text-[#322A24]">{product.delivery === 0 ? `${t('cart:free_shipping')}` : `${product.delivery}${unit}`}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}