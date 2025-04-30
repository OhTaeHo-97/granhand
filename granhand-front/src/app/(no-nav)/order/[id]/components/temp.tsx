import Image from "next/image";

export default function OrderDetailPage() {
    return (
        <div className="container mx-auto px-6 pt-8 min-w-2xl">
            <section className="py-8">
                <h2 className={`text-lg font-medium text-left pt-4`}>주문 상세</h2>
            </section>

            <main className="w-full max-w-6xl mx-auto px-4 py-4 space-y-10">
                <div className="flex justify-between text-sm text-gray-500">
                    <span className="font-semibold">No.1293812300921</span>
                    <span>2023.10.23 09:29</span>
                </div>

                {/* 주문 상품 정보 */}
                <section className="rounded-lg space-y-4 bg-white">
                <h2 className="text-base font-bold">주문 상품 정보</h2>

                
                <div className="border rounded-md p-4 px-10 space-y-4 shadow-md">
                    <div className="text-sm font-semibold text-gray-700">취소 완료</div>

                    <div className="flex gap-4">
                    <Image
                        src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
                        alt="product"
                        className="w-24 h-24 object-cover rounded"
                        width={1440}
                        height={1080}
                    />
                    <div className="flex flex-col justify-between gap-0.5">
                        <div className="text-xs font-bold text-gray-500">GRANHAND</div>
                        <div>
                            <div className="font-semibold mt-1 leading-relaxed">Roland Multi Perfume</div>
                            <div className="font-bold text-base mt-1">55,000원</div>
                        </div>
                    </div>
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

                    <div className="grid grid-cols-2 gap-2 text-sm mt-4">
                    <button className="py-2 rounded bg-gray-50">배송 조회</button>
                    <button className="py-2 rounded bg-gray-50">교환/반품 신청</button>
                    </div>
                </div>

                {/* // 수정본 */}
                {/* <div className="border rounded-md p-4 px-10 space-y-4 shadow-md">
                    <div className="text-sm font-semibold text-gray-700">취소 완료</div>

                    <div className="flex gap-4">
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
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-sm mt-4">
                        <button className="py-2 rounded bg-gray-50">배송 조회</button>
                        <button className="py-2 rounded bg-gray-50">교환/반품 신청</button>
                    </div>
                </div> */}
                </section>

                {/* 주문 상품 정보 + 결제 금액 */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 text-sm text-gray-600">
                    <h2 className="font-semibold text-black mb-2 text-base">주문 상품 정보</h2>
                    <div className="mt-4 space-y-1 text-sm pt-4 space-y-2">
                        <div className="flex">
                            <span className="text-gray-400 w-24">받는 분</span>
                            <span>홍*동</span>
                        </div>
                        <div className="flex">
                            <span className="text-gray-400 w-24">연락처</span>
                            <span>010-*****-5678</span>
                        </div>
                        <div className="flex">
                            <span className="text-gray-400 w-24">주소</span>
                            <span>[47291] 부산 부산진구 서전로</span>
                        </div>
                        <div className="flex">
                            <span className="text-gray-400 w-24">요청사항</span>
                            <span>벨 누르지 말고 노크 똑똑 2번만 해주세요.</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-md text-sm text-gray-600 space-y-2">
                    <h2 className="font-semibold text-black">최종 결제 금액</h2>
                    <div className="border rounded-md p-4 space-y-3 shadow-md">
                        <div className="flex justify-between">
                        <span>상품금액</span>
                        <span>55,000원</span>
                        </div>
                        <div className="flex justify-between">
                        <span>배송비</span>
                        <span>0원</span>
                        </div>
                        <div className="flex justify-between">
                        <span>쿠폰 할인</span>
                        <span className="text-black">-5,000원</span>
                        </div>
                        <div className="flex justify-between">
                        <span>포인트 사용</span>
                        <span className="text-black">-5,000원</span>
                        </div>
                        <hr className="my-2 border-dashed" />
                        <div className="flex justify-between font-semibold text-black">
                        <span>결제 금액</span>
                        <span>45,000원</span>
                        </div>
                        <div className="text-xs text-gray-400 ml-2">신용카드 결제 (현대카드)</div>
                    </div>
                </div>
                </section>

                {/* 환불 정보 */}
                {/* <section className="max-w-md ml-auto bg-white border rounded-md p-4 text-sm text-gray-600 space-y-2">
                <h2 className="font-semibold text-black">최종 결제 금액</h2>
                <div className="flex justify-between">
                    <span>결제 금액</span>
                    <span className="font-bold text-black">33,539원</span>
                </div>
                <div className="flex justify-between">
                    <span>상품금액</span>
                    <span>35,500원</span>
                </div>
                <div className="flex justify-between">
                    <span>배송비</span>
                    <span>0원</span>
                </div>
                <div className="flex justify-between">
                    <span>쿠폰 사용</span>
                    <span>-1,961원</span>
                </div>
                <div className="flex justify-between">
                    <span>포인트 사용</span>
                    <span>0</span>
                </div>
                <hr className="my-2" />
                <div className="text-gray-400">차감 금액</div>
                <div className="flex justify-between">
                    <span>추가 배송비</span>
                    <span>0원</span>
                </div>
                <div className="flex justify-between">
                    <span>반품 배송비</span>
                    <span>0원</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold text-black">
                    <span>환불 금액</span>
                    <span>33,539원</span>
                </div>
                <div className="text-xs text-gray-400 ml-2">신용카드 (현대카드)</div>
                <div className="flex justify-between">
                    <span className="font-semibold text-black">포인트 환불</span>
                    <span>0</span>
                </div>
                </section> */}
                <section className="w-full bg-white border rounded-md p-4 text-sm text-gray-600 space-y-2">
                    <h2 className="font-semibold text-black">최종 결제 금액</h2>
                    <div className="flex justify-between">
                        <span>결제 금액</span>
                        <span className="font-bold text-black">33,539원</span>
                    </div>
                    <div className="flex justify-between">
                        <span>상품금액</span>
                        <span>35,500원</span>
                    </div>
                    <div className="flex justify-between">
                        <span>배송비</span>
                        <span>0원</span>
                    </div>
                    <div className="flex justify-between">
                        <span>쿠폰 사용</span>
                        <span>-1,961원</span>
                    </div>
                    <div className="flex justify-between">
                        <span>포인트 사용</span>
                        <span>0</span>
                    </div>
                    <hr className="my-2" />
                    <div className="text-gray-400">차감 금액</div>
                    <div className="flex justify-between">
                        <span>추가 배송비</span>
                        <span>0원</span>
                    </div>
                    <div className="flex justify-between">
                        <span>반품 배송비</span>
                        <span>0원</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-semibold text-black">
                        <span>환불 금액</span>
                        <span>33,539원</span>
                    </div>
                    <div className="text-xs text-gray-400 ml-2">신용카드 (현대카드)</div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-black">포인트 환불</span>
                        <span>0</span>
                    </div>
                </section>
            </main>
        </div>
    );
}