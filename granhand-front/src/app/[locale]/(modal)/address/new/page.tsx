'use client'

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AddressInputPage() {
    const router = useRouter()

    return (
        <div className="min-h-screen bg-[#FAF8F5] flex flex-col px-3">
        {/* 상단 */}
        <div className="flex items-center py-6">
            <Button onClick={() => router.back()} className="text-3xl mr-4"><ChevronLeftIcon className="!w-7 !h-7" /></Button>
            <span className="text-2xl font-semibold">배송지 입력</span>
        </div>
        {/* <div className='w-full mx-auto items-center flex justify-center'>
            <Button className="w-[90%] max-w-md py-4 border border-[#CFC9BC] rounded text-xl mb-10 h-13">
                새 배송지 추가
        </Button>
        </div> */}
        {/* 본문 */}
        {/* <div className="flex-1 flex flex-col items-center justify-center">
            <div className="text-[#C2BDB6] text-lg mb-10">새 배송지를 추가해 주세요.</div>
        </div> */}
        <div className="w-full max-w-lg bg-[#FAF8F5] p-4">
            {/* 기본 배송지 체크박스 */}
            <Label className="flex items-center mb-8 text-xl font-normal text-[#48413A]">
            {/* <Checkbox className="w-6 h-6 mr-2 accent-[#D6D1C4]" disabled /> */}
            <Checkbox className="w-6 h-6 mr-2 data-[state=checked]:bg-gray-600 data-[state=checked]:text-white" />
            기본 배송지
            </Label>
    
            {/* 배송지명 */}
            <div className="mb-8">
            <div className="text-xl font-semibold text-[#222] mb-2">배송지명</div>
            <Input
                type="text"
                placeholder="배송지명을 입력해 주세요."
                className="w-full border border-[#CFC9BC] bg-white rounded text-[#C2BDB6] px-4 py-6 text-base placeholder-[#C2BDB6] focus:outline-none focus:ring-2 focus:ring-[#ECE9E2]"
            />
            </div>
    
            {/* 받는 분 */}
            <div className="mb-8">
            <div className="text-xl font-semibold text-[#222] mb-2">받는 분</div>
            <Input
                type="text"
                placeholder="성함을 입력해 주세요."
                className="w-full border border-[#CFC9BC] bg-white rounded text-[#C2BDB6] px-4 py-6 text-base placeholder-[#C2BDB6] focus:outline-none focus:ring-2 focus:ring-[#ECE9E2]"
            />
            </div>
    
            {/* 연락처 */}
            <div className="mb-8">
            <div className="text-xl font-semibold text-[#222] mb-2">연락처</div>
            <Input
                type="text"
                placeholder="연락처를 입력해 주세요."
                className="w-full border border-[#CFC9BC] bg-white rounded text-[#C2BDB6] px-4 py-6 text-base placeholder-[#C2BDB6] focus:outline-none focus:ring-2 focus:ring-[#ECE9E2]"
            />
            </div>
    
            {/* 주소 */}
            <div className="mb-8">
            <div className="text-xl font-semibold text-[#222] mb-2">주소</div>
            <div className="flex mb-4">
                <Input
                type="text"
                placeholder="우편번호 찾기"
                className="flex-1 border border-[#CFC9BC] bg-white rounded-l text-[#C2BDB6] px-4 py-6 text-base placeholder-[#C2BDB6] focus:outline-none focus:ring-2 focus:ring-[#ECE9E2]"
                />
                <Button
                className="w-36 bg-[#3B352E] text-white text-xl font-semibold rounded-r ml-2 h-12.5"
                >
                검색
                </Button>
            </div>
            <Input
                type="text"
                placeholder="상세주소를 입력해 주세요."
                className="w-full border border-[#CFC9BC] bg-white rounded text-[#C2BDB6] px-4 py-6 text-base placeholder-[#C2BDB6] focus:outline-none focus:ring-2 focus:ring-[#ECE9E2]"
            />
            </div>
        </div>
        {/* 하단 버튼 */}
        <div className="px-4 pb-8">
            <Button
            className="w-full py-4 bg-[#D6D1C4] text-white text-xl rounded cursor-not-allowed h-13"
            disabled
            >
            선택 완료
            </Button>
        </div>
        </div>
    )
}




// export default function AddressInputPage() {
//     return (
//         <div className="min-h-screen bg-[#FAF8F5] flex flex-col items-center py-8">
//         <div className="w-full max-w-lg bg-[#FAF8F5] p-4">
//             {/* 기본 배송지 체크박스 */}
//             <label className="flex items-center mb-8 text-xl font-normal text-[#48413A]">
//             <input type="checkbox" className="w-6 h-6 mr-2 accent-[#D6D1C4]" disabled />
//             기본 배송지
//             </label>
    
//             {/* 배송지명 */}
//             <div className="mb-8">
//             <div className="text-2xl font-semibold text-[#222] mb-2">배송지명</div>
//             <input
//                 type="text"
//                 placeholder="배송지명을 입력해 주세요."
//                 className="w-full border border-[#CFC9BC] bg-white rounded text-[#C2BDB6] px-4 py-6 text-2xl placeholder-[#C2BDB6] focus:outline-none focus:ring-2 focus:ring-[#ECE9E2]"
//             />
//             </div>
    
//             {/* 받는 분 */}
//             <div className="mb-8">
//             <div className="text-2xl font-semibold text-[#222] mb-2">받는 분</div>
//             <input
//                 type="text"
//                 placeholder="성함을 입력해 주세요."
//                 className="w-full border border-[#CFC9BC] bg-white rounded text-[#C2BDB6] px-4 py-6 text-2xl placeholder-[#C2BDB6] focus:outline-none focus:ring-2 focus:ring-[#ECE9E2]"
//             />
//             </div>
    
//             {/* 연락처 */}
//             <div className="mb-8">
//             <div className="text-2xl font-semibold text-[#222] mb-2">연락처</div>
//             <input
//                 type="text"
//                 placeholder="연락처를 입력해 주세요."
//                 className="w-full border border-[#CFC9BC] bg-white rounded text-[#C2BDB6] px-4 py-6 text-2xl placeholder-[#C2BDB6] focus:outline-none focus:ring-2 focus:ring-[#ECE9E2]"
//             />
//             </div>
    
//             {/* 주소 */}
//             <div className="mb-8">
//             <div className="text-2xl font-semibold text-[#222] mb-2">주소</div>
//             <div className="flex mb-4">
//                 <input
//                 type="text"
//                 placeholder="우편번호 찾기"
//                 className="flex-1 border border-[#CFC9BC] bg-white rounded-l text-[#C2BDB6] px-4 py-6 text-2xl placeholder-[#C2BDB6] focus:outline-none focus:ring-2 focus:ring-[#ECE9E2]"
//                 />
//                 <button
//                 className="w-36 bg-[#3B352E] text-white text-2xl font-semibold rounded-r ml-2"
//                 >
//                 검색
//                 </button>
//             </div>
//             <input
//                 type="text"
//                 placeholder="상세주소를 입력해 주세요."
//                 className="w-full border border-[#CFC9BC] bg-white rounded text-[#C2BDB6] px-4 py-6 text-2xl placeholder-[#C2BDB6] focus:outline-none focus:ring-2 focus:ring-[#ECE9E2]"
//             />
//             </div>
//         </div>
//         </div>
//     )
// }