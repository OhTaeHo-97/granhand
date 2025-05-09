import FindIdHeader from "./components/header";

export default function FindIdLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="space-y-6 container mx-auto px-6 pt-8">
            {/* Header */}
            {/* <h2 className="text-lg font-medium text-left mb-4 border-b border-b-[#6f6963] pb-4">아이디 찾기</h2>
            <div className="flex items-center mb-8">
                <Button className="w-4 h-4">
                    <ChevronLeft className="w-4 h-4 text-gray-500 mr-3" />
                </Button>
                <div className="text-sm items-center text-gray-500">이전단계</div>
            </div> */}
            <FindIdHeader />
            {children}
        </main>
    )
}