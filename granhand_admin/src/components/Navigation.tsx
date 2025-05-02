
import { Search } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  return (
    // <nav className="top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-granhand-warmGray/10">
    <nav className="top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-granhand-warmGray/10">
    {/* <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-granhand-warmGray/10"> */}
      {/* <div className="container mx-auto px-6 py-6"> */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex space-x-12">
            {/* <Link to="/journal" className="nav-link text-xs tracking-widest">JOURNAL</Link>
            <Link to="/event" className="nav-link text-xs tracking-widest">EVENT</Link>
            <Link to="/awards" className="nav-link text-xs tracking-widest">AWARDS</Link>
            <Link to="/store" className="nav-link text-xs tracking-widest">STORE</Link> */}
            <Link href="/journal" className="nav-link text-xs tracking-widest">JOURNAL</Link>
            <Link href="/event" className="nav-link text-xs tracking-widest">EVENT</Link>
            <Link href="/awards" className="nav-link text-xs tracking-widest">AWARDS</Link>
            <Link href="/store" className="nav-link text-xs tracking-widest">STORE</Link>
          </div>
          <div className="flex items-center space-x-6">
            {/* <Link to="/login" className="text-xs tracking-widest hover:text-gray-600">로그인</Link>
            <Link to="/signup" className="text-xs tracking-widest hover:text-gray-600">회원가입</Link>
            <button className="p-2 hover:bg-granhand-warmGray/10 rounded-full transition-colors"> */}
            {/* <Link href="/login" className="text-xs tracking-widest hover:text-gray-600">로그인</Link>
            <Link href="/signup" className="text-xs tracking-widest hover:text-gray-600">회원가입</Link>
            <button className="p-2 hover:bg-granhand-warmGray/10 rounded-full transition-colors">
              <Search className="w-4 h-4" />
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
