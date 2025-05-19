'use client'

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function StoreSidebarElem({
    title,
    elements
}: {
    title: string,
    elements: Array<{title: string, url: string}>,
}) {
    const [sOpenSections, setSOpenSections] = useState(true);
    const sToggleSection = () => {
        setSOpenSections((prev) => !prev);
    };

    const pathname = usePathname()

    const isActive = (url: string) => pathname === url

    return (
        <div>
            <div className="flex items-center cursor-pointer gap-3 mt-4 ml-4 font-bold text-[#5E5955] text-base" onClick={() => sToggleSection()}>
                {sOpenSections ? <ChevronUpIcon className="!w-4 !h-4" /> : <ChevronDownIcon className="!w-4 !h-4" />} {title}
            </div>
            <div className="flex items-center cursor-pointer font-bold text-gray-700 gap-3 mt-4" onClick={() => sToggleSection()}>
                {sOpenSections ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />} {title}
            </div>
            {sOpenSections && (
            <ul className="mt-2 space-y-1 text-sm">
                {
                    elements.map(({ title, url }) => (
                        <Link key={title} href={url}>
                            <li
                                key={url}
                                className={`px-12 py-2
                                ${isActive(url)
                                    ? "text-[#5E5955] bg-[#322A240F] rounded"
                                    : "text-[#C0BCB6]"
                                }`}
                            >
                                {title}
                            </li>
                        </Link>
                    ))
                }
            </ul>
            )}


            {/* {sOpenSections && (
            <ul className="mt-2 space-y-1 text-sm">
                {
                    elements.map(({ title, url }) => (
                        <Link key={title} href={url}>
                            <li
                                key={url}
                                className={`px-6 py-2
                                ${isActive(url)
                                    ? "text-gray-700 bg-gray-100 rounded"
                                    : "text-gray-400"
                                }`}
                            >
                                {title}
                            </li>
                        </Link>
                    ))
                }
            </ul>
            )} */}
        </div>
    )
}