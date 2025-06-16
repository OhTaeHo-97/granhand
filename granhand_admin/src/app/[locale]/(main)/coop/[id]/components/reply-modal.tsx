import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera, ImageUpIcon, X } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false })

// export default function ReplyModal({ sender, recipient, open, setOpen, t }: { sender: string, recipient: string, open: boolean, setOpen: (value: boolean) => void, t: (key: string) => string }) {
export default function ReplyModal({ open, setOpen, t }: { open: boolean, setOpen: (value: boolean) => void, t: (key: string) => string }) {
    const [images, setImages] = useState<File[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [contents, setContents] = useState('')

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setImages((prev) => [...prev, e.target.files![0]])
        }
    }

    const handleImageUpload = async () => {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = 'image/*'

        input.onchange = async () => {
            const file = input.files?.[0]
            if(file) {
                // 서버 업로드
                // const formData = new FormData()
                // formData.append('file', file)
                // const res = await fetch('url', {
                //     method: 'POST',
                //     body: formData
                // })
                // const { url } = await res.json()

                // 업로드한 이미지 url 서버로부터 수신 및 마크다운 언어로 변경
                // const imageMarkdown = `![image](${url})`
                // 마크다운 언어로 작성하여 이미지 보여주기
                // setValue((prev) => (prev || '') + `\n${imageMarkdown}`)
            }
        }

        input.click()
    }

    const handleDelete = (index: number) => {
        setImages((prev) => prev.filter((_, i) => i !== index))
    }

    const handleSendEmail = () => {
        const confirmed = window.confirm('메일 발송하겠습니까?')

        if(confirmed) {
            console.log('메일 발송')
        } else {
            console.log('메일 발송 취소')
        }

        setOpen(false)
    }

    // ESC로 닫기
    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open, setOpen]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* 오버레이 */}
            <div
                className="fixed inset-0 bg-black/60"
                onClick={() => setOpen(false)}
                aria-hidden
            />
            {/* 모달 컨텐츠 */}
            <div className="relative bg-white w-full h-full max-w-6xl mx-auto my-0 rounded-none shadow-lg z-50 flex flex-col">
                <Button
                    onClick={() => setOpen(false)}
                    className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
                >
                    <X className="h-4 w-4" />
                </Button>
                <div className="flex-1 overflow-y-auto p-8">
                {/* 헤더 */}
                <div className="p-8 space-y-6 text-sm text-[#6f6963] max-w-6xl mx-auto h-full overflow-y-auto overflow-x-auto">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-[#111111]">{t('coop:reply_email')}</h1>
                    </div>
                    {/* 제목 */}
                    <section className="mt-14">
                        <h2 className="font-bold text-xl text-[#5E5955]">{t('coop:sent_email')}</h2>
                        <div className="border-l border-r border-gray-200 text-[#322A24] text-sm w-full bg-white mt-4 mb-7 min-w-178">
                            <div className="mt-6 border-t">
                                <div className="grid grid-cols-[110px_1fr] border-b border-gray-200 h-full">
                                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                                        <Label className="font-semibold">{t('coop:sender')}</Label>
                                    </div>
                                    <div className="flex items-center gap-4 p-5">
                                        {"그랑핸드, <hello@granhand.com>"}
                                    </div>
                                </div>
                                <div className="grid grid-cols-[110px_1fr] border-b border-gray-200 h-full">
                                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                                        <Label className="font-semibold">{t('coop:recipient')}</Label>
                                    </div>
                                    <div className="flex items-center gap-4 p-5">
                                        asdasdasds@gmail.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mt-8">
                        <h2 className="font-bold text-xl text-[#5E5955]">{t('coop:content')}</h2>
                        <div data-color-mode="light" className="w-full">
                            {/* 커스텀 툴바 */}
                            <div className="flex items-center px-2 py-1 gap-2 text-sm rounded-t-md w-full">
                                <Button
                                    onClick={handleImageUpload}
                                    className="!p-0 !m-0 hover:underline"
                                >
                                    <ImageUpIcon size={16} /> Upload Image
                                </Button>
                            </div>
                            {/* 마크다운 에디터 */}
                            <MDEditor
                                value={contents}
                                onChange={(val) => setContents(val || "")}
                                preview="live"
                                className="w-full min-h-96"
                            />
                        </div>
                        {/* <Textarea className="resize-none min-h-80 mt-4 w-full" onChange={(e) => setContent(e.target.value)} /> */}
                    </section>
                    <section>
                        <h2 className="font-bold text-xl text-[#5E5955]">{t('coop:image')}</h2>
                        <div className="space-y-2 mb-14">
                            <div className="text-sm text-[#6F6963] font-medium mt-4">{t('coop:image')} ({images.length}/3)</div>

                            <div className="flex gap-3">
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
                                            className="absolute -top-0 -right-0 bg-white border border-gray-300 rounded-full w-5 h-5 flex items-center justify-center text-gray-600 text-xs shadow-sm p-3"
                                        >
                                            <X className="w-3 h-3" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    {/* 하단 버튼 */}
                    <div className="flex justify-center gap-4 mt-8 w-full">
                        <Button variant="outline" className="min-w-1/6" onClick={() => setOpen(false)}>{t('coop:close')}</Button>
                        <Button className="bg-[#322A24] text-white min-w-1/6" onClick={handleSendEmail}>{t('coop:send_email')}</Button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}