import Information from "@/components/information";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ExchangeRefundAddress from "./exchange-refund-address";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ExchangeForm() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
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
                <Information bgColor = "bg-gray-200" title = "교환 유의사항" contents={[
                    {
                        elem: '상품은 원래 상태 그대로 재포장해 주세요.'
                    },
                    {
                        elem: '회사 측의 과실로 사유 선택 후 구매자의 과실로 최종 확인될 경우 왕복 배송비가 청구되거나, 교환이 거부될 수 있습니다.'
                    },
                    {
                        elem: '개봉 스티커가 훼손된 경우, 개봉 및 사용 흔적이 있는 경우 교환이 어려울 수 있으며 착불로 반송될 수 있습니다.'
                    }
                ]} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="bg-white rounded-md text-sm text-gray-600 space-y-2 w-full">
                    <h2 className="font-semibold text-black text-base">회수/배송 정보 확인</h2>
                    <ExchangeRefundAddress title="회수지 정보" info={{name: '홍길동', phone: '010-1234-5678', address: '부산광역시 부전동 서전로 8번길 현대카드'}} />
                    <ExchangeRefundAddress title="배송지 정보" info={{name: '홍길동', phone: '010-1234-5678', address: '부산광역시 부전동 서전로 8번길 현대카드'}} />
                </div>
                <div className="space-y-6">
                    {/* 교환 : 구매자 과실 사유 */}
                    <div className="bg-white rounded-md text-sm text-gray-600 space-y-2 w-full">
                        <h2 className="font-semibold text-black text-base">배송비 결제 수단</h2>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <Button className="border rounded py-2 min-h-12">신용/체크카드</Button>
                            <Button className="border rounded py-2 min-h-12">토스 앱 계좌이체</Button>
                            <Button className="border rounded py-2 min-h-12">네이버페이</Button>
                            <Button className="border rounded py-2 min-h-12">무통장 입금</Button>
                        </div>
                    </div>
                    <div className="bg-white text-sm text-gray-600 space-y-2 w-full">
                        <h2 className="font-semibold text-black text-base">교환 배송비 안내</h2>
                        <div className="w-full border flex justify-between p-5">
                            <div className="text-gray-600">왕복 배송비</div>
                            <div className="text-black font-semibold">6,000원</div>
                        </div>
                    </div>

                    {/* 교환 : 향 변경 */}
                    {/* <div className="bg-white rounded-md text-sm text-gray-600 space-y-2 w-full">
                        <h2 className="font-semibold text-black text-base">교환 옵션 선택</h2>
                        <Select>
                            <SelectTrigger className="w-full border rounded px-4 py-2 text-sm h-15">
                                <SelectValue placeholder="옵션을 선택해 주세요." />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="scent1">우디</SelectItem>
                                <SelectItem value="scent2">향1</SelectItem>
                                <SelectItem value="scent3">향2</SelectItem>
                            </SelectContent>
                        </Select>
                    </div> */}
                </div>
            </div>
        </>
    )
}