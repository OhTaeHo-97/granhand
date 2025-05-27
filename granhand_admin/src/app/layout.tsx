import { pretendard } from '@/app/fonts'
import '@/app/globals.css'
import AuthProvider from './providers/SessionProvider'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html className={pretendard.variable}>
            <body>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    )
}