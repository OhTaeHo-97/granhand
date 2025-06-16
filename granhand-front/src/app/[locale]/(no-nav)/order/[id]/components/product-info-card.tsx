import Image from "next/image";

export default function ProductInfoCard({ t, currentLocale }: { t: (key: string) => string, currentLocale: string }) {
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
                <div className="flex-1 space-y-3">
                    <div className="text-sm font-bold text-[#C0BCB6]">GRANHAND</div>
                    <div className="space-y-1">
                        <div className="text-sm font-semibold text-[#322A24] mt-1">Roland Multi Perfume</div>
                        <div className="text-base text-[#322A24] font-bold mt-1">55,000{currentLocale === '' ? '원' : ' KRW'}</div>
                    </div>
                </div>
            </div>

            {/* 하단: 옵션 정보 */}
            <div className="text-sm border-t border-dashed pt-4 space-y-1 text-[#6F6963]">
                <div className="flex">
                    <span className="text-[#C0BCB6] w-24">{t('payment:option')}</span>
                    <span className="ml-4">롤랑 멀티퍼퓸 200ml / 1개</span>
                </div>
                <div className="flex">
                    <span className="text-[#C0BCB6] w-24">{t('payment:shopping_bag')}</span>
                    <span className="ml-4">구매 안함</span>
                </div>
                <div className="flex">
                    <span className="text-[#C0BCB6] w-24">{t('payment:is_stamping')}</span>
                    <span className="ml-4">N</span>
                </div>
            </div>
        </div>
    )
}