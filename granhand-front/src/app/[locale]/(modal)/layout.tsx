import '@/app/globals.css'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='w-[1120px] mx-auto min-h-screen'>
            {children}
        </div>
    )
}