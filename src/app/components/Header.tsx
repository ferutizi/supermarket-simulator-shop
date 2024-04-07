import Cart from "./Cart"

export default function Header() {
  return (
    <header className="fixed z-20 w-full font-extrabold">
      <section className="flex justify-between items-center p-2 pl-0 bg-blue-500">
        <div>
          <img />
          <h1 className="text-2xl">COMPRAS</h1>
        </div>
        <button className="w-6 h-6 bg-red-600 font-bold rounded-sm">X</button>
      </section>
      <section className="flex justify-between px-8 py-4 bg-cyan-300">
        <div className="flex gap-4">
          <button className="bg-blue-800 p-2">Productos</button>
          <button className="bg-blue-800 p-2">Muebles</button>
        </div>
        <Cart />
      </section>
      <section className="flex pl-16 py-2 bg-cyan-200 gap-32">
        <div>
          <input className="border border-stone-500 rounded-lg ml-4" />
          <img />
        </div>
        <label className="text-cyan-700">
          MOSTRAR:
          <input className="border border-stone-500 rounded-lg ml-4" />
        </label>
        <label className="text-cyan-700">
          CATEGORIA
          <input className="border border-stone-500 rounded-lg ml-4" />
        </label>
      </section>
    </header>
  )
}