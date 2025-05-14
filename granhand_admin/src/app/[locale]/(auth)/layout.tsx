import { pretendard } from '@/app/fonts'
import '@/app/globals.css'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={pretendard.variable}>
            <body>
                {children}
            </body>
        </html>
    )
}