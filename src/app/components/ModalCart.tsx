import ProductSection from "./ProductSection";
import BuySection from "./BuySection";
import { useModalCart } from "../store/useModalCart";

export default function ModalCart() {
  const showModalCart = useModalCart((state => state.showModalCart))
  const closeModal = useModalCart((state) => state.closeModal)

  return (
    <>
      {
        showModalCart &&
        <section className="z-10 w-1/2 h-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <header className="flex justify-between px-4 py-2 bg-sky-600">
            <h2>CARRITO</h2>
            <button onClick={() => closeModal()}>X</button>
          </header>
          <div className="grid grid-cols-5 h-full">
            <ProductSection></ProductSection>
            <BuySection></BuySection>
          </div>
        </section>
      }
    </>
  )
}