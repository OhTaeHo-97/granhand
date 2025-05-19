'use client'

import { Button } from "@/components/ui/button";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import GallaryUpload from "./gallary-upload";
import { useState } from "react";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";

export default function StoreContents() {
    const [open, setOpen] = useState(false)
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'store'])

    return (
        <div className="p-6 shadow-sm">
            <div>
                <div className="mb-4 justify-between flex items-center">
                    <div className="text-[#5E5955] font-bold text-base">
                        {t('store:gallery')} <span className="text-[#FF3E24]">112</span>
                    </div>
                    <div className="flex gap-2">
                        <Button className="bg-[#322A24] text-white" onClick={() => setOpen((prev) => !prev)}>
                            <ImageIcon className="!w-4 !h-4" /> {t('store:upload')}
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-4">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <div key={i} className="relative">
                            <Image src='/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png' alt="hi" width={250} height={250} className="w-full h-auto object-cover rounded" />
                            <Button
                                className="absolute top-2 right-2 bg-white border text-[#5E5955] text-xs rounded px-3 py-0"
                                // onClick={() => handleDelete(index)}
                            >
                                {t('store:delete')}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
            <GallaryUpload open={open} setOpen={setOpen} t={t} />
        </div>
    )
}