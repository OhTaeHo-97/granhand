'use client'

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import AddressDeleteModal from './components/delete-modal';
import { useRouter } from 'next/navigation';
import { useCurrentLocale } from '@/lib/useCurrentLocale';

export default function NewAddressPage() {
    const currentLocale = useCurrentLocale()
    const router = useRouter()
    const [checked, setChecked] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)

    return (
        <div className="min-h-screen bg-[#FDFBF5] flex flex-col px-3 w-[390px]">
            {/* 상단 */}
            <div className="flex items-center py-6">
                <Button onClick={() => window.close()} className="text-3xl mr-4"><X className="!w-[24px] !h-[24px] text-[#5E5955]" /></Button>
                <span className="text-lg font-semibold">배송지 목록</span>
            </div>
            <div className='w-full mx-auto items-center flex justify-center'>
                <Link href="/address/new" className="max-w-md text-xl mb-10 h-13">
                    <Button className="w-[342px] h-[46px] max-w-md py-4 border !border-[#C0BCB6] rounded text-base font-bold mb-10 text-[#322A24]" >
                        새 배송지 추가
                    </Button>
                </Link>
            </div>

            {/* 주소지 정보 */}
            <div className="space-y-6">
                <div className={`border p-6 rounded-md space-y-2 text-sm text-[#322A24] ${checked ? "!border-[#6F6963]" : "!border-[#E9E6E0]"}`}>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id='address'
                                checked={checked}
                                onCheckedChange={() => setChecked((prev) => !prev)}
                                className="w-[14px] h-[14px] data-[state=checked]:bg-gray-600 data-[state=checked]:text-white rounded-none"
                            />
                            <span className="text-sm font-bold text-[#322A24]">집</span>
                            <span className="text-xs text-[#6F6963] font-bold ml-2">기본 배송지</span>
                        </div>
                        <div className='flex items-center gap-2 font-bold'>
                            <Button className="text-[#322A244D] text-xs font-bold !p-2" onClick={() => router.push(`${currentLocale}/address/1/edit`)}>수정</Button>
                            <span className="text-[#E9E6E0] select-none font-light">|</span>
                            <Button className="text-[#322A244D] !p-2 text-xs font-bold" onClick={() => setOpenDelete(true)}>삭제</Button>
                        </div>
                    </div>
                    
                    <div className="pl-6 space-y-1 text-[#322A24] text-xs font-medium">
                            <p>홍길동</p>
                            <p>010-134-5678</p>
                            <p>부산광역시 부전동 서전로 8번길 현대카드</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="text-[#C0BCB6] text-xs font-medium mb-10">새 배송지를 추가해 주세요.</div>
            </div>
            {/* 하단 버튼 */}
            <div className="px-4 pb-8">
                <Button
                className="w-[342px] py-4 bg-[#322A24] text-white text-sm font-bold rounded cursor-pointer h-[46px]"
                onClick={() => window.close()}
                >
                선택 완료
                </Button>
            </div>
            <AddressDeleteModal open={openDelete} setOpen={setOpenDelete} />
        </div>
    )
}