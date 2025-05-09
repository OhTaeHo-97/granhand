import Image from "next/image";

export default function GiftCard() {
    return (
        <div className="relative h-48 w-full mt-4">
            <Image
                src="/lovable-uploads/sample-gift-image.jpg" // 실제 경로로 교체해주세요
                alt="Gift"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex p-7">
                <p className="text-white text-lg font-medium">고마운 마음을 담아 보냅니다.</p>
            </div>
        </div>
    )
}