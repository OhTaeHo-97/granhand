'use client'

import Image from "next/image";
import Link from "next/link";
import GranhandImg from '@/../public/lovable-uploads/462407bd-a7bd-4a89-a86c-56e716327e2e.png'
// import GranhandImg from 'public/lovable-uploads/462407bd-a7bd-4a89-a86c-56e716327e2e.png';
import HelionImg from '@/../public/lovable-uploads/e964874e-8fb3-4902-b2d0-7e900a5728f1.png';
import CoffeeImg from '@/../public/lovable-uploads/61e21306-2770-45b7-af61-1242c1356606.png';
import { useCurrentLocale } from "@/lib/useCurrentLocale";

const brands = [
  {
    id: 1,
    name: "GRANHAND.",
    image: GranhandImg,
    // image: "public/lovable-uploads/462407bd-a7bd-4a89-a86c-56e716327e2e.png",
    description: "당신의 일상에 향기로운 순간이 더해질 수 있도록 그랜핸드가 함께 하겠습니다.",
    url: '/shop?store=granhand&category=all'
  },
  {
    id: 2,
    name: "helion",
    image: HelionImg,
    // image: "public/lovable-uploads/e964874e-8fb3-4902-b2d0-7e900a5728f1.png",
    description: "빛과 조명 사이에서 당신이 필요한 순간마다 헬리온이 가까이에 있습니다.",
    url: '/shop?store=heyon&category=all'
  },
  {
    id: 3,
    name: "Komfortabel COFFEE",
    image: CoffeeImg,
    // image: "public/lovable-uploads/61e21306-2770-45b7-af61-1242c1356606.png",
    description: "카페인 뿐만 아니라 코피와 향과 풍미가 가득한 특별한 공간, 그리고 당신만의 시간이 지금 흐릅니다.",
    url: '/shop?store=komfortabel&category=all'
  },
];

const BrandGrid = () => {
  const currentLocale = useCurrentLocale()

  return (
    <section className="py-4">
      <h2 className="text-sm text-[#6F6963] font-bold text-left mb-8 border-b border-b-[#6f6963] pb-4">BRAND SHOP</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {brands.map((brand) => (
          // <Link
          <Link
            key={brand.id}
            href={`${currentLocale}${brand.url}`}
            // href={`/brand/${brand.name.toLowerCase()}`}
            className="group"
          >
            <div className="space-y-2">
              <h3 className="text-sm text-[#6F6963] font-bold">{brand.name}</h3>
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  className="w-[359px] h-[178px] object-cover transition-transform duration-700 group-hover:scale-105" />
                {/* <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                /> */}
              </div>
              <p className="text-sm font-medium text-[#5E5955] leading-relaxed">{brand.description}</p> 
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BrandGrid;
