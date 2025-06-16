import ProductCard from "./product-card";

const post = {
    id: 1,
    title: 'Roland Multi Perfume',
    option: '롤랑 멀티퍼퓸 100ml / 200ml',
    price: '35,000',
    image: "/susie-salmon-multi-perfume.png"
}

export default function ProductCardList({ itemCount, menu }: { itemCount: number, menu?: string }) {
    return (
        menu && itemCount === 0 ? (
            <div className="w-full flex items-center justify-center bg-[#322A2408] text-[#C0BCB6] h-30">
                {menu === 'wish' && '관심 상품이 없어요.'}
                {menu === 'latest' && '최근 본 상품이 없어요.'}
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-x-8 gap-y-12">
                {Array.from({ length: itemCount }).map((_, index) => (
                    <ProductCard key={index} image={post.image} title={post.title} option={post.option} price={post.price} />
                ))}
            </div>
        )
    )
}