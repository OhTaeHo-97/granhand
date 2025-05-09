import Image from "next/image"

export default function StoreContents() {
    return (
        <div className="mt-10">
            {/* 중단: 설명 텍스트 */}
            <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-gray-900">그랑핸드 광화문</span>
                <span className="text-gray-400">강남구 연주로164길 17 3층</span>
            </div>

            {/* 이미지 그리드 */}
            <div className="min-h-screen bg-white p-4 space-y-4">
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                    {/* 첫 행: 왼쪽 큰 사진, 오른쪽 위 작은 사진 */}
                    <div className="row-span-2 relative">
                        <Image
                            src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
                            alt="img1"
                            fill
                            className="object-cover rounded"
                            style={{ minHeight: 0 }}
                        />
                    </div>
                    <div className="relative h-[50%] min-h-[200px]">
                        <Image
                            src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
                            alt="img2"
                            fill
                            className="object-cover rounded"
                        />
                    </div>
                    {/* 두 번째 행: 오른쪽 아래 작은 사진 */}
                    <div className="relative h-[50%] min-h-[200px]">
                        <Image
                            src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
                            alt="img3"
                            fill
                            className="object-cover rounded"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4">
                        <div className="relative h-[260px]">
                            <Image
                            src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
                            alt="img2"
                            fill
                            className="object-cover rounded"
                            />
                        </div>
                        <div className="relative h-[260px]">
                            <Image
                            src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
                            alt="img3"
                            fill
                            className="object-cover rounded"
                            />
                        </div>
                    </div>
                    <div className="relative h-[540px]">
                        <Image
                            src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
                            alt="img1"
                            fill
                            className="object-cover rounded"
                        />
                    </div>
                </div>
            </div>
        </div>
    )



    // <div className="grid grid-cols-2 grid-rows-2 gap-4">
    //                 {/* 두 번째 행: 왼쪽 위 작은 사진 */}
    //                 <div className="relative h-[50%] min-h-[200px]">
    //                 <Image
    //                     src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
    //                     alt="img5"
    //                     fill
    //                     className="object-cover rounded"
    //                 />
    //                 </div>
    //                 {/* 두 번째 행: 왼쪽 아래 작은 사진 */}
    //                 <div className="relative h-[50%] min-h-[200px]">
    //                 <Image
    //                     src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
    //                     alt="img6"
    //                     fill
    //                     className="object-cover rounded"
    //                 />
    //                 </div>

    //                 {/* 두 번째 행: 오른쪽 큰 사진 */}
    //                 <div className="row-span-2 relative">
    //                 <Image
    //                     src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
    //                     alt="img4"
    //                     fill
    //                     className="object-cover rounded"
    //                     style={{ minHeight: 0 }}
    //                 />
    //                 </div>
    //             </div>
}