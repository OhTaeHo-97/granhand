'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import MobileBanner from "./components/mobile";
import PcBanner from "./components/pc";

const banners = [
    { label: "1", image: "/app_1_3_seven_01.jpg", link: "app_1.3.event_01" },
    { label: "2", image: null, link: "" },
    { label: "3", image: null, link: "" },
    { label: "이벤트 배너", image: null, link: "" },
    { label: "마이페이지 배너", image: null, link: "" },
    { label: "알림 배너", image: null, link: "" },
];

const rowHeaders = ["고정", "미리보기", "링크"];

export default function BannerPage() {
    const [tab, setTab] = useState("mobile");

    return (
        <div>
            <Tabs value={tab} onValueChange={setTab} className="w-full mx-auto">
                <TabsList className="flex gap-2 border-b mb-6">
                    <TabsTrigger value="mobile" className="px-4 py-2 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-black text-gray-500">
                        Mobile(app)
                    </TabsTrigger>
                    <TabsTrigger value="pc" className="px-4 py-2 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-black text-gray-500">
                        PC(web)
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="mobile">
                    <MobileBanner />
                </TabsContent>
                <TabsContent value="pc">
                    <PcBanner />
                </TabsContent>
            </Tabs>
        </div>
    )
}