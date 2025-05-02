'use client'

import { useState } from 'react'
import { Check, MoreVertical } from 'lucide-react'
import ScentGuideResult from './components/result'

const questions = [
    {
        id: 1,
        text: '어떤 용도로 사용하시나요?',
        options: ['선물할 거예요', '제가 쓸 거예요'],
    },
    {
        id: 2,
        text: '어떤 계절에 맞는 향을 찾으세요?',
        options: ['봄', '여름', '가을', '겨울'],
    },
    {
        id: 3,
        text: '원하시는 계열을 선택해 주세요.',
        options: ['플로럴', '우디', '시트러스', '머스크'],
    },
    {
        id: 4,
        text: '원하시는 분위기를 선택해 주세요.',
        options: ['활기찬', '차분한', '따뜻한', '신선한'],
    },
]

export default function GuidePage() {
    const [answers, setAnswers] = useState<{ [key: number]: string }>({})

    const handleSelect = (qId: number, option: string) => {
        setAnswers((prev) => {
            const newAnswers: { [key: number]: string } = { ...prev, [qId]: option }
            const qIndex = questions.findIndex((q) => q.id === qId)
            for (let i = qIndex + 1; i < questions.length; i++) {
                delete newAnswers[questions[i].id]
            }
            return newAnswers
        })
    }

    const allAnswered = questions.every((q) => answers[q.id])

    return (
        <div className="mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-4">GUIDE</h2>
        <ScentGuideResult />
        <div className="bg-gray-50 text-center text-gray-600 py-4 mb-10 text-sm">
            원하시는 향을 추천해 드립니다. 아래 항목을 모두 선택해 주세요.
        </div>

        <div className="relative pl-8">
            {questions.map((q, i) => {
            const isAnswered = !!answers[q.id]
            const canShowOptions = i === 0 || answers[questions[i - 1].id]

            return (
                <div key={q.id} className="relative flex min-h-[130px] mb-8">
                {/* 왼쪽 체크와 점선 영역 */}
                <div className="flex flex-col items-center mr-4">
                    <Check className={`w-4 h-4 ${isAnswered ? 'text-gray-600' : 'text-gray-300'}`} />
                    {i < questions.length - 1 && (
                    <div className="flex-1 flex flex-col justify-center">
                        <MoreVertical className={`w-4 h-4 ${isAnswered ? 'text-gray-600' : 'text-gray-300'}`} />
                    </div>
                    )}
                </div>

                {/* 질문과 옵션 영역 */}
                <div className="flex-1 flex flex-col justify-between ml-10">
                    <div>
                    <p className="font-semibold text-sm mb-4">
                        {q.id}. {q.text}
                    </p>

                    {canShowOptions && (
                        <div className="flex flex-wrap gap-4 text-sm mb-4">
                        {q.options.map((opt) => (
                            <button
                            key={opt}
                            onClick={() => handleSelect(q.id, opt)}
                            className={`px-4 py-2 rounded text-gray-600 transition ${
                                answers[q.id] === opt
                                ? 'border-black font-medium bg-black text-white hover:bg-gray-700'
                                : 'border-gray-500 hover:bg-gray-100'
                            }`}
                            >
                            {opt}
                            </button>
                        ))}
                        </div>
                    )}
                    <div className="border-b border-gray-200" />
                    </div>
                </div>
                </div>
            )
            })}
        </div>

        {/* 결과 확인 버튼 */}
        <div className="mt-12 text-right">
            <button
            className={`px-6 py-3 text-white rounded disabled:opacity-50 min-w-1/3 ${allAnswered ? 'bg-black' : 'bg-gray-200'}`}
            disabled={questions.some((q) => !answers[q.id])}
            >
                결과 확인
            </button>
        </div>
        </div>
    )
}



// 'use client'

// import { useState } from 'react'
// import { Check, MoreVertical } from 'lucide-react'

// const questions = [
//   {
//     id: 1,
//     text: '어떤 용도로 사용하시나요?',
//     options: ['선물할 거예요', '제가 쓸 거예요'],
//   },
//   {
//     id: 2,
//     text: '어떤 계절에 맞는 향을 찾으세요?',
//     options: ['봄', '여름', '가을', '겨울'],
//   },
//   {
//     id: 3,
//     text: '원하시는 계열을 선택해 주세요.',
//     options: ['플로럴', '우디', '시트러스', '머스크'],
//   },
//   {
//     id: 4,
//     text: '원하시는 분위기를 선택해 주세요.',
//     options: ['활기찬', '차분한', '따뜻한', '신선한'],
//   },
// ]

// export default function GuidePage() {
//   const [answers, setAnswers] = useState<{ [key: number]: string }>({})

//   const handleSelect = (qId: number, option: string) => {
//     setAnswers((prev) => {
//       const newAnswers: { [key: number]: string } = { ...prev, [qId]: option }
//       const qIndex = questions.findIndex((q) => q.id === qId)
//       // Remove answers to all following questions
//       for (let i = qIndex + 1; i < questions.length; i++) {
//         delete newAnswers[questions[i].id]
//       }
//       return newAnswers
//     })
//   }

//   const allAnswered = questions.every((q) => answers[q.id])

//   return (
//     <div className="max-w-4xl mx-auto px-6 py-12">
//       <h2 className="text-2xl font-semibold mb-4">GUIDE</h2>
//       <div className="bg-gray-50 text-center text-gray-600 py-4 mb-10 text-sm">
//         원하시는 향을 추천해 드립니다. 아래 항목을 모두 선택해 주세요.
//       </div>

//       <div className="relative pl-8">
//         {questions.map((q, i) => {
//           const isAnswered = !!answers[q.id]
//           const canShowOptions = i === 0 || answers[questions[i - 1].id]

//           return (
//             <div key={q.id} className="relative flex min-h-[180px] mb-8">
//               {/* 왼쪽 체크와 점선 영역 */}
//               <div className="flex flex-col items-center mr-4">
//                 <Check className={`w-4 h-4 ${isAnswered ? 'text-gray-600' : 'text-gray-300'}`} />
//                 {i < questions.length - 1 && (
//                   <div className="flex-1 flex flex-col justify-center">
//                     <MoreVertical className={`w-4 h-4 ${isAnswered ? 'text-gray-600' : 'text-gray-300'}`} />
//                   </div>
//                 )}
//               </div>

//               {/* 질문과 옵션 영역 */}
//               <div className="flex-1 flex flex-col justify-between">
//                 <div>
//                   <p className="font-semibold text-sm mb-4">
//                     {q.id}. {q.text}
//                   </p>

//                   {canShowOptions && (
//                     <div className="flex flex-wrap gap-4 text-sm mb-4">
//                       {q.options.map((opt) => (
//                         <button
//                           key={opt}
//                           onClick={() => handleSelect(q.id, opt)}
//                           className={`px-4 py-2 rounded text-gray-600 transition ${
//                             answers[q.id] === opt
//                               ? 'border-black font-medium bg-black text-white hover:bg-gray-700'
//                               : 'border-gray-500 hover:bg-gray-100'
//                           }`}
//                         >
//                           {opt}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                   <div className="border-b border-gray-200" />
//                 </div>
//               </div>
//             </div>
//           )
//         })}
//       </div>

//       {/* 결과 확인 버튼 */}
//       <div className="mt-12 text-right">
//         <button
//           className={`px-6 py-3 rounded disabled:opacity-50 min-w-1/3 ${
//             allAnswered ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
//           }`}
//           disabled={!allAnswered}
//         >
//           결과 확인
//         </button>
//       </div>
//     </div>
//   )
// }