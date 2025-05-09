'use client'

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ExchangeRefundAddress({ title, info }: { title: string, info: { name: string, phone: string, address: string } }) {
    const [addressInfo, setAddressInfo] = useState(info)
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
                <Button className="text-sm text-gray-400 p-0 h-fit" onClick={handleAddress}>
                    변경하기
                </Button>
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