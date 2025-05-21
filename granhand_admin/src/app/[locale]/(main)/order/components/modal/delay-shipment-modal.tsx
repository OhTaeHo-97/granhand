'use client'

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon } from "lucide-react";
import CustomCalendarWithTime from "../../../push/components/calendar";
import { useState } from "react";
import { format } from "date-fns";

export default function DelayShipmentModal({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
    const [scheduledDate, setScheduledDate] = useState<Date | undefined>(new Date())
    
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="max-w-lg bg-white min-w-150 min-h-80">
            <DialogHeader>
                <DialogTitle className="font-bold text-2xl text-[#111111]">배송 지연 처리</DialogTitle>
            </DialogHeader>
            <div className="mb-6 text-[#111111] whitespace-pre-line">
                {`선택하신 n건의 주문 중 처리 가능한 주문은 1건입니다.\n1건에 대해 처리하시겠습니까?`}
                <div className="bg-[#322A2408] p-4">
                    <ul className="text-[#6F6963]">
                        <li>배송 지연 안내는 결제 완료, 배송 준비 상태의 주문만 가능합니다.</li>
                        <li>배송 예정일은 배송 지연 안내일로부터 최대 30일까지 설정할 수 있습니다.</li>
                    </ul>
                </div>
                <div className="text-[#6f6963] text-sm w-full min-w-120">
                    <div className="grid grid-cols-[100px_1fr] h-full">
                        <div className="flex items-center justify-center p-2 text-[#6F6963]">
                            <Label className="font-semibold">배송 예정일</Label>
                        </div>
                        <div className="px-5 py-4 w-full">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-between p-2 border rounded-md">
                                    <div className="text-[#5E5955]">
                                        {scheduledDate && format(scheduledDate, "yyyy.MM.dd")}
                                    </div>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                                                <CalendarIcon className="h-4 w-4" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0 bg-white">
                                            <CustomCalendarWithTime initialDate={scheduledDate} initialTime="12:00" onCancel={() => alert('취소')} onSave={(date, time) => {
                                                setScheduledDate(date)
                                                alert(`${date?.toLocaleDateString()} ${time}`)
                                            }} />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] h-full">
                        <div className="flex items-center justify-center p-2 text-[#6F6963]">
                            <Label className="font-semibold">배송 지연 사유</Label>
                        </div>
                        <div className="px-5 py-4 w-full">
                            <div className="flex items-center gap-4">
                                <Select>
                                    <SelectTrigger className="w-fit">
                                        <SelectValue placeholder="배송 지연 사유 선택" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="none">배송 지연 사유 선택</SelectItem>
                                        <SelectItem value="prepare">상품 준비 중</SelectItem>
                                        <SelectItem value="custom">주문 제작</SelectItem>
                                        <SelectItem value="customer">고객 요청</SelectItem>
                                        <SelectItem value="scheduled">예약 발송</SelectItem>
                                        <SelectItem value="other">기타 사유</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] h-full">
                        <div className="flex items-center justify-center p-2 text-[#6F6963]">
                            <Label className="font-semibold">배송 지연 상세 사유</Label>
                        </div>
                        <div className="px-5 py-4 w-full">
                            <div className="flex items-center gap-4">
                                <Textarea placeholder="상세 사유를 입력해 주세요." className="resize-none w-full h-20" />
                            </div>
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