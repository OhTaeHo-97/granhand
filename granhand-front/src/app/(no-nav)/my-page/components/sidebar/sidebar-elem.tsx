'use client'

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SidebarElement({
    title,
    elements,
}: {
    title: string,
    elements: Array<{ title: string, url: string }>,
}) {
    const [openSections, setOpenSections] = useState(true);
    const toggleSection = () => {
        setOpenSections((prev) => !prev);
    };
    const pathname = usePathname()

    const isActive = (url: string) => pathname === url

    return (
        <div>
            <div className="flex justify-between items-center cursor-pointer font-bold text-gray-700" onClick={() => toggleSection()}>{title}
            {openSections ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </div>
            {openSections && (
            <ul className="mt-2 space-y-1 text-sm">
                {
                    elements.map(({ title, url }) => (
                        <Link key={url} href={url}>
                            <li
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
            )}
        </div>
    )
}