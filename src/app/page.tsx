'use client'

import ProductCard from "./components/ProductCard";
import { useCart } from "./store/useCart";
import { useMainStore } from "./store/useMainStore";

export default function Home() {
  const products = useMainStore((state) => state.products)
  const cartProducts = useCart((state) => state.products)
  const cartTotal = useCart((state) => state.totalValue)
  console.log(cartProducts, cartTotal)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="grid grid-cols-3 gap-8">
        {products.map(product =>
          <ProductCard key={product.name} product={product} />
        )}
      </section>
    </main>
  );
}
