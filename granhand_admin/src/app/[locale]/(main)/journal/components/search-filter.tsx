'use client'

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RefreshCw, Search } from "lucide-react";
import TagSettingsModal from "./modal/tag-settings";
import { useState } from "react";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import { useJournalTagStore } from "@/lib/journal/journal-state";

export default function JournalSearchFilter({ fetchJournals }: { fetchJournals: (params?: Record<string, string | number | boolean>) => void }) {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'product', 'order', 'push'])
    const [openTagSetting, setOpenTagSetting] = useState(false)
    const { tags } = useJournalTagStore()
    const [selectedTags, setSelectedTags] = useState<string[]>([])

    const initialize = () => {
        setSelectedTags([])
    }
    
    return (
        <>
            <div className="flex justify-between items-center mt-10">
                <div className="text-[#5E5955] font-bold text-base">
                    {t('journal:search_filter')}
                </div>
                <Button variant="outline" className="px-2 py-0 text-[#5E5955]" onClick={() => setOpenTagSetting((prev) => !prev)}>{t('journal:tag_manage')}</Button>
            </div>
            <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7">
                <div className="grid grid-cols-[150px_1fr] border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('journal:search_filter')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        {tags.map((tag) => (
                            <Label key={tag.id} className="flex items-center gap-2">
                                <Checkbox
                                    id={`checkbox-${tag.id}`}
                                    className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                                    checked={selectedTags.includes(tag.id)}
                                    onCheckedChange={(checked) => {
                                        setSelectedTags((prev) => 
                                            checked
                                                ? [...prev, tag.id]
                                                : prev.filter((id) => id !== tag.id)
                                        )
                                    }}
                                />
                                <span className="text-[#111111]">{tag.title}</span>
                            </Label>
                        ))}
                        {/* <Label className="flex items-center gap-2">
                            <Checkbox id="select" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/>
                            <span className="text-[#111111]">{t('journal:all')}</span>
                        </Label>
                        <Label className="flex items-center gap-2">
                            <Checkbox id="select" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/>
                            <span className="text-[#111111]">News</span>
                        </Label>
                        <Label className="flex items-center gap-2">
                            <Checkbox id="select" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/>
                            <span className="text-[#111111]">Culture</span>
                        </Label>
                        <Label className="flex items-center gap-2">
                            <Checkbox id="select" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/>
                            <span className="text-[#111111]">Life</span>
                        </Label>
                        <Label className="flex items-center gap-2">
                            <Checkbox id="select" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/>
                            <span className="text-[#111111]">Team</span>
                        </Label>
                        <Label className="flex items-center gap-2">
                            <Checkbox id="select" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/>
                            <span className="text-[#111111]">Essay</span>
                        </Label>
                        <Label className="flex items-center gap-2">
                            <Checkbox id="select" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/>
                            <span className="text-[#111111]">Film</span>
                        </Label> */}
                    </div>
                </div>
            </div>
            <div className="flex mx-auto justify-center items-center w-full gap-10 mt-10 mb-10">
                <Button className="bg-white text-[#322A24] border w-32" onClick={initialize}>
                    <RefreshCw />
                    {t('reset')}
                </Button>
                <Button className="bg-[#322A24] text-white w-32" onClick={() => fetchJournals()}>
                    <Search />
                    {t('search')}
                </Button>
            </div>
            
            <TagSettingsModal open={openTagSetting} setOpen={setOpenTagSetting} t={t} />
        </>
    )
}