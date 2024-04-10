import Cart from "./Cart"
import Filters from "./Filters"
import WindowHeader from "./WindowHeader"

export default function Header() {
  return (
    <header className="fixed z-20 w-full font-extrabold">
      <WindowHeader />
      <section className="flex justify-between px-8 py-4 bg-cyan-300">
        <div className="flex gap-4">
          <button className="bg-blue-800 flex h-fit px-4 py-2 items-center justify-center gap-2 rounded-sm">
            <img src="/products_section.png" alt="sección de productos" title="sección de productos" className="h-8" />
            <p>Productos</p>
          </button>
          <button className="bg-blue-800 flex h-fit px-4 py-2 items-center justify-center gap-2 rounded-sm">
            <img src="/furniture_section.png" alt="sección de muebles" title="sección de muebles" className="h-8" />
            <p>Muebles</p>
          </button>
        </div>
        <Cart />
      </section>
      <Filters />
    </header>
  )
}