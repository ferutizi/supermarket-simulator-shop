import { useModalCart } from "../store/useModalCart"

export default function Header() {
  const openModalCart = useModalCart((state) => state.openModal)
  return (
    <header className="fixed z-20 w-full">
      <section className="flex justify-between p-2 pl-0 bg-blue-400">
        <div>
          <img />
          <h1>COMPRAS</h1>
        </div>
        <button className="w-6 h-6 bg-red-600 font-bold rounded-sm">X</button>
      </section>
      <section className="flex justify-between p-8 bg-cyan-300">
        <div className="flex gap-4">
          <button className="bg-blue-800 p-2">Productos</button>
          <button className="bg-blue-800 p-2">Muebles</button>
        </div>
        <div>
          <p></p>
          <button onClick={() => openModalCart()}>C</button>
        </div>
      </section>
      <section className="flex pl-16 bg-cyan-200 gap-32">
        <div>
          <input />
          <img />
        </div>
        <label>
          MOSTRAR:
          <input />
        </label>
        <label>
          CATEGORIA
          <input />
        </label>
      </section>
    </header>
  )
}