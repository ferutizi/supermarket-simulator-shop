import { useCart } from "../store/useCart";
import ProductInCart from "./ProductInCart";

export default function ProductSection() {
  const productsInCart = useCart((state) => state.products)

  return (
    <section className="col-span-8 bg-slate-50 text-stone-500 px-1 lg:px-8 py-4 overflow-y-scroll">
      <ul className="flex flex-col gap-3 items-center">
        <li className="flex justify-between px-4 sm:grid xs:grid-cols-5 w-full">
          <p className="col-span-2 text-center">Nombre del producto</p>
          <p className="hidden sm:inline col-span-1 text-center">Unidad</p>
          <p className="hidden sm:inline col-span-1 text-center">Precio</p>
          <p className="col-span-1 text-center">Total</p>
        </li>
        {productsInCart.map(product =>
          <ProductInCart key={product.id} product={product} />
        )}
      </ul>
    </section>
  )
}