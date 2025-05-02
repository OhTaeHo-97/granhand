import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CooperationDetaliPage() {
    return (
        <main className="flex-1 border p-12">
            {/* <h1 className="text-2xl font-bold">제휴 문의 관리</h1> */}
            <div className="flex justify-between items-center mb-15">
                <div className="text-black text-sm space-y-4">
                    <h1 className="text-2xl font-bold">제휴 문의 관리</h1>
                </div>
                <div className="space-x-2">
                    <Button variant="outline" className="text-black bg-white border w-25">취소</Button>
                    <Button variant="outline" className="text-white bg-black w-25">회신</Button>
                </div>
            </div>

            <div className="mb-6">
                <h2 className="font-semibold text-base">글 작성</h2>
                <div className="mt-6 border-t">
                <div className="grid grid-cols-[150px_2.02fr_150px_1fr] border-b border-gray-200 h-14">
                    <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2 border-b">
                    제목
                    </div>
                    <div className="flex gap-2 items-center p-2 ml-3">
                    협력 제안
                    </div>
                    <div className="border-r border-gray-200 flex items-center justify-center p-2 border-l bg-[#f8f4f0] h-14 border-b">
                    날짜
                    </div>
                    <div className="flex items-center p-2 ml-3">
                    2024-01-14
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr_150px_1fr_150px_1fr] border-b border-gray-200 h-14">
                <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2 border-b">
                    성함
                    </div>
                    <div className="flex gap-2 items-center p-2 ml-3">
                    홍길동
                    </div>
                    <div className="border-r border-gray-200 flex items-center justify-center p-2 border-l bg-[#f8f4f0] h-14 border-b">
                    휴대폰번호
                    </div>
                    <div className="flex items-center p-2 ml-3">
                    010-1234-5678
                    </div>
                    <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2 border-b">
                    이메일주소
                    </div>
                    <div className="flex gap-2 items-center p-2 ml-3">
                    asdasdasdasds@gmail.com
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 min-h-40">
                    <div className="border-r border-gray-200 flex items-center justify-center p-5 border-l bg-[#f8f4f0] h-full border-b">
                        내용
                    </div>
                    <div className="flex items-center p-2">
                        안녕하세요. 하이데브 홍길동입니다.
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 min-h-40">
                    <div className="border-r border-gray-200 flex items-center justify-center p-5 border-l bg-[#f8f4f0] h-full border-b">
                        사진
                    </div>
                    <div className="flex items-center p-2">
                        안녕하세요. 하이데브 홍길동입니다.
                    </div>
                </div>
                </div>
            </div>


            <div>
                <div className="flex">
                    <h2 className="font-semibold text-base">회신</h2>
                    <span className="border border-red-500 text-red-500 rounded-full px-4 py-1 text-sm font-semibold">
                        대기중
                    </span>
                </div>
                <div className="mt-6 border-t">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 min-h-20">
                    <div className="border-r border-gray-200 flex items-center justify-center p-5 border-l bg-[#f8f4f0] h-full border-b">
                        발송인
                    </div>
                    <div className="flex items-center p-2">
                        그랑핸드, {"<"}hello@granhand.com{">"}
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 min-h-40">
                    <div className="border-r border-gray-200 flex items-center justify-center p-5 border-l bg-[#f8f4f0] h-full border-b">
                        내용
                    </div>
                    <div className="flex items-center p-2">
                        
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 min-h-40">
                    <div className="border-r border-gray-200 flex items-center justify-center p-5 border-l bg-[#f8f4f0] h-full border-b">
                        사진
                    </div>
                    <div className="flex items-center p-2">
                        
                    </div>
                </div>
                
                
                </div>
            </div>
        </main>
    )

// {/* <div className="shadow-sm p-8">
// <section>
//     <div className="flex items-center gap-3 mb-4">
//         <h2 className="font-semibold text-base">주문 정보</h2>
//         <Button className="border p-2 h-8">전체 보기</Button>
//     </div>
//     <OrderInfo />
// </section>
// </div> */}
//     )
}