'use client'

import { Button } from "@/components/ui/button";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { useState } from "react";
import { useTranslation } from "../../../../../../../../utils/localization/client";

export default function ExchangeRefundAddress({ title, info, showEdit = true }: { title: string, info: { name: string, phone: string, address: string }, showEdit?: boolean }) {
    // const [addressInfo, setAddressInfo] = useState(info)
    const [addressInfo] = useState(info)
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'order')
    const handleAddress = () => {
        window.open(
            '/address',
            '_blank',
            'width=400,height=800,menubar=no,toolbar=no,location=yes,status=no'
        );
    }

    return (
        <div className="border p-4 mt-5">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-black text-base">{title}</h3>
                {showEdit && (
                    <Button className="text-sm text-gray-400 p-0 h-fit" onClick={handleAddress}>
                        {t('edit_address')}
                    </Button>
                )}
            </div>
            <div className="space-y-2 mt-5 text-gray-700">
                <div>
                    {addressInfo.name}
                </div>
                <div>
                    {addressInfo.phone}
                </div>
                <div>
                    {addressInfo.address}
                </div>
            </div>
        </div>
    )
}