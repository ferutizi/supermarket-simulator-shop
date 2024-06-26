import { useCart } from "../store/useCart";
import { Product } from "../types";

interface ProductInCartProps {
  product: Product
}

export default function ProductInCart({ product }: ProductInCartProps) {
  const incrementAmount = useCart((state) => state.incrementAmount)
  const decrementAmount = useCart((state) => state.decrementAmount)
  const removeProduct = useCart((state) => state.removeProduct)

  const { name, supplier, amount, totalPrice, subTotal } = product

  return (
    <li className="flex flex-wrap justify-between sm:grid sm:grid-cols-5 w-full bg-slate-200 pl-4 font-extrabold items-center">
      <p className="col-span-2 whitespace-nowrap overflow-hidden text-ellipsis w-full">{supplier} {name}</p>
      <div className="col-span-1 flex justify-center w-full items-center gap-2">
        <button className="bg-blue-300 rounded-full w-6 h-6 flex justify-center items-center text-white" onClick={() => decrementAmount(product)}>-</button>
        <p className="bg-gray-300 w-8 text-center">{amount}</p>
        <button className="bg-blue-300 rounded-full w-6 h-6 flex justify-center items-center text-white" onClick={() => incrementAmount(product)}>+</button>
      </div>
      <p className="col-span-1 text-center">${totalPrice.toFixed(2)}</p>
      <div className="col-span-1 flex justify-end">
        <p className="text-right pr-4">${subTotal.toFixed(2)}</p>
        <button className="bg-red-400 text-white w-8" onClick={() => removeProduct(product)}>-</button>
      </div>
    </li>
  )
}