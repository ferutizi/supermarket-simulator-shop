'use client'

import { useCart } from '../store/useCart'
import { useModalCart } from '../store/useModalCart'

export default function Cart() {
  const openModalCart = useModalCart((state) => state.openModal)
  const totalCart = useCart((state) => state.totalValue)
  const itemsInCart = useCart((state) => state.totalItems)

  return (
    <article className='flex items-center font-extrabold'>
      <span className='bg-slate-100 flex justify-end items-center min-w-16 h-8 pl-2 pr-1 text-stone-600 rounded-l-md'>${totalCart.toFixed(2)}</span>
      <div className='relative'>
        <button className='flex justify-center items-center w-12 h-12 rounded-sm bg-green-500' onClick={() => openModalCart()}>
          <img src='/cart.png' alt='Carrito' title='Carrito' className='w-8' />
        </button>
        <span className='bg-yellow-400 absolute -bottom-3 -left-3 px-[8px] rounded-full text-stone-600'>{itemsInCart}</span>
      </div>
    </article>
  )
}
