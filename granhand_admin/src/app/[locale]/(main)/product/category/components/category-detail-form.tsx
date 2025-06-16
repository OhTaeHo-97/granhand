import { Dispatch, SetStateAction } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ProductCategoryNode } from "@/lib/product/product-state"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CategoryDetailFormProps {
    language: 'ko' | 'en'
    form: Omit<ProductCategoryNode, "idx" | "children">
    setLanguage: Dispatch<SetStateAction<'ko' | 'en'>>
    setForm: Dispatch<SetStateAction<Omit<ProductCategoryNode, "idx" | "children">>>
    // selectedCategory: ProductCategoryNode | null
    // isAddingMode: boolean
    handleSave: () => Promise<void>
    setSelectedCategory: Dispatch<SetStateAction<ProductCategoryNode | null>>
    setIsAddingMode: Dispatch<SetStateAction<boolean>>
    t: (key: string) => string
}

export default function CategoryDetailForm({
    language,
    form,
    setLanguage,
    setForm,
    // selectedCategory,
    // isAddingMode,
    handleSave,
    setSelectedCategory,
    setIsAddingMode,
    t,
}: CategoryDetailFormProps) {
    return (
        <div className="flex-1 p-12 mt-12">
            <h2 className="font-bold text-xl text-[#5E5955] mb-6">{t('product:category_details')}</h2>
            {/* ... existing detail form ... */}
            <div className="border border-gray-200 text-[#6f6963] text-sm w-full min-w-120">
                <div className="grid grid-cols-[150px_1fr] border-b">
                    <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                        {t('language')}
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Select value={language} onValueChange={(value: 'ko' | 'en') => setLanguage(value)}>
                            <SelectTrigger className="w-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="ko">{t('korean')}</SelectItem>
                                <SelectItem value="en">{t('english')}</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b">
                    <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                        {t('product:category_name')}
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Input
                                placeholder={t('product:category_name')}
                                value={form.catename}
                                onChange={(e) => setForm((f) => ({ ...f, catename: e.target.value }))}
                            />
                    </div>
                    {/* <div className="grid divide-y divide-gray-200">
                        <div className="p-5">
                            <Input
                                placeholder="카테고리명"
                                value={form.catename}
                                onChange={(e) => setForm((f) => ({ ...f, catename: e.target.value }))}
                            />
                        </div>
                        <div className="p-5">
                            <Input
                                placeholder="Category Name"
                                value={form.catecode}
                                onChange={(e) => setForm((f) => ({ ...f, catecode: e.target.value }))}
                            />
                        </div>
                    </div> */}
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:store_display_settings')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Label className="flex items-center gap-2">
                            <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/>
                            <span className="text-[#111111]">PC(Web)</span>
                        </Label>
                        <Label className="flex items-center gap-2">
                            <Checkbox id="select" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/>
                            <span className="text-[#111111]">APP</span>
                        </Label>
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:visibility_settings')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5 text-[#231815B2]">
                        <RadioGroup
                            value={form.isshow === 'Y' ? 'exposure' : 'hidden'}
                            onValueChange={(value) =>
                                setForm((f) => ({ ...f, isshow: value === 'exposure' ? 'Y' : 'N' }))
                            }
                            className="flex gap-6"
                        >
                            <Label className="flex items-center gap-2 min-w-20">
                            <RadioGroupItem value="exposure" /> {t('store:visible')}
                            </Label>
                            <Label className="flex items-center gap-2 min-w-20">
                            <RadioGroupItem value="hidden" /> {t('store:hidden')}
                            </Label>
                        </RadioGroup>
                    </div>
                </div>
            </div>
            <div className="flex justify-end gap-4 mt-8">
                <Button className="px-8 py-2 border rounded w-1/6" onClick={() => {
                    setSelectedCategory(null)
                    setIsAddingMode(false)
                }}>
                    {t('cancel')}
                </Button>
                <Button
                    className="px-8 py-2 rounded bg-[#322A24] text-white w-1/6"
                    onClick={handleSave}
                    disabled={!form.catename || !form.catecode}
                >
                    {t('save')}
                </Button>
            </div>
        </div>
    )
} 