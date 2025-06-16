import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

interface ShipInfoProps {
    data: {
        deliveryLocation: string,
        productWeight: number,
        deliveryCountries: string[]
    },
    onChange: (
        field: keyof ShipInfoProps['data'],
        value: string | number | string[]
    ) => void
}

type CountryInfo = {
    name: string
    code: string
}

const abroadCountries: CountryInfo[] = [
    { name: '일본', code: 'japan' },
    { name: '홍콩', code: 'hongkong' },
    { name: '중국', code: 'china' },
    { name: '오스트레일리아/이탈리아', code: 'aus-ita' },
    { name: '미국/스페인', code: 'us-spain' },
    { name: '캐나다', code: 'canada' },
    { name: '프랑스', code: 'france' },
    { name: '그리스/덴마크/아랍에미리트/오스트리아/헝가리', code: 'gr-den' },
    { name: '대만', code: 'taiwan' },
    { name: '인도네시아', code: 'indonesia' },
    { name: '말레이시아', code: 'Malaysia' },
    { name: '베트남', code: 'vietnam' },
    { name: '필리핀', code: 'philippines' },
    { name: '싱가폴/태국', code: 'sg-th' },
    { name: '노르웨이/벨기에/튀르키예', code: 'no-be-tr' },
    { name: '독일/사우디아라비아/스위스/영국/카타르', code: 'eu-me-combo' },
    { name: '네덜란드/카자흐스탄', code: 'nl-kz' },
    { name: '룩셈부르크/스웨덴/슬로베니아', code: 'lux-se-si' },
    { name: '멕시코', code: 'mexico' },
    { name: '칠레', code: 'chile' },
]

export default function ShipInfo({ data, onChange, t }: ShipInfoProps & { t: (key: string) => string }) {
    const handleCheckboxChange = (country: string, checked: boolean) => {
        onChange('deliveryCountries', checked
            ? [...new Set([...data.deliveryCountries, country])]
            : data.deliveryCountries.filter((selectedCountry) => country !== selectedCountry)
        )
    }

    const handleValueChange = (location: string) => {
        console.log('location:', location)
        onChange('deliveryLocation', location)
    }

    return (
        <section className="mb-8">
            <div className="flex items-end border-b mt-10">
                <div className="flex items-end gap-6 flex-grow">
                    <h2 className="font-bold text-xl text-[#5E5955] mr-6 pb-8">{t('product:ship_info')}</h2>
                </div>
                <div className="flex items-center gap-4">
                    <RadioGroup value={data.deliveryLocation} onValueChange={(value) => handleValueChange(value)} className="flex gap-2 text-sm">
                            <Label
                                key="ko"
                                // htmlFor="korean-lang"
                                className={cn(
                                    "py-2 px-4 text-center cursor-pointer text-sm",
                                    data.deliveryLocation === "ko"
                                        ? "border-b-2 !border-[#5E5955] text-[#5E5955]"
                                        : "text-[#C0BCB6]"
                                )}
                            >
                                <RadioGroupItem value="ko" id="korean-lang" className="hidden" />
                                🇰🇷 {t('product:domestic')}
                            </Label>
                            <Label
                                key="en"
                                // htmlFor="english-lang"
                                className={cn(
                                    "py-2 px-4 text-center cursor-pointer text-sm",
                                    data.deliveryLocation === "en"
                                        ? "border-b-2 !border-[#5E5955] text-[#5E5955]"
                                        : "text-[#C0BCB6]"
                                )}
                            >
                                <RadioGroupItem value="en" id="english-lang" className="hidden" />
                                🇺🇸 {t('product:international')}
                            </Label>
                    </RadioGroup>
                </div>
            </div>
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178 divide-y divide-gray-200">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:product_weight')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Input type="number" defaultValue={data.productWeight} onChange={(e) => onChange('productWeight', Number(e.target.value))} placeholder={t('product:number_only')} />
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:set_ship_country')}</Label>
                    </div>
                    <div className="flex flex-wrap gap-y-4 gap-x-6 items-center p-5">
                        { data.deliveryLocation === 'ko' && (
                            <Label className="text-sm font-medium">
                                <Checkbox
                                    id="korea"
                                    className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                                    checked={data.deliveryCountries.includes('대한민국')}
                                    onCheckedChange={(checked) => {
                                        if(typeof checked === 'boolean') {
                                            handleCheckboxChange('대한민국', checked)
                                        }
                                    }}
                                /> 대한민국
                            </Label>
                        ) }
                        { data.deliveryLocation === 'en' && (
                            abroadCountries.map((country) => (
                                <Label key={country.code} className="text-sm font-medium">
                                    <Checkbox
                                        id={country.code}
                                        className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                                        checked={data.deliveryCountries.includes(country.name)}
                                        onCheckedChange={(checked) => {
                                            if(typeof checked === 'boolean') {
                                                handleCheckboxChange(country.name, checked)
                                            }
                                        }}
                                    /> {country.name}
                                </Label>
                            ))
                        ) }
                    </div>
                </div>
            </div>
        </section>
    )
}