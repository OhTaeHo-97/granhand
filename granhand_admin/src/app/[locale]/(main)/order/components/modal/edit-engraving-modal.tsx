import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRef, useState } from "react";

const symbols = ['.', ',', '!', '&', '%', '?', '❤️']

export default function EditEngravingModal({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
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
                <DialogTitle><span className="font-bold text-2xl text-[#111111]">각인 수정</span></DialogTitle>
            </DialogHeader>
            <div className="mb-6 text-[#111111]">
                <div className="border border-gray-200 text-[#6f6963] text-sm w-full min-w-120">
                    <div className="grid grid-cols-[100px_1fr] border-b">
                        <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                            각인 설정
                        </div>
                        <div className="p-3 grid divide-y divide-gray-200">
                            <RadioGroup defaultValue="engraving" className="flex gap-6">
                                <Label className="flex items-center gap-2 min-w-20">
                                <RadioGroupItem value="engraving" /> 각인
                                </Label>
                                <Label className="flex items-center gap-2 min-w-20">
                                <RadioGroupItem value="no_engraving" /> 각인하지 않음
                                </Label>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] border-b">
                        <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                            각인 문구
                        </div>
                        <div className="flex p-3 items-center gap-4 relative">
                            <Input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="h-10" ref={inputRef} />
                            <Button
                                className="w-28 h-full text-sm bg-gray-100"
                                onClick={() => {
                                    console.log('showSymbols: ', showSymbols)
                                    setShowSymbols((prev) => !prev)
                                }}
                            >
                                특수기호
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
                    <li>10자 이하 영문 대문자, 숫자, 특수기호(. , ! % & ? ❤️)만 가능합니다.</li>
                    <li>스탬핑 작업시 교환 및 환불이 불가능합니다.</li>
                </ul>
            </div>
            <DialogFooter className="!flex !items-center">
                <Button className="w-1/6 bg-transparent text-[#C0BCB6] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>취소</Button>
                <Button className="w-1/6 text-[#2854f3] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>저장</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}