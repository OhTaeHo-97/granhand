import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RefreshCw, Search } from "lucide-react";

export default function JournalSearchFilter({ t }: { t: (key: string) => string }) {
    return (
        <>
            <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7 mt-10">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('journal:search_filter')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Label className="flex items-center gap-2">
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
                        </Label>
                    </div>
                </div>
            </div>
            <div className="flex mx-auto justify-center items-center w-full gap-10 mt-10 mb-10">
                <Button className="bg-white text-[#322A24] border w-32">
                    <RefreshCw />
                    {t('reset')}
                </Button>
                <Button className="bg-[#322A24] text-white w-32">
                    <Search />
                    {t('search')}
                </Button>
            </div>
        </>
    )
}