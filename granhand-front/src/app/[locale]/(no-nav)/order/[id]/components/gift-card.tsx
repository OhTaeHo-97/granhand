import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";

export default function GiftCard() {
    const [message, setMessage] = useState('')

    return (
        <div className="relative w-[342px] h-[180px]">
            <Image
                src="/lovable-uploads/sample-gift-image.jpg" // 실제 경로로 교체해주세요
                alt="Gift"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex p-7">
                <Textarea
                    value={message}
                    maxLength={100}
                    placeholder="메시지를 입력하세요."
                    onChange={(e) => setMessage(e.target.value)}
                    className="text-white border-none font-medium placeholder:text-white resize-none"
                    defaultValue="고마운 마음을 담아 보냅니다."
                />
            </div>
            <div className="absolute bottom-1 bg-black right-1 bg-opacity-30 flex">
                {message.length}/100
            </div>
        </div>
    )
}