import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function PointModal({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-white max-w-2xl">
                <DialogHeader>
                    <DialogTitle className="flex text-2xl">포인트 사용 안내</DialogTitle>
                </DialogHeader>
                {/* 본문 */}
                <div className="space-y-8 text-[#48413A] mt-8">
                    {/* 1. 포인트 적립 */}
                    <div>
                        <div className="font-bold text-xl mb-2">1. 포인트 적립</div>
                        <ul className="list-disc pl-6 space-y-1 text-base font-normal">
                        <li>구매 및 이벤트 참여를 통해 포인트를 적립 받을 수 있습니다.</li>
                        <li>적립 기준은 참여 이벤트마다 상이합니다.</li>
                        <li>그랑핸드&콤포타블 온/오프라인 결제에 공통으로 적용됩니다.</li>
                        <li>구매로 인한 적립은 소비자의 구매확정 또는 배송 완료일 기준 7일 이후에 자동 적립됩니다.</li>
                        </ul>
                    </div>
                    {/* 2. 사용/유효기간 */}
                    <div>
                        <div className="font-bold text-xl mb-2">2. 사용/유효기간</div>
                        <ul className="list-disc pl-6 space-y-1 text-base font-normal">
                        <li>최소 1,000원부터 사용할 수 있으며, 포인트는 유효기간 임박 순으로 사용됩니다.</li>
                        <li>포인트는 타인에게 선물 및 양도가 불가합니다.</li>
                        <li>주문 취소로 인한 포인트 환급 시, 유효기간이 긴 순으로 환급 처리됩니다.</li>
                        <li>구입한 상품 환불/반품 시 구매 포인트는 자동 소멸되며, 반품 배송비 혹은 다른 결제 용도로 사용이 불가합니다.</li>
                        <li>모든 포인트는 지급 시 유효기간 명시하고, 명시되지 않은 경우 지급일로부터 1년 내 사용을 기준으로 합니다.</li>
                        </ul>
                    </div>
                    {/* 3. 소멸 */}
                    <div>
                        <div className="font-bold text-xl mb-2">3. 소멸</div>
                        <ul className="list-disc pl-6 space-y-1 text-base font-normal">
                        <li>포인트를 사용하지 않으면 유효기간 도래 시 자동 소멸됩니다.</li>
                        <li>회원 탈퇴 시, 해당 회원이 보유한 포인트는 즉시 소멸되며, 서비스에 재가입하더라도 소멸된 포인트는 복구되지 않습니다.</li>
                        </ul>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}