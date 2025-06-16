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

    const isActive = (url: string) => {
        // if(pathname.includes('/my-page/info')) {
        //     return '/my-page/info' === url
        // }
        return pathname === url
    }

    return (
        <div>
            <div className="flex justify-between items-center cursor-pointer text-sm font-bold text-[#5E5955]" onClick={() => toggleSection()}>{title}
                {openSections ? <ChevronUpIcon className="w-[24px] h-[24px]" /> : <ChevronDownIcon className="w-[24px] h-[24px]" />}
            </div>
            {openSections && (
            <ul className="mt-2 space-y-1 text-sm font-medium">
                {
                    elements.map(({ title, url }) => (
                        <Link key={url} href={url}>
                            <li
                                className={`px-6 py-2
                                ${isActive(url)
                                    ? "text-[#6F6963] bg-[#322A2408] rounded"
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