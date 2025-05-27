'use client'

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import MobileBanner from "./components/mobile";
import PcBanner from "./components/pc";

export default function BannerPage() {
    const [tab, setTab] = useState("mobile");

    return (
        <div>
            <Tabs defaultValue={tab} onValueChange={setTab}>
                <TabsList className="bg-transparent border-b border-gray-200">
                    <TabsTrigger value="mobile" className={tab === 'mobile' ? 'border-b-2 border-black' : ''}>Mobile(app)</TabsTrigger>
                    <TabsTrigger value="pc" className={tab === 'pc' ? 'border-b-2 border-black' : ''}>PC(web)</TabsTrigger>
                </TabsList>
            </Tabs>
            {tab === 'mobile' && <MobileBanner />}
            {tab === 'pc' && <PcBanner />}

            {/* <Tabs value={tab} onValueChange={setTab} className="w-full mx-auto">
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
            </Tabs> */}
        </div>
    )
}