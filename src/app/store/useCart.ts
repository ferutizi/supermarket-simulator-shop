import { create } from 'zustand'
import { Product } from '../types'

interface CartState {
  products: Product[],
  totalValue: number,
  addProduct: (productToAdd: Product) => void,
  removeProduct: (productToRemove: Product) => void,
}

export const useCart = create<CartState>((set, get) => ({
  products: [],
  totalValue: 0,

  addProduct: (productToAdd) => {
    set((state) => {
      const existingProductIndex = state.products.findIndex(p => p.name === productToAdd.name)
      const newTotalvalue = state.totalValue + productToAdd.subTotal

      if (existingProductIndex !== -1) {
        const updatedProducts = [...state.products]
        const existingProduct = updatedProducts[existingProductIndex]
        existingProduct.amount += productToAdd.amount
        existingProduct.subTotal += productToAdd.subTotal
        return { products: updatedProducts, totalValue: newTotalvalue }
      } else {
        return { products: [...state.products, productToAdd], totalValue: newTotalvalue }
      }
    })
  },

  removeProduct: (productToRemove) => {
    set((state) => {
      const updatedProducts = state.products.filter(p => p.name !== productToRemove.name)
      const newTotal = state.totalValue - productToRemove.subTotal
      return { products: updatedProducts, totalValue: newTotal }
    })
  }
}))