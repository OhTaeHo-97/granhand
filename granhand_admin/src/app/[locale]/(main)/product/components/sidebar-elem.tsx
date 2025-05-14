'use client'

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function ProductSidebarElem({
    title,
    elements,
}: {
    title: string,
    elements: Array<{ title: string, url: string }>,
}) {
    const [pOpenSections, setPOpenSections] = useState(true);
    const pToggleSection = () => {
        setPOpenSections((prev) => !prev);
    };
    const pathname = usePathname()

    console.log(pathname)

    const isActive = (url: string) => pathname === url

    return (
        <div>
            <div className="flex items-center cursor-pointer gap-3 mt-4 ml-4 font-bold text-[#5E5955] text-base" onClick={() => pToggleSection()}>
                {pOpenSections ? <ChevronUpIcon className="!w-4 !h-4" /> : <ChevronDownIcon className="!w-4 !h-4" />} {title}
            </div>
            {pOpenSections && (
            <ul className="mt-2 space-y-1 text-sm">
                {
                    elements.map(({ title, url }) => (
                        <Link href={url}>
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
        </div>
    )
}

// 상품 등록, 카테고리 수정