import Image from "next/image";
import Link from "next/link";

export default function MyPageShortcut({ t, currentLocale }: { t: (key: string) => string, currentLocale: string }) {
    return (
        <div className="w-full flex justify-center">
            <div className="w-[85%] grid grid-cols-7 items-center justify-between mt-16 mb-8 text-center text-[#C0BCB6]">
                <Link href={`${currentLocale}/my-page/point`} className="flex flex-col items-center gap-2">
                    {/* <Point */}
                    <Image
                        src='/point-icon.svg'
                        alt='point icon'
                        width={100}
                        height={100}
                        className="w-8 h-8"
                    />
                    <span className="text-sm font-medium">{t('my_page:point')}</span>
                </Link>
                <div className="h-10 w-px bg-[#E9E6E0] mx-auto" />
                <Link href={`${currentLocale}/my-page/attendance`} className="flex flex-col items-center gap-2">
                    <Image
                        src='/calendar-icon.svg'
                        alt='point icon'
                        width={100}
                        height={100}
                        className="w-8 h-8"
                    />
                    <span className="text-sm font-medium">{t('my_page:attendance')}</span>
                </Link>
                <div className="h-10 w-px bg-[#E9E6E0] mx-auto" />
                <Link href={`${currentLocale}/my-page`} className="flex flex-col items-center gap-2">
                    <Image
                        src='/gift-icon.svg'
                        alt='point icon'
                        width={100}
                        height={100}
                        className="w-8 h-8"
                    />
                    <span className="text-sm font-medium">{t('my_page:gift_list')}</span>
                </Link>
                <div className="h-10 w-px bg-[#E9E6E0] mx-auto" />
                <Link href={`${currentLocale}/my-page/order`} className="flex flex-col items-center gap-2">
                    <Image
                        src='/list-icon.svg'
                        alt='point icon'
                        width={100}
                        height={100}
                        className="w-8 h-8"
                    />
                    <span className="text-sm font-medium">{t('my_page:order_list')}</span>
                </Link>
            </div>
        </div>
    )
}