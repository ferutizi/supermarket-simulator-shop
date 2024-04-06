import { useCart } from "../store/useCart";
import ProductInCart from "./ProductInCart";

export default function ProductSection() {
  const productsInCart = useCart((state) => state.products)

  return (
    <section className="col-span-4 bg-slate-50 text-stone-500">
      <ul>
        <li className="grid grid-cols-5">
          <p className="col-span-2">Nombre del producto</p>
          <p className="col-span-1">Unidad</p>
          <p className="col-span-1">Precio</p>
          <p className="col-span-1">Total</p>
        </li>
        {productsInCart.map(product =>
          <ProductInCart key={product.name} product={product} />
        )}
      </ul>
    </section>
  )
}