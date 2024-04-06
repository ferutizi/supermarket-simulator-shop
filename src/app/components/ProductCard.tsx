import { useCart } from "../store/useCart"
import { Product } from "../types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const agregar = useCart((state) => state.addProduct)
  const eliminar = useCart((state) => state.removeProduct)
  const { name, amount, img, placeAt, price, quantityPerBox, subTotal, supplier } = product

  return (
    <article className="grid grid-cols-7 bg-cyan-950 p-4 gap-4 w-96">
      <div className="col-span-5 bg-sky-950 relative">
        <h2>{name}</h2>
        <h3>{supplier}</h3>
        <div className="flex">
          <img /* product */ />
          <div className="flex flex-col gap-4">
            <div>
              <p>Lugar</p>
              <p>{placeAt}</p>
            </div>
            <div>
              <p>precio por unidad</p>
              <p>{price}</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <p>{quantityPerBox}</p>
          <img /* box */ />
        </div>
      </div>

      <div className="col-span-2 flex flex-col bg-blue-950 justify-around items-center">
        <div>
          <p>Cantidad</p>
          <div className="flex justify-between w-full items-center">
            <button className="bg-white text-blue-950 rounded-full w-4 h-4 flex justify-center items-center">-</button>
            <p>{amount}</p>
            <button className="bg-white text-blue-950 rounded-full w-4 h-4 flex justify-center items-center">+</button>
          </div>
        </div>
        <hr className="w-full border-white"></hr>
        <div className="text-center">
          <p>Total</p>
          <p>{subTotal}</p>
        </div>
        <button onClick={() => agregar(product)}>agregar</button>
        <button onClick={() => eliminar(product)}>Eliminar</button>
      </div>
    </article>
  )
}