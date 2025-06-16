import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function SendSmsModal({ open, setOpen, t }: { open: boolean, setOpen: (value: boolean) => void, t: (key: string) => string }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-white max-w-150 min-h-80 w-full overflow-auto mx-auto">
                <DialogHeader>
                    <DialogTitle><span className="font-bold text-2xl text-[#111111]">{t('order:noti_message')}</span></DialogTitle>
                </DialogHeader>
                <div className="text-[#111111]">
                    <div className="space-y-6 mt-8">
                        <div className="text-[#6f6963] text-sm w-full min-w-120">
                            <div className="grid grid-cols-[100px_1fr] h-full">
                                <div className="flex items-center justify-center p-2 text-[#6F6963]">
                                    <Label className="font-semibold">{t('order:name')}</Label>
                                </div>
                                <div className="px-5 py-4 w-full">
                                    <div className="flex items-center gap-4">
                                        <Input defaultValue="홍길순" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-[100px_1fr] h-full">
                                <div className="flex items-center justify-center p-2 text-[#6F6963]">
                                    <Label className="font-semibold">{t('order:contact_number')}</Label>
                                </div>
                                <div className="px-5 py-4 w-full">
                                    <div className="flex items-center gap-4">
                                        <Input defaultValue="010-0000-0000" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-center p-2 text-[#6F6963]">
                                        <Label className="font-semibold">{t('order:delivery_method')}</Label>
                                    </div>
                                    <div className="px-5 py-4 w-full">
                                        <div className="flex items-center gap-4">
                                            <RadioGroup defaultValue="now" className="flex gap-6">
                                                <Label className="flex items-center gap-2 w-20">
                                                <RadioGroupItem value="sms" /> SMS
                                                </Label>
                                                <Label className="flex items-center gap-2 w-20">
                                                <RadioGroupItem value="alimtalk" /> ALIMTALK
                                                </Label>
                                                <Label className="flex items-center gap-2 min-w-20">
                                                <RadioGroupItem value="push" /> PUSH
                                                </Label>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-center p-2 text-[#6F6963]"></div>
                                    <div className="px-5 py-4 w-full">
                                        <div className="flex items-center gap-4">
                                            <Select defaultValue="latest_first">
                                                <SelectTrigger className="w-full">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent className="bg-white">
                                                    <SelectItem value="request_delivery">배송요청</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-center p-2 text-[#6F6963]"></div>
                                    <div className="px-5 py-4 w-full">
                                        <div className="flex items-center gap-4">
                                            <Textarea className="resize-none" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[100px_1fr] h-full">
                                    <div className="flex items-center justify-center p-2 text-[#6F6963]"></div>
                                    <div className="px-5 py-4 w-full">
                                        <div className="flex justify-end items-center gap-4">
                                            <Button variant="outline" className="p-3">{t('order:add')}</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DialogFooter className="!flex !items-center">
                    <Button className="w-1/6 bg-transparent text-[#C0BCB6] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>{t('cancel')}</Button>
                    <Button className="w-1/6 text-[#2854f3] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>{t('save')}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}