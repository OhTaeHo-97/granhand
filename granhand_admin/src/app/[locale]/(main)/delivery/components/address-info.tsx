import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AddressInformation } from "../page";

export default function AddressInfo({ contents, setContents, t }: { contents: AddressInformation, setContents: React.Dispatch<React.SetStateAction<AddressInformation>>, t: (key: string) => string }) {
    const handleContentsChange = <K extends keyof AddressInformation>(
        key: K,
        value: AddressInformation[K]
    ) => {
        setContents((prev) => ({
            ...prev,
            [key]: value
        }))
    }

    return (
        <section className="text-[#5E5955]">
            <h2 className="font-bold text-xl text-[#5E5955]">{t('ship_return_address')}</h2>
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('address_name')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5 w-full">
                        <Input type="text" value={contents.addressName} onChange={(e) => handleContentsChange('addressName', e.target.value)} className="w-1/2" />
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('ship_address')}</Label>
                    </div>
                    <div className="flex flex-col gap-6 p-5">
                        <div className="flex items-center gap-3">
                            <Input type="text" value={contents.fromPostal} onChange={(e) => handleContentsChange('fromPostal', e.target.value)} className="w-25" />
                            <Button className="border h-8">{t('search_postal_code')}</Button>
                        </div>
                        <Input type="text" value={contents.fromAddress} onChange={(e) => handleContentsChange('fromAddress', e.target.value)} />
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('return_address')}</Label>
                    </div>
                    <div className="flex flex-col gap-6 p-5">
                        <div className="flex items-center gap-3">
                            <Input type="text" value={contents.toPostal} onChange={(e) => handleContentsChange('toPostal', e.target.value)} className="w-25" />
                            <Button className="border h-8">{t('search_postal_code')}</Button>
                        </div>
                        <Input type="text" value={contents.toAddress} onChange={(e) => handleContentsChange('toAddress', e.target.value)} />
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('primary_number')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <div className="flex items-center gap-4">
                            <div className="relative w-64">
                                <Input type="text" value={contents.primaryNumber} onChange={(e) => handleContentsChange('primaryNumber', e.target.value)} className="pr-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}