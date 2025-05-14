'use client'

import { useCurrentLocale } from "@/lib/useCurrentLocales";
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
    const currentLocale = useCurrentLocale()
    const [openSections, setOpenSections] = useState(true);
    const toggleSection = () => {
        setOpenSections((prev) => !prev);
    };
    const pathname = usePathname()

    const isActive = (url: string) => pathname === url || pathname === `${currentLocale}${url}`

    return (
        <div>
            <div className="flex justify-between items-center cursor-pointer font-bold text-[#5E5955]" onClick={() => toggleSection()}>{title}
            {openSections ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </div>
            {openSections && (
            <ul className="mt-2 space-y-1 text-sm">
                {
                    elements.map(({ title, url }) => (
                        <Link key={url} href={`${currentLocale}${url}`}>
                            <li
                                className={`px-6 py-2
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
        </div>
    )
}