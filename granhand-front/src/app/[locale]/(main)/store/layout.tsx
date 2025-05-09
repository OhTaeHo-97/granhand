import StoreNavigation from "./components/Navigation";

export default function StoreLayout({ children }: { children: React.ReactNode }) {
    return (
        // <section className="container mx-auto px-6 py-12 space-y-12">
        <section className="container mx-auto px-6 pt-8">
            <StoreNavigation />
            {children}
        </section>
    )
}