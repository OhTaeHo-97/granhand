import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

interface ChallengeInfo {
    title: string,
    description: string,
    status: string
}

export default function ChallengeModal({ open, setOpen, challengeInfo, t }: { open: boolean, setOpen: (value: boolean) => void, challengeInfo?: ChallengeInfo, t: (key: string) => string }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-white !min-w-fit !min-h-fit">
                <div className="w-full h-full overflow-y-auto p-8">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-[#5E5955]">{t('challenge:create_challenge_title')}</DialogTitle>
                    </DialogHeader>
                    <div className="text-[#111111] text-sm w-full bg-white min-w-120 mt-5">
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-center p-2 text-[#6F6963]">
                                <Label className="font-semibold">{t('challenge:status')}</Label>
                            </div>
                            <div className="flex items-center gap-4 p-5">
                                <RadioGroup
                                    className="flex gap-4"
                                    value={challengeInfo && challengeInfo.status}
                                    // value={type}
                                    // onValueChange={setType}
                                    aria-label="Publishing type"
                                >
                                    <div className="flex items-center gap-4">
                                        <Label className="flex items-center gap-3 cursor-pointer !text-[#231815B2]">
                                            <RadioGroupItem
                                                value="active"
                                                id="active"
                                            /> {t('challenge:active')}
                                        </Label>
                                        <Label className="flex items-center gap-3 cursor-pointer !text-[#231815B2]">
                                            <RadioGroupItem
                                                value="inactive"
                                                id="inactive"
                                            /> {t('challenge:inactive')}
                                        </Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-center p-2 text-[#6F6963]">
                                <Label className="font-semibold">{t('challenge:challenge_name')}</Label>
                            </div>
                            <div className="flex items-center gap-4 p-5">
                                <Input type="text" value={challengeInfo && challengeInfo.title} placeholder={t('challenge:challenge_name_placeholder')} />
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-center p-2 text-[#6F6963]">
                                <Label className="font-semibold">{t('challenge:description')}</Label>
                            </div>
                            <div className="flex items-center gap-4 p-5">
                                <Textarea value={challengeInfo && challengeInfo.description} placeholder={t('challenge:description_placeholder')} className="resize-none" />
                            </div>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <div className="flex justify-end gap-4">
                        <Button className="w-1/6 text-[#C0BCB6] hover:bg-[#322A2408] p-6" onClick={() => setOpen(false)}>{t('cancel')}</Button>
                        <Button className="w-1/6 text-[#2854f3] hover:bg-[#322A2408] p-6" onClick={() => setOpen(false)}>{t('confirm')}</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}