'use client'

// import Image from 'next/image'
// import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
// import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import OptionModal from './components/modal'
import ProductTable from './components/product-table'
import Link from 'next/link'
import { useLocaleAsLocaleTypes, useCurrentLocale } from '@/lib/useCurrentLocale'
import { useTranslation } from '../../../../../utils/localization/client'

const sample = [
  {
      id: 1,
      image: '/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png',
      engName: 'Soie Signature Perfume',
      korName: '수아 시그니처 퍼퓸',
      isShoppingBag: false,
      price: 110000,
      amount: 1,
      delivery: 0
  },
  {
      id: 2,
      image: '/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png',
      engName: 'Soie Signature Perfume',
      korName: '수아 시그니처 퍼퓸',
      isShoppingBag: true,
      price: 110000,
      amount: 1,
      delivery: 0
  },
  {
      id: 3,
      image: '/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png',
      engName: 'Soie Signature Perfume',
      korName: '수아 시그니처 퍼퓸',
      isShoppingBag: false,
      price: 110000,
      amount: 1,
      delivery: 3000
  }
]

export default function CartPage() {
    const [open, setOpen] = useState(false)
    const [size, setSize] = useState('100ml')
    const [bag, setBag] = useState('none')
    const [selectedIds, setSelectedIds] = useState<number[]>([])
    const [products, setProducts] = useState(sample)

    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'cart'])
    const currentLocale = useCurrentLocale()

    const totalPrice = products
      .filter(product => selectedIds.includes(product.id))
      .reduce((sum, product) => sum + product.price * product.amount, 0)
    const totalDelivery = products
      .filter(product => selectedIds.includes(product.id))
      .reduce((sum, product) => sum + product.delivery, 0)

    const handleRemoveSelected = () => {
      const updatedProducts = sample.filter(
        product => !selectedIds.includes(product.id)
      )
      setProducts(updatedProducts)
      setSelectedIds([])
    }

    const handleChangeAmount = (id: number, variance: number) => {
      const updatedProducts = products.map(product => 
        product.id === id
          ? {...product, amount: product.amount + variance}
          : product
      )
      setProducts(updatedProducts)
    }

    return (
      <div className='container mx-auto px-6 pt-8 min-h-screen'>
        <h2 className="text-lg font-medium text-left mb-4 pb-4">{t('cart:cart')}</h2>
        <section className="w-full py-10 mx-auto">
          {/* <h2 className="text-2xl font-semibold mb-8">{t('cart:cart')}</h2> */}
          
          <ProductTable setOpen={setOpen} products={products} selectedIds={selectedIds} setSelectedIds={setSelectedIds} onIncreaseAmount={handleChangeAmount} t={t} unit={currentLocale === '' ? '원' : ' KRW'} />
          
          <div className="mt-8 flex justify-between items-center">
            <Button variant="outline" className="min-w-32 w-[10%]" disabled={selectedIds.length === 0} onClick={handleRemoveSelected}>{t('cart:remove')}</Button>
            <div className="text-sm text-gray-400 text-right">
              {t('cart:delivery_info')}
              {/* 배송은 2-5일 정도 소요되며 택배사의 상황에 따라 지연될 수 있습니다. Blotter Card는 우편 발송으로 영업일 기준 5일 이상 소요됩니다. */}
            </div>
          </div>

          <div className="mt-20 text-base font-medium border-b pb-3">{t('cart:total_order')} {selectedIds.length}{currentLocale === '' && '개'}</div>

          <div className="mt-6 border-b pb-6 w-full">
            <div className="flex justify-between items-center text-lg font-semibold w-full">
              <div>
                <span>{totalPrice.toLocaleString()} KRW</span> + {totalDelivery === 0 ? t('cart:free_shipping') : `${totalDelivery} KRW`} = <span>{(totalPrice + totalDelivery).toLocaleString()} KRW</span>
              </div>
              <Link href={`${currentLocale}/payment`}>
                <Button className="text-base px-10 py-2 text-white bg-black rounded-none min-w-32 h-11" disabled={selectedIds.length === 0}>{t('cart:purchase')} ({selectedIds.length})</Button>
              </Link>
            </div>
          </div>

          <OptionModal open={open} size={size} bag={bag} setOpen={setOpen} setBag={setBag} setSize={setSize} />
        </section>
      </div>
    )
}
