import '@/app/globals.css'
import { pretendard } from '../fonts'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={pretendard.variable}>
            <body>
                {children}
            </body>
        </html>
    )
}