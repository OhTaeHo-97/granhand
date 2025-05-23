'use client'

import { Button } from "@/components/ui/button";

export default function DeliveryList({ t }: { t: (key: string) => string }) {
    const handleAddress = () => {
        window.open(
            '/address',
            '_blank',
            'width=400,height=800,menubar=no,toolbar=no,location=yes,status=no'
        );
    }

    return (
        <section className="space-y-2 mb-10">
            <div className="flex justify-between">
                <h2 className="text-base font-bold">{t('payment:ship_info')}</h2>
                <Button className="border rounded-none text-sm text-center">
                    {t('address')}
                </Button>
            </div>
            <Button className="border rounded-none text-sm text-center w-full h-12" onClick={handleAddress}>{t('payment:add_address')}</Button>
            <div className="text-xs text-gray-700 bg-gray-100 p-6 px-10">
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