import { ListBulletIcon } from "@radix-ui/react-icons"
import { CalendarIcon, CoinsIcon, GiftIcon } from "lucide-react";
import Link from "next/link";
import MainItemLayout from "./components/main-layout";
import MembershipCard from "./components/membership-card";
import { LocaleTypes } from "../../../../../utils/localization/settings";
import { translation } from "../../../../../utils/localization/locales/server";
import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";

const dummy = [
  {
    id: 1,
    sort: 'GRANHAND > Diffuser',
    name: 'Kyujang Diffuser Set',
    price: 60000,
    image: '/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png'
  },
  {
    id: 2,
    sort: 'GRANHAND > Diffuser',
    name: 'Kyujang Diffuser Set',
    price: 60000,
    image: '/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png'
  },
  {
    id: 3,
    sort: 'GRANHAND > Diffuser',
    name: 'Kyujang Diffuser Set',
    price: 60000,
    image: '/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png'
  },
  {
    id: 4,
    sort: 'GRANHAND > Diffuser',
    name: 'Kyujang Diffuser Set',
    price: 60000,
    image: '/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png'
  }
]

export default async function MyPage({ params: { locale } }: { params: { locale: LocaleTypes } }) {
  const { t } = await translation(locale, ['my_page'])
  const currentLocale = getCurrentLocaleFromParams(locale)

  return (
    // {/* Main Content */}
    <main className="w-full mx-auto ml-10">
    <section>
      <div className="text-xl font-semibold mb-4">{t('my_page:my_membership')}</div>
      <MembershipCard t={t} />
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
      </section>

      {/* 상품 리스트 */}
      <section className="space-y-10">
        {/* 최근 본 상품 */}
        <MainItemLayout title={t('my_page:recently')} itemCount={13} items={dummy} t={t} currentLocale={currentLocale} />

        {/* 관심 상품 */}
        <MainItemLayout title={t('my_page:wishlist')} itemCount={5} items={dummy} t={t} currentLocale={currentLocale} />
      </section>
    </main>
  );
}
