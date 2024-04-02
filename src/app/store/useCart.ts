import { create } from 'zustand'
import { Product } from '../types'

interface CartState {
  products: Product[],
  totalValue: number,
  addProduct: (productToAdd: Product) => void,
  removeProduct: (productToRemove: Product) => void,
}

export const useCart = create<CartState>((set, get) => ({
  products: [{
    name: "Leche",
    price: 1.5,
    quantityPerBox: 10,
    img: "lecheimg",
    supplier: "LaVacaFeliz",
    placeAt: "Heladera",
    amount: 1,
    subTotal: 1.5
  }],
  totalValue: 0,

  addProduct: (productToAdd) => {
    set((state) => ({ products: [...state.products, productToAdd] }))
  },
  removeProduct: (productToRemove) => { }
}))