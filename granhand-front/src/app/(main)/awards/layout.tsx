import NavigationBar from "./components/navigation";

export default function AwardsLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="container mx-auto px-6 pt-8">
            <NavigationBar />
            {children}
        </section>
    )
}