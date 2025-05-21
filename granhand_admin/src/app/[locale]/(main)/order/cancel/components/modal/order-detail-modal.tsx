import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GiftIcon, Smartphone } from "lucide-react";

export default function OrderDetailModal({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="bg-white max-w-400 min-w-100 max-h-200 min-h-80 w-full overflow-auto mx-auto">
            <DialogHeader>
                <DialogTitle><span className="font-bold text-2xl text-[#111111]">주문 상세 정보</span></DialogTitle>
            </DialogHeader>
            <div className="rounded-md text-sm text-[#111111] space-y-2 p-6 w-full">
                <section>
                    <h2 className="font-bold text-xl">구매자 정보</h2>
                    <div className="rounded-md p-6 space-y-3">
                        <div className="grid grid-cols-[70px_1fr_70px_1fr] h-full m-0">
                            <div className="flex items-center justify-start p-2">
                                <Label>구매자 명</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center border border-[#E9E6E0] rounded-sm bg-[#322A2408] gap-2 h-10 px-4">
                                    홍길동
                                </div>
                            </div>
                            <div className="flex items-center justify-start p-2">
                                <Label>아이디</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center border border-[#E9E6E0] rounded-sm bg-[#322A2408] gap-2 h-10 px-4">
                                    honghong@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[70px_1fr_70px_1fr] h-full">
                            <div className="flex items-center justify-start p-2">
                                <Label>연락처</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center border border-[#E9E6E0] rounded-sm bg-[#322A2408] gap-2 h-10 px-4">
                                    01099991111
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-10">
                    <h2 className="font-bold text-xl">배송 정보</h2>
                    <div className="rounded-md p-6 space-y-3">
                        <div className="grid grid-cols-[70px_1fr_70px_1fr] h-full m-0">
                            <div className="flex items-center justify-start p-2">
                                <Label>수령인 명</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-2">
                                    <Input defaultValue="홍길순" className="h-10" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[70px_1fr_70px_1fr] h-full m-0">
                            <div className="flex items-center justify-start p-2">
                                <Label>연락처</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-2">
                                    <Input defaultValue="01099991111" className="h-10" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[70px_1fr_70px_1fr] h-full m-0">
                            <div className="flex items-center justify-start p-2">
                                <Label>배송지</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-4">
                                    <Input placeholder="우편번호 검색" defaultValue="00100" className="w-1/2" />
                                    <Button variant="outline" className="p-1">배송지 수정</Button>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[70px_1fr] h-full m-0">
                            <div className="flex items-center justify-start p-2"></div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-4">
                                    <Input placeholder="주소 입력" defaultValue="서울시 종로구 8" className="w-1/2" />
                                    <Input placeholder="상세주소 검색" defaultValue="1층 101호" className="w-1/2" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[70px_1fr] h-full">
                            <div className="flex items-center justify-start p-2">
                                <Label>연락처</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                            <div className="flex items-center gap-4">
                                    <Input placeholder="배송 요청사항 입력" defaultValue="벨 누르지 말고 똑똑 2번만 해주세요." className="w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-dashed" />

                <section className="mt-10">
                    <div className="flex items-center gap-2">
                        <h2 className="font-bold text-xl">주문 정보</h2>
                        <div className="w-5 h-5 rounded-full bg-[#D0505D] flex items-center justify-center">
                            <GiftIcon className="w-3 h-3 text-white" />
                        </div>
                    </div>
                    <div className="rounded-md p-6 space-y-3">
                        <div className="grid grid-cols-[70px_1fr_70px_1fr] h-full m-0">
                            <div className="flex items-center justify-start p-2">
                                <Label>주문번호</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center border border-[#E9E6E0] rounded-sm bg-[#322A2408] gap-2 h-10 px-4">
                                    2024021012345678
                                </div>
                            </div>
                            <div className="flex items-center justify-start p-2">
                                <Label>주문일시</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center border border-[#E9E6E0] rounded-sm bg-[#322A2408] gap-2 h-10 px-4">
                                    2024-02-10 16:15:35
                                </div>
                            </div>
                        </div>
                        <section>
                            <div className="flex items-center justify-start p-2">
                                <Label>주문상품</Label>
                            </div>
                            <table className="w-full text-left border-collapse min-w-6xl border">
                                <thead className="bg-[#322A2408] border-t h-10">
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
                                        <tr key={i} className="border-b h-20 text-[#1A1A1A]">
                                            <td className="p-2 flex items-center justify-center h-20"><Smartphone /></td>
                                            <td className="p-2 text-center border">2024021012345678</td>
                                            <td className="p-2 border">
                                                <div className="space-y-1 text-sm">
                                                    <div className="flex items-center gap-1 font-semibold text-black">Roland Multi Perfume 100ml</div>
                                                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                                                        <span>용량 : 100ml</span>
                                                    </div>
                                                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                                                        <span>쇼핑백 : 구매 안함</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-2 text-center border">1</td>
                                            <td className="p-2 text-center border">Y</td>
                                            <td className="p-2 text-center bodrer">GRANHAND❤️</td>
                                            <td className="p-2 text-center border">결제 완료</td>
                                            <td className="p-2 text-center border">35,000</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>
                    </div>
                </section>

                <hr className="border-dashed" />

                <section>
                <div className="flex justify-between gap-8 p-8 bg-white">
                    {/* Left Section: 결제 정보 */}
                    {/* 이미지에서 결제 정보 섹션의 배경색이 약간 다르게 보이므로 bg-[#F8F5F0]를 추가했습니다. */}
                    <div className="w-1/3 rounded-md p-6">
                        <h2 className="font-bold text-xl">결제 정보</h2>
                        {/* <h2 className="text-xl font-bold mb-6 text-[#111111]">결제 정보</h2> */}

                        <div className="rounded-md text-sm text-[#C0BCB6] space-y-2 w-full border mt-4">
                            <div className="rounded-md p-3 py-6 space-y-3">
                                <div className="flex justify-between">
                                    <span>상품금액</span>
                                    <span className="text-[#6F6963]">55,000원</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>배송비</span>
                                    <span className="text-[#6F6963]">0원</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>쿠폰 할인</span>
                                    <span className="text-[#6F6963]">-5,000원</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>포인트 사용</span>
                                    <span className="text-[#6F6963]">-5,000원</span>
                                </div>
                                <hr className="my-2 border-dashed" />
                                <div className="flex justify-between font-semibold text-[#322A24]">
                                    <span>결제 금액</span>
                                    <span className="text-lg">45,000원</span>
                                </div>
                                <div className="flex justify-between text-xs ml-2">
                                    <span>└ 신용카드 결제 (현대카드)</span>
                                    <span className="text-[#6F6963]">45,000원</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: 관리자 메모 */}
                    <div className="w-1/2 rounded-md p-6">
                        <h2 className="font-bold text-xl">관리자 메모</h2>
                        <div className="relative rounded-md mb-8 mt-4">
                            <Textarea
                                placeholder="관리자만 볼 수 있는 메모입니다."
                                className="w-full h-46 border-none focus:ring-0 resize-none bg-[#322A2408] text-[#111111] placeholder-[#C0BCB6]"
                            />
                            <div className="absolute bottom-3 right-3 text-right text-sm text-[#C0BCB6]">
                                0/500
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end gap-3">
                            {/* 이미지에 맞춰 취소 버튼에 border 클래스 추가 */}
                            <Button variant="outline" className="bg-transparent text-[#322A24] w-1/6" onClick={() => setOpen(false)}>취소</Button>
                            <Button className="bg-[#322A24] text-white w-1/6" onClick={() => setOpen(false)}>저장</Button>
                        </div>
                    </div>
                </div>
                </section>
            </div>
            </DialogContent>
        </Dialog>
    )
}