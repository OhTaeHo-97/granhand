import MyPageSidebar from "./components/sidebar/sidebar";
import MyPageTitle from "./components/title";

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-6 pt-8">
            <MyPageTitle />
            <div className="flex w-full min-h-screen bg-white text-gray-900">
                <MyPageSidebar />
                {children}
            </div>
        </div>
    )
}