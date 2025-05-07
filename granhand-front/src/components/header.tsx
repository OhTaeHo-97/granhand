import { Globe, Home, Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between py-4 container mx-auto px-6">
            {/* bg-[#faf6ee] */}
            {/* 왼쪽: 로고 */}
            <Link href="/" className="text-2xl font-bold text-gray-800">
                GRANHAND.
            </Link>

            {/* 오른쪽: 아이콘 + 로그인 */}
            <div className="flex items-center gap-6">
                <Link href="/">
                <Home className="w-5 h-5 text-gray-600" />
                </Link>
                <Link href="/search">
                <Search className="w-5 h-5 text-gray-600" />
                </Link>
                <Link href="/search">
                <ShoppingBag className="w-5 h-5 text-gray-600" />
                </Link>
                <Link href="/search">
                <User className="w-5 h-5 text-gray-600" />
                </Link>
                <Link href="/button">
                <Globe className="w-5 h-5 text-gray-600" />
                </Link>
                <Link
                href="/login"
                className="px-4 py-2 border border-[#fdfbf5] rounded text-sm text-[#322a24] hover:bg-gray-100 min-w-24 text-center justify-center items-center"
                >
                    {/* border-gray-400 */}
                    {/* text-gray-800 */}
                로그인
                </Link>
            </div>
        </header>
    )
}