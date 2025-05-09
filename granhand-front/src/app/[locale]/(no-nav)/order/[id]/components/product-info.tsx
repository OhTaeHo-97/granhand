import Image from "next/image";

export default function ProductInfo({ t }: {t: (key: string) => string }) {
    return (
        // 주문 상품 정보
        <section className="rounded-lg space-y-4 bg-white">
            <h2 className="text-base font-bold">{t('payment:order_item_info')}</h2>

            <div className="border rounded-md p-4 px-10 space-y-4 shadow-md">
                <div className="text-sm font-semibold text-gray-700">취소 완료</div>

                {/* <div className="flex gap-4">
                    <Image
                        src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
                        alt="product"
                        className="w-24 h-24 object-cover rounded"
                        width={1440}
                        height={1080}
                    />
                    <div className="flex flex-col justify-between gap-0.5 w-full">
                        <div className="text-xs font-bold text-gray-500">GRANHAND</div>
                        <div>
                            <div className="font-semibold mt-1 leading-relaxed">Roland Multi Perfume</div>
                            <div className="font-bold text-base mt-1">55,000원</div>
                        </div>
                        <div className="mt-4 space-y-1 text-sm border-t border-dashed pt-4">
                            <div className="flex">
                                <span className="text-gray-400 w-24">옵션</span>
                                <span>롤랑 멀티퍼퓸 200ml / 1개</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-400 w-24">쇼핑백</span>
                                <span>구매 안함</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-400 w-24">스탬핑 여부</span>
                                <span>N</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm mt-4">
                    <button className="py-2 rounded bg-gray-50">배송 조회</button>
                    <button className="py-2 rounded bg-gray-50">교환/반품 신청</button>
                </div> */}
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

                <div className="grid grid-cols-2 gap-2 text-sm mt-4">
                    <button className="py-2 rounded bg-gray-50">{t('order:track')}</button>
                    <button className="py-2 rounded bg-gray-50">{t('order:exchange_return')}</button>
                </div>
            </div>
        </section>
    )
}