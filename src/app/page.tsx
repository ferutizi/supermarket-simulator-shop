'use client'

import ProductCard from "./components/ProductCard";
import { useMainStore } from "./store/useMainStore";

export default function Home() {
  const products = useMainStore((state) => state.products)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {products.map(product =>
        <ProductCard product={product} />
      )}
    </main>
  );
}
