'use client'

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function DeliveryList({ t }: { t: (key: string) => string }) {
    const handleAddress = () => {
        window.open(
            '/address',
            '_blank',
            'width=390,height=800,menubar=no,toolbar=no,location=yes,status=no'
        );
    }

    return (
        <section className="space-y-2 mb-10">
            <div className="flex justify-between">
                <h2 className="text-sm font-bold text-[#322A24]">{t('payment:ship_info')}</h2>
                <Button className="border rounded-none text-[10px] text-center font-bold text-[#6F6963] border-[#E9E6E0]" onClick={handleAddress}>
                    {t('payment:address')}
                </Button>
            </div>
            <div className="h-[137px] border !border-[#E9E6E0] p-6 rounded-md space-y-2 text-sm text-[#322A24]">
                <div className="flex items-center gap-2">
                    <Checkbox
                        id='address'
                        checked={true}
                        className="!w-[16px] !h-[16px] data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                    />
                    <span className="text-sm font-bold text-[#322A24]">집</span>
                    <span className="text-[10px] font-bold text-[#6F6963] ml-2">기본 배송지</span>
                </div>
                
                <div className="pl-6 space-y-1 text-[#322A24] text-xs font-medium">
                        <p>홍길동</p>
                        <p>010-134-5678</p>
                        <p>부산광역시 부전동 서전로 8번길 현대카드</p>
                </div>
            </div>
            <Button className="border rounded-none text-sm font-bold text-center w-full h-[46px] text-[#322A24] !border-[#C0BCB6] cursor-pointer" onClick={handleAddress}>{t('payment:add_address')}</Button>
            <div className="text-xs text-[#6F6963] bg-[#322A2408] p-[16px] px-[32px] h-[68px]">
                <ul className="list-disc space-y-1.5">
                    <li>{t('payment:road_name')}</li>
                    <li>{t('payment:double_check')}</li>
                    {/* <li>정확한 배송을 위해 도로명 주소만 사용합니다</li>
                    <li>배송지 불분명으로 반송되지 않도록 한 번 더 확인해 주세요.</li> */}
                </ul>
            </div>
        </section>
    )
}