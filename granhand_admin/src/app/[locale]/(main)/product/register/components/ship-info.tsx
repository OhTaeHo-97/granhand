import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ShipInfoProps {
    data: {
        productWeight: number,
        deliveryCountries: string[]
    },
    onChange: (field: string, value: any) => void
}

export default function ShipInfo({ data, onChange, t }: ShipInfoProps & { t: (key: string) => string }) {
    const handleCheckboxChange = (country: string, checked: boolean) => {
        onChange('deliveryCountries', checked
            ? [...new Set([...data.deliveryCountries, country])]
            : data.deliveryCountries.filter((selectedCountry) => country !== selectedCountry)
        )
    }

    return (
        <section className="mb-8">
            <h2 className="font-bold text-xl text-[#5E5955]">{t('product:ship_info')}</h2>
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178 divide-y divide-gray-200">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:product_weight')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Input type="number" defaultValue={data.productWeight} onChange={(e) => onChange('productWeight', e.target.value)} placeholder={t('product:number_only')} />
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:set_ship_country')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Label className="text-sm font-medium">
                            <Checkbox
                                id="select-all"
                                className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                                checked={data.deliveryCountries.includes('대한민국')}
                                onCheckedChange={(checked) => {
                                    if(typeof checked === 'boolean') {
                                        handleCheckboxChange('대한민국', checked)
                                    }
                                }}
                            /> 대한민국
                        </Label>
                    </div>
                </div>
            </div>
        </section>
    )
}