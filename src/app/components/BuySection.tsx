import { useCart } from "../store/useCart"

export default function BuySection() {
  const totalCart = useCart((state) => state.totalValue)
  const clearCart = useCart((state) => state.clearCart)
  let saldo = 15000
  return (
    <section className="col-span-3 bg-sky-500 flex flex-col justify-between px-4 py-2 font-extrabold text-sm">
      <div>
        <div className="flex justify-between">
          <p>Pedir</p>
          <p>$${totalCart}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Envio</p>
          <p>$8.00</p>
        </div>
        <div className="flex justify-between border-t pt-2">
          <p className="text-lg">Total</p>
          <p className="text-lg">${totalCart + 8}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 border-t pt-2">
        <div className="flex justify-between">
          <p>saldo</p>
          <p>${saldo}</p>
        </div>
        <div className="flex justify-between">
          <p>saldo restante</p>
          <p>${saldo - totalCart}</p>
        </div>
        <button className="bg-slate-50 text-sm text-stone-600 px-3 py-2 rounded-lg w-fit flex self-center mb-4" onClick={() => clearCart()}>Comprar</button>
      </div>
    </section>
  )
}