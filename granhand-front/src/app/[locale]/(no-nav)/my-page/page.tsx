import MainItemLayout from "./components/main-layout";
import MembershipCard from "./components/membership-card";
import { LocaleTypes } from "../../../../../utils/localization/settings";
import { translation } from "../../../../../utils/localization/locales/server";
import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";
import MyPageShortcut from "./components/shortcut";

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

export default async function MyPage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
  const { locale } = await params
  const { t } = await translation(locale, ['my_page'])
  const currentLocale = getCurrentLocaleFromParams(locale)

  return (
    // {/* Main Content */}
    <main className="w-[738px] mx-auto ml-10">
      <section>
        <div className="text-base font-bold mb-4 text-[#6F6963]">{t('my_page:my_membership')}</div>
        <MembershipCard t={t} currentLocale={currentLocale} />
        <MyPageShortcut t={t} currentLocale={currentLocale} />
      </section>

      {/* 상품 리스트 */}
      <section className="space-y-10">
        {/* 최근 본 상품 */}
        <MainItemLayout title={t('my_page:recently')} itemCount={13} items={dummy} t={t} currentLocale={currentLocale} listLink={`${currentLocale}/wish-latest?menu=latest`} emptyMsg="최근 본 상품이 없어요" />

        {/* 관심 상품 */}
        <MainItemLayout title={t('my_page:wishlist')} itemCount={5} items={dummy} t={t} currentLocale={currentLocale} listLink={`${currentLocale}/wish-latest?menu=wish`} emptyMsg="관심 상품이 없어요" />
      </section>
    </main>
  );
}
