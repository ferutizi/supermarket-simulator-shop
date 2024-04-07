import { useCart } from "../store/useCart"
import { useModalCart } from "../store/useModalCart"

export default function Cart() {
  const openModalCart = useModalCart((state) => state.openModal)
  const totalCart = useCart((state) => state.totalValue)
  const itemsInCart = useCart((state) => state.totalItems)

  return (
    <article className="flex items-center font-extrabold">
      <span className="bg-slate-100 text-stone-600">${totalCart}</span>
      <div>
        <button className="w-12 h-12 rounded-sm bg-green-500" onClick={() => openModalCart()}>C</button>
        <span className="bg-yellow-400 px-[12px] py-[6px] rounded-full text-stone-600">{itemsInCart}</span>
      </div>
    </article>
  )
}