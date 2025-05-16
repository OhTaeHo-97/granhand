import '@/app/globals.css'
import Footer from '@/components/footer';
import Header from '@/components/header';
import Navigation from '@/components/Navigation'

// export function generateStaticParams() {
//     return [{ locale: 'ko' }, { locale: 'en' }]
// }

export default function TestLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-white">
                <Navigation />
                {children}
            </div>
            <Footer />
        </>
    )
}