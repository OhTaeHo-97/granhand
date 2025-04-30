import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PaymentInfo from "../../../[id]/components/payment-info";
import { Input } from "@/components/ui/input";
import Information from "@/components/information";

export default function CancelForm() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <PaymentInfo />
                <div className="space-y-2">
                    <div className="space-y-2 w-full">
                        <h2 className="font-semibold text-black text-base">환불 계좌</h2>
                        <div className="rounded-md space-y-3">
                            <Select>
                                <SelectTrigger className="w-full border rounded px-4 py-2 text-sm h-15">
                                    <SelectValue placeholder="은행을 선택해 주세요." />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="shinhan">신한</SelectItem>
                                    <SelectItem value="kb">국민</SelectItem>
                                    <SelectItem value="nh">농협</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="rounded-md space-y-3 mt-2">
                            <Input type="text" placeholder="계좌번호를 입력해 주세요.(-제외)" className="h-15" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100">
                {/* <div className="text-xs text-gray-500 p-4 px-10">
                    <span className="font-bold">결제수단별 환불 안내</span>
                    <ul className="list-disc space-y-1.5 px-4 py-2">
                        <li>
                            신용카드/체크카드<br />
                            <span>취소 완료일로부터 5 영업일 이내 승인 취소됩니다.</span>
                        </li>
                        <li>
                            무통장 환불<br />
                            <span>취소 완료일로부터 5 영업일 이내 환불 신청하신 계좌로 입금됩니다.</span>
                        </li>
                    </ul>
                </div> */}
                <Information title="결제수단별 환불 안내" contents={[
                    {
                        elem: '신용카드/체크카드',
                        sub: ['취소 완료일로부터 5 영업일 이내 승인 취소됩니다.']
                    },
                    {
                        elem: '무통장 환불',
                        sub: ['취소 완료일로부터 5 영업일 이내 환불 신청하신 계좌로 입금됩니다.']
                    }
                ]} />
                <Information bgColor="bg-gray-100" contents={[
                    {
                        elem: '네이버페이 환불',
                        sub: ['간편 신용/체크 카드 : 취소 완료 후 3-5일 영업일 이후 환불됩니다.', '포인트 : 취소 완료 즉시 환불됩니다.']
                    },
                    {
                        elem: '포인트 환불',
                        sub: ['취소 완료 즉시 환불']
                    }
                ]} />
                {/* <div className="text-xs text-gray-500 p-6 px-10">
                    <ul className="list-disc space-y-1.5">
                        <li>
                            네이버페이 환불<br />
                            <span>간편 신용/체크 카드 : 취소 완료 후 3-5일 영업일 이후 환불됩니다.</span><br />
                            <span>포인트 : 취소 완료 즉시 환불됩니다.</span>
                        </li>
                        <li>
                            포인트 환불<br />
                            <span>취소 완료 즉시 환불</span>
                        </li>
                    </ul>
                </div> */}
            </div>
        </>
    )
}