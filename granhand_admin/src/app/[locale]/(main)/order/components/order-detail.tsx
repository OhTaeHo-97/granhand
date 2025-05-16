'use client'

import { useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { X, Smartphone } from "lucide-react"

export default function OrderDetailModal({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
    // ESC로 닫기
    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open, setOpen])

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* 오버레이 */}
            <div
                className="fixed inset-0 bg-black/60"
                onClick={() => setOpen(false)}
                aria-hidden
            />

            {/* 모달 컨텐츠 */}
            <div className="relative bg-white w-full h-full max-w-6xl mx-auto my-0 rounded-none shadow-lg z-50 flex flex-col">
                <Button
                    onClick={() => setOpen(false)}
                    className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
                >
                    <X className="h-4 w-4" />
                </Button>
                <div className="flex-1 overflow-y-auto p-8">
                    {/* 헤더 */}
                    <div className="mb-6">
                        <h1 className="text-xl font-bold">주문 상세 정보</h1>
                    </div>
                    {/* 컨텐츠 */}
                    <div className="p-8 space-y-6 text-sm text-[#6f6963] max-w-6xl mx-auto h-full overflow-y-auto overflow-x-auto">
                        <section className="space-y-2">
                            <h2 className="font-bold text-xl text-[#5E5955]">구매자 정보</h2>
                            <div>
                                <div className="grid grid-cols-[70px_1fr_90px_1fr] h-15">
                                    {/* 첫 번째 행 */}
                                    <div className="flex items-center justify-center p-2 text-[#6F6963]">
                                        <Label className="font-semibold">구매자 명</Label>
                                    </div>
                                    <div className="flex gap-2 items-center p-5 h-full">
                                        <Input
                                            type="text"
                                            placeholder="홍길동"
                                            className="border rounded px-2 py-1 flex-1 min-w-[200px] h-10 bg-[#322A2408]"
                                            readOnly
                                        />
                                    </div>
                                    <div className="flex items-center justify-center p-5 h-full text-[#6F6963]">
                                        <Label className="font-semibold">아이디</Label>
                                    </div>
                                    <div className="flex items-center p-2">
                                        <Input
                                            type="text"
                                            placeholder="honghong@gmail.com"
                                            className="border rounded px-2 py-1 flex-1 min-w-[200px] h-10 bg-[#322A2408]"
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-[70px_1fr_90px_1fr] h-15">
                                    {/* 첫 번째 행 */}
                                    <div className="flex items-center justify-center p-2 text-[#6F6963]">
                                        <Label className="font-semibold">연락처</Label>
                                    </div>
                                    <div className="flex gap-2 items-center p-5 h-full">
                                        <Input
                                            type="text"
                                            placeholder="01099991111"
                                            className="border rounded px-2 py-1 flex-1 min-w-[200px] h-10 bg-[#322A2408]"
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-2 mt-16">
                            <h2 className="font-bold text-xl text-[#5E5955]">배송 정보</h2>
                            <div>
                                <div className="grid grid-cols-[70px_1fr_90px_1fr] h-15">
                                    {/* 첫 번째 행 */}
                                    <div className="flex items-center justify-center p-2 text-[#6F6963]">
                                        <Label className="font-semibold">수령인 명</Label>
                                    </div>
                                    <div className="flex gap-2 items-center p-5 h-full">
                                        <Input
                                            type="text"
                                            placeholder="01099991111"
                                            className="border rounded px-2 py-1 flex-1 min-w-[200px] h-10"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-[70px_1fr_90px_1fr] h-15">
                                    {/* 첫 번째 행 */}
                                    <div className="flex items-center justify-center p-2 text-[#6F6963]">
                                        <Label className="font-semibold">연락처</Label>
                                    </div>
                                    <div className="flex gap-2 items-center p-5 h-full">
                                        <Input
                                            type="text"
                                            placeholder="01099991111"
                                            className="border rounded px-2 py-1 flex-1 min-w-[200px] h-10"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-[70px_0.1fr_90px_1fr] h-15">
                                    {/* 첫 번째 행 */}
                                    <div className="flex items-center justify-center p-2 text-[#6F6963]">
                                        <Label className="font-semibold">배송지</Label>
                                    </div>
                                    <div className="flex gap-2 items-center p-5 h-full">
                                        <Input
                                            type="text"
                                            placeholder="00100"
                                            className="border rounded px-2 py-1 flex-1 min-w-[200px] h-10"
                                        />
                                        <Button className="border">배송지 수정</Button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[70px_1fr] h-15">
                                    {/* 첫 번째 행 */}
                                    <div className="flex items-center justify-center p-2 text-[#6F6963]">
                                        {/* <Label className="font-semibold">연락처</Label> */}
                                    </div>
                                    <div className="flex gap-2 items-center p-5 h-full">
                                        <Input
                                            type="text"
                                            placeholder="01099991111"
                                            className="border rounded px-2 py-1 flex-1 min-w-[200px] h-10"
                                        />
                                        <Input
                                            type="text"
                                            placeholder="01099991111"
                                            className="border rounded px-2 py-1 flex-1 min-w-[200px] h-10"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-[70px_1fr] h-15">
                                    {/* 첫 번째 행 */}
                                    <div className="flex items-center justify-center p-2 text-[#6F6963]">
                                        <Label className="font-semibold">배송 요청사항</Label>
                                    </div>
                                    <div className="flex gap-2 items-center p-5 h-full">
                                        <Input
                                            type="text"
                                            placeholder="벨 누르지 말고 똑똑 2번만 해주세요."
                                            className="border rounded px-2 py-1 flex-1 min-w-[200px] h-10"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <hr className="border-t border-dashed border-gray-300 my-6" />

                        <section className="space-y-2">
                            <h2 className="font-bold text-xl text-[#5E5955]">주문 정보</h2>
                            <div>
                                <div className="grid grid-cols-[70px_1fr_90px_1fr] h-15">
                                    {/* 첫 번째 행 */}
                                    <div className="flex items-center justify-center p-2 text-[#6F6963]">
                                        <Label className="font-semibold">주문번호</Label>
                                    </div>
                                    <div className="flex gap-2 items-center p-5 h-full">
                                        <Input
                                            type="text"
                                            placeholder="2024021012345678"
                                            className="border rounded px-2 py-1 flex-1 min-w-[200px] h-10 bg-[#322A2408]"
                                            readOnly
                                        />
                                    </div>
                                    <div className="flex items-center justify-center p-5 h-full text-[#6F6963]">
                                        <Label className="font-semibold">주문일시</Label>
                                    </div>
                                    <div className="flex items-center p-2">
                                        <Input
                                            type="text"
                                            placeholder="2024-02-10 16:15:35"
                                            className="border rounded px-2 py-1 flex-1 min-w-[200px] h-10 bg-[#322A2408]"
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <section>
                                    <div className="p-2 text-[#6F6963]">
                                        <Label className="font-semibold">연락처</Label>
                                    </div>
                                    <table className="w-full text-left border-collapse min-w-6xl border">
                                        <thead className="bg-[#322A2408] border-t h-20">
                                            <tr className="border-b text-[#6F6963]">
                                                <th className="p-2 items-center border"></th>
                                                <th className="p-2 text-center border">상품주문번호</th>
                                                <th className="p-2 text-center border">주문상품</th>
                                                <th className="p-2 text-center border">수량</th>
                                                <th className="p-2 text-center border">각인 여부</th>
                                                <th className="p-2 text-center border">각인 문구</th>
                                                <th className="p-2 text-center border">주문상태</th>
                                                <th className="p-2 text-center border">결제금액</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Array.from({ length: 12 }).map((_, i) => (
                                            <tr key={i} className="border-b h-14 text-[#1A1A1A]">
                                                <td className="p-2 text-center border"><Smartphone /></td>
                                                <td className="p-2 text-center border">2024021012345678</td>
                                                <td className="p-2 text-center border">
                                                    <div className="flex items-start gap-3">
                                                        <div>
                                                            <div className="font-semibold text-black">Roland Multi Perfume</div>
                                                            <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
                                                                <span>용량 : 100ml</span><br /><span>쇼핑백 : 구매 안함</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 text-center border">1</td>
                                                <td className="p-2 text-center border">Y</td>
                                                <td className="p-2 text-center border">GRANHAND</td>
                                                <td className="p-2 text-center border">결제 완료</td>
                                                <td className="p-2 text-center border">35,000</td>
                                            </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </section>
                                <div className="grid grid-cols-[70px_1fr_80px_1fr] h-15">
                                    {/* 첫 번째 행 */}
                                    <div className="flex items-center justify-center p-2 text-[#6F6963]">
                                        <Label className="font-semibold">연락처</Label>
                                    </div>
                                    <div className="flex gap-2 items-center p-5 h-full">
                                        <Input
                                            type="text"
                                            placeholder="01099991111"
                                            className="border rounded px-2 py-1 flex-1 min-w-[200px] h-10"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <hr className="border-t border-dashed border-gray-300 my-6" />

                        <section className="flex justify-between gap-20">
                            <div className="bg-white rounded-md text-sm text-gray-600 space-y-2 w-full h-full">
                                <h2 className="font-semibold text-black text-base">결제 정보</h2>
                                <div className="border rounded-md p-6 space-y-3 shadow-md text-gray-400">
                                    <div className="flex justify-between">
                                        <span>상품금액</span>
                                        <span>55,000원</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>배송비</span>
                                        <span>0원</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>쿠폰 할인</span>
                                        <span>-5,000원</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>포인트 사용</span>
                                        <span>-5,000원</span>
                                    </div>
                                    <hr className="my-2 border-dashed" />
                                    <div className="flex justify-between font-semibold text-black">
                                        <span>결제 금액</span>
                                        <span className="text-lg">45,000원</span>
                                    </div>
                                    <div className="flex justify-between text-xs ml-2">
                                        <span>└ 신용카드 결제 (현대카드)</span>
                                        <span>45,000원</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-md text-sm text-gray-600 space-y-2 w-full">
                                <h2 className="font-semibold text-black text-base">관리자 메모</h2>
                                <Textarea className="bg-[#322A2408] p-6 space-y-3 shadow-md text-gray-400 resize-none h-50" />
                                <div className="flex justify-end gap-4">
                                    <Button
                                        variant="outline"
                                        className="text-[#5E5955] min-w-fit w-25"
                                        onClick={() => setOpen(false)}
                                    >
                                        취소
                                    </Button>
                                    <Button className="bg-[#322A24] text-white min-w-fit w-25">저장</Button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
