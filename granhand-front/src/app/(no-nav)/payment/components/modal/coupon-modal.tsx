import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function CouponModal({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-white max-w-2xl">
                <DialogHeader>
                    <DialogTitle className="flex text-2xl">쿠폰 사용 안내</DialogTitle>
                </DialogHeader>
                {/* 본문 */}
                <div className="space-y-8 text-[#48413A] mt-8">
                    {/* 1. 사용 조건 */}
                    <div>
                        <div className="font-bold text-xl mb-2">1. 사용 조건</div>
                        <ul className="list-disc pl-6 space-y-1 text-base font-normal">
                        <li>쿠폰간 중복 사용은 불가하며, 각 쿠폰은 구매 시 1회 적용 가능합니다.</li>
                        <li>할인 쿠폰의 할인 금액이 상품의 판매가 또는 총 주문 금액을 초과할 경우 사용 불가능합니다.</li>
                        <li>최소 구매 금액이 있는 쿠폰의 경우 금액이 충족되어야 사용 가능합니다.</li>
                        </ul>
                    </div>
                    {/* 2. 유효기간 */}
                    <div>
                        <div className="font-bold text-xl mb-2">2. 유효기간</div>
                        <ul className="list-disc pl-6 space-y-1 text-base font-normal">
                        <li>사용기간이 지난 쿠폰은 자동으로 소멸되며, 재발행 되지 않습니다.</li>
                        <li>쿠폰의 유효기간은 별도 명시된 기간을 따릅니다.</li>
                        </ul>
                    </div>
                    {/* 3. 쿠폰의 회수 및 제한 */}
                    <div>
                        <div className="font-bold text-xl mb-2">3. 쿠폰의 회수 및 제한</div>
                        <ul className="list-disc pl-6 space-y-1 text-base font-normal">
                        <li>쿠폰 사용기간 종료 후 취소/반품 시 쿠폰은 재발급되지 않습니다.</li>
                        <li>주문 부분 취소 및 부분 반품 시 쿠폰 할인이 적용된 상품이 남아 있을 경우 쿠폰은 재발급되지 않습니다.</li>
                        <li>주문 부분 취소 및 부분 반품으로 인해 최소 주문 금액 조건 미달 시, 쿠폰 할인 금액을 제외한 실 결제 금액이 환불처리됩니다.</li>
                        <li>일부 상품은 구매 시 쿠폰 적용이 제한될 수 있습니다.</li>
                        <li>주문 취소 및 반품(귀책 무관)으로 인한 동일 쿠폰의 재발급은 최대 3회까지 가능하며, 재발급 최대 횟수를 초과한 경우 쿠폰이 재발급 되지 않습니다.</li>
                        </ul>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}