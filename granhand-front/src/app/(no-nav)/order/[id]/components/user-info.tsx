export default function UserInfo() {
    return (
        <div className="space-y-2 text-sm text-gray-600">
            <h2 className="font-semibold text-black mb-2 text-base">주문 상품 정보</h2>
            <div className="mt-4 text-sm pt-4 space-y-2">
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
    )
}