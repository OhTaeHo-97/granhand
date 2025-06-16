import Image from "next/image"

export default function StoreContents() {
    return (
        <div className="mt-10">
            {/* 중단: 설명 텍스트 */}
            <div className="flex items-center gap-2 text-[10px]">
                <span className="font-medium text-[#322A24]">그랑핸드 광화문</span>
                <span className="text-[#C0BCB6]">강남구 연주로164길 17 3층</span>
            </div>

            {/* 이미지 그리드 */}
            <div className="min-h-screen mt-4 space-y-4">
            {/* grid-cols-2  */}
                <div className="grid grid-cols-[739px_357px] grid-rows-2 gap-4">
                    {/* 첫 행: 왼쪽 큰 사진, 오른쪽 위 작은 사진 */}
                    <div className="row-span-2 relative">
                        <Image
                            src="/store-big.png"
                            alt="img1"
                            fill
                            className="object-cover rounded"
                        />
                    </div>
                    <div className="relative h-[50%] min-h-[200px]">
                        <Image
                            src="/store-small1.png"
                            alt="img2"
                            fill
                            className="object-cover rounded"
                        />
                    </div>
                    {/* 두 번째 행: 오른쪽 아래 작은 사진 */}
                    <div className="relative h-[50%] min-h-[200px]">
                        <Image
                            src="/store-small2.png"
                            alt="img3"
                            fill
                            className="object-cover rounded"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-[357px_739px] gap-4">
                    <div className="flex flex-col gap-4">
                        <div className="relative h-[260px]">
                            <Image
                                src="/store-small1.png"
                                alt="img2"
                                fill
                                className="object-cover rounded"
                            />
                        </div>
                        <div className="relative h-[260px]">
                            <Image
                                src="/store-small2.png"
                                alt="img3"
                                fill
                                className="object-cover rounded"
                            />
                        </div>
                    </div>
                    <div className="relative h-[540px]">
                        <Image
                            src="/store-big.png"
                            alt="img1"
                            fill
                            className="object-cover rounded"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}