import { ListBulletIcon } from "@radix-ui/react-icons";
import { CalendarIcon, CoinsIcon, GiftIcon } from "lucide-react";
import Link from "next/link";

export default function MyPageShortcut({ t, currentLocale }: { t: (key: string) => string, currentLocale: string }) {
    return (
        <div className="w-full flex justify-center">
            <div className="w-[85%] grid grid-cols-7 items-center justify-between bg-white mt-16 mb-8 text-center">
                <Link href={`${currentLocale}/my-page/point`} className="flex flex-col items-center gap-2 text-gray-400">
                    <CoinsIcon className="w-6 h-6 mb-2" />
                    <span>{t('my_page:point')}</span>
                </Link>
                <div className="h-10 w-px bg-gray-200 mx-auto" />
                <Link href={`${currentLocale}/my-page/attendance`} className="flex flex-col items-center gap-2 text-gray-400">
                    <CalendarIcon className="w-6 h-6 mb-2" />
                    <span>{t('my_page:attendance')}</span>
                </Link>
                <div className="h-10 w-px bg-gray-200 mx-auto" />
                <Link href={`${currentLocale}/my-page`} className="flex flex-col items-center gap-2 text-gray-400">
                    <GiftIcon className="w-6 h-6 mb-2" />
                    <span>{t('my_page:gift_list')}</span>
                </Link>
                <div className="h-10 w-px bg-gray-200 mx-auto" />
                <Link href={`${currentLocale}/my-page/order`} className="flex flex-col items-center gap-2 text-gray-400">
                    <ListBulletIcon className="w-6 h-6 mb-2" />
                    <span>{t('my_page:order_list')}</span>
                </Link>
            </div>
        </div>
    )
}