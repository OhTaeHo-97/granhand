'use client'

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import UseTermSettings from "./components/use-term";
import PrivacySettings from "./components/privacy";
import MarketingSettings from "./components/marketing";
import { Label } from "@/components/ui/label";
import EditPasswordModal from "./components/modal/edit-password-modal";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../utils/localization/client";

export default function SettingsPage() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'settings'])

    const [tab, setTab] = useState("use")
    const [openEditPassword, setOpenEditPassword] = useState(false)

    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('settings:settings')}</h1>
                <div className="mt-10">
                    <div className="space-y-4">
                        <h2 className="text-[#5E5955] font-bold text-base mt-12 mb-4">{t('settings:search_filter')}</h2>
                    </div>
                    <div className="grid grid-cols-[150px_1fr] border border-gray-200 h-full">
                        <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                            <Label className="font-semibold">{t('settings:set_pw')}</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <Button variant="outline" className="p-2 text-[#5E5955] text-sm bg-white" onClick={() => setOpenEditPassword((prev) => !prev)}>{t('settings:change_pw')}</Button>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <Tabs value={tab} onValueChange={setTab} className="w-full">
                        <TabsList className="flex gap-2 border-b mb-6 justify-start text-[#C0BCB6] text-border">
                            <TabsTrigger value="use" className="px-4 py-2 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-[#322A24] !data-[state=active]:shadow-none">
                                {t('settings:terms')}
                            </TabsTrigger>
                            <TabsTrigger value="privacy" className="px-4 py-2 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-[#322A24]">
                                {t('settings:privacy')}
                            </TabsTrigger>
                            <TabsTrigger value="marketing" className="px-4 py-2 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-[#322A24] data-[state=active]:text-[#322A24]">
                                {t('settings:marketing')}
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="use">
                            <UseTermSettings t={t} />
                        </TabsContent>
                        <TabsContent value="privacy">
                            <PrivacySettings t={t} />
                        </TabsContent>
                        <TabsContent value="marketing">
                            <MarketingSettings t={t} />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
            <EditPasswordModal open={openEditPassword} setOpen={setOpenEditPassword} t={t} />
        </main>
    )
}