import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CreateWallpaperHeader({ t }: { t: (key: string) => string }) {
    return (
        <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white min-w-120">
            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                    <Label className="font-semibold">{t('wallpaper:cover_image')}</Label>
                </div>
                <div className="flex items-center gap-4 p-5">
                    <Button className="border">
                        {t('wallpaper:upload_file')}
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-[150px_1fr]">
                <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                    {t('wallpaper:title')}
                </div>
                <div className="grid divide-y divide-gray-200">
                    <div className="p-5">
                        <Input placeholder={t('wallpaper:korean_title_placeholder')} />
                    </div>
                    <div className="p-5">
                        <Input placeholder={t('wallpaper:english_title_placeholder')} />
                    </div>
                </div>
            </div>
        </div>
    )
}