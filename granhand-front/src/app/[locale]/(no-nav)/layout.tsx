import '@/app/globals.css'
import Footer from "@/components/footer";
import Header from "@/components/header";
import { pretendard } from '../../fonts'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={pretendard.variable}>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}