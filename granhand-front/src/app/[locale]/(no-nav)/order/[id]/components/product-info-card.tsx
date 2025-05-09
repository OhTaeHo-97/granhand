import Image from "next/image";

export default function ProductInfoCard({ t }: { t: (key: string) => string }) {
    return (
        <div className="space-y-4">
            {/* 상단: 이미지 + 상품 정보 */}
            <div className="flex gap-4">
                <Image
                    src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
                    alt="product"
                    className="w-24 h-24 object-cover rounded"
                    width={1440}
                    height={1080}
                />
                <div className="flex flex-col justify-center">
                    <div className="text-xs font-bold text-gray-400">GRANHAND</div>
                    <div className="font-semibold mt-1 leading-relaxed">Roland Multi Perfume</div>
                    <div className="font-bold text-base mt-1">55,000원</div>
                </div>
            </div>

            {/* 하단: 옵션 정보 */}
            <div className="text-sm border-t border-dashed pt-4 space-y-1 text-gray-600">
                <div className="flex">
                    <span className="text-gray-400 w-24">{t('payment:option')}</span>
                    <span className="ml-4">롤랑 멀티퍼퓸 200ml / 1개</span>
                </div>
                <div className="flex">
                    <span className="text-gray-400 w-24">{t('payment:shopping_bag')}</span>
                    <span className="ml-4">구매 안함</span>
                </div>
                <div className="flex">
                    <span className="text-gray-400 w-24">{t('payment:is_stamping')}</span>
                    <span className="ml-4">N</span>
                </div>
            </div>
        </div>
    )
}