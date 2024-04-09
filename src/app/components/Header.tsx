import Cart from "./Cart"
import Filters from "./Filters"
import WindowHeader from "./WindowHeader"

export default function Header() {
  return (
    <header className="fixed z-20 w-full font-extrabold">
      <WindowHeader />
      <section className="flex justify-between px-8 py-4 bg-cyan-300">
        <div className="flex gap-4">
          <button className="bg-blue-800 p-2">Productos</button>
          <button className="bg-blue-800 p-2">Muebles</button>
        </div>
        <Cart />
      </section>
      <Filters />
    </header>
  )
}