'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import MembershipLevelSelect from "../../components/membership-level";
import { getLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import TargetAudienceModal from "./target-audience-modal";

export default function PushSendPage() {
    const locale = getLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'push')

    const [targetModalOpen, setTargetModalOpen] = useState(false)
    const [selectedTarget, setSelectedTarget] = useState('')
    const [images, setImages] = useState<File[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setImages((prev) => [...prev, e.target.files![0]])
        }
    }

    const handleDelete = (index: number) => {
        setImages((prev) => prev.filter((_, i) => i !== index))
    }

    return (
        <>
            {/* 발송 타입 */}
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-10">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('send_type')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                    <RadioGroup className="flex gap-6">
                        <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="immediate_send" /> {t('immediate_send')}
                        </Label>
                        <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="schedule_send" /> {t('schedule_send')}
                        </Label>
                    </RadioGroup>
                    </div>
                </div>

                {/* 두 번째 행 */}
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('target_audience')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <RadioGroup className="flex gap-6" defaultValue={selectedTarget} onValueChange={(value) => {
                            setSelectedTarget(value)
                            if(value === 'specific_member') {
                                setTargetModalOpen(true)
                            }
                        }}>
                            <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="all_member" /> {t('all_member')}
                            </Label>
                            <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="specific_member" /> {t('specific_member')}
                            </Label>
                            <Label className="flex items-center gap-2 min-w-20">
                                <RadioGroupItem value="members_level" /> {t('members_level')}
                            </Label>
                        </RadioGroup>
                        <MembershipLevelSelect />
                    </div>
                </div>
            </div>

            {/* 제목 */}
            <div className="space-y-6 mt-8">
                <Label className="font-semibold block">
                    <h2 className="font-bold text-xl text-[#5E5955]">{t('push_title')}</h2>
                    <Input type="text" placeholder={t('up_to_40')} className="mt-3 h-14" />
                </Label>
            </div>

            {/* 내용 */}
            <div className="space-y-6 mt-8">
                <Label className="font-semibold block">
                    <h2 className="font-bold text-xl text-[#5E5955]">{t('push_content')}</h2>
                    <Input placeholder={t('up_to_140')} className="mt-3 h-14" />
                </Label>
            </div>

            {/* 이미지 등록 */}
            <div className="space-y-6 mt-8">
                <Label className="font-semibold block">
                    <h2 className="font-bold text-xl text-[#5E5955]">{t('upload_image')}</h2>
                        <div className="flex gap-3 mt-3">
                        {/* 업로드 버튼 */}
                        {images.length < 3 && (
                            <Button
                                onClick={() => inputRef.current?.click()}
                                className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center border border-gray-200"
                            >
                                <Camera className="w-3 h-3 text-gray-400" />
                                <Input
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
                                className="object-cover w-full h-full"
                                width={400}
                                height={400}
                                />
                                <Button
                                onClick={() => handleDelete(idx)}
                                className="absolute -top-0 -right-0 bg-white border border-gray-300 rounded-full w-5 h-5 flex items-center justify-center text-gray-600 text-xs shadow-sm"
                                >
                                <X className="w-3 h-3" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </Label>
            </div>

            {/* 링크 등록 */}
            <div className="space-y-6 mt-8">
                <Label className="font-semibold block">
                    <h3 className="font-bold text-base text-[#5E5955]">{t('add_link')}</h3>
                    <div className="flex gap-2 border p-4 mt-3">
                        <Select>
                            <SelectTrigger className="w-32 h-8 border-gray-300 data-[placeholder]:text-[#5E5955]">
                            <SelectValue placeholder="선택" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="event">이벤트</SelectItem>
                                <SelectItem value="product">상품</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-64 h-8 border-gray-300 data-[placeholder]:text-[#5E5955]">
                            <SelectValue placeholder="목록" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="list">목록</SelectItem>
                                <SelectItem value="granhand">그랑핸드</SelectItem>
                            </SelectContent>
                        </Select>
                        {/* <Input placeholder="목록" className="h-8" /> */}
                    </div>
                </Label>
            </div>

            {/* 버튼 */}
            <div className="flex justify-center pt-4 mt-8">
                <Button className="bg-[#322A24] text-white h-10 w-40">{t('send_push')}</Button>
            </div>
            <TargetAudienceModal open={targetModalOpen} setOpen={setTargetModalOpen} />
        </>
    )
}