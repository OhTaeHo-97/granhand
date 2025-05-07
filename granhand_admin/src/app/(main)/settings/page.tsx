'use client'

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import UseTermSettings from "./components/use-term";
import PrivacySettings from "./components/privacy";
import MarketingSettings from "./components/marketing";

export default function SettingsPage() {
    const [tab, setTab] = useState("use")

    return (
        <main className="flex-1 border p-12">
            <h1 className="text-2xl font-bold">환경설정</h1>
            <div className="mt-10">
                <div className="text-black text-sm space-y-4">
                    <h2 className="text-base font-semibold">검색 필터</h2>
                </div>
                <div className="grid grid-cols-[150px_1fr] border border-gray-200 h-18 min-w-190 mt-4">
                    <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2 mr-5">
                    비밀번호 설정
                    </div>
                    <div className="flex items-center gap-4 p-2 h-full">
                        <Button className="border bg-white">비밀번호 변경</Button>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <Tabs value={tab} onValueChange={setTab} className="w-full mx-auto">
                    <TabsList className="flex gap-2 border-b mb-6">
                        <TabsTrigger value="use" className="px-4 py-2 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-black text-gray-500">
                            이용약관
                        </TabsTrigger>
                        <TabsTrigger value="privacy" className="px-4 py-2 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-black text-gray-500">
                            개인정보 처리방침
                        </TabsTrigger>
                        <TabsTrigger value="marketing" className="px-4 py-2 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-black text-gray-500">
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
        </main>
    )
}