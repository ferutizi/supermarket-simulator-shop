import { create } from 'zustand'
import { Product } from '../types'

interface CartState {
  products: Product[],
  totalValue: number,
  addProduct: () => void,
  removeProduct: () => void,
}

export const useCart = create<CartState>((set) => ({
  products: [],
  totalValue: 0,

  addProduct: () => { },
  removeProduct: () => { },
}))