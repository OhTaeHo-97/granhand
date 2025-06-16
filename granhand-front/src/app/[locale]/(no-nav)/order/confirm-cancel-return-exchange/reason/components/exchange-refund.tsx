'use client'

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { Camera, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { useTranslation } from "../../../../../../../../utils/localization/client";

export default function ExchangeRefundReason() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['order'])

    const exchangeOptions = [
        t('order:exchange_unsatisfied'),
        t('order:wrong_options'),
        t('order:defective'),
        t('order:missing_items'),
        t('order:wrong_product'),
        t('order:no_product'),
        t('order:wrong_address')
    ];

    const [images, setImages] = useState<File[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [content, setContent] = useState("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setImages((prev) => [...prev, e.target.files![0]])
        }
    }

    const handleDelete = (index: number) => {
        setImages((prev) => prev.filter((_, i) => i !== index))
    }
    
    return (
        <div className="max-w-md space-y-6 mx-auto mt-10">
            <div>
                <h2 className="font-medium text-[#322A24]">{t('order:exchange_reason_title')}</h2>
            </div>

            <RadioGroup>
                {exchangeOptions.map((label, index) => (
                    <label key={index} className="flex items-start gap-3 cursor-pointer space-y-4">
                        <RadioGroupItem
                            value={label}
                            className="w-[14px] h-[14px]"
                        >
                            <span className="text-xs text-[#6F6963] font-bold">{label}</span>
                        </RadioGroupItem>
                        <span className="text-xs text-[#6F6963] font-bold">{label}</span>
                    </label>
                ))}
            </RadioGroup>

            <div className="mt-8">
                <label className="block mb-2 text-xs font-bold text-[#322A24]">{t('order:exchange_details')} *</label>
                <div className="relative">
                <Textarea
                    maxLength={100}
                    placeholder={t('order:exchange_details_placeholder')}
                    className="w-[358px] h-[103px] border !border-[#C0BCB6] rounded px-4 py-3 text-sm placeholder-[#C0BCB6] resize-none"
                    onChange={(e) => setContent(e.target.value)}
                />
                <div className="absolute bottom-2 right-3 text-xs text-[#C0BCB6]">{content.length}/100</div>
                </div>
            </div>
            
            <div className="space-y-2 mb-14">
                <div className="text-[10px] text-[#6F6963]">{t('order:exchange_photo')} ({images.length}/3)</div>

                <div className="flex gap-3">
                    {/* 업로드 버튼 */}
                    {images.length < 3 && (
                        <Button
                            onClick={() => inputRef.current?.click()}
                            className="w-[66px] h-[66px] bg-[#322A2408] rounded flex items-center justify-center"
                        >
                            <Camera className="w-7 h-7 text-[#C0BCB6]" />
                            <input
                            ref={inputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                            />
                        </Button>
                    )}

                    {/* 업로드된 이미지들 */}
                    {images.map((img, idx) => (
                        <div key={idx} className="relative w-20 h-20 bg-gray-300 rounded overflow-hidden">
                            <Image
                            src={URL.createObjectURL(img)}
                            alt={`uploaded-${idx}`}
                            className="object-cover w-[66px] h-[66px]"
                            width={66}
                            height={66}
                            />
                            <Button
                            onClick={() => handleDelete(idx)}
                            className="absolute -top-0 -right-0 bg-white border border-gray-300 rounded-full !w-5 !h-5 flex items-center justify-center text-[#5E5955] text-xs shadow-sm !p-2"
                            >
                            <X className="!w-3 !h-3 text-[#5E5955]" />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>

            
            <div className="text-[10px] h-[266px] text-[#6F6963] bg-[#322A2408] p-6">
                <span className="font-bold">{t('order:exchange_policy_title')}</span>
                <ul className="list-disc space-y-1.5 px-6 pt-3 font-medium">
                    <li>{t('order:exchange_policy1')}</li>
                    <li>{t('order:exchange_policy2')}</li>
                    <li>{t('order:exchange_policy3')}</li>
                    <li>{t('order:exchange_policy4')}</li>
                    <li>{t('order:exchange_policy5')}</li>
                    <li>{t('order:exchange_policy6')}</li>
                    <li>{t('order:exchange_policy7')}</li>
                    <li>{t('order:exchange_policy8')}</li>
                </ul>
            </div>
        </div>
    )
}