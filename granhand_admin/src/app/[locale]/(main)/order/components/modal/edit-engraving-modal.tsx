import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRef, useState } from "react";

const symbols = ['.', ',', '!', '&', '%', '?', '❤️']

export default function EditEngravingModal({ open, setOpen, t }: { open: boolean, setOpen: (value: boolean) => void, t: (key: string) => string }) {
    const [showSymbols, setShowSymbols] = useState(false)
    const [value, setValue] = useState('')
    // const [enabled, setEnabled] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const addSymbol = (symbol: string) => {
        // if(enabled) {
        //     setValue((prev) => prev + symbol)
        //     // 커서를 맨 뒤로
        //     setTimeout(() => {
        //         inputRef.current?.focus()
        //     }, 0)
        // }
        setValue((prev) => prev + symbol)
        // 커서를 맨 뒤로
        setTimeout(() => {
            inputRef.current?.focus()
        }, 0)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="bg-white max-w-170 min-h-80 w-full overflow-auto mx-auto">
            <DialogHeader>
                <DialogTitle><span className="font-bold text-2xl text-[#111111]">{t('order:edit_engraving')}</span></DialogTitle>
            </DialogHeader>
            <div className="mb-6 text-[#111111]">
                <div className="border border-gray-200 text-[#6f6963] text-sm w-full min-w-120">
                    <div className="grid grid-cols-[100px_1fr] border-b">
                        <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                            {t('order:set_engraving')}
                        </div>
                        <div className="p-3 grid divide-y divide-gray-200">
                            <RadioGroup defaultValue="engraving" className="flex gap-6">
                                <Label className="flex items-center gap-2 min-w-20">
                                <RadioGroupItem value="engraving" /> {t('order:engraving')}
                                </Label>
                                <Label className="flex items-center gap-2 min-w-20">
                                <RadioGroupItem value="no_engraving" /> {t('order:no_engraving')}
                                </Label>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] border-b">
                        <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                            {t('order:engraving_text')}
                        </div>
                        <div className="flex p-3 items-center gap-4 relative">
                            <Input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="h-10" ref={inputRef} />
                            <Button
                                className="w-32 h-full text-sm bg-gray-100"
                                onClick={() => {
                                    console.log('showSymbols: ', showSymbols)
                                    setShowSymbols((prev) => !prev)
                                }}
                            >
                                {t('order:special_character')}
                            </Button>
                            {showSymbols && (
                                <div className="absolute top-full right-0 mt-2 border rounded bg-gray-50 p-2 flex gap-2 shadow-lg z-10">
                                    {symbols.map((sym, index) => (
                                        <Button
                                            key={index}
                                            onClick={() => addSymbol(sym)}
                                            className="px-2 py-1 bg-white rounded shadow hover:bg-gray-100"
                                        >
                                            {sym}
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Guidelines */}
                <ul className="text-left text-sm text-[#C0BCB6] list-disc list-inside">
                    <li>{t('order:engrave_info1')}</li>
                    <li>{t('order:engrave_info2')}</li>
                </ul>
            </div>
            <DialogFooter className="!flex !items-center">
                <Button className="w-1/6 bg-transparent text-[#C0BCB6] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>{t('cancel')}</Button>
                <Button className="w-1/6 text-[#2854f3] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>{t('save')}</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}