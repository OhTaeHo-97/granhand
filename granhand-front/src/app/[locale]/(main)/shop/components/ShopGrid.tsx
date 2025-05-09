import Image from "next/image";
import Link from "next/link";

const post = {
    id: 1,
    title: 'Roland Multi Perfume',
    option: '롤랑 멀티퍼퓸 100ml / 200ml',
    price: '35,000',
    image: "/lovable-uploads/373d6254-162e-4da2-a5ef-e87c36cd99d7.png"
}
// const posts = [
//     {
//         id: 1,
//         title: "NOLL 눈에 대한 모든 것.",
//         date: "2023-07-08",
//         // views: "조회수 412",
//         // category: "#Team",
//         image: "/lovable-uploads/42187a99-0c6a-4176-bc95-5fcd322f7c2e.png"
//     },
//     {
//         id: 2,
//         title: "오늘의 공지사항 몇 그루트리가 있고 워크숍 운영정책",
//         date: "2023-07-07",
//         // views: "조회수 325",
//         // category: "#Event",
//         image: "/lovable-uploads/a5617fce-275d-4023-8959-6717e811b2a6.png"
//     },
//     {
//         id: 3,
//         title: "초대합니다! 새로이",
//         date: "2023-07-06",
//         // views: "조회수 287",
//         // category: "#Store",
//         image: "/lovable-uploads/f60c43bc-b922-4e70-ad35-6d56fb469d65.png"
//     },
//     {
//         id: 4,
//         title: "NOLL 눈에 대한 모든 것.",
//         date: "2023-07-08",
//         // views: "조회수 412", 
//         // category: "#Team",
//         image: "/lovable-uploads/23c3c768-b79c-41e6-9809-c48b755baf4c.png"
//     },
//     {
//         id: 5,
//         title: "오늘의 공지사항 몇 그루트리가 있고 워크숍 운영정책",
//         date: "2023-07-07", 
//         // views: "조회수 325",
//         // category: "#Event", 
//         image: "/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
//     },
//     {
//         id: 6,
//         title: "초대합니다! 새로이",
//         date: "2023-07-06",
//         // views: "조회수 287",
//         // category: "#Store",
//         image: "/lovable-uploads/373d6254-162e-4da2-a5ef-e87c36cd99d7.png"
//     }
// ];

export default async function ShopGrid({ searchParams }: { searchParams: { store?: string; category?: string } }) {
    const { store, category } = await searchParams
    const selectedStore = store || '그랑핸드'
    const selectedCategory = category || '전체'
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-8 gap-y-12">
            {Array.from({ length: 15 }).map((_, index) => (
                <Link
                    key={index}
                    href={{
                        pathname: `/shop/${index}`,
                        query: {
                            selectedStore,
                            selectedCategory
                        }
                    }}
                    className="group cursor-pointer"
                >
                    <div className="aspect-[4/3] overflow-hidden mb-4">
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={205}
                            height={200}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-medium group-hover:text-granhand-text transition-colors">
                            {post.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                            {/* <span>{post.category}</span> */}
                            {/* <span>·</span> */}
                            <span>{post.option}</span>
                            {/* <span>·</span> */}
                            {/* <span>{post.views}</span> */}
                        </div>
                        <div className="flex items-center space-x-2 text-xs">
                            {/* <span>{post.category}</span> */}
                            {/* <span>·</span> */}
                            <span>{post.price} KRW</span>
                            {/* <span>·</span> */}
                            {/* <span>{post.views}</span> */}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}