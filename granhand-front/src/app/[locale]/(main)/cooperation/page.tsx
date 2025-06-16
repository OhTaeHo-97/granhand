'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { Camera, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { useTranslation } from "../../../../../utils/localization/client";
import { Trans } from "react-i18next";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CoopPage() {
    // const [agreed, setAgreed] = useState(false)
    const [agreed] = useState(false)
    const [content, setContent] = useState("")

    const [images, setImages] = useState<File[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null)

    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'settings'])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setImages((prev) => [...prev, e.target.files![0]])
        }
    }

    const handleDelete = (index: number) => {
        setImages((prev) => prev.filter((_, i) => i !== index))
    }

    return (
        <main className="container mx-auto px-6 min-h-screen">
            <section className="py-8">
                <h2 className={`text-xl font-semibold text-left mb-8 border-t pt-4 text-[#6F6963]`}>{t('settings:partnership')}</h2>
            </section>
            <div className="max-w-md mx-auto w-[358px]">
                <p className="text-sm text-[#322A24] mb-6">
                    <Trans
                        i18nKey="settings:partnership_info"
                        components={{
                            custom: <span className="text-[#C0BCB6] underline ml-1" />
                        }}
                    />
                {/* 개인 및 기업의 대량구매 문의는
                <span className="text-gray-400 underline ml-1">대량구매 신청서</span>를 통해 접수해주시기 바랍니다. */}
                </p>
        
                <form className="space-y-6">
                <div>
                    <label className="block font-semibold mb-2 text-[#322A24]">{t('settings:name')}*</label>
                    <Input
                    type="text"
                    placeholder={t('settings:name_placeholder')}
                    className="w-full border px-4 py-3 text-sm !border-[#C0BCB6] placeholder:text-[#C0BCB6] h-12"
                    />
                </div>
        
                <div>
                    <label className="block font-semibold mb-2 text-[#322A24]">{t('settings:phone')}*</label>
                    <Input
                    type="text"
                    placeholder={t('settings:phone_placeholder')}
                    className="w-full border px-4 py-3 text-sm !border-[#C0BCB6] placeholder:text-[#C0BCB6] h-12"
                    />
                </div>
        
                <div>
                    <label className="block font-semibold mb-2 text-[#322A24]">{t('settings:email')}*</label>
                    <Input
                    type="email"
                    placeholder={t('settings:email_placeholder')}
                    className="w-full border px-4 py-3 text-sm !border-[#C0BCB6] placeholder:text-[#C0BCB6] h-12"
                    />
                </div>
        
                <div>
                    <label className="block font-semibold mb-2 text-[#322A24]">{t('settings:subject')}*</label>
                    <Input
                    type="text"
                    placeholder={t('settings:subject_placeholder')}
                    className="w-full border px-4 py-3 text-sm !border-[#C0BCB6] placeholder:text-[#C0BCB6] h-12"
                    />
                </div>
        
                <div className="mt-8">
                    <label className="block font-semibold mb-2 text-[#322A24]">{t('settings:message')}*</label>
                    <div className="relative">
                    <Textarea
                        maxLength={1000}
                        placeholder={t('settings:message_placeholder')}
                        className="w-full h-60 border rounded px-4 py-3 text-sm resize-none !border-[#C0BCB6] placeholder:text-[#C0BCB6]"
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <div className="absolute bottom-2 right-3 text-xs text-gray-400">{content.length}/1000</div>
                    </div>
                </div>

                <div className="space-y-2 mb-14">
                    <div className="text-sm text-[#6F6963] font-medium">{t('settings:attachment')} ({images.length}/3)</div>

                    <div className="flex gap-3">
                        {/* 업로드 버튼 */}
                        {images.length < 3 && (
                            <Button
                                onClick={() => inputRef.current?.click()}
                                className="w-[66px] h-[66px] bg-[#322A2408] rounded flex items-center justify-center"
                            >
                                <Camera className="w-3 h-3 text-[#C0BCB6]" />
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
                            <div key={idx} className="relative w-[66px] h-[66px] bg-gray-300 rounded overflow-hidden">
                                <Image
                                src={URL.createObjectURL(img)}
                                alt={`uploaded-${idx}`}
                                className="object-cover w-full h-full"
                                width={400}
                                height={400}
                                />
                                <Button
                                onClick={() => handleDelete(idx)}
                                className="absolute -top-0 -right-0 bg-white border border-gray-300 rounded-full w-5 h-5 flex items-center justify-center text-gray-600 text-xs shadow-sm !p-2"
                                >
                                <X className="!w-4 h-4 text-[#5E5955]" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-4">
                        <Label className="flex items-center gap-4">
                            <Checkbox
                                id='address'
                                className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white block"
                            />
                            <div className="flex items-center text-[#6F6963]">
                                <span className="font-semibold">{t('settings:personal_info_collection')}</span>
                            </div>
                        </Label>
                    </div>
                    <ChevronRight className="text-[#5E5955]" />
                </div>
        
                <Button
                    className="w-full h-[46px] mt-4 bg-[#322A24] disabled:bg-[#DBD7D0] text-white font-bold"
                    disabled={!agreed}
                >
                    {t('settings:inquiry')}
                </Button>
                </form>
            </div>
        </main>
    )
}