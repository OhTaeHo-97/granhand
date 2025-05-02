import MyPageSidebar from "./components/sidebar/sidebar";

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-6 pt-8">
            <div className="w-full py-10 mx-auto">
                <h2 className="text-2xl font-semibold mb-8">마이페이지</h2>
            </div>
            <div className="flex w-full min-h-screen bg-white text-gray-900">
                <MyPageSidebar />
                {children}
            </div>
        </div>
    )
}