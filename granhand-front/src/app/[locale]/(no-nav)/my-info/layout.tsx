import MyInfoHeader from "./components/my-info-header";

export default function MyInfoLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-6 pt-8">
            <MyInfoHeader />
            {children}
        </div>
    )
}