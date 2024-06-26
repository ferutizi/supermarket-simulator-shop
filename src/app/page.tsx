'use client'

import ProductCard from './components/ProductCard'
import { useMainStore } from './store/useMainStore'
import ModalCart from './components/ModalCart'
import Header from './components/Header'
import { useEffect } from 'react'

export default function Home() {
  const products = useMainStore((state) => state.products)
  const getProducts = useMainStore((state) => state.getProducts)

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <main className='h-screen flex min-h-screen flex-col items-center justify-between bg-cyan-100'>
      <Header />
      <ModalCart />
      <section className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8 mt-48 overflow-y-scroll scroll pb-28'>
        {products.map(product =>
          <ProductCard key={product.id} product={product} />
        )}
      </section>
    </main>
  )
}
