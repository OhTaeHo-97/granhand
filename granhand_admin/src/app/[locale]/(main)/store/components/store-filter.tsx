import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function StoreFilter({ t }: { t: (key: string) => string }) {
    return (
        <div className="p-12 shadow-sm space-y-4 mb-12">
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('store:branch_name')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">광화문</div>
                </div>

                {/* 두 번째 행 */}
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('store:address')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">강남구 연주로 164길 17 3층</div>
                </div>
                
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('store:visibility_setting')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <RadioGroup defaultValue="exposure" className="flex gap-6">
                            <Label className="flex items-center gap-2 min-w-20">
                            <RadioGroupItem value="exposure" /> {t('store:visible')}
                            </Label>
                            <Label className="flex items-center gap-2 min-w-20">
                            <RadioGroupItem value="hidden" /> {t('store:hidden')}
                            </Label>
                        </RadioGroup>
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 border-b text-[#6F6963]">
                        <Label className="font-semibold">{t('store:passport')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Button variant="outline">
                        {t('store:image')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}