import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
// import api from "@/utils/api";
import { SearchIcon } from "lucide-react"
// import { useSession } from "next-auth/react";
import Image from "next/image";
// import { useState } from "react";

export default function RecommendProductModal({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
    // const { data: session, status } = useSession()
    // const [selectedIds, setSelectedIds] = useState<number[]>([])

    // const handleCheckboxChange = (id: number) => {
    //     setSelectedIds((prev) => {
    //         if(prev.includes(id)) {
    //             return prev.filter((itemId) => itemId !== id)
    //         } else {
    //             return [...prev, id]
    //         }
    //     })
    // }

    // const handleSelectAll = (checked: boolean) => {
    //     if(checked) {
    //         const allIds = Array.from({ length: 12 }).map((_, i) => i)
    //         setSelectedIds(allIds)
    //     } else {
    //         setSelectedIds([])
    //     }
    // }

    // const addRecommendProduct = async () => {
    //     if(status !== 'authenticated' || !session?.token) {
    //         console.log('Cannot fetch data - no valid session')
    //         return
    //     }
        
    //     try {
    //         const response = await api.post('/product/goods', {}, {
    //             token: session.token
    //         })
    //     } catch (error) {
    //         console.error('Failed to fetch product goods:', error)
    //     }
    // }

    // const removeRecommendProduct = async () => {
    //     if(status !== 'authenticated' || !session?.token) {
    //         console.log('Cannot fetch data - no valid session')
    //         return
    //     }

    //     try {
    //         selectedIds.map(async (id) => {
    //             const response = await api.delete(`/product/goods/${id}`, {}, {
    //                 token: session.token
    //             })
    //         })
    //     } catch (error) {
    //         console.error('Failed to fetch product goods:', error)
    //     }
    // }

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="bg-white max-w-130 min-h-80 w-full overflow-auto mx-auto min-w-6xl h-full">
            <DialogHeader>
                <DialogTitle className="p-10"><span className="font-bold text-2xl text-[#111111]">추천상품 추가</span></DialogTitle>
            </DialogHeader>
            <div className="text-[#111111] p-10 py-4">
                <div className="relative flex items-center">
                    <Input type="text" className="pr-10" />
                    <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
                <div className="space-y-6 mt-8">
                    <h2>검색 결과</h2>
                    <table className="w-full text-center border-collapse min-w-8xl border overflow-auto">
                        <thead className="bg-[#322A2408] border-t h-20">
                            <tr className="border-b text-[#6F6963]">
                                <th className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
                                <th className="p-2 text-center border">상품 코드</th>
                                <th className="p-2 text-center border">상품명</th>
                                <th className="p-2 text-center border">판매가</th>
                                <th className="p-2 text-center border">상태</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 12 }).map((_, i) => (
                            <tr key={i} className="border-b h-14 text-[#1A1A1A] hover:bg-[#322A2408]">
                                <td className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white" onClick={(e) => e.stopPropagation()}/></td>
                                <td className="p-2 text-center border">0000000303</td>
                                <td className="p-2 text-center border">
                                    <div className="flex items-start gap-3">
                                        {/* 이미지 영역 */}
                                        <Image src="/placeholder.png" alt="하이" width={48} height={48} className="w-12 h-12 bg-gray-100 border border-gray-300 flex items-center justify-center text-xs"/>
    
                                        {/* 텍스트 영역 */}
                                        <div>
                                            <div className="font-semibold">Roland Multi Perfume</div>
                                            <div className="flex items-center gap-1 text-[#C0BCB6] text-xs mt-1">
                                                <span className="text-lg leading-none">•</span>
                                                <span>쇼핑백</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 text-center border">35,000</td>
                                <td className="p-2 text-center border">판매중</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="space-y-6 mt-8">
                    <h2>추천상품</h2>
                    <table className="w-full text-center border-collapse min-w-8xl border overflow-auto">
                        <thead className="bg-[#322A2408] border-t h-20">
                            <tr className="border-b text-[#6F6963]">
                                <th className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
                                <th className="p-2 text-center border">상품 코드</th>
                                <th className="p-2 text-center border">상품명</th>
                                <th className="p-2 text-center border">판매가</th>
                                <th className="p-2 text-center border">상태</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 12 }).map((_, i) => (
                            <tr key={i} className="border-b h-14 text-[#1A1A1A] hover:bg-[#322A2408]">
                                <td className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white" /></td>
                                <td className="p-2 text-center border">0000000302</td>
                                <td className="p-2 text-center border">
                                    <div className="flex items-start gap-3">
                                        {/* 이미지 영역 */}
                                        <Image src="/placeholder.png" alt="하이" width={48} height={48} className="w-12 h-12 bg-gray-100 border border-gray-300 flex items-center justify-center text-xs"/>
    
                                        {/* 텍스트 영역 */}
                                        <div>
                                            <div className="font-semibold">Roland Multi Perfume</div>
                                            <div className="flex items-center gap-1 text-[#C0BCB6] text-xs mt-1">
                                                <span className="text-lg leading-none">•</span>
                                                <span>쇼핑백</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 text-center border">35,000</td>
                                <td className="p-2 text-center border">판매중</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <DialogFooter className="!flex !items-center !justify-center">
                <Button variant="outline" className="text-[#322A24] w-1/6" onClick={() => setOpen(false)}>취소</Button>
                <Button className="bg-[#322A24] text-white rounded px-6 py-1 flex items-center gap-1 w-1/6" onClick={() => setOpen(false)}>저장</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}