import '@/app/globals.css'
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-[1120px] mx-auto min-h-screen">
            <Header />
            {children}
            <Footer />
        </div>
    )
}