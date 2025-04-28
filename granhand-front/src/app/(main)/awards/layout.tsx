'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const awards = ['필름사진상', '사생대회', '문예공모전']
const categories = [{label: '행사안내', value: 'info'}, {label: '참가접수', value: 'participation'}, {label: '당선작', value: 'winner'}]

export default function AwardsLayout({ children }: { children: React.ReactNode }) {
    // const [menuOpen, setMenuOpen] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState('필름사진상')
    const [selectedCategory, setSelectedCategory] = useState('행사안내')

    return (
        <section className="container mx-auto px-6 pt-8">
            {/* 상단 네비게이션 */}
            <nav className="w-full flex items-center justify-between border-t pt-4">
                {/* 왼쪽: AWARDS + 드롭다운 */}
                <div className="flex items-center gap-4">
                {/* <h2 className={`text-lg font-medium text-left mb-8`}>AWARDS</h2> */}
                <h2 className="text-lg font-medium text-gray-900 m-0 p-0 leading-none">AWARDS</h2>
                {/* <span className="text-sm font-semibold">AWARDS</span> */}

                <div className="relative">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-sm flex items-center gap-1 text-gray-600">
                            {selectedMenu} <ChevronDown className="w-4 h-4" />
                        </DropdownMenuTrigger>

                        <DropdownMenuPortal>
                            <DropdownMenuContent sideOffset={4} className="bg-white border rounded shadow-md p-1 text-sm">
                                {awards.map((award) => (
                                    <DropdownMenuItem
                                        key={award}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onSelect={() => setSelectedMenu(award)}
                                    >
                                        {award}
                                    </DropdownMenuItem>
                                ))}
                                {/* <DropdownMenuItem key='필름사진상' className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    필름사진상
                                </DropdownMenuItem>
                                <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    사생대회
                                </DropdownMenuItem>
                                <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    문예공모전
                                </DropdownMenuItem> */}
                            </DropdownMenuContent>
                        </DropdownMenuPortal>
                    </DropdownMenu>
                    {/* <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-sm flex items-center gap-1 text-gray-600"
                    >
                    필름사진상
                    <span>▼</span>
                    </button>
                    {menuOpen && (
                    <div className="absolute mt-2 w-40 bg-white border rounded shadow-md z-10">
                        <div className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                        필름사진상
                        </div>
                        나중에 추가 메뉴 필요하면 여기 추가
                    </div>
                    )} */}
                </div>
                </div>

                {/* 오른쪽: 서브메뉴 */}
                <div className="flex items-center gap-6 text-sm text-gray-400">
                    {categories.map(({ label, value }) => (
                        <button
                            key={value}
                            onClick={() => setSelectedCategory(value)}
                            className={`text-sm ${
                                selectedCategory === value
                                    ? 'text-black semibold'
                                    : 'text-gray-400'
                            } transition-colors min-w-[5%] hover:text-black`}
                        >
                            {label}
                        </button>
                    ))}
                {/* <button className="text-black font-semibold">행사안내</button>
                <button className="hover:text-black">참가접수</button>
                <button className="hover:text-black">당선작</button> */}
                </div>
            </nav>
            {children}


            {/* <section className="py-8">
                <h2 className={`text-lg font-medium text-left mb-8 border-t pt-4`}>AWARDS</h2>
                <DropdownMenu></DropdownMenu>
                {children}
            </section> */}
        </section>
    )
}