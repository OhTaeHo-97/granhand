import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CustomCalendarWithTime from "../../../push/components/calendar";
import Image from "next/image";
import { Banner } from "../mobile";

export interface FileItem {
    file: File
    previewUrl: string
    localId: string
}

export default function RegisterAttachmentModal({ banner, open, setOpen, t, onBannerChange }: { banner?: Banner | null, open: boolean, setOpen: (v: boolean) => void, t: (key: string) => string, onBannerChange: (updatedBanner: Banner) => void }) {
    const [localBanner, setLocalBanner] = useState<Banner | null>(banner || null)
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        setLocalBanner(banner || null)
    }, [banner])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0] && localBanner) {
            const file = e.target.files[0]
            const localId = `${file.name}-${file.size}-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`
            const previewUrl = URL.createObjectURL(file)
            
            // 이전 이미지의 URL 해제
            if(localBanner.image.image) {
                URL.revokeObjectURL(localBanner.image.image.previewUrl)
            }

            // 새로운 banner 객체 생성
            const updatedBanner = {
                ...localBanner,
                image: {
                    ...localBanner.image,
                    image: {
                        file,
                        localId,
                        previewUrl
                    }
                }
            }

            // 부모 컴포넌트에 변경사항 전달
            setLocalBanner(updatedBanner)
            onBannerChange(updatedBanner)
            e.target.value = ''
        }
    }

    useEffect(() => {
        return () => {
            if(localBanner?.image.image) {
                URL.revokeObjectURL(localBanner.image.image.previewUrl)
            }
        }
    }, [localBanner?.image.image])

    useEffect(() => {
        if(open && localBanner?.image.image) {
            const newPreviewUrl = URL.createObjectURL(localBanner.image.image.file)

            setLocalBanner((prev) => {
                if(!prev) return null
                return {
                    ...prev,
                    image: {
                        ...prev.image,
                        image: {
                            ...prev.image.image!,
                            previewUrl: newPreviewUrl
                        }
                    }
                }
            })

            return () => {
                if(localBanner.image.image) {
                    URL.revokeObjectURL(localBanner.image.image.previewUrl)
                }
            }
        }

        return () => {
            if(localBanner?.image.image) {
                URL.revokeObjectURL(localBanner.image.image.previewUrl)
            }
        }
    }, [open])

    const handleDelete = () => {
        if(localBanner?.image.image) {
            URL.revokeObjectURL(localBanner.image.image.previewUrl)

            const updatedBanner = {
                ...localBanner,
                image: {
                    ...localBanner.image,
                    image: null
                }
            }

            setLocalBanner(updatedBanner)
            onBannerChange(updatedBanner)
        }
    }

    const handleDateChange = (type: 'start' | 'end', selectedDate: Date, time: string) => {
        if(!localBanner) return

        const times = time.split(':')
        const hour = Number(times[0])
        const minute = Number(times[1])

        const updatedBanner = {
            ...localBanner,
            image: {
                ...localBanner.image,
                ...(type === 'start'
                    ? { startDate: selectedDate, startHour: hour, startMinute: minute }
                    : { endDate: selectedDate, endHour: hour, endMinute: minute }
                )
            }
        }

        setLocalBanner(updatedBanner)
        onBannerChange(updatedBanner)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {/* <DialogContent className="w-full h-full overflow-y-auto overflow-x-auto p-8 bg-white min-w-200"> */}
            <DialogContent className="bg-white max-w-170 min-h-80 w-full overflow-auto mx-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-[#5E5955]">{t('banner:attach_file')}</DialogTitle>
                </DialogHeader>
                <div className="mb-6 text-[#111111]">
                    <div className="border border-[#DBD7D0] text-[#5E5955] text-sm w-full bg-white min-w-120 mt-5">
                        <div className="grid grid-cols-[150px_1fr] border-b h-full">
                            <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                                <Label className="font-semibold">{t('banner:image')}</Label>
                            </div>
                            <div className="flex p-3 items-center gap-4 relative">
                                <Button
                                    variant="outline"
                                    className="text-[#5E5955] !p-1 !py-0"
                                    onClick={() => inputRef.current?.click()}
                                >
                                    {t('banner:attach_file')}
                                    <Input
                                        ref={inputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                </Button>
                                {localBanner?.image.image && (
                                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded">
                                        <span>{localBanner.image.image.file.name}</span>
                                        <Button
                                            onClick={handleDelete}
                                            className="text-gray-500 hover:text-black h-5 p-0"
                                        >
                                            <X size={16} />
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="grid grid-cols-[150px_1fr] border-b h-full min-h-40">
                            <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                                <Label className="font-semibold">{t('banner:preview')}</Label>
                            </div>
                            <div className="flex p-3 items-center gap-4 relative">
                                {localBanner?.image.image && (
                                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded">
                                        {localBanner.image.image.file.type && localBanner.image.image.file.type.startsWith('image/') && (
                                            <Image
                                                src={localBanner.image.image.previewUrl}
                                                alt={`Preview of ${localBanner.image.image.file.name}`}
                                                width={400}
                                                height={400}
                                                style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px', objectFit: 'cover' }}
                                            />
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="grid grid-cols-[150px_1fr] border-b h-full">
                            <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                                <Label className="font-semibold">{t('banner:link')}</Label>
                            </div>
                            <div className="flex p-3 items-center gap-4 relative">
                                <Select>
                                    <SelectTrigger className="w-25">
                                        <SelectValue placeholder={t('banner:select')} />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="journal">{t('banner:journal')}</SelectItem>
                                        <SelectItem value="event">{t('banner:event')}</SelectItem>
                                        <SelectItem value="product">{t('banner:product')}</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder={t('banner:list')} />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="1">느리게 나이 드는 방법</SelectItem>
                                        <SelectItem value="2">팀 그랑핸드 2024 신년 계획</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-[150px_1fr] h-full">
                            <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                                <Label className="font-semibold">{t('banner:time')}</Label>
                            </div>
                            <div className="flex p-3 items-center gap-4 relative">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="ghost">
                                            <Input
                                                type="text"
                                                value={localBanner?.image.startDate ? `${format(localBanner.image.startDate, "yyyy-MM-dd")} ${String(localBanner.image.startHour).padStart(2, '0')}:${String(localBanner.image.startMinute).padStart(2, '0')}` : "날짜 선택"}
                                                className={`text-sm px-2 py-1`}
                                                readOnly
                                            />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 bg-white">
                                        <CustomCalendarWithTime
                                            initialDate={localBanner?.image.startDate ? localBanner.image.startDate : new Date()}
                                            initialTime={localBanner?.image ? '09:00' : `${String(localBanner?.image.startHour).padStart(2, '0')}:${String(localBanner?.image.startMinute).padStart(2, '0')}`}
                                            onCancel={() => alert('취소')}
                                            onSave={(selectedDate, time) => handleDateChange('start', selectedDate, time)}
                                        />
                                    </PopoverContent>
                                </Popover>
                                <span>-</span>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="ghost">
                                            <Input
                                                type="text"
                                                value={localBanner?.image.endDate ? `${format(localBanner.image.endDate, "yyyy-MM-dd")} ${String(localBanner.image.endHour).padStart(2, '0')}:${String(localBanner.image.endMinute).padStart(2, '0')}` : "날짜 선택"}
                                                className={`text-sm px-2 py-1`}
                                                readOnly
                                            />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 bg-white">
                                        <CustomCalendarWithTime
                                            initialDate={localBanner?.image.endDate ? localBanner.image.endDate : new Date()}
                                            initialTime={localBanner?.image ? `${String(localBanner.image.endHour).padStart(2, '0')}:${String(localBanner.image.endMinute).padStart(2, '0')}` : '09:00'}
                                            onCancel={() => alert('취소')}
                                            onSave={(selectedDate, time) => handleDateChange('end', selectedDate, time)}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <div className="flex items-center justify-center gap-4">
                        <Button variant="outline" className="w-1/6 text-[#322A24] hover:bg-[#322A2408] p-6 min-w-fit" onClick={() => setOpen(false)}>{t('cancel')}</Button>
                        <Button className="w-1/6 bg-[#322A24] text-white hover:bg-[#322A2408] p-6 min-w-fit" onClick={() => setOpen(false)}>{t('banner:upload')}</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}