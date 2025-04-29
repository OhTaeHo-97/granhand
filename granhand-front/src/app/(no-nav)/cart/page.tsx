'use client'

import Image from 'next/image'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import OptionModal from './components/modal'

export default function CartPage() {
    const [open, setOpen] = useState(false)
    const [size, setSize] = useState('100ml')
    const [bag, setBag] = useState('none')

    return (
        <div className='container mx-auto px-6 pt-8'>
        <section className="w-full py-10 mx-auto">
      <h2 className="text-2xl font-semibold mb-8">장바구니</h2>

      <div className="border border-gray-200 overflow-x-auto">
      <div className="min-w-[850px]">
          {/* 헤더 */}
          <div className="grid grid-cols-12 items-center px-4 py-3 border-b border-gray-200 text-sm font-medium bg-gray-50">
            <div className="col-span-2 flex items-center gap-2">
              <Checkbox id="select-all" />
              <span className="text-xs text-gray-500">전체 선택 (0/0)</span>
            </div>
            <div className="col-span-4 text-center">상품 정보</div>
            <div className="col-span-2 text-center">수량</div>
            <div className="col-span-2 text-center">주문 금액</div>
            <div className="col-span-2 text-center">배송 정보</div>
          </div>

          {/* 상품 */}
          <div className="grid grid-cols-12 items-center px-4 py-6 border-b border-gray-100">
            <div className="col-span-2 flex justify-start">
              <div>
                 <Checkbox id="item-1" defaultChecked />
              </div>
              <div className="w-30 h-20 ml-2 relative">
                <Image src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png" alt="perfume" fill className="object-contain" />
              </div>
            </div>

            <div className="col-span-4 flex items-center gap-4">
              {/* <div className="w-24 h-24 relative">
                <Image src="/perfume.jpg" alt="perfume" fill className="object-contain" />
              </div> */}
              <div className="text-sm">
                <div className="font-semibold">Soie Signature Perfume</div>
                <div className="text-gray-500">수아 시그니처 퍼퓸</div>
                <div className="text-gray-400 text-xs mb-1">쇼핑백 : 구매안함</div>
                <div className="font-semibold">110,000원</div>
              </div>
            </div>

            <div className="col-span-2 flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <Button size="icon" variant="outline" className="w-6 h-6"><Minus className="w-3 h-3" /></Button>
                <span className="text-sm">1</span>
                <Button size="icon" variant="outline" className="w-6 h-6"><Plus className="w-3 h-3" /></Button>
              </div>
              <Button variant="outline" className="h-8 text-xs px-3" onClick={() => setOpen(true)}>옵션 변경</Button>
            </div>

            <div className="col-span-2 text-center text-sm font-medium">110,000원</div>
            <div className="col-span-2 text-center text-sm font-medium">배송비 무료</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <Button variant="outline">선택상품 삭제</Button>
      </div>

      <div className="mt-8 text-sm text-gray-400 text-right">
        배송은 2-5일 정도 소요되며 택배사의 상황에 따라 지연될 수 있습니다. Blotter Card는 우편 발송으로 영업일 기준 5일 이상 소요됩니다.
      </div>

      <div className="mt-6 border-t pt-6 flex justify-between items-center text-lg font-semibold">
        <div>총 주문 상품 1개</div>
        <div>
          <span>110,000 KRW</span> + <span className="text-gray-500">배송비 무료</span> = <span>110,000 KRW</span>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <Button className="text-base px-10 py-2">구매하기 (1)</Button>
      </div>

      <OptionModal open={open} size={size} bag={bag} setOpen={setOpen} setBag={setBag} setSize={setSize} />
    </section>
    </div>
    )
}
