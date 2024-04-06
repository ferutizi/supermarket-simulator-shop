import { useCart } from "../store/useCart"

export default function BuySection() {
  const totalCart = useCart((state) => state.totalValue)
  const clearCart = useCart((state) => state.clearCart)
  let saldo = 15000
  return (
    <section className="grid-cols-1 bg-sky-500 flex flex-col justify-between">
      <div>
        <div className="flex justify-between">
          <p>Pedir</p>
          <p>{totalCart}</p>
        </div>
        <div className="flex justify-between">
          <p>Envio</p>
          <p>$8.00</p>
        </div>
        <div className="flex justify-between">
          <p>Total</p>
          <p>{totalCart + 8}</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p>saldo</p>
          <p>{saldo}</p>
        </div>
        <div className="flex justify-between">
          <p>saldo restante</p>
          <p>{saldo - totalCart}</p>
        </div>
        <button onClick={() => clearCart()}>Comprar</button>
      </div>
    </section>
  )
}