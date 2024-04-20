'use client'

import ProductSection from './ProductSection'
import BuySection from './BuySection'
import { useModalCart } from '../store/useModalCart'

export default function ModalCart() {
  const showModalCart = useModalCart(state => state.showModalCart)
  const closeModal = useModalCart((state) => state.closeModal)

  return (
    <>
      {
        showModalCart &&
        <div className='z-30 bg-black bg-opacity-70 w-screen h-screen absolute'>
          <section className='z-20 w-[96%] lg:w-[85%] xl:w-[48%] h-[30rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-extrabold'>
            <header className='flex justify-between items-center px-4 py-2 bg-sky-600'>
              <h2>CARRITO</h2>
              <button className='w-6 h-6 bg-red-600 rounded-sm' onClick={() => closeModal()}>X</button>
            </header>
            <div className='flex flex-col lg:grid lg:grid-cols-11 lg:h-full'>
              <ProductSection />
              <BuySection />
            </div>
          </section>
        </div>
      }
    </>
  )
}
