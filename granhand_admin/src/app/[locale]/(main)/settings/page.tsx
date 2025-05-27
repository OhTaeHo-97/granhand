'use client'

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import UseTermSettings from "./components/use-term";
import PrivacySettings from "./components/privacy";
import MarketingSettings from "./components/marketing";
import { Label } from "@/components/ui/label";
import EditPasswordModal from "./components/modal/edit-password-modal";

export default function SettingsPage() {
    const [tab, setTab] = useState("use")
    const [openEditPassword, setOpenEditPassword] = useState(false)

    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">환경설정</h1>
                <div className="mt-10">
                    <div className="space-y-4">
                        <h2 className="text-[#5E5955] font-bold text-base mt-12 mb-4">검색 필터</h2>
                    </div>
                    <div className="grid grid-cols-[150px_1fr] border border-gray-200 h-full">
                        <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                            <Label className="font-semibold">비밀번호 설정</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <Button variant="outline" className="p-2 text-[#5E5955] text-sm bg-white" onClick={() => setOpenEditPassword((prev) => !prev)}>비밀번호 변경</Button>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <Tabs value={tab} onValueChange={setTab} className="w-full">
                        <TabsList className="flex gap-2 border-b mb-6 justify-start text-[#C0BCB6] text-border">
                            <TabsTrigger value="use" className="px-4 py-2 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-[#322A24] !data-[state=active]:shadow-none">
                                이용약관
                            </TabsTrigger>
                            <TabsTrigger value="privacy" className="px-4 py-2 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-[#322A24]">
                                개인정보 처리방침
                            </TabsTrigger>
                            <TabsTrigger value="marketing" className="px-4 py-2 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-[#322A24] data-[state=active]:text-[#322A24]">
                                마케팅활용동의 및 광고수신동의
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="use">
                            <UseTermSettings />
                        </TabsContent>
                        <TabsContent value="privacy">
                            <PrivacySettings />
                        </TabsContent>
                        <TabsContent value="marketing">
                            <MarketingSettings />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
            <EditPasswordModal open={openEditPassword} setOpen={setOpenEditPassword} />
        </main>
    )
}