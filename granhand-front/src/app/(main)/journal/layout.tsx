'use client'

import { usePathname } from "next/navigation"
import JournalTitle from "./components/title"

export default function JournalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const split = pathname.split('/')
    console.log(split)

    return (
        <section className="container mx-auto px-6 pt-8">
            {/* <section className="py-8"> */}
            <JournalTitle showSubmenu={split.length < 3} />
            {children}
            {/* </section> */}
        </section>
    )
}