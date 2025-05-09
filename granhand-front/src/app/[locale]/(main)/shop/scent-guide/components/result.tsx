import ProductCardList from "@/app/[locale]/(no-nav)/wish-latest/components/product-card-list";
import Image from "next/image";

export default function ScentGuideResult() {
    return (
        <main className="container mx-auto px-6 pt-8 text-gray-700">
        <section className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-sm uppercase tracking-wide text-gray-400 mb-3">Your Choice</h2>
            <h1 className="text-2xl font-bold mb-6">SUSIE SALMON. 수지살몬</h1>
            <p className="text-sm leading-relaxed mb-6">
            방금 시든 꽃다발의 포장을 뜯어낸 반 정도 물이 담긴 투명한 병에 꽂는다. 꽃 한 다발에서
            뿜어지는 생기가 태배한 자태로 서서히 퍼져나간다. 방금자른 사과를 까내 한 입 베어 문 다음
            잔디를 깔아둔 곳을 가까이 맡다. 얇게 겹친 살 내음 위로 올라오는 삼광슬라임 나는 느낌이
            섞인다.
            </p>
            <p className="text-xs text-gray-500 mb-8">
            향조 노트<br />
            Top : Lemon, Black Currant, Tangerine, Cut Grass<br />
            Middle : Lily of the Valley, Jasmine, Rose, Freesia, Peach, Apricot, Apple<br />
            Base : Sandal Wood, Cedar, Amber, White Musk
            </p>
            <p className="text-sm leading-relaxed">
            #은은한 #데일리 #뮤테드 머스크<br />
            연어 조합은 아니고 영화 '러블리 본즈'의 사라살몬은 주인공의 이름이어요. 여러 꽃과 잎이
            섞인 청순한 꽃의 뷰케이서의 뉘앙스가 보이되 머스크가 오히려 그 향을 가장 사랑스럽고
            안정감 있는 향이로. 몽환적 자연스러움에 어떤 결핍이 있을 때 이끌리기 때문에 살면서 내내
            사용하게 되어야. 기분이 안맞아 수시 착향을 원하는 향보다는 익숙한 45도각 늘 향입니다.
            여자 친구 선물용으로 가장 인기가 좋지만, 직접 사용하시는 목적으로 구매하시는 분들도
            꽤나 많습니다. 선물 시도하기 조심스럽다면 같은 향의 핸드크림으로 시향해 보시면서 수치
            살몬 랜드군들을 싫어하시는 분은… 없어요(단호)
            </p>
        </section>

        <section>
            <h3 className="text-sm font-semibold mb-4">RECOMMENDED</h3>
            <ProductCardList itemCount={5} />
            {/* zoom
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="text-center text-sm">
                <Image
                    src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
                    alt="product"
                    width={180}
                    height={180}
                    className="mx-auto mb-2"
                />
                <div className="font-semibold">SUSIE SALMON Muti Perfume</div>
                <div className="text-gray-500">수지살몬 멀티 퍼퓸 100ml</div>
                <div className="text-gray-700 font-medium mt-1">35,000 KRW</div>
                </div>
            ))}
            </div> */}
        </section>
        </main>
    )
}