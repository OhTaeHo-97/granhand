'use client'

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { GripVertical } from "lucide-react";
// import { useState } from "react";
// import OptionEditModal from "./modal/option-edit-modal";
import OptionTable from "./option-table";

interface OptionSettings {
    data: {
        useStamping: string,
        useBtnOption: string,
        btnOptionSections: OptionSections[],
        useDropOption: string,
        dropOptionSections: OptionSections[]
    },
    // onChange: (field: keyof OptionSettings['data'], value: string | OptionSections[]) => void
    onChange: (
        field: keyof OptionSettings['data'],
        value: Exclude<OptionSettings['data'][keyof OptionSettings['data']], undefined>
    ) => void
}

interface OptionSections {
    id: number
    title: string
    options: OptionType[]
}

type OptionType = {
    id: number
    optionValue: string
    price: number
    inventoryId: string
    quantity: string
    status: string
}

export default function OptionSettings({ data, onChange, t }: OptionSettings & { t: (key: string) => string }) {
    // const [openOptionEditModal, setOpenOptionEditModal] = useState(false)

    const setBtnOptionSections: React.Dispatch<React.SetStateAction<{ id: number, title: string, options: OptionType[] }[]>> = (value) => {
        if (typeof value === 'function') {
            onChange('btnOptionSections', value(data.btnOptionSections));
        } else {
            onChange('btnOptionSections', value);
        }
    }

    const setDropOptionSections: React.Dispatch<React.SetStateAction<{ id: number, title: string, options: OptionType[] }[]>> = (value) => {
        if (typeof value === 'function') {
            onChange('dropOptionSections', value(data.dropOptionSections));
        } else {
            onChange('dropOptionSections', value);
        }
    }

    return (
        <section className="mb-8">
            <h2 className="font-bold text-xl text-[#5E5955]">{t('product:options_settings')}</h2>
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178 divide-y divide-gray-200">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:use_stamping')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <RadioGroup defaultValue={data.useStamping} onValueChange={(value) => onChange('useStamping', value)} className="flex gap-6">
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="Y" /> {t('product:enabled')}
                            </Label>
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="N" /> {t('product:disabled')}
                            </Label>
                        </RadioGroup>
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:use_btn_option')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <RadioGroup value={data.useBtnOption} onValueChange={(value) => onChange('useBtnOption', value)} className="flex gap-6">
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="Y" /> {t('product:enabled')}
                            </Label>
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="N" /> {t('product:disabled')}
                            </Label>
                        </RadioGroup>
                    </div>
                </div>
                
                {data.useBtnOption === 'Y' && <OptionTable title={t('product:btn_option')} sections={data.btnOptionSections} setSections={setBtnOptionSections} t={t} />}

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:use_drop_option')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <RadioGroup value={data.useDropOption} onValueChange={(value) => onChange('useDropOption', value)} className="flex gap-6">
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="Y" /> {t('product:enabled')}
                            </Label>
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="N" /> {t('product:disabled')}
                            </Label>
                        </RadioGroup>
                    </div>
                </div>

                {data.useDropOption !== 'N' && <OptionTable title={t('product:drop_option')} sections={data.dropOptionSections} setSections={setDropOptionSections} t={t} />}
            </div>
            {/* <OptionEditModal open={openOptionEditModal} setOpen={setOpenOptionEditModal} t={t} /> */}
        </section>
    )
}