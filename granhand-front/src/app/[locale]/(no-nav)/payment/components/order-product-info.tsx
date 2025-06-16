'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { useRef, useState } from "react";

const symbols = ['.', ',', '!', '&', '%', '?', '❤️']

export default function OrderProductInfo({ t }: { t: (key: string) => string }) {
    const [enabled, setEnabled] = useState(false)
    const [value, setValue] = useState('')
    const [showSymbols, setShowSymbols] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const addSymbol = (symbol: string) => {
        if(enabled) {
            setValue((prev) => prev + symbol)
            // 커서를 맨 뒤로
            setTimeout(() => {
                inputRef.current?.focus()
            }, 0)
        }
    }

    return (
        <section className="space-y-4 mb-10">
            <h2 className="text-sm font-bold text-[#322A24]">{t('payment:order_item_info')}</h2>
            <div className="border shadow-md rounded-md p-6 space-y-4">
                <div className="flex gap-4 items-start">
                    <Image
                        src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
                        alt="product"
                        width={72}
                        height={72}
                        className="w-[72px] h-[72px]"
                    />
                    <div className="flex-1 space-y-3 text-xs">
                        <div className="font-bold text-[#C0BCB6]">GRANHAND</div>
                        <div className="space-y-1">
                            <div className="font-medium text-[#322A24] mt-1">Lumberjack Multi Perfume</div>
                            <div className="text-sm text-[#322A24] font-bold mt-1">35,000원</div>
                        </div>
                    </div>
                </div>
                <hr className="my-4 border-dashed" />
                <div className="space-y-1 text-xs text-[#6F6963]">
                    <div className="flex">
                        <span className="text-[#C0BCB6] w-24 leading-[20px]">{t('payment:option')}</span>
                        <span>롤랑 멀티퍼퓸 100ml / 1개</span>
                    </div>
                    <div className="flex">
                        <span className="text-[#C0BCB6] w-24">{t('payment:shopping_bag')}</span>
                        <span>추가 구매 (+500원)</span>
                    </div>
                </div>
                <hr className="my-4 border-dashed" />
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium text-sm text-[#322A24]">{t('payment:stamping_title')}</h3>
                        <Switch
                            checked={enabled}
                            onCheckedChange={setEnabled}
                            className={enabled ? "bg-[#322A24]" : "bg-[#FDFBF5] border"}
                        />
                    </div>
                    <div className="flex items-center gap-2 relative">
                        <Input
                            type="text"
                            placeholder={`${t('payment:stamping_placeholder')}`}
                            className="h-[46px] flex-1 border !border-[#C0BCB6] rounded px-3 py-3 text-sm text-[#322A24] placeholder:text-[#C0BCB6]"
                            ref={inputRef}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            disabled={!enabled}
                        />
                        <Button
                            className="w-[72px] h-[46px] text-sm bg-[#322A2408] text-[#6F6963]"
                            onClick={() => setShowSymbols((prev) => !prev)}
                        >
                            {t('payment:special_character')}
                        </Button>
                        {showSymbols && (
                            <div className="absolute top-full right-0 mt-2 border rounded bg-[#D9D9D9] p-2 flex gap-2 shadow-lg z-10 w-[204px] h-[39.96px]">
                                {symbols.map((sym, index) => (
                                    <Button
                                        key={index}
                                        onClick={() => addSymbol(sym)}
                                        className="!w-[20px] !h-[20px] !p-0 bg-[#FDFBF5] rounded shadow hover:bg-[#322A2408] text-[10px] font-bold"
                                    >
                                        {sym}
                                    </Button>
                                ))}
                            </div>
                        )}
                    </div>
                    <p className="text-[10px] text-[#6F6963] mt-2">
                        <span className="leading-[18px]">{t('payment:stamping_constraint')}</span><br />
                        {t('payment:refund_constraint')}
                    </p>
                </div>
            </div>
        </section>
    )
}