import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddressInfo({ t }: { t: (key: string) => string }) {
    return (
        <section className="text-[#5E5955]">
            <h2 className="font-bold text-xl text-[#5E5955]">{t('ship_return_address')}</h2>
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('address_name')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5 w-full">
                        <Input defaultValue="짐풀" className="w-1/2" />
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('ship_address')}</Label>
                    </div>
                    <div className="flex flex-col gap-6 p-5">
                        <div className="flex items-center gap-3">
                            <Input defaultValue="10910" className="w-25" />
                            <Button className="border h-8">{t('search_postal_code')}</Button>
                        </div>
                        <Input defaultValue="경기 파주시 하우고개길 458-1 (상지석동) 짐폴" />
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('return_address')}</Label>
                    </div>
                    <div className="flex flex-col gap-6 p-5">
                        <div className="flex items-center gap-3">
                            <Input defaultValue="10910" className="w-25" />
                            <Button className="border h-8">{t('search_postal_code')}</Button>
                        </div>
                        <Input defaultValue="경기 파주시 하우고개길 458-1 (상지석동) 짐폴" />
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('primary_number')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <div className="flex items-center gap-4">
                            <div className="relative w-64">
                                <Input defaultValue="02-333-6525" className="pr-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}