'use client'

import ProductCard from "./components/ProductCard";
import { useMainStore } from "./store/useMainStore";
import ModalCart from "./components/ModalCart";
import { useModalCart } from "./store/useModalCart";

export default function Home() {
  const products = useMainStore((state) => state.products)
  const openModal = useModalCart((state) => state.openModal)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => openModal()}>Carrito</button>
      <ModalCart />
      <section className="grid grid-cols-3 gap-8">
        {products.map(product =>
          <ProductCard key={product.name} product={product} />
        )}
      </section>
    </main>
  );
}
