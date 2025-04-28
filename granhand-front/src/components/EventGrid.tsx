import Image from "next/image";
import Link from "next/link";

const posts = [
    {
        id: 1,
        title: "NOLL 눈에 대한 모든 것.",
        date: "2023-07-08",
        // views: "조회수 412",
        // category: "#Team",
        image: "/lovable-uploads/42187a99-0c6a-4176-bc95-5fcd322f7c2e.png"
    },
    {
        id: 2,
        title: "오늘의 공지사항 몇 그루트리가 있고 워크숍 운영정책",
        date: "2023-07-07",
        // views: "조회수 325",
        // category: "#Event",
        image: "/lovable-uploads/a5617fce-275d-4023-8959-6717e811b2a6.png"
    },
    {
        id: 3,
        title: "초대합니다! 새로이",
        date: "2023-07-06",
        // views: "조회수 287",
        // category: "#Store",
        image: "/lovable-uploads/f60c43bc-b922-4e70-ad35-6d56fb469d65.png"
    },
    {
        id: 4,
        title: "NOLL 눈에 대한 모든 것.",
        date: "2023-07-08",
        // views: "조회수 412", 
        // category: "#Team",
        image: "/lovable-uploads/23c3c768-b79c-41e6-9809-c48b755baf4c.png"
    },
    {
        id: 5,
        title: "오늘의 공지사항 몇 그루트리가 있고 워크숍 운영정책",
        date: "2023-07-07", 
        // views: "조회수 325",
        // category: "#Event", 
        image: "/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
    },
    {
        id: 6,
        title: "초대합니다! 새로이",
        date: "2023-07-06",
        // views: "조회수 287",
        // category: "#Store",
        image: "/lovable-uploads/373d6254-162e-4da2-a5ef-e87c36cd99d7.png"
    }
];

export default function EventGrid() {
    return (
        // <section className="py-8">
        // <h2 className="text-lg font-medium text-left mb-8 border-t pt-4">EVENT</h2>
        // <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
        //     {posts.map((post) => (
        //     <Link
        //         key={post.id}
        //         href={`/journal/${post.id}`}
        //         className="group cursor-pointer"
        //     >
        //         <div className="aspect-[4/3] overflow-hidden mb-4">
        //         <Image
        //             src={post.image}
        //             alt={post.title}
        //             width={225}
        //             height={168.75}
        //             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        //         />
        //         </div>
        //         <div className="space-y-2">
        //         <h3 className="text-base font-medium group-hover:text-granhand-text transition-colors">
        //             {post.title}
        //         </h3>
        //         <div className="flex items-center space-x-2 text-xs text-gray-500">
        //             {/* <span>{post.category}</span> */}
        //             {/* <span>·</span> */}
        //             <span>{post.date}</span>
        //             {/* <span>·</span> */}
        //             {/* <span>{post.views}</span> */}
        //         </div>
        //         </div>
        //     </Link>
        //     ))}
        // </div>
        // </section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {posts.map((post) => (
            <Link
                key={post.id}
                href={`/event/${post.id}`}
                className="group cursor-pointer"
            >
                <div className="aspect-[4/3] overflow-hidden mb-4">
                    <Image
                        src={post.image}
                        alt={post.title}
                        width={225}
                        height={168.75}
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
                        <span>{post.date}</span>
                        {/* <span>·</span> */}
                        {/* <span>{post.views}</span> */}
                    </div>
                </div>
            </Link>
            ))}
        </div>
    )
}