import FindPwHeader from "./components/header";

export default function FindPwLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="space-y-6 container mx-auto px-6 pt-8">
            <FindPwHeader />
            {children}
        </main>
    )
}