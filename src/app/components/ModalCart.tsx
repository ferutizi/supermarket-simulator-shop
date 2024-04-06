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
        <section className="z-10 absolute bg-slate-400">
          <header className="flex justify-between px-4 py-2">
            <h2>CARRITO</h2>
            <button onClick={() => closeModal()}>X</button>
          </header>
          <div className="grid grid-cols-5">
            <ProductSection></ProductSection>
            <BuySection></BuySection>
          </div>
        </section>
      }
    </>
  )
}