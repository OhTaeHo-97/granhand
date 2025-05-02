'use client'

// import Navigation from "@/components/Navigation";
import BrandGrid from "@/components/BrandGrid";
import JournalGrid from "@/components/JournalGrid";
import JournalGridTemp from "@/components/JournalGridTemp";

export default function MainPage() {
    return (
        <main className="container mx-auto px-6 pt-8">
            <BrandGrid />
            <h2 className="text-lg font-medium text-left mb-8 border-b pb-4">JOURNAL</h2>
            <JournalGridTemp />
        </main>
    )
}