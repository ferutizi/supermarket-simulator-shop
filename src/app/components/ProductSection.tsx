import { useCart } from "../store/useCart";
import ProductInCart from "./ProductInCart";

export default function ProductSection() {
  const productsInCart = useCart((state) => state.products)

  return (
    <section>
      <ul>
        <li>
          <p>Nombre del producto</p>
          <p>Unidad</p>
          <p>Precio</p>
          <p>Total</p>
        </li>
        {productsInCart.map(product =>
          <ProductInCart key={product.name} product={product} />
        )}
      </ul>
    </section>
  )
}