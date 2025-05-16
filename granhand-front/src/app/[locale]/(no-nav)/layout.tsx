import '@/app/globals.css'
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}