'use client'

export default function BannerLayout({ children }: { children: React.ReactNode }) {

    return (
        <main className="flex-1 border">
        <div className="p-12 text-black text-sm space-y-4">
            <h1 className="text-2xl font-bold">배너 관리</h1>
            {children}
        </div>
        </main>
    )
}