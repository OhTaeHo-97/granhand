import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function OrderDetailPage() {
    return (
        <main className="flex-1 border p-12">
            <div className="text-black text-sm space-y-4">
                <h1 className="text-2xl font-bold">주문 상세 정보</h1>
            </div>

            <div className="p-4 mt-10">
                {/* 구매자 정보 */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">구매자 정보</h3>
                    <div className="grid grid-cols-[120px_1fr_60px_1fr] gap-4 items-center mb-2">
                        <label className="text-gray-700">구매자 명</label>
                        <Input defaultValue="홍길동" readOnly />
                        <label className="text-gray-700 text-right">아이디</label>
                        <Input defaultValue="honghong@gmail.com" readOnly />
                    </div>
                    <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
                        <label className="text-gray-700">연락처</label>
                        <Input defaultValue="01099991111" readOnly />
                    </div>
                </div>

                {/* 배송 정보 */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">배송 정보</h3>
                    <div className="grid grid-cols-[120px_1fr_60px_1fr] gap-4 items-center mb-2">
                        
                    </div>
                </div>


                <div className="space-y-4">
                <h3 className="font-semibold text-lg">배송 정보</h3>

                <div>
                    <label className="block mb-1">수령인 명</label>
                    <Input defaultValue="홍길순" className="w-full max-w-md" />
                </div>
                <div>
                    <label className="block mb-1">연락처</label>
                    <Input defaultValue="01099991111" className="w-full max-w-md" />
                </div>
                </div>
            </div>

            {/* <div className="p-4">
                <div className="grid-cols-2">
                    <div>
                    <label className="block mb-1">구매자 명</label>
                    <Input defaultValue="홍길동" className="w-full max-w-md" />
                    </div>
                    <div>
                    <label className="block mb-1">아이디</label>
                    <Input defaultValue="honghong@gmail.com" className="w-full max-w-md" />
                    </div>
                </div>
                <label className="block mb-1">연락처</label>
                        <Input defaultValue="01099991111" className="w-full max-w-md" />
                <div> */}
                {/* <div className="space-y-4">
                    <h3 className="font-semibold text-lg">구매자 정보</h3>
                    <div>
                        <label className="block mb-1">구매자 명</label>
                        <Input defaultValue="홍길동" className="w-full max-w-md" />
                    </div>
                    <div>
                        <label className="block mb-1">연락처</label>
                        <Input defaultValue="01099991111" className="w-full max-w-md" />
                    </div>
                </div> */}

                {/* 아이디 */}
                {/* <div className="space-y-4">
                    <div>
                        <label className="block mb-1">아이디</label>
                        <Input defaultValue="honghong@gmail.com" className="w-full min-w-[250px]" />
                    </div>
                </div>
            </div> */}

            {/* 배송 정보 */}
            {/* <div className="space-y-4">
                <h3 className="font-semibold text-lg">배송 정보</h3>

                <div>
                    <label className="block mb-1">수령인 명</label>
                    <Input defaultValue="홍길순" className="w-full max-w-md" />
                </div>
                <div>
                    <label className="block mb-1">연락처</label>
                    <Input defaultValue="01099991111" className="w-full max-w-md" />
                </div> */}

                {/* 배송지 */}
                {/* <div className="flex gap-2 items-center">
                    <div>
                        <label className="block mb-1">배송지</label>
                        <Input defaultValue="00100" className="w-36" />
                    </div>
                    <Button variant="outline">배송지 수정</Button>
                </div> */}

                {/* 주소 */}
                {/* <div className="flex gap-2">
                    <Input defaultValue="서울시 종로구 8" className="w-full" />
                    <Input defaultValue="1층 101호" className="w-52" />
                </div> */}

                {/* 요청사항 */}
                {/* <div>
                    <label className="block mb-1">배송 요청사항</label>
                    <Input defaultValue="벨 누르지 말고 똑똑 2번만 해주세요." className="w-full" />
                </div>
                </div> */}
            {/* </div> */}
        </main>
    )
}