import { ListBulletIcon } from "@radix-ui/react-icons"
import { CalendarIcon, CoinsIcon, GiftIcon } from "lucide-react";
import Link from "next/link";
import MainItemLayout from "./components/main-layout";
import MembershipCard from "./components/membership-card";

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

export default function MyPage() {
  return (
    // {/* Main Content */}
    <main className="flex-1 px-10 py-10 space-y-12">
    <section>
      <div className="text-xl font-semibold mb-4">나의 멤버십 등급</div>
      <MembershipCard />
      <div className="w-full flex justify-center">
        <div className="w-[85%] grid grid-cols-7 items-center justify-between bg-white mt-16 mb-8 text-center">
          <Link href="#" className="flex flex-col items-center gap-2 text-gray-400">
            <CoinsIcon className="w-6 h-6 mb-2" />
            <span>포인트</span>
          </Link>
          <div className="h-10 w-px bg-gray-200 mx-auto" />
          <Link href="#" className="flex flex-col items-center gap-2 text-gray-400">
            <CalendarIcon className="w-6 h-6 mb-2" />
            <span>출석체크</span>
          </Link>
          <div className="h-10 w-px bg-gray-200 mx-auto" />
          <Link href="#" className="flex flex-col items-center gap-2 text-gray-400">
            <GiftIcon className="w-6 h-6 mb-2" />
            <span>선물함</span>
          </Link>
          <div className="h-10 w-px bg-gray-200 mx-auto" />
          <Link href="#" className="flex flex-col items-center gap-2 text-gray-400">
            <ListBulletIcon className="w-6 h-6 mb-2" />
            <span>주문내역</span>
          </Link>
        </div>
      </div>
      </section>

      {/* 상품 리스트 */}
      <section className="space-y-10">
        {/* 최근 본 상품 */}
        <MainItemLayout title="최근 본 상품" itemCount={13} items={dummy} />

        {/* 관심 상품 */}
        <MainItemLayout title="관심상품" itemCount={5} items={dummy} />
      </section>
    </main>
  );
}
