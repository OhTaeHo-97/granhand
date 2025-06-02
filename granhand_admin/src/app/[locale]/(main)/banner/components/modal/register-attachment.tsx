import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { Omega, X } from "lucide-react";
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
    // const [startDate, setStartDate] = useState<Date | undefined>(new Date())
    // const [startHour, setStartHour] = useState(new Date().getHours())
    // const [startMinute, setStartMinute] = useState(new Date().getMinutes())
    // const [endDate, setEndDate] = useState<Date | undefined>(new Date())
    // const [endHour, setEndHour] = useState(new Date().getHours())
    // const [endMinute, setEndMinute] = useState(new Date().getMinutes())
    // const [image, setImage] = useState<FileItem | null>(null)
    // const [images, setImages] = useState<FileItem[]>([])
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

    // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files && e.target.files[0]) {
    //         const file = e.target.files[0]
    //         const localId = `${file.name}-${file.size}-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`
    //         const previewUrl = URL.createObjectURL(file)

    //         // 이전 이미지의 URL 해제
    //         if(banner?.image.image) {
    //             URL.revokeObjectURL(banner.image.image.previewUrl)
    //         }
    //         // if(image) {
    //         //     URL.revokeObjectURL(image.previewUrl)
    //         // }

    //         if(banner?.image.image) {
    //             banner.image.image.file = file
    //             banner.image.image.localId = localId
    //             banner.image.image.previewUrl = previewUrl
    //         }

    //         // setImage({
    //         //     file: file,
    //         //     localId: localId,
    //         //     previewUrl: previewUrl
    //         // })
    //         e.target.value = ''

    //         console.log('banner:', banner)



    //         // const filesArray = Array.from(e.target.files)

    //         // const filesWithPreview: FileItem[] = filesArray.map((file) => {
    //         //     const localId = `${file.name}-${file.size}-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`
    //         //     const previewUrl = URL.createObjectURL(file)
    //         //     return {
    //         //         file: file,
    //         //         localId: localId,
    //         //         previewUrl: previewUrl,
    //         //     } as FileItem
    //         // })
    //         // setImages((prevFiles) => [...prevFiles, ...filesWithPreview])
    //         // e.target.value = ''
    //     }
    // }

    useEffect(() => {
        return () => {
            if(localBanner?.image.image) {
                URL.revokeObjectURL(localBanner.image.image.previewUrl)
            }
            // if(image) {
            //     URL.revokeObjectURL(image.previewUrl)
            // }
        }
        // return () => {
        //     images.forEach((file) => URL.revokeObjectURL(file.previewUrl))
        // }
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

            // banner.image.image.previewUrl = newPreviewUrl

            // return () => {
            //     if(banner.image.image) {
            //         URL.revokeObjectURL(banner.image.image.previewUrl)
            //     }
            // }
        }

        // return () => {
        //     if(banner?.image.image) {
        //         URL.revokeObjectURL(banner.image.image.previewUrl)
        //     }
        // }

        return () => {
            if(localBanner?.image.image) {
                URL.revokeObjectURL(localBanner.image.image.previewUrl)
            }
        }



        // if (open && image) {
        //     const newPreviewUrl = URL.createObjectURL(image.file)
        //     setImage((prev) => prev ? { ...prev, previewUrl: newPreviewUrl } : null)

        //     return () => {
        //         if(image) {
        //             URL.revokeObjectURL(image.previewUrl)
        //         }
        //     }

        //     // const updatedImagesWithPreview = images.map(img => {
        //     //     const newPreviewUrl = URL.createObjectURL(img.file)
        //     //     return { ...img, previewUrl: newPreviewUrl } as FileItem
        //     // });
        //     // setImages(updatedImagesWithPreview)

        //     // return () => {
        //     //     images.forEach(file => URL.revokeObjectURL(file.previewUrl))
        //     // }
        // }

        // return () => {
        //     if(image) {
        //         URL.revokeObjectURL(image.previewUrl)
        //     }
        // }
        
        // return () => images.forEach(file => URL.revokeObjectURL(file.previewUrl))
    }, [open])

    const handleDelete = () => {
        // if(banner?.image.image) {
        //     URL.revokeObjectURL(banner.image.image.previewUrl)
        //     banner.image.image = null
        // }
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

    // const handleDelete = () => {
    //     if(image) {
    //         URL.revokeObjectURL(image.previewUrl)
    //         setImage(null)
    //     }
    // }

    // const handleDelete = (index: number) => {
    //     setImages((prev) => prev.filter((_, i) => i !== index))
    // }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-white !min-w-fit !min-h-fit">
                <div className="w-full h-full overflow-y-auto p-8">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-[#5E5955]">첨부파일 등록</DialogTitle>
                    </DialogHeader>
                    <div className="text-[#6F6963] text-sm w-full bg-white min-w-120 mt-5">
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-center p-2">
                                <Label className="font-semibold">이미지</Label>
                            </div>
                            <div className="flex items-center gap-4 p-5">
                                <Button
                                    variant="outline"
                                    className="text-[#5E5955]"
                                    onClick={() => inputRef.current?.click()}
                                >
                                    {t('store:attachment')}
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
                                {/* {image && (
                                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded">
                                        <span>{image.file.name}</span>
                                        <Button
                                            onClick={handleDelete}
                                            className="text-gray-500 hover:text-black h-5 p-0"
                                        >
                                            <X size={16} />
                                        </Button>
                                    </div>
                                )} */}
                                {/* {images.map((img, idx) => (
                                    <div key={img.localId} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded">
                                        <span>{img.file.name}</span>
                                        <Button
                                            onClick={() => handleDelete(idx)}
                                            className="text-gray-500 hover:text-black h-5 p-0"
                                        >
                                            <X size={16} />
                                        </Button>
                                    </div>
                                ))} */}
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-center p-2">
                                <Label className="font-semibold">미리보기</Label>
                            </div>
                            <div className="flex items-center gap-4 p-5">
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

                                        {/* {image.file.type && image.file.type.startsWith('image/') && (
                                            <Image
                                                src={image.previewUrl}
                                                alt={`Preview of ${image.file.name}`}
                                                width={400}
                                                height={400}
                                                style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px', objectFit: 'cover' }}
                                            />
                                        )} */}
                                    </div>
                                )}
                                {/* {images.map((img) => (
                                    <div key={img.localId} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded">
                                        {img.file.type && img.file.type.startsWith('image/') && (
                                            <Image
                                                src={img.previewUrl}
                                                alt={`Preview of ${img.file.name}`}
                                                width={400}
                                                height={400}
                                                style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px', objectFit: 'cover' }}
                                            />
                                        )}
                                    </div>
                                ))} */}
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-center p-2">
                                <Label className="font-semibold">링크</Label>
                            </div>
                            <div className="flex items-center gap-4 p-5">
                                <Select>
                                    <SelectTrigger className="w-25">
                                        <SelectValue placeholder="선택" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="journal">저널</SelectItem>
                                        <SelectItem value="event">이벤트</SelectItem>
                                        <SelectItem value="product">상품</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="목록" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="1">느리게 나이 드는 방법</SelectItem>
                                        <SelectItem value="2">팀 그랑핸드 2024 신년 계획</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-center p-2">
                                <Label className="font-semibold">시각 (시작 - 종료)</Label>
                            </div>
                            <div className="flex items-center gap-4 p-5">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="ghost">
                                            <Input
                                                type="text"
                                                value={localBanner?.image.startDate ? `${format(localBanner.image.startDate, "yyyy-MM-dd")} ${String(localBanner.image.startHour).padStart(2, '0')}:${String(localBanner.image.startMinute).padStart(2, '0')}` : "날짜 선택"}
                                                // value={startDate ? `${format(startDate, "yyyy-MM-dd")} ${String(startHour).padStart(2, '0')}:${String(startMinute).padStart(2, '0')}` : "날짜 선택"}
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
                                        // onSave={(selectedDate, time) => {
                                        //     if(banner?.image) {
                                        //         banner.image.startDate = selectedDate
                                        //         const times = time.split(':')
                                        //         banner.image.startHour = Number(times[0])
                                        //         banner.image.startMinute = Number(times[1])
                                                
                                        //     }
                                        //     // setStartDate(selectedDate)
                                        //     // const times = time.split(':')
                                        //     // setStartHour(Number(times[0]))
                                        //     // setStartMinute(Number(times[1]))
                                        //     // alert(`${startDate?.toLocaleDateString()} ${time}`)
                                        // }}
                                        />
                                        {/* <CustomCalendarWithTime initialDate={startDate} initialTime={`${String(startHour).padStart(2, '0')}:${String(startMinute).padStart(2, '0')}`} onCancel={() => alert('취소')} onSave={(selectedDate, time) => {
                                            setStartDate(selectedDate)
                                            const times = time.split(':')
                                            setStartHour(Number(times[0]))
                                            setStartMinute(Number(times[1]))
                                            alert(`${startDate?.toLocaleDateString()} ${time}`)
                                        }} /> */}
                                    </PopoverContent>
                                </Popover>
                                <span>-</span>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="ghost">
                                            <Input
                                                type="text"
                                                value={localBanner?.image.endDate ? `${format(localBanner.image.endDate, "yyyy-MM-dd")} ${String(localBanner.image.endHour).padStart(2, '0')}:${String(localBanner.image.endMinute).padStart(2, '0')}` : "날짜 선택"}
                                                // value={endDate ? `${format(endDate, "yyyy-MM-dd")} ${String(endHour).padStart(2, '0')}:${String(endMinute).padStart(2, '0')}` : "날짜 선택"}
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
                                            // onSave={(selectedDate, time) => {
                                            // if(banner?.image) {
                                            //     banner.image.endDate = selectedDate
                                            //     const times = time.split(':')
                                            //     banner.image.endHour = Number(times[0])
                                            //     banner.image.endMinute = Number(times[1])
                                            //     // alert(`${endDate?.toLocaleDateString()} ${time}`)
                                            // }

                                            // // setEndDate(selectedDate)
                                            // // const times = time.split(':')
                                            // // setEndHour(Number(times[0]))
                                            // // setEndMinute(Number(times[1]))
                                            // // alert(`${endDate?.toLocaleDateString()} ${time}`)
                                            // }}
                                        />
                                        {/* <CustomCalendarWithTime initialDate={endDate} initialTime={`${String(endHour).padStart(2, '0')}:${String(endMinute).padStart(2, '0')}`} onCancel={() => alert('취소')} onSave={(selectedDate, time) => {
                                            setEndDate(selectedDate)
                                            const times = time.split(':')
                                            setEndHour(Number(times[0]))
                                            setEndMinute(Number(times[1]))
                                            alert(`${endDate?.toLocaleDateString()} ${time}`)
                                        }} /> */}
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <div className="flex justify-center gap-4">
                        <Button variant="outline" className="w-1/6 text-[#322A24] hover:bg-[#322A2408] p-6 min-w-fit" onClick={() => setOpen(false)}>{t('cancel')}</Button>
                        <Button className="w-1/6 bg-[#322A24] text-white hover:bg-[#322A2408] p-6 min-w-fit" onClick={() => setOpen(false)}>{t('store:upload')}</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}