import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SubSidebarElem({
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
            <div className="flex items-center cursor-pointer gap-3 mt-4 ml-4 font-bold text-[#5E5955] text-base" onClick={() => toggleSection()}>
                {openSections ? <ChevronUpIcon className="!w-4 !h-4" /> : <ChevronDownIcon className="!w-4 !h-4" />} {title}
            </div>
            {openSections && (
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
        </div>
    )
}