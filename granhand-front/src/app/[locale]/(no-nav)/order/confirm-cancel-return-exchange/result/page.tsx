'use client'

import { useCurrentLocale } from "@/lib/useCurrentLocale";
import RequestListHeader from "../request-list/components/header";
import CancelResult from "./components/cancel";
import RefundResult from "./components/refund";
import { notFound, useSearchParams } from "next/navigation";

export default function ResultPage() {
    const currentLocale = useCurrentLocale()
    const searchParams = useSearchParams()
    const queryString = new URLSearchParams(searchParams).toString()
    const category = searchParams.get('category')
    if(!category) notFound()
    
    return (
        <div className="container mx-auto px-6 pt-8 min-h-screen">
            <RequestListHeader category={category} />
                <CancelResult />
            <RefundResult />
        </div>
    )
}