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
        <div className="border !border-[#C0BCB6] p-4 mt-5 h-[137px]">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-[#322A24] text-sm">{title}</h3>
                {showEdit && (
                    <Button className="text-xs text-[#322A244D] font-bold p-0 h-fit" onClick={handleAddress}>
                        {t('edit_address')}
                    </Button>
                )}
            </div>
            <div className="space-y-2 mt-5 text-[#322A24] text-xs font-medium">
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