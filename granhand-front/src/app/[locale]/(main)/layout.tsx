import '@/app/globals.css'
import Footer from '@/components/footer';
import Header from '@/components/header';
import Navigation from '@/components/Navigation'
import { pretendard } from '../../fonts'

export function generateStaticParams() {
    return [{ locale: 'ko' }, { locale: 'en' }]
}

export default function TestLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className={pretendard.variable}>
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
                <div className="min-h-screen bg-white">
                    <Navigation />
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}