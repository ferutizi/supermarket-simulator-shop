import { Product } from "../types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, amount, img, placeAt, price, quantityPerBox, subTotal, supplier } = product
  return (
    <article>
      <div>
        <h2>{name}</h2>
        <h3>{supplier}</h3>
        <div>
          <img /* product */ />
          <div>
            <p>Lugar</p>
            <p>{placeAt}</p>
          </div>
          <div>
            <p>precio por unidad</p>
            <p>{price}</p>
          </div>
        </div>
        <div>
          <p>{quantityPerBox}</p>
          <img /* box */ />
        </div>
      </div>

      <div>
        <p>Cantidad</p>
        <div>
          <button></button>
          <p>{amount}</p>
          <button></button>
          <p>Total</p>
          <p>{subTotal}</p>
          <button>agregar</button>
        </div>
      </div>
    </article>
  )
}