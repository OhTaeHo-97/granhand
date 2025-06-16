'use client'

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCurrentLocale } from '@/lib/useCurrentLocale';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export interface Address {
    isBaseAddress: boolean
    addressName: string
    receiverName: string
    phone: string
    postalCode: string
    address: string
    detailAddress: string
}

export default function AddressInput({ contents }: { contents?: Address }) {
    const router = useRouter()
    const currentLocale = useCurrentLocale()
    const [addressInfo, setAddressInfo] = useState<Address>(contents ? contents : {
        isBaseAddress: false,
        addressName: '',
        receiverName: '',
        phone: '',
        postalCode: '',
        address: '',
        detailAddress: ''
    })

    const handleAddressInfoChange = (key: keyof Address, value: string | boolean) => {
        setAddressInfo(prev => ({
            ...prev,
            [key]: value
        }))
    }

    const isAllInputEntered = Object.values(addressInfo).every(value => value !== '')

    return (
        <div className="min-h-screen bg-[#FDFBF5] flex flex-col px-3 w-[390px]">
            {/* 상단 */}
            <div className="flex items-center py-6">
                <Button onClick={() => router.back()} className="text-3xl mr-4"><X className='!w-[24px] !h-[24px] text-[#5E5955]' /></Button>
                <span className="text-lg font-bold">배송지 입력</span>
            </div>
            <div className="w-full max-w-lg p-4">
                {/* 기본 배송지 체크박스 */}
                <Label className="flex items-center mb-8 text-base font-normal text-[#322A24]">
                    <Checkbox className="!w-[16px] !h-[16px] mr-2 data-[state=checked]:bg-gray-600 data-[state=checked]:text-white" checked={addressInfo.isBaseAddress} onCheckedChange={(checked) => handleAddressInfoChange('isBaseAddress', checked === true)} />
                    <span className='text-xs text-[#322A24]'>기본 배송지</span>
                </Label>
    
                {/* 배송지명 */}
                <div className="mb-8">
                    <div className="text-sm font-medium text-[#322A24] mb-2">배송지명</div>
                    <Input
                        type="text"
                        value={addressInfo.addressName}
                        onChange={(e) => handleAddressInfoChange('addressName', e.target.value)}
                        placeholder="배송지명을 입력해 주세요."
                        className="w-[342px] h-[46px] text-sm border !border-[#C0BCB6] rounded text-[#C2BDB6] px-4 py-6 placeholder-[#C0BCB6]"
                    />
                </div>
    
                {/* 받는 분 */}
                <div className="mb-8">
                    <div className="text-sm font-medium text-[#322A24] mb-2">받는 분</div>
                    <Input
                        type="text"
                        value={addressInfo.receiverName}
                        onChange={(e) => handleAddressInfoChange('receiverName', e.target.value)}
                        placeholder="성함을 입력해 주세요."
                        className="w-[342px] h-[46px] text-sm border !border-[#C0BCB6] rounded text-[#C2BDB6] px-4 py-6 placeholder-[#C0BCB6]"
                    />
                </div>
    
                {/* 연락처 */}
                <div className="mb-8">
                    <div className="text-sm font-medium text-[#322A24] mb-2">연락처</div>
                    <Input
                        type="text"
                        value={addressInfo.phone}
                        onChange={(e) => handleAddressInfoChange('phone', e.target.value)}
                        placeholder="연락처를 입력해 주세요."
                        className="w-[342px] h-[46px] text-sm border !border-[#C0BCB6] rounded text-[#C2BDB6] px-4 py-6 placeholder-[#C0BCB6]"
                    />
                </div>
    
                {/* 주소 */}
                <div className="mb-16">
                    <div className="text-sm font-medium text-[#322A24] mb-2">주소</div>
                    <div className='space-y-2'>
                        <div className="flex">
                            <Input
                                type="text"
                                value={addressInfo.postalCode}
                                onChange={(e) => handleAddressInfoChange('postalCode', e.target.value)}
                                placeholder="우편번호 찾기"
                                className="flex-1 w-[242px] h-[46px] text-sm border !border-[#C0BCB6] rounded-l text-[#C2BDB6] placeholder-[#C0BCB6]"
                            />
                            <Button
                                className="w-[88px] h-[46px] bg-[#3B352E] text-white text-sm font-bold rounded-sm ml-2"
                            >
                            검색
                            </Button>
                        </div>
                        <Input
                            type="text"
                            value={addressInfo.address}
                            onChange={(e) => handleAddressInfoChange('address', e.target.value)}
                            placeholder="주소"
                            className="w-[342px] h-[46px] text-sm border !border-[#C0BCB6] rounded text-[#C2BDB6] px-4 py-6 placeholder-[#C0BCB6]"
                        />
                        <Input
                            type="text"
                            value={addressInfo.detailAddress}
                            onChange={(e) => handleAddressInfoChange('detailAddress', e.target.value)}
                            placeholder="상세주소를 입력해 주세요."
                            className="w-[342px] h-[46px] text-sm border !border-[#C0BCB6] rounded text-[#C2BDB6] px-4 py-6 placeholder-[#C0BCB6]"
                        />
                    </div>
                </div>
            </div>
        {/* 하단 버튼 */}
        <div className="px-4 pb-8">
            <Button
            className="w-[342px] h-[46px] py-4 bg-[#3B352E] text-white text-sm font-bold rounded disabled:bg-[#DBD7D0]"
            disabled={!isAllInputEntered}
            onClick={() => {
                const confirmed = window.confirm('주소를 저장하시겠습니까?')
                if(confirmed) {
                    router.replace(`${currentLocale}/address`)
                }
            }}
            >
                저장
            </Button>
        </div>
        </div>
    )
}