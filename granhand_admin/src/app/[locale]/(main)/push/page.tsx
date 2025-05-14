'use client'

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import PushSendPage from "./components/send-push"
import PushListPage from "./components/push-list"
import { getLocaleAsLocaleTypes } from "@/lib/useCurrentLocales"
import { useTranslation } from "../../../../../utils/localization/client"

export default function PushPage() {
    const locale = getLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'push')
    const [tabState, setTabState] = useState('send')
    
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