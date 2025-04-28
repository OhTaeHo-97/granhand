// import "@/globals.css";
import '@/app/globals.css'
import Navigation from '@/components/Navigation'

export default function TestLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            {children}
        </div>
    )
}