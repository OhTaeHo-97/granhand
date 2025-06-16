'use client'

// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DeliveryInfo from "./components/delivery-info";
import ExchangeRefundSettings from "./components/exchange_refund_settings";
import AddressInfo from "./components/address-info";
import { useState } from "react";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../utils/localization/client";

export interface DeliveryInformation {
    courier: string
    shipCondition: string
    shipFee: number
    freeShipCondition: number
    useRegionalShipFee: string
    jejuFee: number
    remoteAreaFee: number
}

export interface ExchangeRefundInformation {
    oneWayFee: number
    roundTripFee: number
}

export interface AddressInformation {
    addressName: string
    fromPostal: string
    fromAddress: string
    toPostal: string
    toAddress: string
    primaryNumber: string
}

export default function DeliveryPage() {
    const [deliveryInformation, setDeliveryInformation] = useState<DeliveryInformation>({
        courier: 'cj',
        shipCondition: 'conditional_free_ship',
        shipFee: 0,
        freeShipCondition: 0,
        useRegionalShipFee: 'enable_regional_ship_fee',
        jejuFee: 0,
        remoteAreaFee: 0
    })
    const [exchangeRefundInfo, setExchangeRefundInfo] = useState<ExchangeRefundInformation>({
        oneWayFee: 0,
        roundTripFee: 0
    })
    const [addressInformation, setAddressInformation] = useState<AddressInformation>({
        addressName: '',
        fromPostal: '',
        fromAddress: '',
        toPostal: '',
        toAddress: '',
        primaryNumber: ''
    })

    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'delivery')
    const currentLocale = useCurrentLocale()

    return (
        <div className="flex-1 border">
            <div className="p-12 text-black text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('ship_setting')}</h1>
            </div>

            <div className="mx-auto px-6 py-8 space-y-12">
                <div className="shadow-md p-8">
                    <DeliveryInfo contents={deliveryInformation} setContents={setDeliveryInformation} t={t} currentLocale={currentLocale} />
                    <ExchangeRefundSettings contents={exchangeRefundInfo} setContents={setExchangeRefundInfo} t={t} currentLocale={currentLocale} />
                    <AddressInfo contents={addressInformation} setContents={setAddressInformation} t={t} />
                </div>
            </div>
        </div>
    )
}