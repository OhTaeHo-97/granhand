import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import PeriodElement from "../../../components/period"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function ExcelDownloadModal({ open, setOpen, t }: { open: boolean, setOpen: (value: boolean) => void, t: (key: string) => string }) {
    const [startDate, setStartDate] = useState<Date | undefined>(new Date())
    const [endDate, setEndDate] = useState<Date | undefined>(new Date())
    const [quickRange, setQuickRange] = useState('')

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="max-w-lg bg-white min-w-240 min-h-80">
            <DialogHeader>
                <DialogTitle className="font-bold text-2xl text-[#111111]">엑셀 다운로드</DialogTitle>
            </DialogHeader>
            <div className="mb-6 text-[#111111] whitespace-pre-line border">
                <div className="text-[#6f6963] text-sm w-full min-w-120">
                    <div className="grid grid-cols-[100px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                            <Label className="font-semibold">주문 일자</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <PeriodElement startDate={startDate} endDate={endDate} quickRange={quickRange} setStartDate={setStartDate} setEndDate={setEndDate} setQuickRange={setQuickRange} t={t} />
                        </div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                            <Label className="font-semibold">주문 상태</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <Select>
                                <SelectTrigger className="w-fit">
                                    <SelectValue placeholder="주문 상태 선택" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="none">주문 상태 선택</SelectItem>
                                    <SelectItem value="wait">입금 대기</SelectItem>
                                    <SelectItem value="paid">결제 완료</SelectItem>
                                    <SelectItem value="prepare_ship">배송 준비</SelectItem>
                                    <SelectItem value="ship">배송 중</SelectItem>
                                    <SelectItem value="delay_ship">배송 지연</SelectItem>
                                    <SelectItem value="shipped">배송 완료</SelectItem>
                                    <SelectItem value="confirmed">구매 확정</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] h-full">
                        <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                            <Label className="font-semibold">파일 양식</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <Select>
                                <SelectTrigger className="w-fit">
                                    <SelectValue placeholder="파일 양식 선택" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="none">파일 양식 선택</SelectItem>
                                    <SelectItem value="korean">국내 양식</SelectItem>
                                    <SelectItem value="foreign">해외 양식</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
            <DialogFooter className="!flex !items-center">
                <Button className="w-1/6 bg-transparent text-[#C0BCB6] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>취소</Button>
                <Button className="w-1/6 text-[#2854f3] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>확인</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}