import Image from "next/image";

export default function ProductInfo({ t }: { t: (key: string) => string }) {
    return (
        // 주문 상품 정보
        <section className="rounded-lg space-y-4 bg-white">
            <h2 className="text-base font-bold">{t('order:cancel_item')}</h2>

            <div className="border rounded-md p-4 px-10 space-y-4 shadow-md">
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
                {/* 중간: 옵션 정보 */}
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
                    <div className="flex">
                        <span className="text-gray-400 w-24">{t('payment:stamping_title')}</span>
                        <span className="ml-4">GRANHAND</span>
                    </div>
                </div>
                {/* 하단: 취소 정보 */}
                <div className="text-sm border-t border-dashed pt-4 space-y-1 text-gray-600">
                    <span className="flex justify-between font-semibold text-red-400">취소 완료</span>
                    <div className="text-xs text-gray-400 ml-2">└ 취소 사유 : 재주문</div>
                </div>
            </div>
        </section>
    )
}