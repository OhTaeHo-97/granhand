export default function EventLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="container mx-auto px-6 pt-8">
            <nav className="w-full flex items-center justify-between border-t pt-4">
                <div className="flex items-center gap-4 h-10">
                    <h2 className="text-lg font-medium text-gray-900 m-0 p-0 leading-none">EVENT</h2>
                </div>
            </nav>
            {children}
            {/* <section className="py-8">
                <h2 className={`text-lg font-medium text-left mb-8 border-t pt-4`}>EVENT</h2>
                {children}
            </section> */}
        </section>
    )
}