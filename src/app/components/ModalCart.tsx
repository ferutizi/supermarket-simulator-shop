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
        <section className="z-20 w-[48%] h-[30rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-extrabold">
          <header className="flex justify-between items-center px-4 py-2 bg-sky-600">
            <h2>CARRITO</h2>
            <button className="w-6 h-6 bg-red-600 rounded-sm" onClick={() => closeModal()}>X</button>
          </header>
          <div className="grid grid-cols-11 h-full">
            <ProductSection />
            <BuySection />
          </div>
        </section>
      }
    </>
  )
}