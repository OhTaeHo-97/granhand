import GiftCard from "./gift-card";

export default function GiftInfo() {
    return (
        <section className="bg-white rounded-md overflow-hidden shadow-md max-w-sm">
            <h2 className="text-base font-bold">선물 받는 분 정보</h2>
            {/* <div className="relative h-48 w-full mt-4">
                <Image
                    src="/lovable-uploads/sample-gift-image.jpg" // 실제 경로로 교체해주세요
                    alt="Gift"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex p-7">
                    <p className="text-white text-lg font-medium">고마운 마음을 담아 보냅니다.</p>
                </div>
            </div> */}
            <GiftCard />

            <div className="px-6 py-4 text-sm text-gray-600">
                <div className="flex mb-1">
                <span className="w-20 text-gray-400">받는 분</span>
                <span>홍*동 (카카오톡)</span>
                </div>
                <div className="flex mb-4">
                <span className="w-20 text-gray-400">선물 상태</span>
                <span>선물 수락</span>
                </div>

                <button className="w-full border rounded py-2 text-sm font-semibold text-gray-700">
                메시지 다시 보내기
                </button>
            </div>
        </section>
    )
}