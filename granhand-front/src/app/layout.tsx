'use client'

import '@/app/globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { Globe, Home, Search } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from "react";
import SearchComponent from './(main)/search/page'
import { useSearchParams } from 'next/navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
    // const [isSearch, setIsSearch] = useState(false)

    // useEffect(() => {}, [isSearch])

    // const params = useSearchParams()
    // const onClickSearch = () => {
    //     window.history.pushState(isSearch, '', `?${params.toString()}`)
    //     setIsSearch((prev) => !prev)
    // }

    return (
        <html lang="en">
            <body>
                {/* <Header searchClick={onClickSearch} /> */}
                {/* {
                    isSearch ? (
                        <SearchComponent />
                    ) : (
                        children
                    )
                } */}
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}