import ProductCard from "./product-card";

const post = {
    id: 1,
    title: 'Roland Multi Perfume',
    option: '롤랑 멀티퍼퓸 100ml / 200ml',
    price: '35,000',
    image: "/lovable-uploads/373d6254-162e-4da2-a5ef-e87c36cd99d7.png"
}

export default function ProductCardList({ itemCount }: {itemCount: number}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-8 gap-y-12">
            {Array.from({ length: itemCount }).map((_, index) => (
                <ProductCard key={index} image={post.image} title={post.title} option={post.option} price={post.price} />
            ))}
        </div>
    )
}