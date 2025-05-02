export default function EventLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="container mx-auto px-6 pt-8">
            <section className="py-8">
                <h2 className={`text-lg font-medium text-left mb-8 border-t pt-4`}>EVENT</h2>
                {children}
            </section>
        </section>
    )
}