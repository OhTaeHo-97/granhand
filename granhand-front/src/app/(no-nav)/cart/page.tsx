'use client'

import Image from 'next/image'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import OptionModal from './components/modal'
import ProductTable from './components/product-table'

export default function CartPage() {
    const [open, setOpen] = useState(false)
    const [size, setSize] = useState('100ml')
    const [bag, setBag] = useState('none')

    return (
      <div className='container mx-auto px-6 pt-8'>
        <section className="w-full py-10 mx-auto">
          <h2 className="text-2xl font-semibold mb-8">장바구니</h2>
          
          <ProductTable setOpen={setOpen} />
          
          <div className="mt-8 flex justify-between items-center">
            <Button variant="outline" className="min-w-32 w-[10%]">선택상품 삭제</Button>
            <div className="text-sm text-gray-400 text-right">
              배송은 2-5일 정도 소요되며 택배사의 상황에 따라 지연될 수 있습니다. Blotter Card는 우편 발송으로 영업일 기준 5일 이상 소요됩니다.
            </div>
          </div>

          <div className="mt-20 text-base font-medium border-b pb-3">총 주문 상품 1개</div>

          <div className="mt-6 border-b pb-6">
            <div className="flex justify-between items-center text-lg font-semibold">
              <div>
                <span>110,000 KRW</span> + 배송비 무료 = <span>110,000 KRW</span>
              </div>
              <Button className="text-base px-10 py-2 text-white bg-black rounded-none min-w-32 w-[25%] h-11">구매하기 (1)</Button>
            </div>
          </div>

          <OptionModal open={open} size={size} bag={bag} setOpen={setOpen} setBag={setBag} setSize={setSize} />
        </section>
      </div>
    )
}
