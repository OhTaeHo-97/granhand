import Image from "next/image";

export default function  ProductInfo({ t }: { t: (key: string) => string }) {
    return (
        // 주문 상품 정보
        <section className="rounded-lg space-y-4 bg-[#FDFBF5]">
            <h2 className="text-xs font-bold">{t('order:cancel_item')}</h2>

            <div className="border rounded-md p-4 px-10 space-y-4 shadow-md h-[302px] w-[739px]">
                <div className="flex gap-4">
                    <Image
                        src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
                        alt="product"
                        className="w-[72px] h-[72px] object-cover rounded"
                        width={72}
                        height={72}
                    />
                    <div className="flex flex-col justify-center text-xs text-[#322A24]">
                        <div className="font-bold text-[#C0BCB6]">GRANHAND</div>
                        <div className="font-medium mt-1 leading-relaxed">Roland Multi Perfume</div>
                        <div className="text-sm font-bold mt-1">55,000원</div>
                    </div>
                </div>
                {/* 중간: 옵션 정보 */}
                <div className="text-xs border-t border-dashed pt-4 space-y-1 text-[#6F6963]">
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
                    <div className="flex">
                        <span className="text-[#C0BCB6] w-24">{t('payment:stamping_title')}</span>
                        <span className="ml-4">GRANHAND</span>
                    </div>
                </div>
                {/* 하단: 취소 정보 */}
                <div className="text-xs border-t border-dashed pt-4 space-y-1 text-[#C0BCB6]">
                    <span className="flex justify-between text-[#FF3E24]">취소 완료</span>
                    <div className="ml-2">└ 취소 사유 : 재주문</div>
                </div>
            </div>
        </section>
    )
}