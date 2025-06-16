'use client'

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCurrentLocale } from "@/lib/useCurrentLocale";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const categories = ['All', 'News', 'Culture', 'Life', 'Team', 'Essay', 'Film'];

export default function JournalTitle() {
    const router = useRouter()
    const currentLocale = useCurrentLocale()
    const [selectedCategory, setSelectedCategory] = useState('All');
    const pathname = usePathname()
    const split = pathname.split('/')
    const showSubmenu = isNaN(Number(split[split.length - 1]))

    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value)
        router.push(`${currentLocale}/journal?category=${value}`)
    }

    return (
        <nav className="w-full flex items-center justify-between border-t pt-4">
            <div className="flex items-center gap-4 h-10">
                <h2 className="text-lg font-medium text-[#6F6963] m-0 p-0 leading-none">JOURNAL</h2>
            </div>
            {showSubmenu && (
                <div className="flex items-center text-sm text-gray-400">
                    <RadioGroup
                        value={selectedCategory}
                        onValueChange={handleCategoryChange}
                        // className="flex text-sm"
                        className="flex rounded overflow-hidden gap-10"
                    >
                        {categories.map((category) => (
                            <Label
                                key={category}
                                className={cn(
                                    "text-sm font-bold transition-colors min-w-[5%] hover:text-[#322A24]",
                                    selectedCategory === category
                                        ? "text-[#322A24]"
                                        : "text-[#322A244D]"
                                )}
                            >
                                <RadioGroupItem value={category} className="hidden" />
                                {category}
                            </Label>
                        ))}
                    </RadioGroup>
                </div>
            )}
        </nav>
    )
}