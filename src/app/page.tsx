'use client'

import ProductCard from "./components/ProductCard";
import { useMainStore } from "./store/useMainStore";
import ModalCart from "./components/ModalCart";
import { useModalCart } from "./store/useModalCart";
import Header from "./components/Header";

export default function Home() {
  const products = useMainStore((state) => state.products)
  const openModal = useModalCart((state) => state.openModal)

  return (
    <main className="h-screen flex min-h-screen flex-col items-center justify-between bg-cyan-50">
      <Header />
      <ModalCart />
      <section className="grid grid-cols-3 gap-8 h-full mt-48 overflow-y-scroll scroll">
        {products.map(product =>
          <ProductCard key={product.name} product={product} />
        )}
      </section>
    </main>
  );
}
