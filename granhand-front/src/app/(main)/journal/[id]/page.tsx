'use client'

import Image from "next/image"

export default function JournalDetailPage() {
    return (
        <main className="flex flex-col md:flex-row md:items-start md:gap-12 mb-12">
            {/* 카테고리 + 제목 + 날짜 + 조회수 + 이미지 */}
            <div className="max-w-8xl">
                {/* 왼쪽 텍스트 */}
                <div className="flex-1 space-y-4">
                    <div className="text-sm text-gray-500">#Team</div>
                    <h1 className="text-2xl font-semibold text-black">NOLL 놀이에 대한 모든 것.</h1>
                    <div className="text-xs text-gray-400">
                        2023-07-08 조회수 412
                    </div>
                </div>
            </div>

            {/* 오른쪽 이미지 */}
            <div className="flex-1 mt-8 md:mt-0">
                <Image
                    src="/lovable-uploads/42187a99-0c6a-4176-bc95-5fcd322f7c2e.png"
                    alt="NOLL 놀이에 대한 모든 것"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                />
                {/* 본문 내용 */}
                <div className="space-y-6 text-sm leading-relaxed text-gray-700 mt-16">
                    <p>‘놀이’는 작년 크리스마스에 출시된 그랑핸드의 새로운 라인인 ‘퍼퓸 라인’의 세 가지 향 중 하나입니다. 가장 최근에 선보인 따끈한 향이에요.</p>

                    <p>집 정리를 마칠 때쯤, 어느새 노란 햇살을 낀 새 집의 안쪽 부엌까지 이미 들어와있었어요. 선물로 받은 축축한 단계를 지나 티타임을 가지면 편했습니다. 첫잔에 대류수를 노릇노릇으로 진행되는 색을 향이나 바꾸기 보다 퍼퓸 색감이 난 듯 후끈으로 달라진다. 냉장고에 있는 레몬을 꺼내 얇게 썰어 시기 전에 첫잔이 정말 불편하다.</p>

                    <p>놀이를 한마디로 표현하자면 ‘시트러스의 재해석’이라 생각해요. 일반적으로 ‘삼광’, ‘함향’, ‘가벼움’은 시트러스 계열의 향의 특징으로 떠올리지만, 놀은 레몬과 베르가못, 자몽의 싱그러움을 잃지 않으면서도 자스민과 로즈의 우아함과 차분함을 유지하고, 티트리와 유칼립투스의 쌉싸름한 그린너트를 후각에서 시간이 지날수록 매만져 마스크로 조심하게 마무리되는 거예요. 조급을 성숙화하면서도 사분할, 그렇지만 끝물없이 무겁게 다가오는 분들에게 추천드립니다.</p>
                </div>
            </div>
        </main>
        // <section className="container mx-auto px-6 py-12">
        // {/* JOURNAL 타이틀 */}
        // {/* <h2 className="text-sm text-gray-400 mb-8">JOURNAL</h2> */}
        // <h2 className={`text-lg font-medium text-left mb-8 border-t pt-4`}>JOURNAL</h2>

        // {/* 카테고리 + 제목 + 날짜 + 조회수 + 이미지 */}
        // <main className="flex flex-col md:flex-row md:items-start md:gap-12 mb-12">
        //     <div className="max-w-8xl">
        //         {/* 왼쪽 텍스트 */}
        //         <div className="flex-1 space-y-4">
        //             <div className="text-sm text-gray-500">#Team</div>
        //             <h1 className="text-2xl font-semibold text-black">NOLL 놀이에 대한 모든 것.</h1>
        //             <div className="text-xs text-gray-400">
        //                 2023-07-08 조회수 412
        //             </div>
        //         </div>
        //     </div>

        //     {/* 오른쪽 이미지 */}
        //     <div className="flex-1 mt-8 md:mt-0">
        //         <Image
        //             src="/lovable-uploads/42187a99-0c6a-4176-bc95-5fcd322f7c2e.png"
        //             alt="NOLL 놀이에 대한 모든 것"
        //             width={600}
        //             height={600}
        //             className="w-full h-auto object-cover"
        //         />
        //         {/* 본문 내용 */}
        //         <div className="space-y-6 text-sm leading-relaxed text-gray-700 mt-16">
        //             <p>‘놀이’는 작년 크리스마스에 출시된 그랑핸드의 새로운 라인인 ‘퍼퓸 라인’의 세 가지 향 중 하나입니다. 가장 최근에 선보인 따끈한 향이에요.</p>

        //             <p>집 정리를 마칠 때쯤, 어느새 노란 햇살을 낀 새 집의 안쪽 부엌까지 이미 들어와있었어요. 선물로 받은 축축한 단계를 지나 티타임을 가지면 편했습니다. 첫잔에 대류수를 노릇노릇으로 진행되는 색을 향이나 바꾸기 보다 퍼퓸 색감이 난 듯 후끈으로 달라진다. 냉장고에 있는 레몬을 꺼내 얇게 썰어 시기 전에 첫잔이 정말 불편하다.</p>

        //             <p>놀이를 한마디로 표현하자면 ‘시트러스의 재해석’이라 생각해요. 일반적으로 ‘삼광’, ‘함향’, ‘가벼움’은 시트러스 계열의 향의 특징으로 떠올리지만, 놀은 레몬과 베르가못, 자몽의 싱그러움을 잃지 않으면서도 자스민과 로즈의 우아함과 차분함을 유지하고, 티트리와 유칼립투스의 쌉싸름한 그린너트를 후각에서 시간이 지날수록 매만져 마스크로 조심하게 마무리되는 거예요. 조급을 성숙화하면서도 사분할, 그렇지만 끝물없이 무겁게 다가오는 분들에게 추천드립니다.</p>
        //         </div>
        //     </div>
        // </main>
        // </section>


        // <div className="min-h-screen bg-white container mx-auto px-6 pt-8">
        //     <h2 className={`text-lg font-medium text-left mb-8 border-t pt-4`}>JOURNAL</h2>
        //     <main className="container mx-auto pt-8">
        //     <div className="max-w-3xl mx-auto">
        //         <h1 className="text-2xl mb-4">NOLL 눈에 대한 모든 것.</h1>
        //         <div className="flex items-center space-x-2 text-xs text-gray-500 mb-8">
        //         <span>#Team</span>
        //         <span>·</span>
        //         <span>2023-07-08</span>
        //         <span>·</span>
        //         <span>조회수 412</span>
        //         </div>
        //         <Image
        //             src="/lovable-uploads/f60c43bc-b922-4e70-ad35-6d56fb469d65.png"
        //             alt="NOLL 제품 이미지"
        //             className="w-full mb-8"
        //             width={2250}
        //             height={1687.5}
        //         />
        //         <div className="prose max-w-none">
        //         <p className="text-gray-600 leading-relaxed">
        //             당신의 눈이 편안하도록, 눈과 마음이 쉬도록, 우리가 함께 시간을 가지면 간절히 만나지시고...나머지 눈에 긴 시간이 감긴 눈에를 들려줍니다... 그래서는다 처음은 햇살 카운터 앞 빈자, 시험 제품을 또 당신보다. 시간은 투명 하늘 두근두근을 줍깊다. 그래프는요 눈과 스파니엘 날씨를 먹었지가 자리.. 놀이기 따로 끊이지 무작한 손짓피신은 못 온 사람들에게 이 시간의 마음을 못가를 새벽과 보았다.
        //         </p>
        //         <div className="mt-12">
        //             <h2 className="text-xl font-medium mb-4">관련 영상</h2>
        //             <div className="space-y-4">
        //             <iframe 
        //                 width="100%" 
        //                 height="315" 
        //                 src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        //                 title="YouTube video"
        //                 className="rounded-lg"
        //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //                 allowFullScreen
        //             />
        //             </div>
        //         </div>
        //         </div>
        //     </div>
        //     </main>
        // </div>



        // <div className="min-h-screen bg-white">
        //     <h2 className={`text-lg font-medium text-left mb-8 border-t pt-4`}>JOURNAL</h2>
        //     <main className="container mx-auto px-6 pt-32">
        //     <div className="max-w-3xl mx-auto">
        //         <h1 className="text-2xl mb-4">NOLL 눈에 대한 모든 것.</h1>
        //         <div className="flex items-center space-x-2 text-xs text-gray-500 mb-8">
        //         <span>#Team</span>
        //         <span>·</span>
        //         <span>2023-07-08</span>
        //         <span>·</span>
        //         <span>조회수 412</span>
        //         </div>
        //         <Image
        //             src="/lovable-uploads/f60c43bc-b922-4e70-ad35-6d56fb469d65.png"
        //             alt="NOLL 제품 이미지"
        //             className="w-full mb-8"
        //             width={2250}
        //             height={1687.5}
        //         />
        //         {/* <img
        //         src="public/lovable-uploads/ca8785df-542a-431a-87cf-a0735d6b2265.png"
        //         alt="NOLL 제품 이미지"
        //         className="w-full mb-8"
        //         /> */}
        //         <div className="prose max-w-none">
        //         <p className="text-gray-600 leading-relaxed">
        //             당신의 눈이 편안하도록, 눈과 마음이 쉬도록, 우리가 함께 시간을 가지면 간절히 만나지시고...나머지 눈에 긴 시간이 감긴 눈에를 들려줍니다... 그래서는다 처음은 햇살 카운터 앞 빈자, 시험 제품을 또 당신보다. 시간은 투명 하늘 두근두근을 줍깊다. 그래프는요 눈과 스파니엘 날씨를 먹었지가 자리.. 놀이기 따로 끊이지 무작한 손짓피신은 못 온 사람들에게 이 시간의 마음을 못가를 새벽과 보았다.
        //         </p>
        //         <div className="mt-12">
        //             <h2 className="text-xl font-medium mb-4">관련 영상</h2>
        //             <div className="space-y-4">
        //             <iframe 
        //                 width="100%" 
        //                 height="315" 
        //                 src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        //                 title="YouTube video"
        //                 className="rounded-lg"
        //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //                 allowFullScreen
        //             />
        //             </div>
        //         </div>
        //         </div>
        //     </div>
        //     </main>
        // </div>
    )
}