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
    <li className="grid grid-cols-5">
      <p className="col-span-2">{supplier} {name}</p>
      <div className="col-span-1">
        <button onClick={() => decrementAmount(product)}>-</button>
        <p>{amount}</p>
        <button onClick={() => incrementAmount(product)}>+</button>
      </div>
      <p className="col-span-1">{price}</p>
      <div className="col-span-1">
        <p>{subTotal}</p>
        <button onClick={() => removeProduct(product)}>-</button>
      </div>
    </li>
  )
}