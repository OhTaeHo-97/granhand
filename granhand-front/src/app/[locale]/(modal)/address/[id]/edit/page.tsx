'use client'

import { useState } from "react";
import AddressInput, { Address } from "../../components/address-info";

export default function AddressEditPage() {
    const [address] = useState<Address>({
        isBaseAddress: false,
        addressName: '',
        receiverName: '',
        phone: '',
        postalCode: '',
        address: '',
        detailAddress: ''
    })

    return (
        <AddressInput contents={address} />
    )
}