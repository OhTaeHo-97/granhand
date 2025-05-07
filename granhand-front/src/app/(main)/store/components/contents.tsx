import Image from "next/image"

export default function StoreContents() {
    return (
        <div className="mt-10">
            {/* 중단: 설명 텍스트 */}
            <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-gray-900">그랑핸드 광화문</span>
                <span className="text-gray-400">강남구 연주로164길 17 3층</span>
            </div>

            {/* 하단: 이미지 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                {/* 왼쪽 큰 이미지 */}
                <Image
                    src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
                    alt="Main store image"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                />

                {/* 오른쪽 2개 이미지 */}
                <div className="grid grid-cols-1 gap-8">
                <Image
                    src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
                    alt="Store inside 1"
                    width={600}
                    height={200}
                    className="w-full h-auto object-cover"
                />
                <Image
                    src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
                    alt="Store inside 2"
                    width={600}
                    height={200}
                    className="w-full h-auto object-cover"
                />
                </div>

                {/* 하단 2개 이미지 (왼쪽) */}
                <Image
                    src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
                    alt="Store inside 3"
                    width={600}
                    height={200}
                    className="w-full h-auto object-cover"
                />
                <Image
                    src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
                    alt="Store inside 3"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                />

                {/* 하단 1개 큰 이미지 (오른쪽) */}
                <Image
                    src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
                    alt="Store entrance"
                    width={600}
                    height={200}
                    className="w-full h-auto object-cover"
                />
            </div>  
        </div>
    )
}