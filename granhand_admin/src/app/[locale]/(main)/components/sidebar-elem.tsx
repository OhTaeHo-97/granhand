'use client'

import { useCurrentLocale } from "@/lib/useCurrentLocales";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";

export default function SidebarElement({
    title,
    elements,
}: {
    title: { title: string, url: string },
    elements: Array<{ title: string, url: string }>,
}) {
    const router = useRouter()
    const currentLocale = useCurrentLocale()
    const [openSections, setOpenSections] = useState(false)

    const handleRoute = () => {
        setOpenSections(true)
        router.push(`${currentLocale}${title.url}`)
    }

    const handleToggleSection = (e: MouseEvent) => {
        e.stopPropagation()
        setOpenSections((prev) => !prev)
    }

    const pathname = usePathname()

    const isActive = (url: string) => {
        if(url === `${currentLocale}/order`) {
            return pathname === `${currentLocale}/order`
        }
        if(url === `${currentLocale}/product/category`) {
            return pathname === `${currentLocale}/product/category`
        }
        if (url === '/product') {
            return pathname === '/product' || 
                    (pathname.startsWith('/product/') && !pathname.startsWith('/product/category'));
        }
        return pathname.startsWith(url)
    }

    return (
        <div>
            {/* <div className="flex justify-between items-center cursor-pointer font-bold text-[#5E5955]" onClick={(e) => toggleSection(e)}> */}
            <div className="flex justify-between items-center cursor-pointer font-bold text-[#5E5955]" onClick={() => handleRoute()}>
                <div>
                    {title.title}
                </div>
                {elements.length !== 0 && (
                    openSections ? (
                        <div onClick={(e) => handleToggleSection(e)}>
                            <ChevronUpIcon />
                        </div>
                    ) : (
                        <div onClick={(e) => handleToggleSection(e)}>
                            <ChevronDownIcon />
                        </div>
                    )
                )}
            </div>
            {openSections && (
            <ul className="mt-2 space-y-1 text-sm">
                {
                    elements.map(({ title, url }) => (
                        <Link key={url} href={`${currentLocale}${url}`}>
                            <li
                                className={`px-6 py-2
                                ${isActive(`${currentLocale}${url}`)
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