import '@/app/globals.css'
import Footer from '@/components/footer';
import Header from '@/components/header';
import Navigation from '@/components/Navigation'

// export function generateStaticParams() {
//     return [{ locale: 'ko' }, { locale: 'en' }]
// }

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='w-[1120px] mx-auto min-h-screen'>
            <Header />
            <div>
                <Navigation />
                {children}
            </div>
            <Footer />
        </div>
    )
}