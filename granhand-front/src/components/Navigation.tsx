'use client'

import { useCurrentLocale } from "@/lib/useCurrentLocale";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  // const pathname = usePathname()
  // const currentLocale = pathname.split('/')[1] === 'en' ? '/en' : ''
  const currentLocale = useCurrentLocale()
  const pathname = usePathname()

  const isActive = (href: string) => {
    if(pathname === href) {
      return true
    }

    return pathname.startsWith(href) && pathname[href.length] === '/'
    // const baseHref = href.replace(`/${currentLocale}`, '')
    // const basePathname = pathname.replace(`/${currentLocale}`, '')
  }

  // const homeHref = currentLocale === '' ? '/' : currentLocale

  return (
    <nav className="top-0 left-0 right-0 backdrop-blur-sm z-50 border-granhand-warmGray/10">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex space-x-8">
            <Link
              href={`${currentLocale}/journal`}
              className={cn(
                "text-sm transition-colors font-bold",
                // "nav-link text-xs tracking-widest"
                isActive(`${currentLocale}/journal`) ? "text-[#6F6963]" : "text-[#C0BCB6]"
              )}
            >
              JOURNAL
            </Link>
            <Link
              href={`${currentLocale}/event`}
              className={cn(
                "text-sm transition-colors font-bold",
                // "nav-link text-xs tracking-widest"
                isActive(`${currentLocale}/event`) ? "text-[#6F6963]" : "text-[#C0BCB6]"
              )}
              // className="nav-link text-xs tracking-widest"
            >
              EVENT
            </Link>
            <Link
              href={`${currentLocale}/awards`}
              // className="nav-link text-xs tracking-widest"
              className={cn(
                "text-sm transition-colors font-bold",
                // "nav-link text-xs tracking-widest"
                isActive(`${currentLocale}/awards`) ? "text-[#6F6963]" : "text-[#C0BCB6]"
              )}
            >
              AWARDS
            </Link>
            <Link
              href={`${currentLocale}/store`}
              // className="nav-link text-xs tracking-widest"
              className={cn(
                "text-sm transition-colors font-bold",
                // "nav-link text-xs tracking-widest"
                isActive(`${currentLocale}/store`) ? "text-[#6F6963]" : "text-[#C0BCB6]"
              )}
            >
              STORE
            </Link>
            <Link
              href={`${currentLocale}/shop`}
              // className="nav-link text-xs tracking-widest"
              className={cn(
                "text-sm transition-colors font-bold",
                // "nav-link text-xs tracking-widest"
                isActive(`${currentLocale}/shop`) ? "text-[#6F6963]" : "text-[#C0BCB6]"
              )}
            >
              SHOP
            </Link>
          </div>
          <div className="flex items-center space-x-6">
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
