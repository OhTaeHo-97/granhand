'use client'

import { useCurrentLocale } from "@/lib/useCurrentLocale";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  // const pathname = usePathname()
  // const currentLocale = pathname.split('/')[1] === 'en' ? '/en' : ''
  const currentLocale = useCurrentLocale()

  return (
    <nav className="top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-granhand-warmGray/10">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex space-x-12">
            <Link href={`${currentLocale}/journal`} className="nav-link text-xs tracking-widest">JOURNAL</Link>
            <Link href={`${currentLocale}/event`} className="nav-link text-xs tracking-widest">EVENT</Link>
            <Link href={`${currentLocale}/awards`} className="nav-link text-xs tracking-widest">AWARDS</Link>
            <Link href={`${currentLocale}/store`} className="nav-link text-xs tracking-widest">STORE</Link>
            <Link href={`${currentLocale}/shop`} className="nav-link text-xs tracking-widest">SHOP</Link>
          </div>
          <div className="flex items-center space-x-6">
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
