import { useCart } from "../store/useCart";
import { Product } from "../types";

interface ProductInCartProps {
  product: Product
}

export default function ProductInCart({ product }: ProductInCartProps) {
  const incrementAmount = useCart((state) => state.incrementAmount)
  const decrementAmount = useCart((state) => state.decrementAmount)
  const removeProduct = useCart((state) => state.removeProduct)

  const { name, supplier, amount, price, subTotal } = product

  return (
    <li>
      <p>{supplier} {name}</p>
      <div>
        <button onClick={() => decrementAmount(product)}>-</button>
        <p>{amount}</p>
        <button onClick={() => incrementAmount(product)}>+</button>
      </div>
      <p>{price}</p>
      <p>{subTotal}</p>
      <button onClick={() => removeProduct(product)}>-</button>
    </li>
  )
}