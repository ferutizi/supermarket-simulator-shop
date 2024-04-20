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
  const { name, amount, img, placeAt, totalPrice, unityPrice, quantityPerBox, subTotal, supplier } = product

  return (
    <article className="flex flex-col w-[90vw] my-0 mx-auto xs:grid xs:grid-cols-7 bg-product-light p-4 gap-4 xs:w-[27rem] h-fit rounded-md font-extrabold">
      <div className="col-span-5 bg-product-dark relative rounded-md">
        <h2 className="text-2xl whitespace-nowrap overflow-hidden text-ellipsis w-full pr-4 pl-4" title={product.name}>{name}</h2>
        <h3 className="text-slate-400 text-sm -translate-y-2 pl-4" title={product.supplier}>{supplier}</h3>
        <div className="flex items-center">
          <img
            src={"/" + product.img + ".png"}
            alt={`${product.name} ${product.supplier}`}
            title={`${product.name} ${product.supplier}`}
            className="h-20 pl-1"
          />
          <div className="flex flex-col gap-2 mb-2">
            <div>
              <p>Lugar</p>
              <p className="text-slate-400 text-sm">{placeAt}</p>
            </div>
            <div>
              <p className="text-sm">precio por unidad</p>
              <p className="text-slate-400 text-sm">${unityPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <div className="flex items-center mb-1">
            <p className="text-xl" title={quantityPerBox + " productos por caja"}>{quantityPerBox}</p>
            <img src="/box.png" alt="empty box" title="empty box" className="w-9" />
          </div>
        </div>
      </div>

      <div className="col-span-2 py-2 xs:py-0 flex xs:flex-col bg-product-blue justify-around items-center rounded-md">
        <div>
          <p>Cantidad</p>
          <div className="flex justify-between w-full items-center">
            <button onClick={() => decrementAmount(product)} className="bg-white text-blue-950 rounded-full w-4 h-4 flex justify-center items-center">-</button>
            <p>{amount}</p>
            <button onClick={() => incrementAmount(product)} className="bg-white text-blue-950 rounded-full w-4 h-4 flex justify-center items-center">+</button>
          </div>
        </div>
        <hr className="hidden w-full border-white"></hr>
        <div className="text-center">
          <p className="text-sm">Total</p>
          <p className="text-sm">${subTotal.toFixed(2)}</p>
        </div>
        <button className="bg-green-600 px-1 py-2 rounded-2xl text-xs" onClick={() => add(product)}>Añadir al carrito</button>
      </div>
    </article>
  )
}