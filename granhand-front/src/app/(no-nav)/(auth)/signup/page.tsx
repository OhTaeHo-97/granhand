// 'use client'

// import { useState } from "react";
// // import { Link } from "react-router-dom";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import Link from "next/link";
// // import Navigation from "@/components/Navigation";

// export default function SignupPage() {
//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//         confirmPassword: "",
//         name: "",
//         phone: "",
//     });

//     const [agreements, setAgreements] = useState({
//         terms: false,
//         privacy: false,
//         marketing: false,
//     });

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // TODO: 회원가입 로직 구현
//         console.log("Signup attempt:", { formData, agreements });
//     };

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     return (
//         <div className="min-h-screen bg-white">
//             {/* <Navigation /> */}
//             <main className="container mx-auto px-6 pt-32">
//             <div className="max-w-md mx-auto">
//                 <h1 className="text-2xl font-medium text-center mb-8">회원가입</h1>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="space-y-2">
//                     <label htmlFor="email" className="text-sm">이메일</label>
//                     <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full"
//                     placeholder="이메일을 입력해주세요"
//                     />
//                 </div>
//                 <div className="space-y-2">
//                     <label htmlFor="password" className="text-sm">비밀번호</label>
//                     <Input
//                     id="password"
//                     name="password"
//                     type="password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full"
//                     placeholder="비밀번호를 입력해주세요"
//                     />
//                 </div>
//                 <div className="space-y-2">
//                     <label htmlFor="confirmPassword" className="text-sm">비밀번호 확인</label>
//                     <Input
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     type="password"
//                     value={formData.confirmPassword}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full"
//                     placeholder="비밀번호를 다시 입력해주세요"
//                     />
//                 </div>
//                 <div className="space-y-2">
//                     <label htmlFor="name" className="text-sm">이름</label>
//                     <Input
//                     id="name"
//                     name="name"
//                     type="text"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full"
//                     placeholder="이름을 입력해주세요"
//                     />
//                 </div>
//                 <div className="space-y-2">
//                     <label htmlFor="phone" className="text-sm">휴대폰 번호</label>
//                     <Input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full"
//                     placeholder="휴대폰 번호를 입력해주세요"
//                     />
//                 </div>
//                 <div className="space-y-4">
//                     <div className="flex items-center space-x-2">
//                     <Checkbox
//                         id="terms"
//                         checked={agreements.terms}
//                         onCheckedChange={(checked) => 
//                         setAgreements(prev => ({ ...prev, terms: checked as boolean }))
//                         }
//                     />
//                     <label htmlFor="terms" className="text-sm">
//                         이용약관 동의 (필수)
//                     </label>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                     <Checkbox
//                         id="privacy"
//                         checked={agreements.privacy}
//                         onCheckedChange={(checked) => 
//                         setAgreements(prev => ({ ...prev, privacy: checked as boolean }))
//                         }
//                     />
//                     <label htmlFor="privacy" className="text-sm">
//                         개인정보 수집 및 이용 동의 (필수)
//                     </label>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                     <Checkbox
//                         id="marketing"
//                         checked={agreements.marketing}
//                         onCheckedChange={(checked) => 
//                         setAgreements(prev => ({ ...prev, marketing: checked as boolean }))
//                         }
//                     />
//                     <label htmlFor="marketing" className="text-sm">
//                         마케팅 정보 수신 동의 (선택)
//                     </label>
//                     </div>
//                 </div>
//                 <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
//                     가입하기
//                 </Button>
//                 </form>
//                 <div className="mt-6 text-center">
//                 <p className="text-sm">
//                     이미 계정이 있으신가요?{" "}
//                     <Link href="/login" className="text-black hover:underline">
//                     로그인
//                     </Link>
//                 </p>
//                 </div>
//             </div>
//             </main>
//         </div>
//     )
// }


// app/join/page.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, ChevronLeft } from "lucide-react";
import { useState } from "react";

const terms = [
    {
        id: 'service',
        label: '(필수) 서비스 이용 약관 동의',
        required: true,
        content: '추후에 이와 관련된 ... (약관 내용 예시) 추후에 이와 관련된 ... (약관 내용 예시)\n추후에 이와 관련된 ... (약관 내용 예시)\n추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)',
    },
    {
        id: 'privacy',
        label: '(필수) 개인정보 수집 및 이용 동의',
        required: true,
        content: '추후에 이와 관련된 ... (약관 내용 예시)',
    },
    {
        id: 'marketing',
        label: '(선택) 개인정보 수집 및 이용 및 이벤트/마케팅 수신 동의',
        required: false,
        content: '추후에 이와 관련된 ... (약관 내용 예시)',
    },
];

export default function SignupPage() {
    const [checked, setChecked] = useState({
        service: false,
        privacy: false,
        marketing: false,
        age: false,
        ad: false,
        all: false,
    });

    // 전체 동의 체크박스 핸들러
    const handleAll = (value: boolean) => {
        setChecked({
        service: value,
        privacy: value,
        marketing: value,
        age: value,
        ad: value,
        all: value,
        });
    };

    // 개별 체크박스 핸들러
    const handleCheck = (key: string, value: boolean) => {
        const next = { ...checked, [key]: value };
        next.all =
        next.service && next.privacy && next.marketing && next.age && next.ad;
        setChecked(next);
    };

    return (
        <div className='container mx-auto px-6 pt-8 min-h-screen'>
            <section className="w-full py-10 mx-auto">
                <h2 className="text-2xl font-semibold pb-8 border-b">회원가입</h2>
                <Button className="mb-6 text-gray-400 text-sm pl-0">
                    <ChevronLeft /> 이전단계
                </Button>
            </section>
            <div className="w-full max-w-2xl flex flex-col items-center mx-auto">
                <h1 className="text-2xl font-bold text-center mb-2">그랑핸드 회원 가입하기</h1>
                <p className="text-center text-gray-500 mb-8">
                그랑핸드 서비스 이용 약관에 동의해 주세요.
                </p>
                <div className="bg-white rounded-xl p-8 mb-6">
                {terms.map((term) => (
                    <div key={term.id} className="mb-6">
                    <label className="flex items-start gap-2 cursor-pointer">
                        <Checkbox
                        checked={checked[term.id as keyof typeof checked]}
                        onCheckedChange={(v) =>
                            handleCheck(term.id, Boolean(v))
                        }
                        className="w-5 h-5 border rounded flex items-center justify-center bg-white"
                        >
                        {checked[term.id as keyof typeof checked] && (
                            <Check className="w-4 h-4 text-black" />
                        )}
                        </Checkbox>
                        <span className="font-semibold">{term.label}</span>
                    </label>
                    <div className="bg-[#F7F6F3] text-xs text-gray-500 rounded p-4 mt-2 h-24 overflow-y-auto">
                        {term.content}
                    </div>
                    </div>
                ))}
                <div className="mb-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                        checked={checked.age}
                        onCheckedChange={(v) => handleCheck('age', Boolean(v))}
                        className="w-5 h-5 border rounded flex items-center justify-center bg-white"
                    >
                        {checked.age && <Check className="w-4 h-4 text-black" />}
                    </Checkbox>
                    <span className="font-semibold">(필수) 만 14세 이상입니다.</span>
                    </label>
                </div>
                <div className="mb-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                        checked={checked.ad}
                        onCheckedChange={(v) => handleCheck('ad', Boolean(v))}
                        className="w-5 h-5 border rounded flex items-center justify-center bg-white"
                    >
                        {checked.ad && <Check className="w-4 h-4 text-black" />}
                    </Checkbox>
                    <span className="font-semibol">(선택) 광고성 정보 수신 동의</span>
                    </label>
                </div>
                <div className="border-t border-dashed my-6" />
                <div className="flex items-center gap-2 mb-6">
                    <Checkbox
                    checked={checked.all}
                    onCheckedChange={(v) => handleAll(Boolean(v))}
                    className="w-5 h-5 border rounded flex items-center justify-center bg-white"
                    >
                    {checked.all && <Check className="w-4 h-4 text-black" />}
                    </Checkbox>
                    <span className="font-bold">
                    GRANHAN의 이용약관 및 개인정보 처리방침을 확인하였고, 이에 모두 동의합니다.
                    </span>
                </div>
                <Button
                    className="w-full py-3 bg-white border border-gray-500 rounded text-black font-bold hover:bg-gray-300 transition"
                    disabled={!(checked.service && checked.privacy && checked.age)}
                >
                    동의하고 가입하기
                </Button>
                </div>
            </div>
        </div>
        // <div className="min-h-screen p-10">
        //     <h2 className="text-2xl font-semibold mb-8 py-6 border-b">장바구니</h2>
        //     <Button className="mb-6 text-gray-400 text-sm flex items-center">
        //     <ChevronLeft /> 이전단계
        //     </Button>
        // <div className="w-full max-w-2xl flex flex-col items-center">
        //     <h1 className="text-2xl font-bold text-center mb-2">그랑핸드 회원 가입하기</h1>
        //     <p className="text-center text-gray-500 mb-8">
        //     그랑핸드 서비스 이용 약관에 동의해 주세요.
        //     </p>
        //     <div className="bg-white rounded-xl p-8 mb-6">
        //     {terms.map((term) => (
        //         <div key={term.id} className="mb-6">
        //         <label className="flex items-start gap-2 cursor-pointer">
        //             <Checkbox
        //             checked={checked[term.id as keyof typeof checked]}
        //             onCheckedChange={(v) =>
        //                 handleCheck(term.id, Boolean(v))
        //             }
        //             className="w-5 h-5 border rounded flex items-center justify-center bg-white"
        //             >
        //             {checked[term.id as keyof typeof checked] && (
        //                 <Check className="w-4 h-4 text-black" />
        //             )}
        //             </Checkbox>
        //             <span className="font-semibold">{term.label}</span>
        //         </label>
        //         <div className="bg-[#F7F6F3] text-xs text-gray-500 rounded p-4 mt-2 h-24 overflow-y-auto">
        //             {term.content}
        //         </div>
        //         </div>
        //     ))}
        //     <div className="mb-4">
        //         <label className="flex items-center gap-2 cursor-pointer">
        //         <Checkbox
        //             checked={checked.age}
        //             onCheckedChange={(v) => handleCheck('age', Boolean(v))}
        //             className="w-5 h-5 border rounded flex items-center justify-center bg-white"
        //         >
        //             {checked.age && <Check className="w-4 h-4 text-black" />}
        //         </Checkbox>
        //         <span className="font-semibold">(필수) 만 14세 이상입니다.</span>
        //         </label>
        //     </div>
        //     <div className="mb-4">
        //         <label className="flex items-center gap-2 cursor-pointer">
        //         <Checkbox
        //             checked={checked.ad}
        //             onCheckedChange={(v) => handleCheck('ad', Boolean(v))}
        //             className="w-5 h-5 border rounded flex items-center justify-center bg-white"
        //         >
        //             {checked.ad && <Check className="w-4 h-4 text-black" />}
        //         </Checkbox>
        //         <span className="font-semibold">(선택) 광고성 정보 수신 동의</span>
        //         </label>
        //     </div>
        //     <div className="border-t border-dashed my-6" />
        //     <div className="flex items-center gap-2 mb-6">
        //         <Checkbox
        //         checked={checked.all}
        //         onCheckedChange={(v) => handleAll(Boolean(v))}
        //         className="w-5 h-5 border rounded flex items-center justify-center bg-white"
        //         >
        //         {checked.all && <Check className="w-4 h-4 text-black" />}
        //         </Checkbox>
        //         <span className="text-sm">
        //         GRANHAN의 이용약관 및 개인정보 처리방침을 확인하였고, 이에 모두 동의합니다.
        //         </span>
        //     </div>
        //     <button
        //         className="w-full py-3 bg-[#F7F6F3] border border-[#E5E1DC] rounded text-gray-700 font-semibold hover:bg-[#eceae7] transition"
        //         disabled={!(checked.service && checked.privacy && checked.age)}
        //     >
        //         동의하고 가입하기
        //     </button>
        //     </div>
        // </div>
        // </div>
    );
}