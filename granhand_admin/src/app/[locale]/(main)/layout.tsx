// // 'use client'

import { pretendard } from "@/app/fonts";
import MainSidebar from "./components/sidebar";

import '@/app/globals.css'
// // import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import { Metadata } from 'next'
// import { Select } from '@/components/ui/select'
// import { Button } from '@/components/ui/button'
// import { Sidebar, SidebarHeader } from '@/components/ui/sidebar'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'GRANHAND. Admin',
//   description: 'GRANHAND. Admin Dashboard',
// }

// const sidebarItems = [
//     { title: "HOME", path: "/" },
//     { 
//         title: "회원 관리",
//         children: [
//         { title: "회원 목록", path: "/members" },
//         { title: "회원 등급", path: "/member-levels" },
//         ]
//     },
//     {
//         title: "상품 관리",
//         children: [
//         { title: "상품 목록", path: "/products" },
//         { title: "상품 등록", path: "/products/new" },
//         ]
//     },
//     {
//         title: "콘텐츠 관리",
//         children: [
//         { title: "게시판 관리", path: "/boards" },
//         { title: "팝업 관리", path: "/popups" },
//         ]
//     },
//     {
//         title: "통계",
//         children: [
//         { title: "매출 통계", path: "/statistics/sales" },
//         { title: "방문자 통계", path: "/statistics/visitors" },
//         ]
//     },
//     { title: "환경설정", path: "/settings" },
// ];

// export default function RootLayout({
//     children,
// }: {
//     children: React.ReactNode
// }) {
//     // {/* <div className="flex h-screen">
//     //             <div>
//     //                 <Sidebar>
//     //                     <SidebarHeader>
//     //                         <Select>

//     //                         </Select>
//     //                         <Button>사이트 바로가기</Button>
//     //                     </SidebarHeader>
//     //                 </Sidebar>
//     //                 {/* <Sidebar items={sidebarItems} /> */}
//     //                 </div>
//     //                 <main className="flex-1 overflow-y-auto">
//     //                     {children}
//     //                 </main>
//     //                 </div> */}
//     return (
//         <html lang="ko">
//         <body className={inter.className}>
//             {children}
//         </body>
//         </html>
//     )
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={pretendard.variable}>
            <body>
                <div className="flex min-h-screen">
                    {/* Sidebar */}
                    <MainSidebar />
                    {children}
                </div>
            </body>
        </html>
    )
}