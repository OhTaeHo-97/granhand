import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const addressInfoSchema = z.object({
    recipient: z.string().min(1, "수령인을 입력해 주세요."),
    contact: z.string().min(1, "연락처를 입력해 주세요."),
    postalCode: z.string().min(1, "우편번호를 입력해 주세요."),
    address: z.string().min(1, "주소를 입력해 주세요."),
    detailAddress: z.string().min(1, "상세주소를 입력해 주세요."),
    deliveryRequest: z.string().optional(),
})

type AddressValues = z.infer<typeof addressInfoSchema>;

export default function EditAddressModal({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
    const form = useForm<AddressValues>({
        resolver: zodResolver(addressInfoSchema),
        defaultValues: {
            recipient: "",
            contact: "",
            postalCode: "",
            address: "",
            detailAddress: "",
            deliveryRequest: "",
        }
    })

    const { setError } = form

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-white max-w-150 min-h-80 w-full overflow-auto mx-auto">
                <DialogHeader>
                    <DialogTitle><span className="font-bold text-2xl text-[#111111]">배송지 정보 수정</span></DialogTitle>
                </DialogHeader>
                <div className="text-[#111111]">
                    <div className="space-y-6 mt-8">
                        <div className="text-[#6f6963] text-sm w-full min-w-120">
                            <div className="grid grid-cols-[100px_1fr] h-full">
                                <div className="flex items-center justify-center p-2 text-[#6F6963]">
                                    <Label className="font-semibold">수령인</Label>
                                </div>
                                <div className="px-5 py-4 w-full">
                                    <div className="flex items-center gap-4">
                                        <Input placeholder="수령인 입력" defaultValue="홍길동" {...form.register('recipient')} className={`${form.formState.errors.recipient && '!border-[#FF3E24]'}`} />
                                    </div>
                                    {form.formState.errors.recipient && (
                                        <p className="text-[#FF3E24]">{form.formState.errors.recipient.message}</p>
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-[100px_1fr] h-full">
                                <div className="flex items-center justify-center p-2 text-[#6F6963]">
                                    <Label className="font-semibold">연락처</Label>
                                </div>
                                <div className="px-5 py-4 w-full">
                                    <div className="flex items-center gap-4">
                                        <Input placeholder="연락처 입력" defaultValue="01099991111" {...form.register('contact')} className={`${form.formState.errors.recipient && '!border-[#FF3E24]'}`} />
                                    </div>
                                    {form.formState.errors.contact && (
                                        <p className="text-[#FF3E24]">{form.formState.errors.contact.message}</p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-center p-2 text-[#6F6963]">
                                        <Label className="font-semibold">배송지</Label>
                                    </div>
                                    <div className="px-5 py-4 w-full">
                                        <div className="flex items-center gap-4">
                                            <Input placeholder="우편번호 검색" defaultValue="00100" {...form.register('postalCode')} className={`w-[1/2] ${form.formState.errors.recipient && '!border-[#FF3E24]'}`} />
                                            <Button variant="outline" className="p-1">우편번호</Button>
                                        </div>
                                        {form.formState.errors.postalCode && (
                                            <p className="text-[#FF3E24]">{form.formState.errors.postalCode.message}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-center p-2 text-[#6F6963]"></div>
                                    <div className="px-5 py-4 w-full">
                                        <div className="flex items-center gap-4">
                                            <Input placeholder="주소" defaultValue="서울시 종로구 8" {...form.register('address')} className={`${form.formState.errors.recipient && '!border-[#FF3E24]'}`} />
                                        </div>
                                        {form.formState.errors.address && (
                                            <p className="text-[#FF3E24]">{form.formState.errors.address.message}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-center p-2 text-[#6F6963]"></div>
                                    <div className="px-5 py-4 w-full">
                                        <div className="flex items-center gap-4">
                                            <Input placeholder="상세주소 입력" defaultValue="1층 101호" {...form.register('detailAddress')} className={`${form.formState.errors.recipient && '!border-[#FF3E24]'}`} />
                                        </div>
                                        {form.formState.errors.detailAddress && (
                                            <p className="text-[#FF3E24]">{form.formState.errors.detailAddress.message}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-[100px_1fr] h-full">
                                <div className="flex items-center justify-center p-2 text-[#6F6963]">
                                    <Label className="font-semibold">배송 요청사항</Label>
                                </div>
                                <div className="px-5 py-4 w-full">
                                    <div className="flex items-center gap-4">
                                        <Input placeholder="배송 요청사항 입력" {...form.register('deliveryRequest')} className={`${form.formState.errors.deliveryRequest && '!border-[#FF3E24]'}`} />
                                    </div>
                                    {form.formState.errors.deliveryRequest && (
                                        <p className="text-[#FF3E24]">{form.formState.errors.deliveryRequest.message}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DialogFooter className="!flex !items-center">
                    <Button className="w-1/6 bg-transparent text-[#C0BCB6] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>취소</Button>
                    <Button className="w-1/6 text-[#2854f3] hover:bg-[#322A2408]" onClick={() => {
                        const values = form.getValues()
                        const result = addressInfoSchema.safeParse(values)

                        if(!result.success) {
                            result.error.errors.forEach((err) => {
                                const field = err.path[0];
                                setError(field as any, { message: err.message });
                            })
                            return
                        }

                        window.alert('배송지 정보가 수정되었습니다.')
                        setOpen(false)
                    }}>저장</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}