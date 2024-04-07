import { useCart } from "../store/useCart"
import { useMainStore } from "../store/useMainStore"
import { Product } from "../types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const add = useCart((state) => state.addProduct)
  const incrementAmount = useMainStore((state) => state.incrementAmount)
  const decrementAmount = useMainStore((state) => state.decrementAmount)
  const { name, amount, img, placeAt, price, quantityPerBox, subTotal, supplier } = product

  return (
    <article className="grid grid-cols-7 bg-product-light p-4 gap-4 w-[27rem] h-fit rounded-md font-extrabold">
      <div className="col-span-5 bg-product-dark relative rounded-md pl-4">
        <h2 className="text-2xl">{name}</h2>
        <h3 className="text-slate-400 text-sm -translate-y-2">{supplier}</h3>
        <div className="flex">
          <img /* product */ />
          <div className="flex flex-col gap-4">
            <div>
              <p>Lugar</p>
              <p className="text-slate-400 text-sm">{placeAt}</p>
            </div>
            <div>
              <p className="text-sm">precio por unidad</p>
              <p className="text-slate-400 text-sm">${price.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <p>{quantityPerBox}</p>
          <img /* box */ />
        </div>
      </div>

      <div className="col-span-2 flex flex-col bg-product-blue justify-around items-center rounded-md">
        <div>
          <p>Cantidad</p>
          <div className="flex justify-between w-full items-center">
            <button onClick={() => decrementAmount(product)} className="bg-white text-blue-950 rounded-full w-4 h-4 flex justify-center items-center">-</button>
            <p>{amount}</p>
            <button onClick={() => incrementAmount(product)} className="bg-white text-blue-950 rounded-full w-4 h-4 flex justify-center items-center">+</button>
          </div>
        </div>
        <hr className="w-full border-white"></hr>
        <div className="text-center">
          <p className="text-sm">Total</p>
          <p className="text-sm">${subTotal.toFixed(2)}</p>
        </div>
        <button className="bg-green-600 px-1 py-2 rounded-2xl text-xs" onClick={() => add(product)}>Añadir al carrito</button>
      </div>
    </article>
  )
}