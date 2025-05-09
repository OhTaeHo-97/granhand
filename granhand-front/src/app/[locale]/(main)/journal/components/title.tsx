'use client'

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useState } from "react";

const categories = ['All', 'News', 'Culture', 'Life', 'Team', 'Essay', 'Film'];

export default function JournalTitle() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const pathname = usePathname()
    const split = pathname.split('/')
    const showSubmenu = isNaN(Number(split[split.length - 1]))
    // console.log('showSubmenu: ', showSubmenu)

    return (
        <nav className="w-full flex items-center justify-between border-t pt-4">
            <div className="flex items-center gap-4 h-10">
                <h2 className="text-lg font-medium text-gray-900 m-0 p-0 leading-none">JOURNAL</h2>
            </div>
            {showSubmenu && (
                <div className="flex items-center text-sm text-gray-400">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`text-sm ${
                                selectedCategory === category
                                    ? 'text-black semibold'
                                    : 'text-gray-400'
                            } transition-colors min-w-[5%] hover:text-black`}
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            )}
        </nav>
    )
}