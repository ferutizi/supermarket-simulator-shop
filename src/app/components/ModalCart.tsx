import ProductSection from "./ProductSection";
import BuySection from "./BuySection";

export default function ModalCart() {
  return (
    <section>
      <header className="flex justify-between px-4 py-2">
        <h2>CARRITO</h2>
        <p>X</p>
      </header>
      <ProductSection></ProductSection>
      <BuySection></BuySection>
    </section>
  )
}