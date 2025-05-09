import { ChevronLeft } from "lucide-react";

export default function LeaveLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="container mx-auto px-6 pt-8">
            {/* <RequestListHeader /> */}
            {/* 헤더 */}
            <div className="flex justify-between">
                <div className="flex items-center mb-8">
                    <ChevronLeft className="text-base text-gray-500 mr-3" />
                    <h2 className="text-2xl font-semibold">이전으로</h2>
                </div>
            </div>

            {children}
        </main>
    )
}