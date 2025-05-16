import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function DeliveryInfo({ t, currentLocale }: { t: (key: string) => string, currentLocale: string }) {
    return (
        <section className="text-[#5E5955]">
            <h2 className="font-bold text-xl text-[#5E5955]">{t('ship_info')}</h2>
            <div className="border border-gray-200 text-[#5E5955] text-sm w-full bg-white mt-4 mb-7 min-w-178">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('select_courier')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Select defaultValue="cj">
                            <SelectTrigger className="w-70">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="cj">CJ대한통운</SelectItem>
                                <SelectItem value="post">우체국택배</SelectItem>
                                <SelectItem value="han">한택배진</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('ship_fee')}</Label>
                    </div>
                    <div className="flex flex-col gap-6 p-5">
                        <Select defaultValue="conditional_free_ship">
                            <SelectTrigger className="w-70">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white w-70">
                                <SelectItem value="conditional_free_ship">{t('conditional_free_ship')}</SelectItem>
                                <SelectItem value="default_ship_fee">{t('default_ship_fee')}</SelectItem>
                                <SelectItem value="han">유료배송</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="flex items-center gap-4">
                            <Label className="w-24">{t('default_ship_fee')}</Label>
                            <div className="relative w-64">
                                <Input defaultValue="3,000" className="w-60" />
                                <span className="absolute right-6 top-1/2 -translate-y-1/2">{currentLocale === '' ? '원' : 'KRW'}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Label className="w-24">{t('free_ship_condition')}</Label>
                            <div className="relative w-64">
                                <Input defaultValue="50,000" className="pr-28 w-85" />
                                <span className="absolute right-[-75] top-1/2 -translate-y-1/2">{t('applied_limit')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('regional_ship_fee')}</Label>
                    </div>
                    <div className="flex flex-col gap-6 p-5">
                        <Select defaultValue="enable_regional_ship_fee">
                            <SelectTrigger className="w-60">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="enable_regional_ship_fee">{t('enable_regional_ship_fee')}</SelectItem>
                                <SelectItem value="free_ship">{t('free_ship')}</SelectItem>
                                <SelectItem value="han">유료배송</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="flex items-center gap-4">
                            <Label className="w-30">{t('jeju_additional_fee')}</Label>
                            <div className="relative w-64">
                                <Input defaultValue="3,000" className="w-60" />
                                <span className="absolute right-6 top-1/2 -translate-y-1/2">{currentLocale === '' ? '원' : 'KRW'}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Label className="w-30">{t('remote_area_additional_fee')}</Label>
                            <div className="relative w-64">
                                <Input defaultValue="5,000" className="pr-28 w-85" />
                                <span className="absolute right-[-75] top-1/2 -translate-y-1/2">{t('applied_limit')}</span>
                            </div>
                            {/* <div className="relative w-64">
                                <Input defaultValue="5,000" className="pr-28" />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2">원 이상 구매 시 적용</span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}