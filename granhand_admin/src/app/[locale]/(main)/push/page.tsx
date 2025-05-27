'use client'

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import PushSendPage from "./components/send-push"
import PushListPage from "./components/push-list"
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales"
import { useTranslation } from "../../../../../utils/localization/client"
import { useSearchParams } from "next/navigation"

export default function PushPage() {
    const searchParams = useSearchParams()
    const tab = searchParams.get('tab')

    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'push')
    const [tabState, setTabState] = useState(tab ? tab : 'send')
    
    return (
        <div>
            <Tabs defaultValue={tabState} onValueChange={(value) => setTabState(value)}>
                <TabsList className="bg-transparent border-b border-gray-200">
                    <TabsTrigger value="send" className={tabState === 'send' ? 'border-b-2 border-black' : ''}>{t('send_push')}</TabsTrigger>
                    <TabsTrigger value="history" className={tabState === 'history' ? 'border-b-2 border-black' : ''}>{t('push_history')}</TabsTrigger>
                </TabsList>
            </Tabs>
            {tabState === 'send' && <PushSendPage />}
            {tabState === 'history' && <PushListPage />}
        </div>
    )
}