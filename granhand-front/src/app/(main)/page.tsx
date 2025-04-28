'use client'

// import Navigation from "@/components/Navigation";
import BrandGrid from "@/components/BrandGrid";
import JournalGrid from "@/components/JournalGrid";

export default function MainPage() {
    return (
        <main className="container mx-auto px-6 pt-8">
            <BrandGrid />
            <JournalGrid classType="border-b pb-4" showSubmenu={false} />
        </main>
    )
}