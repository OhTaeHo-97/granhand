import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ProductInfoCard from "../../../[id]/components/product-info-card";
import ExchangeRefundAddress from "./exchange-refund-address";
import RefundInfoBox from "../../../[id]/components/refund-info-box";
import Information from "@/components/information";

export default function ExchangeRefundPage({ t }: { t: (key: string) => string }) {
    return (
        <div className="w-full max-w-3xl mx-auto mb-20">
            <div className="rounded-lg space-y-4 bg-white mb-10">
                <h2 className="text-base font-bold text-gray-700">교환/환불 상품 정보</h2>
                <div className="border rounded-md p-6 space-y-6 bg-white">
                    <ProductInfoCard t={t} />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                <div>
                    <div className="bg-white rounded-md text-sm text-gray-600 space-y-2 w-full">
                        <h2 className="font-semibold text-black text-base">해결 방법 선택</h2>
                        <RadioGroup className="p-4 pl-12">
                            {['교환', '반품 후 환불'].map((label, index) => (
                                <label key={index} className="flex items-start gap-3 cursor-pointer space-y-6">
                                    <RadioGroupItem
                                        value={label}
                                    >
                                        <span className="text-sm text-gray-800">{label}</span>
                                    </RadioGroupItem>
                                    <span className="text-sm text-gray-800">{label}</span>
                                </label>
                            ))}
                        </RadioGroup>
                    </div>
                    <div className="bg-white rounded-md text-sm text-gray-600 space-y-2 w-full">
                        <h2 className="font-semibold text-black text-base">회수/배송 정보 확인</h2>
                        <ExchangeRefundAddress title="회수지 정보" info={{name: '홍길동', phone: '010-1234-5678', address: '부산광역시 부전동 서전로 8번길 현대카드'}} />
                    </div>
                    <div className="bg-white rounded-md text-sm text-gray-600 space-y-2 w-full mt-6">
                        <h2 className="font-semibold text-black text-base">환불 정보</h2>
                        <RefundInfoBox t={t} />
                    </div>
                </div>
                <Information bgColor = "bg-gray-200" title = "결제수단별 환불 안내" contents={[
                    {
                        elem: '신용카드/체크카드',
                        sub: ['취소 완료일로부터 5 영업일 이내 승인 취소됩니다.']
                    },
                    {
                        elem: '무통장 환불',
                        sub: ['취소 완료일로부터 5 영업일 이내 환불 신청하신 계좌로 입금됩니다.']
                    },
                    {
                        elem: '네이버페이 환불',
                        sub: ['간편 신용/체크 카드 : 취소 완료 후 3-5일 영업일 이후 환불됩니다.', '간편 계좌이체 환불 : 취소 완료 즉시 환불(은행 점검 시간 제외) 됩니다.', '포인트 : 취소 완료 즉시 환불됩니다.']
                    },
                    {
                        elem: '포인트 환불',
                        sub: ['취소 완료 즉시 환불']
                    }
                ]} />
            </div>
        </div>
    )
}