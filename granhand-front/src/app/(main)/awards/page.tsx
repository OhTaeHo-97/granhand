'use client'

import { useState } from "react"

export default function AwardsPage() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <main className="min-h-screen flex flex-col items-center px-4 py-8">
      {/* 중앙 컨텐츠 (이전 내용) */}
      <section className="flex flex-col items-center mt-16 text-center">
        {/* 로고 */}
        <div className="flex flex-col items-center text-6xl font-bold leading-tight">
          <span>F</span>
          <span className="mt-2">P</span>
          <span className="mt-2">A</span>
          <span className="mt-2">G</span>
        </div>

        {/* 로고 옆 설명 */}
        <div className="mt-4 text-left text-sm">
          <p>Film</p>
          <p>Photography</p>
          <p>Award of</p>
          <p>Granhand.</p>
        </div>

        {/* 행사 설명 */}
        <div className="max-w-2xl mt-10 text-sm leading-relaxed">
        <p className="mb-6">
            그랑핸드 필름사진상은 그랑핸드가 유지하는 아날로그 감성과 향에 대한 신념을 사진으로 표현하여 이야기와 감성을 작게 발굴하고 소개합니다.
            수상자들은 그랑핸드와 함께 다양한 협업을 진행하며 전시에 참여할 기회가 제공됩니다.
          </p>

          <p className="font-semibold mb-2">수상</p>
          <p className="mb-4">
            필름사진 애호가와 및 아마추어를 대상으로 매년 1회 실시합니다.
            필름 또는 일회용 카메라 필름으로 촬영한 작품만 접수하실 수 있으며 디지털 사진 작품은 허용되지 않습니다.
          </p>

          <p className="font-semibold mb-2">부문</p>
          <p className="mb-4">
            Nature 자연 / People 사람 / Daily Life 일상 / Still Life 정물
          </p>

          <p className="font-semibold mb-2">시상</p>
          <ul className="mb-4 list-disc list-inside">
            <li>총액의 신인상 부문금</li>
            <li>총액의 신인상 부문금 50만원 / 부문 수상작: 각각 25만원</li>
            <li>수상은 모두 세세션필름 작품화 의무</li>
          </ul>

          <p>
            모든 수상자는 당시 제작되는 메인 페이지와 소셜 플랫폼에 게재됩니다.
          </p>
        </div>
      </section>
    </main>
//     {/* 상단 네비게이션 */}
//     <nav className="w-full flex items-center justify-between border-b pb-2">
//     {/* 왼쪽: AWARDS + 드롭다운 */}
//     <div className="flex items-center gap-4">
//       <span className="text-sm font-semibold">AWARDS</span>

//       <div className="relative">
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="text-sm flex items-center gap-1 text-gray-600"
//         >
//           필름사진상
//           <span>▼</span>
//         </button>
//         {menuOpen && (
//           <div className="absolute mt-2 w-40 bg-white border rounded shadow-md z-10">
//             <div className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
//               필름사진상
//             </div>
//             {/* 나중에 추가 메뉴 필요하면 여기 추가 */}
//           </div>
//         )}
//       </div>
//     </div>

//     {/* 오른쪽: 서브메뉴 */}
//     <div className="flex items-center gap-6 text-sm text-gray-400">
//       <button className="text-black font-semibold">행사안내</button>
//       <button className="hover:text-black">참가접수</button>
//       <button className="hover:text-black">당선작</button>
//     </div>
//   </nav>


    //     <main className="min-h-screen flex flex-col items-center px-4 py-8">
    //   {/* 상단 네비게이션 */}
    //   <nav className="w-full flex items-center justify-between">
    //     <div className="relative">
    //       <button
    //         onClick={() => setMenuOpen(!menuOpen)}
    //         className="text-sm font-semibold"
    //       >
    //         AWARDS ▼
    //       </button>
    //       {menuOpen && (
    //         <div className="absolute mt-2 bg-white border rounded shadow-md">
    //           <div className="px-4 py-2 text-sm">필름사진상</div>
    //           {/* 여기에 다른 메뉴가 추가될 수도 있음 */}
    //         </div>
    //       )}
    //     </div>
    //   </nav>

    //   {/* 중앙 컨텐츠 */}
    //   <section className="flex flex-col items-center mt-16 text-center">
    //     {/* 로고 */}
    //     <div className="flex flex-col items-center text-6xl font-bold leading-tight">
    //       <span>F</span>
    //       <span className="mt-2">P</span>
    //       <span className="mt-2">A</span>
    //       <span className="mt-2">G</span>
    //     </div>

    //     {/* 로고 옆 설명 */}
    //     <div className="mt-4 text-left text-sm">
    //       <p>Film</p>
    //       <p>Photography</p>
    //       <p>Award of</p>
    //       <p>Granhand.</p>
    //     </div>

    //     {/* 행사 설명 */}
    //     <div className="max-w-2xl mt-10 text-sm leading-relaxed">
    //       <p className="mb-6">
    //         그랑핸드 필름사진상은 그랑핸드가 유지하는 아날로그 감성과 향에 대한 신념을 사진으로 표현하여 이야기와 감성을 작게 발굴하고 소개합니다.
    //         수상자들은 그랑핸드와 함께 다양한 협업을 진행하며 전시에 참여할 기회가 제공됩니다.
    //       </p>

    //       <p className="font-semibold mb-2">수상</p>
    //       <p className="mb-4">
    //         필름사진 애호가와 및 아마추어를 대상으로 매년 1회 실시합니다.
    //         필름 또는 일회용 카메라 필름으로 촬영한 작품만 접수하실 수 있으며 디지털 사진 작품은 허용되지 않습니다.
    //       </p>

    //       <p className="font-semibold mb-2">부문</p>
    //       <p className="mb-4">
    //         Nature 자연 / People 사람 / Daily Life 일상 / Still Life 정물
    //       </p>

    //       <p className="font-semibold mb-2">시상</p>
    //       <ul className="mb-4 list-disc list-inside">
    //         <li>총액의 신인상 부문금</li>
    //         <li>총액의 신인상 부문금 50만원 / 부문 수상작: 각각 25만원</li>
    //         <li>수상은 모두 세세션필름 작품화 의무</li>
    //       </ul>

    //       <p>
    //         모든 수상자는 당시 제작되는 메인 페이지와 소셜 플랫폼에 게재됩니다.
    //       </p>
    //     </div>
    //   </section>
    // </main>
    )
}